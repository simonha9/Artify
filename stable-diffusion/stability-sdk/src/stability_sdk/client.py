#!/bin/which python3

# fmt: off

import pathlib
import sys
import os
import uuid
import random
import io
import logging
import time
import mimetypes
import base64

import grpc
from argparse import ArgumentParser, Namespace
from typing import Dict, Generator, List, Optional, Union, Any, Sequence, Tuple
from google.protobuf.json_format import MessageToJson
from PIL import Image

try:
    from dotenv import load_dotenv
except ModuleNotFoundError:
    pass
else:
    load_dotenv()

import stability_sdk.interfaces.gooseai.generation.generation_pb2 as generation
import stability_sdk.interfaces.gooseai.generation.generation_pb2_grpc as generation_grpc

from stability_sdk.utils import (
    SAMPLERS,
    MAX_FILENAME_SZ,
    artifact_type_to_str,
    truncate_fit,
    get_sampler_from_str,
    open_images,
)


logger = logging.getLogger(__name__)
logger.setLevel(level=logging.INFO)

def image_to_prompt(im, init: bool = False, mask: bool = False) -> generation.Prompt:
    if init and mask:
        raise ValueError("init and mask cannot both be True")
    buf = io.BytesIO()
    im.save(buf, format="PNG")
    buf.seek(0)
    if mask:
        return generation.Prompt(
            artifact=generation.Artifact(
                type=generation.ARTIFACT_MASK, binary=buf.getvalue()
            )
        )
    return generation.Prompt(
        artifact=generation.Artifact(
            type=generation.ARTIFACT_IMAGE, binary=buf.getvalue()
        ),
        parameters=generation.PromptParameters(init=init),
    )

def process_artifacts_from_answers(
    prefix: str,
    prompt: str,
    answers: Union[
        Generator[generation.Answer, None, None], Sequence[generation.Answer]
    ],
    write: bool = True,
    verbose: bool = False,
    filter_types: Optional[List[str]] = None,
) -> Generator[Tuple[str, generation.Artifact], None, None]:
    """
    Process the Artifacts from the Answers.

    :param prefix: The prefix for the artifact filenames.
    :param prompt: The prompt to add to the artifact filenames.
    :param answers: The Answers to process.
    :param write: Whether to write the artifacts to disk.
    :param verbose: Whether to print the artifact filenames.
    :return: A Generator of tuples of artifact filenames and Artifacts, intended
        for passthrough.
    """
    idx = 0
    output = []
    for resp in answers:
        for artifact in resp.artifacts:
            if artifact.type == generation.ARTIFACT_IMAGE:
                contents = artifact.binary
            elif artifact.type == generation.ARTIFACT_CLASSIFICATIONS:
                contents = MessageToJson(artifact.classifier).encode("utf-8")
            elif artifact.type == generation.ARTIFACT_TEXT:
                contents = MessageToJson(artifact).encode("utf-8")
            else:
                contents = artifact.SerializeToString()
            is_allowed_type = filter_types is None or artifact_type_to_str(artifact.type) in filter_types
            if write:
                if is_allowed_type:
                    output.append({"image":base64.b64encode(bytes(contents)).decode("utf-8")})
                else:
                    if verbose:
                        logger.info(
                            f"skipping {artifact_type_to_str(artifact.type)} due to artifact type filter")
            idx += 1
    return output

