// package: gooseai
// file: project.proto

var project_pb = require("./project_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ProjectService = (function () {
  function ProjectService() {}
  ProjectService.serviceName = "gooseai.ProjectService";
  return ProjectService;
<<<<<<< HEAD
})();
=======
}());
>>>>>>> 917d866 (test)

ProjectService.Create = {
  methodName: "Create",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: project_pb.CreateProjectRequest,
<<<<<<< HEAD
  responseType: project_pb.Project,
=======
  responseType: project_pb.Project
>>>>>>> 917d866 (test)
};

ProjectService.Update = {
  methodName: "Update",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: project_pb.UpdateProjectRequest,
<<<<<<< HEAD
  responseType: project_pb.Project,
=======
  responseType: project_pb.Project
>>>>>>> 917d866 (test)
};

ProjectService.List = {
  methodName: "List",
  service: ProjectService,
  requestStream: false,
  responseStream: true,
  requestType: project_pb.ListProjectRequest,
<<<<<<< HEAD
  responseType: project_pb.Project,
=======
  responseType: project_pb.Project
>>>>>>> 917d866 (test)
};

ProjectService.Get = {
  methodName: "Get",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: project_pb.GetProjectRequest,
<<<<<<< HEAD
  responseType: project_pb.Project,
=======
  responseType: project_pb.Project
>>>>>>> 917d866 (test)
};

ProjectService.Delete = {
  methodName: "Delete",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: project_pb.DeleteProjectRequest,
<<<<<<< HEAD
  responseType: project_pb.Project,
=======
  responseType: project_pb.Project
>>>>>>> 917d866 (test)
};

exports.ProjectService = ProjectService;

function ProjectServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

<<<<<<< HEAD
ProjectServiceClient.prototype.create = function create(
  requestMessage,
  metadata,
  callback
) {
=======
ProjectServiceClient.prototype.create = function create(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.Create, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 917d866 (test)
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
<<<<<<< HEAD
    },
  };
};

ProjectServiceClient.prototype.update = function update(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

ProjectServiceClient.prototype.update = function update(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.Update, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 917d866 (test)
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 917d866 (test)
  };
};

ProjectServiceClient.prototype.list = function list(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
<<<<<<< HEAD
    status: [],
=======
    status: []
>>>>>>> 917d866 (test)
  };
  var client = grpc.invoke(ProjectService.List, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 917d866 (test)
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
<<<<<<< HEAD
    },
  };
};

ProjectServiceClient.prototype.get = function get(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

ProjectServiceClient.prototype.get = function get(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.Get, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 917d866 (test)
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
<<<<<<< HEAD
    },
  };
};

ProjectServiceClient.prototype.delete = function pb_delete(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

ProjectServiceClient.prototype.delete = function pb_delete(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.Delete, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 917d866 (test)
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 917d866 (test)
  };
};

exports.ProjectServiceClient = ProjectServiceClient;
<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
