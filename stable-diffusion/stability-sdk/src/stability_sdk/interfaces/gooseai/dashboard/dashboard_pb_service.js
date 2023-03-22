// package: gooseai
// file: dashboard.proto

var dashboard_pb = require("./dashboard_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DashboardService = (function () {
  function DashboardService() {}
  DashboardService.serviceName = "gooseai.DashboardService";
  return DashboardService;
<<<<<<< HEAD
})();
=======
}());
>>>>>>> 917d866 (test)

DashboardService.GetMe = {
  methodName: "GetMe",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.EmptyRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.User,
=======
  responseType: dashboard_pb.User
>>>>>>> 917d866 (test)
};

DashboardService.GetOrganization = {
  methodName: "GetOrganization",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.GetOrganizationRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.Organization,
=======
  responseType: dashboard_pb.Organization
>>>>>>> 917d866 (test)
};

DashboardService.GetMetrics = {
  methodName: "GetMetrics",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.GetMetricsRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.Metrics,
=======
  responseType: dashboard_pb.Metrics
>>>>>>> 917d866 (test)
};

DashboardService.CreateAPIKey = {
  methodName: "CreateAPIKey",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.APIKeyRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.APIKey,
=======
  responseType: dashboard_pb.APIKey
>>>>>>> 917d866 (test)
};

DashboardService.DeleteAPIKey = {
  methodName: "DeleteAPIKey",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.APIKeyFindRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.APIKey,
=======
  responseType: dashboard_pb.APIKey
>>>>>>> 917d866 (test)
};

DashboardService.UpdateDefaultOrganization = {
  methodName: "UpdateDefaultOrganization",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.UpdateDefaultOrganizationRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.User,
=======
  responseType: dashboard_pb.User
>>>>>>> 917d866 (test)
};

DashboardService.GetClientSettings = {
  methodName: "GetClientSettings",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.EmptyRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.ClientSettings,
=======
  responseType: dashboard_pb.ClientSettings
>>>>>>> 917d866 (test)
};

DashboardService.SetClientSettings = {
  methodName: "SetClientSettings",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.ClientSettings,
<<<<<<< HEAD
  responseType: dashboard_pb.ClientSettings,
=======
  responseType: dashboard_pb.ClientSettings
>>>>>>> 917d866 (test)
};

DashboardService.UpdateUserInfo = {
  methodName: "UpdateUserInfo",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.UpdateUserInfoRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.User,
=======
  responseType: dashboard_pb.User
>>>>>>> 917d866 (test)
};

DashboardService.CreatePasswordChangeTicket = {
  methodName: "CreatePasswordChangeTicket",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.EmptyRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.UserPasswordChangeTicket,
=======
  responseType: dashboard_pb.UserPasswordChangeTicket
>>>>>>> 917d866 (test)
};

DashboardService.DeleteAccount = {
  methodName: "DeleteAccount",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.EmptyRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.User,
=======
  responseType: dashboard_pb.User
>>>>>>> 917d866 (test)
};

DashboardService.CreateCharge = {
  methodName: "CreateCharge",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.CreateChargeRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.Charge,
=======
  responseType: dashboard_pb.Charge
>>>>>>> 917d866 (test)
};

DashboardService.GetCharges = {
  methodName: "GetCharges",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.GetChargesRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.Charges,
=======
  responseType: dashboard_pb.Charges
>>>>>>> 917d866 (test)
};

DashboardService.CreateAutoChargeIntent = {
  methodName: "CreateAutoChargeIntent",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.CreateAutoChargeIntentRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.AutoChargeIntent,
=======
  responseType: dashboard_pb.AutoChargeIntent
>>>>>>> 917d866 (test)
};

DashboardService.UpdateAutoChargeIntent = {
  methodName: "UpdateAutoChargeIntent",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.CreateAutoChargeIntentRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.AutoChargeIntent,
=======
  responseType: dashboard_pb.AutoChargeIntent
>>>>>>> 917d866 (test)
};

DashboardService.GetAutoChargeIntent = {
  methodName: "GetAutoChargeIntent",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_pb.GetAutoChargeRequest,
<<<<<<< HEAD
  responseType: dashboard_pb.AutoChargeIntent,
=======
  responseType: dashboard_pb.AutoChargeIntent
>>>>>>> 917d866 (test)
};

exports.DashboardService = DashboardService;

function DashboardServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

