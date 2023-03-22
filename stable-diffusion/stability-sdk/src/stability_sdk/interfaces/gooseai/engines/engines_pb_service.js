// package: gooseai
// file: engines.proto

var engines_pb = require("./engines_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EnginesService = (function () {
  function EnginesService() {}
  EnginesService.serviceName = "gooseai.EnginesService";
  return EnginesService;
<<<<<<< HEAD
})();
=======
}());
>>>>>>> 917d866 (test)

EnginesService.ListEngines = {
  methodName: "ListEngines",
  service: EnginesService,
  requestStream: false,
  responseStream: false,
  requestType: engines_pb.ListEnginesRequest,
<<<<<<< HEAD
  responseType: engines_pb.Engines,
=======
  responseType: engines_pb.Engines
>>>>>>> 917d866 (test)
};

exports.EnginesService = EnginesService;

function EnginesServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

<<<<<<< HEAD
EnginesServiceClient.prototype.listEngines = function listEngines(
  requestMessage,
  metadata,
  callback
) {
=======
EnginesServiceClient.prototype.listEngines = function listEngines(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EnginesService.ListEngines, {
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

exports.EnginesServiceClient = EnginesServiceClient;
<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
