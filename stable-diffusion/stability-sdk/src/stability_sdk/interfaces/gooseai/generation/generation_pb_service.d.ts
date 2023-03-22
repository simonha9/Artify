// package: gooseai
// file: generation.proto

import * as generation_pb from "./generation_pb";
<<<<<<< HEAD
import { grpc } from "@improbable-eng/grpc-web";
=======
import {grpc} from "@improbable-eng/grpc-web";
>>>>>>> 917d866 (test)

type GenerationServiceGenerate = {
  readonly methodName: string;
  readonly service: typeof GenerationService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof generation_pb.Request;
  readonly responseType: typeof generation_pb.Answer;
};

type GenerationServiceChainGenerate = {
  readonly methodName: string;
  readonly service: typeof GenerationService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof generation_pb.ChainRequest;
  readonly responseType: typeof generation_pb.Answer;
};

export class GenerationService {
  static readonly serviceName: string;
  static readonly Generate: GenerationServiceGenerate;
  static readonly ChainGenerate: GenerationServiceChainGenerate;
}

<<<<<<< HEAD
export type ServiceError = {
  message: string;
  code: number;
  metadata: grpc.Metadata;
};
export type Status = { details: string; code: number; metadata: grpc.Metadata };
=======
export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
>>>>>>> 917d866 (test)

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
<<<<<<< HEAD
  on(type: "data", handler: (message: T) => void): ResponseStream<T>;
  on(type: "end", handler: (status?: Status) => void): ResponseStream<T>;
  on(type: "status", handler: (status: Status) => void): ResponseStream<T>;
=======
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
>>>>>>> 917d866 (test)
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
<<<<<<< HEAD
  on(type: "end", handler: (status?: Status) => void): RequestStream<T>;
  on(type: "status", handler: (status: Status) => void): RequestStream<T>;
=======
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
>>>>>>> 917d866 (test)
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
<<<<<<< HEAD
  on(
    type: "data",
    handler: (message: ResT) => void
  ): BidirectionalStream<ReqT, ResT>;
  on(
    type: "end",
    handler: (status?: Status) => void
  ): BidirectionalStream<ReqT, ResT>;
  on(
    type: "status",
    handler: (status: Status) => void
  ): BidirectionalStream<ReqT, ResT>;
=======
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
>>>>>>> 917d866 (test)
}

export class GenerationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
<<<<<<< HEAD
  generate(
    requestMessage: generation_pb.Request,
    metadata?: grpc.Metadata
  ): ResponseStream<generation_pb.Answer>;
  chainGenerate(
    requestMessage: generation_pb.ChainRequest,
    metadata?: grpc.Metadata
  ): ResponseStream<generation_pb.Answer>;
}
=======
  generate(requestMessage: generation_pb.Request, metadata?: grpc.Metadata): ResponseStream<generation_pb.Answer>;
  chainGenerate(requestMessage: generation_pb.ChainRequest, metadata?: grpc.Metadata): ResponseStream<generation_pb.Answer>;
}

>>>>>>> 917d866 (test)