class StabilityInference:
    def __init__(
        self,
        host: str = "grpc.stability.ai:443",
        key: str = "",
        engine: str = "stable-diffusion-v1-5",
        upscale_engine: str = "esrgan-v1-x2plus",
        verbose: bool = False,
        wait_for_ready: bool = True,
    ):
        """
        Initialize the client.

        :param host: Host to connect to.
        :param key: Key to use for authentication.
        :param engine: Engine to use.
        :param upscale_engine: Upscale engine to use.
        :param verbose: Whether to print debug messages.
        :param wait_for_ready: Whether to wait for the server to be ready, or
            to fail immediately.
        """
        self.verbose = verbose
        self.engine = engine
        self.upscale_engine = upscale_engine

        self.grpc_args = {"wait_for_ready": wait_for_ready}

        if verbose:
            logger.info(f"Opening channel to {host}")

        call_credentials = []

        # Increase the max message size to 10MB to allow for larger images.
        max_message_size: int = os.getenv("MAX_MESSAGE_SIZE")
        if max_message_size is None:
            max_message_size = 10 * 1024 * 1024 # 10MB
        options = [
            ("grpc.max_send_message_length", int(max_message_size)),
            ("grpc.max_receive_message_length",int(max_message_size)),
        ]

        if host.endswith("443"):
            if key:
                call_credentials.append(grpc.access_token_call_credentials(f"{key}"))
            else:
                raise ValueError(f"key is required for {host}")
            channel_credentials = grpc.composite_channel_credentials(
                grpc.ssl_channel_credentials(), *call_credentials
            )
            channel = grpc.secure_channel(host, channel_credentials, options=options)
        else:
            if key:
                logger.warning(
                    "Not using authentication token due to non-secure transport"
                )
            channel = grpc.insecure_channel(host, options=options)

        if verbose:
            logger.info(f"Channel opened to {host}")
        self.stub = generation_grpc.GenerationServiceStub(channel)

    def generate(
        self,
        prompt: Union[str, List[str], generation.Prompt, List[generation.Prompt]],
        init_image: Optional[Image.Image] = None,
        mask_image: Optional[Image.Image] = None,
        height: int = 512,
        width: int = 512,
        start_schedule: float = 1.0,
        end_schedule: float = 0.01,
        cfg_scale: float = 7.0,
        sampler: generation.DiffusionSampler = None,
        steps: Optional[int] = None,
        seed: Union[Sequence[int], int] = 0,
        samples: int = 1,
        safety: bool = True,
        classifiers: Optional[generation.ClassifierParameters] = None,
        guidance_preset: generation.GuidancePreset = generation.GUIDANCE_PRESET_NONE,
        guidance_cuts: int = 0,
        guidance_strength: Optional[float] = None,
        guidance_prompt: Union[str, generation.Prompt] = None,
        guidance_models: List[str] = None,
    ) -> Generator[generation.Answer, None, None]:
        """
        Generate images from a prompt.

        :param prompt: Prompt to generate images from.
        :param init_image: Init image.
        :param mask_image: Mask image
        :param height: Height of the generated images.
        :param width: Width of the generated images.
        :param start_schedule: Start schedule for init image.
        :param end_schedule: End schedule for init image.
        :param cfg_scale: Scale of the configuration.
        :param sampler: Sampler to use.
        :param steps: Number of steps to take.
        :param seed: Seed for the random number generator.
        :param samples: Number of samples to generate.
        :param safety: DEPRECATED/UNUSED - Cannot be disabled.
        :param classifiers: DEPRECATED/UNUSED - Has no effect on image generation.
        :param guidance_preset: Guidance preset to use. See generation.GuidancePreset for supported values.
        :param guidance_cuts: Number of cuts to use for guidance.
        :param guidance_strength: Strength of the guidance. We recommend values in range [0.0,1.0]. A good default is 0.25
        :param guidance_prompt: Prompt to use for guidance, defaults to `prompt` argument (above) if not specified.
        :param guidance_models: Models to use for guidance.
        :return: Generator of Answer objects.
        """
        if (prompt is None) and (init_image is None):
            raise ValueError("prompt and/or init_image must be provided")

        if (mask_image is not None) and (init_image is None):
            raise ValueError(
                "If mask_image is provided, init_image must also be provided"
            )

        if not seed:
            seed = [random.randrange(0, 4294967295)]
        elif isinstance(seed, int):
            seed = [seed]
        else:
            seed = list(seed)

        prompts: List[generation.Prompt] = []
        if any(isinstance(prompt, t) for t in (str, generation.Prompt)):
            prompt = [prompt]
        for p in prompt:
            if isinstance(p, str):
                p = generation.Prompt(text=p)
            elif not isinstance(p, generation.Prompt):
                raise TypeError("prompt must be a string or generation.Prompt object")
            prompts.append(p)

        step_parameters = dict(
            scaled_step=0,
            sampler=generation.SamplerParameters(cfg_scale=cfg_scale),
        )

        # NB: Specifying schedule when there's no init image causes washed out results
        if init_image is not None:
            step_parameters['schedule'] = generation.ScheduleParameters(
                start=start_schedule,
                end=end_schedule,
            )
            prompts += [image_to_prompt(init_image, init=True)]

            if mask_image is not None:
                prompts += [image_to_prompt(mask_image, mask=True)]


        if guidance_prompt:
            if isinstance(guidance_prompt, str):
                guidance_prompt = generation.Prompt(text=guidance_prompt)
            elif not isinstance(guidance_prompt, generation.Prompt):
                raise ValueError("guidance_prompt must be a string or Prompt object")
        if guidance_strength == 0.0:
            guidance_strength = None


        # Build our CLIP parameters
        if guidance_preset is not generation.GUIDANCE_PRESET_NONE:
            # to do: make it so user can override this
            step_parameters['sampler']=None

            if guidance_models:
                guiders = [generation.Model(alias=model) for model in guidance_models]
            else:
                guiders = None

            if guidance_cuts:
                cutouts = generation.CutoutParameters(count=guidance_cuts)
            else:
                cutouts = None

            step_parameters["guidance"] = generation.GuidanceParameters(
                guidance_preset=guidance_preset,
                instances=[
                    generation.GuidanceInstanceParameters(
                        guidance_strength=guidance_strength,
                        models=guiders,
                        cutouts=cutouts,
                        prompt=guidance_prompt,
                    )
                ],
            )

        transform=None
        if sampler:
            transform=generation.TransformType(diffusion=sampler)

        image_parameters=generation.ImageParameters(
            transform=transform,
            height=height,
            width=width,
            seed=seed,
            steps=steps,
            samples=samples,
            parameters=[generation.StepParameter(**step_parameters)],
        )


        return self.emit_request(prompt=prompts, image_parameters=image_parameters)
    
    def upscale(
        self,
        init_image: Image.Image,
        height: int = None,
        width: int = None,
    ) -> Generator[generation.Answer, None, None]:
        image_parameters=generation.ImageParameters(
            height=height,
            width=width,
        )

        prompts = [image_to_prompt(init_image, init=True)]

        return self.emit_request(prompt=prompts, image_parameters=image_parameters, engine_id=self.upscale_engine)


    # The motivation here is to facilitate constructing requests by passing protobuf objects directly.
    def emit_request(
        self,
        prompt: generation.Prompt,
        image_parameters: generation.ImageParameters,
        engine_id: str = None,
        request_id: str = None,
    ):
        if not request_id:
            request_id = str(uuid.uuid4())
        if not engine_id:
            engine_id = self.engine

        rq = generation.Request(
            engine_id=engine_id,
            request_id=request_id,
            prompt=prompt,
            image=image_parameters
        )

        if self.verbose:
            logger.info("Sending request.")

        start = time.time()
        for answer in self.stub.Generate(rq, **self.grpc_args):
            duration = time.time() - start
            if self.verbose:
                if len(answer.artifacts) > 0:
                    artifact_ts = [
                        artifact_type_to_str(artifact.type)
                        for artifact in answer.artifacts
                    ]
                    logger.info(
                        f"Got answer {answer.answer_id} with artifact types {artifact_ts} in "
                        f"{duration:0.2f}s"
                    )
                else:
                    logger.info(
                        f"Got keepalive {answer.answer_id} in " f"{duration:0.2f}s"
                    )

            yield answer
            start = time.time()


