// GENERATED CODE -- DO NOT EDIT!

<<<<<<< HEAD
"use strict";
var grpc = require("grpc");
var project_pb = require("./project_pb.js");

function serialize_gooseai_CreateProjectRequest(arg) {
  if (!(arg instanceof project_pb.CreateProjectRequest)) {
    throw new Error("Expected argument of type gooseai.CreateProjectRequest");
=======
'use strict';
var grpc = require('grpc');
var project_pb = require('./project_pb.js');

function serialize_gooseai_CreateProjectRequest(arg) {
  if (!(arg instanceof project_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type gooseai.CreateProjectRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateProjectRequest(buffer_arg) {
<<<<<<< HEAD
  return project_pb.CreateProjectRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return project_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_DeleteProjectRequest(arg) {
  if (!(arg instanceof project_pb.DeleteProjectRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.DeleteProjectRequest");
=======
    throw new Error('Expected argument of type gooseai.DeleteProjectRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_DeleteProjectRequest(buffer_arg) {
<<<<<<< HEAD
  return project_pb.DeleteProjectRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return project_pb.DeleteProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_GetProjectRequest(arg) {
  if (!(arg instanceof project_pb.GetProjectRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.GetProjectRequest");
=======
    throw new Error('Expected argument of type gooseai.GetProjectRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetProjectRequest(buffer_arg) {
<<<<<<< HEAD
  return project_pb.GetProjectRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return project_pb.GetProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_ListProjectRequest(arg) {
  if (!(arg instanceof project_pb.ListProjectRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.ListProjectRequest");
=======
    throw new Error('Expected argument of type gooseai.ListProjectRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ListProjectRequest(buffer_arg) {
<<<<<<< HEAD
  return project_pb.ListProjectRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return project_pb.ListProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_Project(arg) {
  if (!(arg instanceof project_pb.Project)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.Project");
=======
    throw new Error('Expected argument of type gooseai.Project');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Project(buffer_arg) {
  return project_pb.Project.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_UpdateProjectRequest(arg) {
  if (!(arg instanceof project_pb.UpdateProjectRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.UpdateProjectRequest");
=======
    throw new Error('Expected argument of type gooseai.UpdateProjectRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateProjectRequest(buffer_arg) {
<<<<<<< HEAD
  return project_pb.UpdateProjectRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

//
// gRPC services
//
var ProjectServiceService = (exports.ProjectServiceService = {
  // Create a new project if it does not exist
  create: {
    path: "/gooseai.ProjectService/Create",
=======
  return project_pb.UpdateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// gRPC services
//
var ProjectServiceService = exports.ProjectServiceService = {
  // Create a new project if it does not exist
create: {
    path: '/gooseai.ProjectService/Create',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: project_pb.CreateProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_CreateProjectRequest,
    requestDeserialize: deserialize_gooseai_CreateProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
  // Update an existing project
<<<<<<< HEAD
  update: {
    path: "/gooseai.ProjectService/Update",
=======
update: {
    path: '/gooseai.ProjectService/Update',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: project_pb.UpdateProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_UpdateProjectRequest,
    requestDeserialize: deserialize_gooseai_UpdateProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
  // List all the projects for an organization
<<<<<<< HEAD
  list: {
    path: "/gooseai.ProjectService/List",
=======
list: {
    path: '/gooseai.ProjectService/List',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: true,
    requestType: project_pb.ListProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_ListProjectRequest,
    requestDeserialize: deserialize_gooseai_ListProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
  // Get a project
<<<<<<< HEAD
  get: {
    path: "/gooseai.ProjectService/Get",
=======
get: {
    path: '/gooseai.ProjectService/Get',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: project_pb.GetProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_GetProjectRequest,
    requestDeserialize: deserialize_gooseai_GetProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
  // Delete a project
<<<<<<< HEAD
  delete: {
    path: "/gooseai.ProjectService/Delete",
=======
delete: {
    path: '/gooseai.ProjectService/Delete',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: project_pb.DeleteProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_DeleteProjectRequest,
    requestDeserialize: deserialize_gooseai_DeleteProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
<<<<<<< HEAD
});

exports.ProjectServiceClient = grpc.makeGenericClientConstructor(
  ProjectServiceService
);
=======
};

exports.ProjectServiceClient = grpc.makeGenericClientConstructor(ProjectServiceService);
>>>>>>> 917d866 (test)
