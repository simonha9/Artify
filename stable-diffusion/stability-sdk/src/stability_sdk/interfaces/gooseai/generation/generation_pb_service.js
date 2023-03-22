// package: gooseai
// file: generation.proto

var generation_pb = require("./generation_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GenerationService = (function () {
  function GenerationService() {}
  GenerationService.serviceName = "gooseai.GenerationService";
  return GenerationService;
<<<<<<< HEAD
})();
=======
}());
>>>>>>> 917d866 (test)

GenerationService.Generate = {
  methodName: "Generate",
  service: GenerationService,
  requestStream: false,
  responseStream: true,
  requestType: generation_pb.Request,
<<<<<<< HEAD
  responseType: generation_pb.Answer,
=======
  responseType: generation_pb.Answer
>>>>>>> 917d866 (test)
};

GenerationService.ChainGenerate = {
  methodName: "ChainGenerate",
  service: GenerationService,
  requestStream: false,
  responseStream: true,
  requestType: generation_pb.ChainRequest,
<<<<<<< HEAD
  responseType: generation_pb.Answer,
=======
  responseType: generation_pb.Answer
>>>>>>> 917d866 (test)
};

exports.GenerationService = GenerationService;

function GenerationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

<<<<<<< HEAD
GenerationServiceClient.prototype.generate = function generate(
  requestMessage,
  metadata
) {
  var listeners = {
    data: [],
    end: [],
    status: [],
=======
GenerationServiceClient.prototype.generate = function generate(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
>>>>>>> 917d866 (test)
  };
  var client = grpc.invoke(GenerationService.Generate, {
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

GenerationServiceClient.prototype.chainGenerate = function chainGenerate(
  requestMessage,
  metadata
) {
  var listeners = {
    data: [],
    end: [],
    status: [],
=======
    }
  };
};

GenerationServiceClient.prototype.chainGenerate = function chainGenerate(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
>>>>>>> 917d866 (test)
  };
  var client = grpc.invoke(GenerationService.ChainGenerate, {
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
=======
    }
>>>>>>> 917d866 (test)
  };
};

exports.GenerationServiceClient = GenerationServiceClient;
<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
