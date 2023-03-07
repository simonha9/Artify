import os
from azure.core.exceptions import ResourceNotFoundError
from azure.ai.formrecognizer import FormRecognizerClient, FormTrainingClient
from azure.core.credentials import AzureKeyCredential
import uuid
from server import env


class FormRecognizerService:
    endpoint = env.get('MS_FORM_RECOGNIZER_ENDPOINT')
    key = env.get('MS_FORM_RECOGNIZER_key')
    custom_model_id = env.get('MS_FORM_RECOGNIZER_CUSTOM_MODEL_ID')

    def __init__(self):
        self.form_recognizer_client = FormRecognizerClient(
            endpoint=self.endpoint, credential=AzureKeyCredential(self.key))
        self.form_training_client = FormTrainingClient(
            endpoint=self.endpoint, credential=AzureKeyCredential(self.key))
        
        
    def extract(self, stream):
        poller = self.form_recognizer_client.begin_recognize_content(stream)
        result = poller.result()
        return result