<<<<<<< HEAD
DashboardServiceClient.prototype.getMe = function getMe(
  requestMessage,
  metadata,
  callback
) {
=======
DashboardServiceClient.prototype.getMe = function getMe(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.GetMe, {
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

DashboardServiceClient.prototype.getOrganization = function getOrganization(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

DashboardServiceClient.prototype.getOrganization = function getOrganization(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.GetOrganization, {
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

DashboardServiceClient.prototype.getMetrics = function getMetrics(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

DashboardServiceClient.prototype.getMetrics = function getMetrics(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.GetMetrics, {
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

DashboardServiceClient.prototype.createAPIKey = function createAPIKey(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

DashboardServiceClient.prototype.createAPIKey = function createAPIKey(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.CreateAPIKey, {
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

DashboardServiceClient.prototype.deleteAPIKey = function deleteAPIKey(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

DashboardServiceClient.prototype.deleteAPIKey = function deleteAPIKey(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.DeleteAPIKey, {
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

DashboardServiceClient.prototype.updateDefaultOrganization =
  function updateDefaultOrganization(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    var client = grpc.unary(DashboardService.UpdateDefaultOrganization, {
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
      },
    });
    return {
      cancel: function () {
        callback = null;
        client.close();
      },
    };
  };

DashboardServiceClient.prototype.getClientSettings = function getClientSettings(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

DashboardServiceClient.prototype.updateDefaultOrganization = function updateDefaultOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.UpdateDefaultOrganization, {
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
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DashboardServiceClient.prototype.getClientSettings = function getClientSettings(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.GetClientSettings, {
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

DashboardServiceClient.prototype.setClientSettings = function setClientSettings(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

DashboardServiceClient.prototype.setClientSettings = function setClientSettings(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.SetClientSettings, {
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

DashboardServiceClient.prototype.updateUserInfo = function updateUserInfo(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

DashboardServiceClient.prototype.updateUserInfo = function updateUserInfo(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.UpdateUserInfo, {
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

DashboardServiceClient.prototype.createPasswordChangeTicket =
  function createPasswordChangeTicket(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    var client = grpc.unary(DashboardService.CreatePasswordChangeTicket, {
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
      },
    });
    return {
      cancel: function () {
        callback = null;
        client.close();
      },
    };
  };

DashboardServiceClient.prototype.deleteAccount = function deleteAccount(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

DashboardServiceClient.prototype.createPasswordChangeTicket = function createPasswordChangeTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.CreatePasswordChangeTicket, {
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
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DashboardServiceClient.prototype.deleteAccount = function deleteAccount(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.DeleteAccount, {
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

DashboardServiceClient.prototype.createCharge = function createCharge(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

DashboardServiceClient.prototype.createCharge = function createCharge(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.CreateCharge, {
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

DashboardServiceClient.prototype.getCharges = function getCharges(
  requestMessage,
  metadata,
  callback
) {
=======
    }
  };
};

DashboardServiceClient.prototype.getCharges = function getCharges(requestMessage, metadata, callback) {
>>>>>>> 917d866 (test)
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.GetCharges, {
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

DashboardServiceClient.prototype.createAutoChargeIntent =
  function createAutoChargeIntent(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    var client = grpc.unary(DashboardService.CreateAutoChargeIntent, {
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
      },
    });
    return {
      cancel: function () {
        callback = null;
        client.close();
      },
    };
  };

DashboardServiceClient.prototype.updateAutoChargeIntent =
  function updateAutoChargeIntent(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    var client = grpc.unary(DashboardService.UpdateAutoChargeIntent, {
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
      },
    });
    return {
      cancel: function () {
        callback = null;
        client.close();
      },
    };
  };

DashboardServiceClient.prototype.getAutoChargeIntent =
  function getAutoChargeIntent(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    var client = grpc.unary(DashboardService.GetAutoChargeIntent, {
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
      },
    });
    return {
      cancel: function () {
        callback = null;
        client.close();
      },
    };
  };

exports.DashboardServiceClient = DashboardServiceClient;
=======
    }
  };
};

DashboardServiceClient.prototype.createAutoChargeIntent = function createAutoChargeIntent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.CreateAutoChargeIntent, {
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
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DashboardServiceClient.prototype.updateAutoChargeIntent = function updateAutoChargeIntent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.UpdateAutoChargeIntent, {
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
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DashboardServiceClient.prototype.getAutoChargeIntent = function getAutoChargeIntent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.GetAutoChargeIntent, {
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
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.DashboardServiceClient = DashboardServiceClient;

>>>>>>> 917d866 (test)