def generateImage(req_body):
    # Set up logging for output to console.
    fh = logging.StreamHandler()
    fh_formatter = logging.Formatter(
        "%(asctime)s %(levelname)s %(filename)s(%(process)d) - %(message)s"
    )
    fh.setFormatter(fh_formatter)
    logger.addHandler(fh)

    logger.warning(
        "[Deprecation Warning] The method you have used to invoke the sdk will be deprecated shortly."
        "[Deprecation Warning] Please modify your code to call the sdk without invoking the 'client' module instead."
        "[Deprecation Warning] rather than:"
        "[Deprecation Warning]    $ python -m stability_sdk.client ...  "
        "[Deprecation Warning] instead do this:"
        "[Deprecation Warning]    $ python -m stability_sdk ...  "
    )

    STABILITY_HOST = os.getenv("STABILITY_HOST", "grpc.stability.ai:443")
    STABILITY_KEY = os.getenv("STABILITY_KEY", "")

    if not STABILITY_HOST:
        logger.warning("STABILITY_HOST environment variable needs to be set.")
        sys.exit(1)

    if not STABILITY_KEY:
        logger.warning(
            "STABILITY_KEY environment variable needs to be set. You may"
            " need to login to the Stability website to obtain the"
            " API key."
        )
        sys.exit(1)

    prompt = req_body.get("prompt")
    sdEngine = "stable-diffusion-v1-5"

    request =  {
        "height": 512,
        "width": 512,
        "start_schedule": 0.01,
        "end_schedule": 0.01,
        "cfg_scale": 7.0,
        "steps": None,
        "samples": 1,
    }

    if req_body.get("height"):
        request["height"] = int(req_body.get("height"))
    if req_body.get("width"):
        request["width"] = int(req_body.get("width"))
    if req_body.get("start_schedule"):
        request["cfg_scale"] = float(req_body.get("cfg_scale"))
    if req_body.get("steps"):
        request["steps"] = int(req_body.get("steps"))
    if req_body.get("samples"):
        request["samples"] = int(req_body.get("samples"))

    stability_api = StabilityInference(
    STABILITY_HOST, STABILITY_KEY, engine=sdEngine, verbose=True
    )

    answers = stability_api.generate(prompt, **request)
    artifacts = process_artifacts_from_answers(
    "generation_", prompt, answers, write=True, verbose=True,
    filter_types="ARTIFACT_IMAGE"
    )
    
    return artifacts

