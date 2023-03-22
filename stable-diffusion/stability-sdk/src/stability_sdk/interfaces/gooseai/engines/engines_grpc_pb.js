// GENERATED CODE -- DO NOT EDIT!

<<<<<<< HEAD
"use strict";
var grpc = require("grpc");
var engines_pb = require("./engines_pb.js");

function serialize_gooseai_Engines(arg) {
  if (!(arg instanceof engines_pb.Engines)) {
    throw new Error("Expected argument of type gooseai.Engines");
=======
'use strict';
var grpc = require('grpc');
var engines_pb = require('./engines_pb.js');

function serialize_gooseai_Engines(arg) {
  if (!(arg instanceof engines_pb.Engines)) {
    throw new Error('Expected argument of type gooseai.Engines');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Engines(buffer_arg) {
  return engines_pb.Engines.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ListEnginesRequest(arg) {
  if (!(arg instanceof engines_pb.ListEnginesRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.ListEnginesRequest");
=======
    throw new Error('Expected argument of type gooseai.ListEnginesRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ListEnginesRequest(buffer_arg) {
<<<<<<< HEAD
  return engines_pb.ListEnginesRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var EnginesServiceService = (exports.EnginesServiceService = {
  listEngines: {
    path: "/gooseai.EnginesService/ListEngines",
=======
  return engines_pb.ListEnginesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EnginesServiceService = exports.EnginesServiceService = {
  listEngines: {
    path: '/gooseai.EnginesService/ListEngines',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: engines_pb.ListEnginesRequest,
    responseType: engines_pb.Engines,
    requestSerialize: serialize_gooseai_ListEnginesRequest,
    requestDeserialize: deserialize_gooseai_ListEnginesRequest,
    responseSerialize: serialize_gooseai_Engines,
    responseDeserialize: deserialize_gooseai_Engines,
  },
<<<<<<< HEAD
});

exports.EnginesServiceClient = grpc.makeGenericClientConstructor(
  EnginesServiceService
);
=======
};

exports.EnginesServiceClient = grpc.makeGenericClientConstructor(EnginesServiceService);
>>>>>>> 917d866 (test)
