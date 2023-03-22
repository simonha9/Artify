// GENERATED CODE -- DO NOT EDIT!

<<<<<<< HEAD
"use strict";
var grpc = require("grpc");
var generation_pb = require("./generation_pb.js");
var tensors_pb = require("./tensors_pb.js");

function serialize_gooseai_Answer(arg) {
  if (!(arg instanceof generation_pb.Answer)) {
    throw new Error("Expected argument of type gooseai.Answer");
=======
'use strict';
var grpc = require('grpc');
var generation_pb = require('./generation_pb.js');
var tensors_pb = require('./tensors_pb.js');

function serialize_gooseai_Answer(arg) {
  if (!(arg instanceof generation_pb.Answer)) {
    throw new Error('Expected argument of type gooseai.Answer');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Answer(buffer_arg) {
  return generation_pb.Answer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ChainRequest(arg) {
  if (!(arg instanceof generation_pb.ChainRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.ChainRequest");
=======
    throw new Error('Expected argument of type gooseai.ChainRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ChainRequest(buffer_arg) {
<<<<<<< HEAD
  return generation_pb.ChainRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return generation_pb.ChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_Request(arg) {
  if (!(arg instanceof generation_pb.Request)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.Request");
=======
    throw new Error('Expected argument of type gooseai.Request');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Request(buffer_arg) {
  return generation_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

<<<<<<< HEAD
//
// gRPC services
//
var GenerationServiceService = (exports.GenerationServiceService = {
  generate: {
    path: "/gooseai.GenerationService/Generate",
=======

//
// gRPC services
//
var GenerationServiceService = exports.GenerationServiceService = {
  generate: {
    path: '/gooseai.GenerationService/Generate',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: true,
    requestType: generation_pb.Request,
    responseType: generation_pb.Answer,
    requestSerialize: serialize_gooseai_Request,
    requestDeserialize: deserialize_gooseai_Request,
    responseSerialize: serialize_gooseai_Answer,
    responseDeserialize: deserialize_gooseai_Answer,
  },
  chainGenerate: {
<<<<<<< HEAD
    path: "/gooseai.GenerationService/ChainGenerate",
=======
    path: '/gooseai.GenerationService/ChainGenerate',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: true,
    requestType: generation_pb.ChainRequest,
    responseType: generation_pb.Answer,
    requestSerialize: serialize_gooseai_ChainRequest,
    requestDeserialize: deserialize_gooseai_ChainRequest,
    responseSerialize: serialize_gooseai_Answer,
    responseDeserialize: deserialize_gooseai_Answer,
  },
<<<<<<< HEAD
});

exports.GenerationServiceClient = grpc.makeGenericClientConstructor(
  GenerationServiceService
);
=======
};

exports.GenerationServiceClient = grpc.makeGenericClientConstructor(GenerationServiceService);
>>>>>>> 917d866 (test)
