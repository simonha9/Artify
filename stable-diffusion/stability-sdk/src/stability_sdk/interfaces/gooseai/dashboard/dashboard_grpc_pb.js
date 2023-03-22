// GENERATED CODE -- DO NOT EDIT!

<<<<<<< HEAD
"use strict";
var grpc = require("grpc");
var dashboard_pb = require("./dashboard_pb.js");

function serialize_gooseai_APIKey(arg) {
  if (!(arg instanceof dashboard_pb.APIKey)) {
    throw new Error("Expected argument of type gooseai.APIKey");
=======
'use strict';
var grpc = require('grpc');
var dashboard_pb = require('./dashboard_pb.js');

function serialize_gooseai_APIKey(arg) {
  if (!(arg instanceof dashboard_pb.APIKey)) {
    throw new Error('Expected argument of type gooseai.APIKey');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_APIKey(buffer_arg) {
  return dashboard_pb.APIKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_APIKeyFindRequest(arg) {
  if (!(arg instanceof dashboard_pb.APIKeyFindRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.APIKeyFindRequest");
=======
    throw new Error('Expected argument of type gooseai.APIKeyFindRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_APIKeyFindRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.APIKeyFindRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.APIKeyFindRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_APIKeyRequest(arg) {
  if (!(arg instanceof dashboard_pb.APIKeyRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.APIKeyRequest");
=======
    throw new Error('Expected argument of type gooseai.APIKeyRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_APIKeyRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.APIKeyRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.APIKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_AutoChargeIntent(arg) {
  if (!(arg instanceof dashboard_pb.AutoChargeIntent)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.AutoChargeIntent");
=======
    throw new Error('Expected argument of type gooseai.AutoChargeIntent');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_AutoChargeIntent(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.AutoChargeIntent.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.AutoChargeIntent.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_Charge(arg) {
  if (!(arg instanceof dashboard_pb.Charge)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.Charge");
=======
    throw new Error('Expected argument of type gooseai.Charge');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Charge(buffer_arg) {
  return dashboard_pb.Charge.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_Charges(arg) {
  if (!(arg instanceof dashboard_pb.Charges)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.Charges");
=======
    throw new Error('Expected argument of type gooseai.Charges');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Charges(buffer_arg) {
  return dashboard_pb.Charges.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ClientSettings(arg) {
  if (!(arg instanceof dashboard_pb.ClientSettings)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.ClientSettings");
=======
    throw new Error('Expected argument of type gooseai.ClientSettings');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ClientSettings(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.ClientSettings.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.ClientSettings.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_CreateAutoChargeIntentRequest(arg) {
  if (!(arg instanceof dashboard_pb.CreateAutoChargeIntentRequest)) {
<<<<<<< HEAD
    throw new Error(
      "Expected argument of type gooseai.CreateAutoChargeIntentRequest"
    );
=======
    throw new Error('Expected argument of type gooseai.CreateAutoChargeIntentRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateAutoChargeIntentRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.CreateAutoChargeIntentRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.CreateAutoChargeIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_CreateChargeRequest(arg) {
  if (!(arg instanceof dashboard_pb.CreateChargeRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.CreateChargeRequest");
=======
    throw new Error('Expected argument of type gooseai.CreateChargeRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateChargeRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.CreateChargeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.CreateChargeRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_EmptyRequest(arg) {
  if (!(arg instanceof dashboard_pb.EmptyRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.EmptyRequest");
=======
    throw new Error('Expected argument of type gooseai.EmptyRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_EmptyRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.EmptyRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_GetAutoChargeRequest(arg) {
  if (!(arg instanceof dashboard_pb.GetAutoChargeRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.GetAutoChargeRequest");
=======
    throw new Error('Expected argument of type gooseai.GetAutoChargeRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetAutoChargeRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.GetAutoChargeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.GetAutoChargeRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_GetChargesRequest(arg) {
  if (!(arg instanceof dashboard_pb.GetChargesRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.GetChargesRequest");
=======
    throw new Error('Expected argument of type gooseai.GetChargesRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetChargesRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.GetChargesRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.GetChargesRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_GetMetricsRequest(arg) {
  if (!(arg instanceof dashboard_pb.GetMetricsRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.GetMetricsRequest");
=======
    throw new Error('Expected argument of type gooseai.GetMetricsRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetMetricsRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.GetMetricsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.GetMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_GetOrganizationRequest(arg) {
  if (!(arg instanceof dashboard_pb.GetOrganizationRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.GetOrganizationRequest");
=======
    throw new Error('Expected argument of type gooseai.GetOrganizationRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetOrganizationRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.GetOrganizationRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_Metrics(arg) {
  if (!(arg instanceof dashboard_pb.Metrics)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.Metrics");
=======
    throw new Error('Expected argument of type gooseai.Metrics');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Metrics(buffer_arg) {
  return dashboard_pb.Metrics.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_Organization(arg) {
  if (!(arg instanceof dashboard_pb.Organization)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.Organization");
=======
    throw new Error('Expected argument of type gooseai.Organization');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Organization(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.Organization.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.Organization.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_UpdateDefaultOrganizationRequest(arg) {
  if (!(arg instanceof dashboard_pb.UpdateDefaultOrganizationRequest)) {
<<<<<<< HEAD
    throw new Error(
      "Expected argument of type gooseai.UpdateDefaultOrganizationRequest"
    );
=======
    throw new Error('Expected argument of type gooseai.UpdateDefaultOrganizationRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateDefaultOrganizationRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.UpdateDefaultOrganizationRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.UpdateDefaultOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_UpdateUserInfoRequest(arg) {
  if (!(arg instanceof dashboard_pb.UpdateUserInfoRequest)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.UpdateUserInfoRequest");
=======
    throw new Error('Expected argument of type gooseai.UpdateUserInfoRequest');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateUserInfoRequest(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.UpdateUserInfoRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
=======
  return dashboard_pb.UpdateUserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
>>>>>>> 917d866 (test)
}

function serialize_gooseai_User(arg) {
  if (!(arg instanceof dashboard_pb.User)) {
<<<<<<< HEAD
    throw new Error("Expected argument of type gooseai.User");
=======
    throw new Error('Expected argument of type gooseai.User');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_User(buffer_arg) {
  return dashboard_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_UserPasswordChangeTicket(arg) {
  if (!(arg instanceof dashboard_pb.UserPasswordChangeTicket)) {
<<<<<<< HEAD
    throw new Error(
      "Expected argument of type gooseai.UserPasswordChangeTicket"
    );
=======
    throw new Error('Expected argument of type gooseai.UserPasswordChangeTicket');
>>>>>>> 917d866 (test)
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UserPasswordChangeTicket(buffer_arg) {
<<<<<<< HEAD
  return dashboard_pb.UserPasswordChangeTicket.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var DashboardServiceService = (exports.DashboardServiceService = {
  // Get info
  getMe: {
    path: "/gooseai.DashboardService/GetMe",
=======
  return dashboard_pb.UserPasswordChangeTicket.deserializeBinary(new Uint8Array(buffer_arg));
}


var DashboardServiceService = exports.DashboardServiceService = {
  // Get info
getMe: {
    path: '/gooseai.DashboardService/GetMe',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.EmptyRequest,
    responseType: dashboard_pb.User,
    requestSerialize: serialize_gooseai_EmptyRequest,
    requestDeserialize: deserialize_gooseai_EmptyRequest,
    responseSerialize: serialize_gooseai_User,
    responseDeserialize: deserialize_gooseai_User,
  },
  getOrganization: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/GetOrganization",
=======
    path: '/gooseai.DashboardService/GetOrganization',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.GetOrganizationRequest,
    responseType: dashboard_pb.Organization,
    requestSerialize: serialize_gooseai_GetOrganizationRequest,
    requestDeserialize: deserialize_gooseai_GetOrganizationRequest,
    responseSerialize: serialize_gooseai_Organization,
    responseDeserialize: deserialize_gooseai_Organization,
  },
  getMetrics: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/GetMetrics",
=======
    path: '/gooseai.DashboardService/GetMetrics',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.GetMetricsRequest,
    responseType: dashboard_pb.Metrics,
    requestSerialize: serialize_gooseai_GetMetricsRequest,
    requestDeserialize: deserialize_gooseai_GetMetricsRequest,
    responseSerialize: serialize_gooseai_Metrics,
    responseDeserialize: deserialize_gooseai_Metrics,
  },
  // API key management
<<<<<<< HEAD
  createAPIKey: {
    path: "/gooseai.DashboardService/CreateAPIKey",
=======
createAPIKey: {
    path: '/gooseai.DashboardService/CreateAPIKey',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.APIKeyRequest,
    responseType: dashboard_pb.APIKey,
    requestSerialize: serialize_gooseai_APIKeyRequest,
    requestDeserialize: deserialize_gooseai_APIKeyRequest,
    responseSerialize: serialize_gooseai_APIKey,
    responseDeserialize: deserialize_gooseai_APIKey,
  },
  deleteAPIKey: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/DeleteAPIKey",
=======
    path: '/gooseai.DashboardService/DeleteAPIKey',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.APIKeyFindRequest,
    responseType: dashboard_pb.APIKey,
    requestSerialize: serialize_gooseai_APIKeyFindRequest,
    requestDeserialize: deserialize_gooseai_APIKeyFindRequest,
    responseSerialize: serialize_gooseai_APIKey,
    responseDeserialize: deserialize_gooseai_APIKey,
  },
  // User settings
<<<<<<< HEAD
  updateDefaultOrganization: {
    path: "/gooseai.DashboardService/UpdateDefaultOrganization",
=======
updateDefaultOrganization: {
    path: '/gooseai.DashboardService/UpdateDefaultOrganization',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.UpdateDefaultOrganizationRequest,
    responseType: dashboard_pb.User,
    requestSerialize: serialize_gooseai_UpdateDefaultOrganizationRequest,
    requestDeserialize: deserialize_gooseai_UpdateDefaultOrganizationRequest,
    responseSerialize: serialize_gooseai_User,
    responseDeserialize: deserialize_gooseai_User,
  },
  getClientSettings: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/GetClientSettings",
=======
    path: '/gooseai.DashboardService/GetClientSettings',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.EmptyRequest,
    responseType: dashboard_pb.ClientSettings,
    requestSerialize: serialize_gooseai_EmptyRequest,
    requestDeserialize: deserialize_gooseai_EmptyRequest,
    responseSerialize: serialize_gooseai_ClientSettings,
    responseDeserialize: deserialize_gooseai_ClientSettings,
  },
  setClientSettings: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/SetClientSettings",
=======
    path: '/gooseai.DashboardService/SetClientSettings',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.ClientSettings,
    responseType: dashboard_pb.ClientSettings,
    requestSerialize: serialize_gooseai_ClientSettings,
    requestDeserialize: deserialize_gooseai_ClientSettings,
    responseSerialize: serialize_gooseai_ClientSettings,
    responseDeserialize: deserialize_gooseai_ClientSettings,
  },
  updateUserInfo: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/UpdateUserInfo",
=======
    path: '/gooseai.DashboardService/UpdateUserInfo',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.UpdateUserInfoRequest,
    responseType: dashboard_pb.User,
    requestSerialize: serialize_gooseai_UpdateUserInfoRequest,
    requestDeserialize: deserialize_gooseai_UpdateUserInfoRequest,
    responseSerialize: serialize_gooseai_User,
    responseDeserialize: deserialize_gooseai_User,
  },
  createPasswordChangeTicket: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/CreatePasswordChangeTicket",
=======
    path: '/gooseai.DashboardService/CreatePasswordChangeTicket',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.EmptyRequest,
    responseType: dashboard_pb.UserPasswordChangeTicket,
    requestSerialize: serialize_gooseai_EmptyRequest,
    requestDeserialize: deserialize_gooseai_EmptyRequest,
    responseSerialize: serialize_gooseai_UserPasswordChangeTicket,
    responseDeserialize: deserialize_gooseai_UserPasswordChangeTicket,
  },
  deleteAccount: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/DeleteAccount",
=======
    path: '/gooseai.DashboardService/DeleteAccount',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.EmptyRequest,
    responseType: dashboard_pb.User,
    requestSerialize: serialize_gooseai_EmptyRequest,
    requestDeserialize: deserialize_gooseai_EmptyRequest,
    responseSerialize: serialize_gooseai_User,
    responseDeserialize: deserialize_gooseai_User,
  },
  // Payment functions
<<<<<<< HEAD
  createCharge: {
    path: "/gooseai.DashboardService/CreateCharge",
=======
createCharge: {
    path: '/gooseai.DashboardService/CreateCharge',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.CreateChargeRequest,
    responseType: dashboard_pb.Charge,
    requestSerialize: serialize_gooseai_CreateChargeRequest,
    requestDeserialize: deserialize_gooseai_CreateChargeRequest,
    responseSerialize: serialize_gooseai_Charge,
    responseDeserialize: deserialize_gooseai_Charge,
  },
  getCharges: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/GetCharges",
=======
    path: '/gooseai.DashboardService/GetCharges',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.GetChargesRequest,
    responseType: dashboard_pb.Charges,
    requestSerialize: serialize_gooseai_GetChargesRequest,
    requestDeserialize: deserialize_gooseai_GetChargesRequest,
    responseSerialize: serialize_gooseai_Charges,
    responseDeserialize: deserialize_gooseai_Charges,
  },
  createAutoChargeIntent: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/CreateAutoChargeIntent",
=======
    path: '/gooseai.DashboardService/CreateAutoChargeIntent',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.CreateAutoChargeIntentRequest,
    responseType: dashboard_pb.AutoChargeIntent,
    requestSerialize: serialize_gooseai_CreateAutoChargeIntentRequest,
    requestDeserialize: deserialize_gooseai_CreateAutoChargeIntentRequest,
    responseSerialize: serialize_gooseai_AutoChargeIntent,
    responseDeserialize: deserialize_gooseai_AutoChargeIntent,
  },
  updateAutoChargeIntent: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/UpdateAutoChargeIntent",
=======
    path: '/gooseai.DashboardService/UpdateAutoChargeIntent',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.CreateAutoChargeIntentRequest,
    responseType: dashboard_pb.AutoChargeIntent,
    requestSerialize: serialize_gooseai_CreateAutoChargeIntentRequest,
    requestDeserialize: deserialize_gooseai_CreateAutoChargeIntentRequest,
    responseSerialize: serialize_gooseai_AutoChargeIntent,
    responseDeserialize: deserialize_gooseai_AutoChargeIntent,
  },
  getAutoChargeIntent: {
<<<<<<< HEAD
    path: "/gooseai.DashboardService/GetAutoChargeIntent",
=======
    path: '/gooseai.DashboardService/GetAutoChargeIntent',
>>>>>>> 917d866 (test)
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.GetAutoChargeRequest,
    responseType: dashboard_pb.AutoChargeIntent,
    requestSerialize: serialize_gooseai_GetAutoChargeRequest,
    requestDeserialize: deserialize_gooseai_GetAutoChargeRequest,
    responseSerialize: serialize_gooseai_AutoChargeIntent,
    responseDeserialize: deserialize_gooseai_AutoChargeIntent,
  },
<<<<<<< HEAD
});

exports.DashboardServiceClient = grpc.makeGenericClientConstructor(
  DashboardServiceService
);
=======
};

exports.DashboardServiceClient = grpc.makeGenericClientConstructor(DashboardServiceService);
>>>>>>> 917d866 (test)
