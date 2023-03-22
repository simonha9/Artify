// source: generation.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

<<<<<<< HEAD
var jspb = require("google-protobuf");
var goog = jspb;
var global = function () {
  if (this) {
    return this;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return Function("return this")();
}.call(null);

var tensors_pb = require("./tensors_pb.js");
goog.object.extend(proto, tensors_pb);
goog.exportSymbol("proto.gooseai.Action", null, global);
goog.exportSymbol("proto.gooseai.Answer", null, global);
goog.exportSymbol("proto.gooseai.AnswerMeta", null, global);
goog.exportSymbol("proto.gooseai.Artifact", null, global);
goog.exportSymbol("proto.gooseai.Artifact.DataCase", null, global);
goog.exportSymbol("proto.gooseai.ArtifactType", null, global);
goog.exportSymbol("proto.gooseai.AssetAction", null, global);
goog.exportSymbol("proto.gooseai.AssetParameters", null, global);
goog.exportSymbol("proto.gooseai.AssetUse", null, global);
goog.exportSymbol("proto.gooseai.ChainRequest", null, global);
goog.exportSymbol("proto.gooseai.ClassifierCategory", null, global);
goog.exportSymbol("proto.gooseai.ClassifierConcept", null, global);
goog.exportSymbol("proto.gooseai.ClassifierMode", null, global);
goog.exportSymbol("proto.gooseai.ClassifierParameters", null, global);
goog.exportSymbol("proto.gooseai.ConditionerParameters", null, global);
goog.exportSymbol("proto.gooseai.CutoutParameters", null, global);
goog.exportSymbol("proto.gooseai.DiffusionSampler", null, global);
goog.exportSymbol("proto.gooseai.FinishReason", null, global);
goog.exportSymbol("proto.gooseai.GuidanceInstanceParameters", null, global);
goog.exportSymbol("proto.gooseai.GuidanceParameters", null, global);
goog.exportSymbol("proto.gooseai.GuidancePreset", null, global);
goog.exportSymbol("proto.gooseai.GuidanceScheduleParameters", null, global);
goog.exportSymbol("proto.gooseai.ImageParameters", null, global);
goog.exportSymbol("proto.gooseai.MaskedAreaInit", null, global);
goog.exportSymbol("proto.gooseai.Model", null, global);
goog.exportSymbol("proto.gooseai.ModelArchitecture", null, global);
goog.exportSymbol("proto.gooseai.OnStatus", null, global);
goog.exportSymbol("proto.gooseai.Prompt", null, global);
goog.exportSymbol("proto.gooseai.Prompt.PromptCase", null, global);
goog.exportSymbol("proto.gooseai.PromptParameters", null, global);
goog.exportSymbol("proto.gooseai.Request", null, global);
goog.exportSymbol("proto.gooseai.Request.ParamsCase", null, global);
goog.exportSymbol("proto.gooseai.SamplerParameters", null, global);
goog.exportSymbol("proto.gooseai.ScheduleParameters", null, global);
goog.exportSymbol("proto.gooseai.Stage", null, global);
goog.exportSymbol("proto.gooseai.StageAction", null, global);
goog.exportSymbol("proto.gooseai.StepParameter", null, global);
goog.exportSymbol("proto.gooseai.Token", null, global);
goog.exportSymbol("proto.gooseai.Tokens", null, global);
goog.exportSymbol("proto.gooseai.TransformType", null, global);
goog.exportSymbol("proto.gooseai.TransformType.TypeCase", null, global);
goog.exportSymbol("proto.gooseai.Upscaler", null, global);
goog.exportSymbol("proto.gooseai.WeightMethod", null, global);
=======
var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var tensors_pb = require('./tensors_pb.js');
goog.object.extend(proto, tensors_pb);
goog.exportSymbol('proto.gooseai.Action', null, global);
goog.exportSymbol('proto.gooseai.Answer', null, global);
goog.exportSymbol('proto.gooseai.AnswerMeta', null, global);
goog.exportSymbol('proto.gooseai.Artifact', null, global);
goog.exportSymbol('proto.gooseai.Artifact.DataCase', null, global);
goog.exportSymbol('proto.gooseai.ArtifactType', null, global);
goog.exportSymbol('proto.gooseai.AssetAction', null, global);
goog.exportSymbol('proto.gooseai.AssetParameters', null, global);
goog.exportSymbol('proto.gooseai.AssetUse', null, global);
goog.exportSymbol('proto.gooseai.ChainRequest', null, global);
goog.exportSymbol('proto.gooseai.ClassifierCategory', null, global);
goog.exportSymbol('proto.gooseai.ClassifierConcept', null, global);
goog.exportSymbol('proto.gooseai.ClassifierMode', null, global);
goog.exportSymbol('proto.gooseai.ClassifierParameters', null, global);
goog.exportSymbol('proto.gooseai.ConditionerParameters', null, global);
goog.exportSymbol('proto.gooseai.CutoutParameters', null, global);
goog.exportSymbol('proto.gooseai.DiffusionSampler', null, global);
goog.exportSymbol('proto.gooseai.FinishReason', null, global);
goog.exportSymbol('proto.gooseai.GuidanceInstanceParameters', null, global);
goog.exportSymbol('proto.gooseai.GuidanceParameters', null, global);
goog.exportSymbol('proto.gooseai.GuidancePreset', null, global);
goog.exportSymbol('proto.gooseai.GuidanceScheduleParameters', null, global);
goog.exportSymbol('proto.gooseai.ImageParameters', null, global);
goog.exportSymbol('proto.gooseai.MaskedAreaInit', null, global);
goog.exportSymbol('proto.gooseai.Model', null, global);
goog.exportSymbol('proto.gooseai.ModelArchitecture', null, global);
goog.exportSymbol('proto.gooseai.OnStatus', null, global);
goog.exportSymbol('proto.gooseai.Prompt', null, global);
goog.exportSymbol('proto.gooseai.Prompt.PromptCase', null, global);
goog.exportSymbol('proto.gooseai.PromptParameters', null, global);
goog.exportSymbol('proto.gooseai.Request', null, global);
goog.exportSymbol('proto.gooseai.Request.ParamsCase', null, global);
goog.exportSymbol('proto.gooseai.SamplerParameters', null, global);
goog.exportSymbol('proto.gooseai.ScheduleParameters', null, global);
goog.exportSymbol('proto.gooseai.Stage', null, global);
goog.exportSymbol('proto.gooseai.StageAction', null, global);
goog.exportSymbol('proto.gooseai.StepParameter', null, global);
goog.exportSymbol('proto.gooseai.Token', null, global);
goog.exportSymbol('proto.gooseai.Tokens', null, global);
goog.exportSymbol('proto.gooseai.TransformType', null, global);
goog.exportSymbol('proto.gooseai.TransformType.TypeCase', null, global);
goog.exportSymbol('proto.gooseai.Upscaler', null, global);
goog.exportSymbol('proto.gooseai.WeightMethod', null, global);
>>>>>>> 917d866 (test)
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.Token = function (opt_data) {
=======
proto.gooseai.Token = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.Token, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.Token.displayName = "proto.gooseai.Token";
=======
  proto.gooseai.Token.displayName = 'proto.gooseai.Token';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.Tokens = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.Tokens.repeatedFields_,
    null
  );
=======
proto.gooseai.Tokens = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Tokens.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.Tokens, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.Tokens.displayName = "proto.gooseai.Tokens";
=======
  proto.gooseai.Tokens.displayName = 'proto.gooseai.Tokens';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.Artifact = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.gooseai.Artifact.oneofGroups_
  );
=======
proto.gooseai.Artifact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseai.Artifact.oneofGroups_);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.Artifact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.Artifact.displayName = "proto.gooseai.Artifact";
=======
  proto.gooseai.Artifact.displayName = 'proto.gooseai.Artifact';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters = function (opt_data) {
=======
proto.gooseai.PromptParameters = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.PromptParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.PromptParameters.displayName = "proto.gooseai.PromptParameters";
=======
  proto.gooseai.PromptParameters.displayName = 'proto.gooseai.PromptParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.Prompt = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.gooseai.Prompt.oneofGroups_
  );
=======
proto.gooseai.Prompt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseai.Prompt.oneofGroups_);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.Prompt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.Prompt.displayName = "proto.gooseai.Prompt";
=======
  proto.gooseai.Prompt.displayName = 'proto.gooseai.Prompt';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters = function (opt_data) {
=======
proto.gooseai.SamplerParameters = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.SamplerParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.SamplerParameters.displayName =
    "proto.gooseai.SamplerParameters";
=======
  proto.gooseai.SamplerParameters.displayName = 'proto.gooseai.SamplerParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters = function (opt_data) {
=======
proto.gooseai.ConditionerParameters = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.ConditionerParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.ConditionerParameters.displayName =
    "proto.gooseai.ConditionerParameters";
=======
  proto.gooseai.ConditionerParameters.displayName = 'proto.gooseai.ConditionerParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters = function (opt_data) {
=======
proto.gooseai.ScheduleParameters = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.ScheduleParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.ScheduleParameters.displayName =
    "proto.gooseai.ScheduleParameters";
=======
  proto.gooseai.ScheduleParameters.displayName = 'proto.gooseai.ScheduleParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.StepParameter = function (opt_data) {
=======
proto.gooseai.StepParameter = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.StepParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.StepParameter.displayName = "proto.gooseai.StepParameter";
=======
  proto.gooseai.StepParameter.displayName = 'proto.gooseai.StepParameter';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.Model = function (opt_data) {
=======
proto.gooseai.Model = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.Model, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.Model.displayName = "proto.gooseai.Model";
=======
  proto.gooseai.Model.displayName = 'proto.gooseai.Model';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.CutoutParameters.repeatedFields_,
    null
  );
=======
proto.gooseai.CutoutParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.CutoutParameters.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.CutoutParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.CutoutParameters.displayName = "proto.gooseai.CutoutParameters";
=======
  proto.gooseai.CutoutParameters.displayName = 'proto.gooseai.CutoutParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.GuidanceScheduleParameters = function (opt_data) {
=======
proto.gooseai.GuidanceScheduleParameters = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.GuidanceScheduleParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.GuidanceScheduleParameters.displayName =
    "proto.gooseai.GuidanceScheduleParameters";
=======
  proto.gooseai.GuidanceScheduleParameters.displayName = 'proto.gooseai.GuidanceScheduleParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.GuidanceInstanceParameters.repeatedFields_,
    null
  );
=======
proto.gooseai.GuidanceInstanceParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.GuidanceInstanceParameters.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.GuidanceInstanceParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.GuidanceInstanceParameters.displayName =
    "proto.gooseai.GuidanceInstanceParameters";
=======
  proto.gooseai.GuidanceInstanceParameters.displayName = 'proto.gooseai.GuidanceInstanceParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.GuidanceParameters = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.GuidanceParameters.repeatedFields_,
    null
  );
=======
proto.gooseai.GuidanceParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.GuidanceParameters.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.GuidanceParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.GuidanceParameters.displayName =
    "proto.gooseai.GuidanceParameters";
=======
  proto.gooseai.GuidanceParameters.displayName = 'proto.gooseai.GuidanceParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.TransformType = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.gooseai.TransformType.oneofGroups_
  );
=======
proto.gooseai.TransformType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseai.TransformType.oneofGroups_);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.TransformType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.TransformType.displayName = "proto.gooseai.TransformType";
=======
  proto.gooseai.TransformType.displayName = 'proto.gooseai.TransformType';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.ImageParameters.repeatedFields_,
    null
  );
=======
proto.gooseai.ImageParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.ImageParameters.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.ImageParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.ImageParameters.displayName = "proto.gooseai.ImageParameters";
=======
  proto.gooseai.ImageParameters.displayName = 'proto.gooseai.ImageParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept = function (opt_data) {
=======
proto.gooseai.ClassifierConcept = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.ClassifierConcept, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.ClassifierConcept.displayName =
    "proto.gooseai.ClassifierConcept";
=======
  proto.gooseai.ClassifierConcept.displayName = 'proto.gooseai.ClassifierConcept';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.ClassifierCategory.repeatedFields_,
    null
  );
=======
proto.gooseai.ClassifierCategory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.ClassifierCategory.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.ClassifierCategory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.ClassifierCategory.displayName =
    "proto.gooseai.ClassifierCategory";
=======
  proto.gooseai.ClassifierCategory.displayName = 'proto.gooseai.ClassifierCategory';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.ClassifierParameters.repeatedFields_,
    null
  );
=======
proto.gooseai.ClassifierParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.ClassifierParameters.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.ClassifierParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.ClassifierParameters.displayName =
    "proto.gooseai.ClassifierParameters";
=======
  proto.gooseai.ClassifierParameters.displayName = 'proto.gooseai.ClassifierParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters = function (opt_data) {
=======
proto.gooseai.AssetParameters = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.AssetParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.AssetParameters.displayName = "proto.gooseai.AssetParameters";
=======
  proto.gooseai.AssetParameters.displayName = 'proto.gooseai.AssetParameters';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta = function (opt_data) {
=======
proto.gooseai.AnswerMeta = function(opt_data) {
>>>>>>> 917d866 (test)
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseai.AnswerMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.AnswerMeta.displayName = "proto.gooseai.AnswerMeta";
=======
  proto.gooseai.AnswerMeta.displayName = 'proto.gooseai.AnswerMeta';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.Answer = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.Answer.repeatedFields_,
    null
  );
=======
proto.gooseai.Answer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Answer.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.Answer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.Answer.displayName = "proto.gooseai.Answer";
=======
  proto.gooseai.Answer.displayName = 'proto.gooseai.Answer';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.Request = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.Request.repeatedFields_,
    proto.gooseai.Request.oneofGroups_
  );
=======
proto.gooseai.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Request.repeatedFields_, proto.gooseai.Request.oneofGroups_);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.Request.displayName = "proto.gooseai.Request";
=======
  proto.gooseai.Request.displayName = 'proto.gooseai.Request';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.OnStatus = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.OnStatus.repeatedFields_,
    null
  );
=======
proto.gooseai.OnStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.OnStatus.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.OnStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.OnStatus.displayName = "proto.gooseai.OnStatus";
=======
  proto.gooseai.OnStatus.displayName = 'proto.gooseai.OnStatus';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.Stage = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.Stage.repeatedFields_,
    null
  );
=======
proto.gooseai.Stage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Stage.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.Stage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.Stage.displayName = "proto.gooseai.Stage";
=======
  proto.gooseai.Stage.displayName = 'proto.gooseai.Stage';
>>>>>>> 917d866 (test)
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD
proto.gooseai.ChainRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.gooseai.ChainRequest.repeatedFields_,
    null
  );
=======
proto.gooseai.ChainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.ChainRequest.repeatedFields_, null);
>>>>>>> 917d866 (test)
};
goog.inherits(proto.gooseai.ChainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
<<<<<<< HEAD
  proto.gooseai.ChainRequest.displayName = "proto.gooseai.ChainRequest";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.Token.prototype.toObject = function (opt_includeInstance) {
    return proto.gooseai.Token.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.Token} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.Token.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        text: jspb.Message.getFieldWithDefault(msg, 1, ""),
        id: jspb.Message.getFieldWithDefault(msg, 2, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
  proto.gooseai.ChainRequest.displayName = 'proto.gooseai.ChainRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.Token.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.Token.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.Token} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.Token.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.Token}
 */
<<<<<<< HEAD
proto.gooseai.Token.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Token();
  return proto.gooseai.Token.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.Token.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Token;
  return proto.gooseai.Token.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.Token} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.Token}
 */
<<<<<<< HEAD
proto.gooseai.Token.deserializeBinaryFromReader = function (msg, reader) {
=======
proto.gooseai.Token.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setText(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setId(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.Token.prototype.serializeBinary = function () {
=======
proto.gooseai.Token.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.Token.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.Token} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.Token.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(1, f);
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(2, f);
  }
};

=======
proto.gooseai.Token.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional string text = 1;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Token.prototype.getText = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

=======
proto.gooseai.Token.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Token} returns this
 */
<<<<<<< HEAD
proto.gooseai.Token.prototype.setText = function (value) {
  return jspb.Message.setField(this, 1, value);
};

=======
proto.gooseai.Token.prototype.setText = function(value) {
  return jspb.Message.setField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.Token} returns this
 */
<<<<<<< HEAD
proto.gooseai.Token.prototype.clearText = function () {
  return jspb.Message.setField(this, 1, undefined);
};

=======
proto.gooseai.Token.prototype.clearText = function() {
  return jspb.Message.setField(this, 1, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Token.prototype.hasText = function () {
  return jspb.Message.getField(this, 1) != null;
};

=======
proto.gooseai.Token.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional uint32 id = 2;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.Token.prototype.getId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

=======
proto.gooseai.Token.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.Token} returns this
 */
<<<<<<< HEAD
proto.gooseai.Token.prototype.setId = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

=======
proto.gooseai.Token.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseai.Tokens.repeatedFields_ = [1];

<<<<<<< HEAD
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.Tokens.prototype.toObject = function (opt_includeInstance) {
    return proto.gooseai.Tokens.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.Tokens} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.Tokens.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        tokensList: jspb.Message.toObjectList(
          msg.getTokensList(),
          proto.gooseai.Token.toObject,
          includeInstance
        ),
        tokenizerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.Tokens.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.Tokens.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.Tokens} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.Tokens.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokensList: jspb.Message.toObjectList(msg.getTokensList(),
    proto.gooseai.Token.toObject, includeInstance),
    tokenizerId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.Tokens}
 */
<<<<<<< HEAD
proto.gooseai.Tokens.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Tokens();
  return proto.gooseai.Tokens.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.Tokens.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Tokens;
  return proto.gooseai.Tokens.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.Tokens} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.Tokens}
 */
<<<<<<< HEAD
proto.gooseai.Tokens.deserializeBinaryFromReader = function (msg, reader) {
=======
proto.gooseai.Tokens.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = new proto.gooseai.Token();
        reader.readMessage(
          value,
          proto.gooseai.Token.deserializeBinaryFromReader
        );
        msg.addTokens(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setTokenizerId(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = new proto.gooseai.Token;
      reader.readMessage(value,proto.gooseai.Token.deserializeBinaryFromReader);
      msg.addTokens(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenizerId(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.Tokens.prototype.serializeBinary = function () {
=======
proto.gooseai.Tokens.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.Tokens.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.Tokens} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.Tokens.serializeBinaryToWriter = function (message, writer) {
=======
proto.gooseai.Tokens.serializeBinaryToWriter = function(message, writer) {
>>>>>>> 917d866 (test)
  var f = undefined;
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gooseai.Token.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
<<<<<<< HEAD
    writer.writeString(2, f);
  }
};

=======
    writer.writeString(
      2,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * repeated Token tokens = 1;
 * @return {!Array<!proto.gooseai.Token>}
 */
<<<<<<< HEAD
proto.gooseai.Tokens.prototype.getTokensList = function () {
  return /** @type{!Array<!proto.gooseai.Token>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Token, 1)
  );
};

/**
 * @param {!Array<!proto.gooseai.Token>} value
 * @return {!proto.gooseai.Tokens} returns this
 */
proto.gooseai.Tokens.prototype.setTokensList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

=======
proto.gooseai.Tokens.prototype.getTokensList = function() {
  return /** @type{!Array<!proto.gooseai.Token>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Token, 1));
};


/**
 * @param {!Array<!proto.gooseai.Token>} value
 * @return {!proto.gooseai.Tokens} returns this
*/
proto.gooseai.Tokens.prototype.setTokensList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.Token=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.Token}
 */
<<<<<<< HEAD
proto.gooseai.Tokens.prototype.addTokens = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.gooseai.Token,
    opt_index
  );
};

=======
proto.gooseai.Tokens.prototype.addTokens = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.Token, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.Tokens} returns this
 */
<<<<<<< HEAD
proto.gooseai.Tokens.prototype.clearTokensList = function () {
  return this.setTokensList([]);
};

=======
proto.gooseai.Tokens.prototype.clearTokensList = function() {
  return this.setTokensList([]);
};


>>>>>>> 917d866 (test)
/**
 * optional string tokenizer_id = 2;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Tokens.prototype.getTokenizerId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

=======
proto.gooseai.Tokens.prototype.getTokenizerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Tokens} returns this
 */
<<<<<<< HEAD
proto.gooseai.Tokens.prototype.setTokenizerId = function (value) {
  return jspb.Message.setField(this, 2, value);
};

=======
proto.gooseai.Tokens.prototype.setTokenizerId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.Tokens} returns this
 */
<<<<<<< HEAD
proto.gooseai.Tokens.prototype.clearTokenizerId = function () {
  return jspb.Message.setField(this, 2, undefined);
};

=======
proto.gooseai.Tokens.prototype.clearTokenizerId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Tokens.prototype.hasTokenizerId = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.Tokens.prototype.hasTokenizerId = function() {
  return jspb.Message.getField(this, 2) != null;
};



>>>>>>> 917d866 (test)
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
<<<<<<< HEAD
proto.gooseai.Artifact.oneofGroups_ = [[5, 6, 7, 11, 14]];
=======
proto.gooseai.Artifact.oneofGroups_ = [[5,6,7,11,14]];
>>>>>>> 917d866 (test)

/**
 * @enum {number}
 */
proto.gooseai.Artifact.DataCase = {
  DATA_NOT_SET: 0,
  BINARY: 5,
  TEXT: 6,
  TOKENS: 7,
  CLASSIFIER: 11,
<<<<<<< HEAD
  TENSOR: 14,
=======
  TENSOR: 14
>>>>>>> 917d866 (test)
};

/**
 * @return {proto.gooseai.Artifact.DataCase}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getDataCase = function () {
  return /** @type {proto.gooseai.Artifact.DataCase} */ (
    jspb.Message.computeOneofCase(this, proto.gooseai.Artifact.oneofGroups_[0])
  );
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.Artifact.prototype.toObject = function (opt_includeInstance) {
    return proto.gooseai.Artifact.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.Artifact} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.Artifact.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, 0),
        type: jspb.Message.getFieldWithDefault(msg, 2, 0),
        mime: jspb.Message.getFieldWithDefault(msg, 3, ""),
        magic: jspb.Message.getFieldWithDefault(msg, 4, ""),
        binary: msg.getBinary_asB64(),
        text: jspb.Message.getFieldWithDefault(msg, 6, ""),
        tokens:
          (f = msg.getTokens()) &&
          proto.gooseai.Tokens.toObject(includeInstance, f),
        classifier:
          (f = msg.getClassifier()) &&
          proto.gooseai.ClassifierParameters.toObject(includeInstance, f),
        tensor:
          (f = msg.getTensor()) &&
          tensors_pb.Tensor.toObject(includeInstance, f),
        index: jspb.Message.getFieldWithDefault(msg, 8, 0),
        finishReason: jspb.Message.getFieldWithDefault(msg, 9, 0),
        seed: jspb.Message.getFieldWithDefault(msg, 10, 0),
        uuid: jspb.Message.getFieldWithDefault(msg, 12, ""),
        size: jspb.Message.getFieldWithDefault(msg, 13, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.Artifact.prototype.getDataCase = function() {
  return /** @type {proto.gooseai.Artifact.DataCase} */(jspb.Message.computeOneofCase(this, proto.gooseai.Artifact.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.Artifact.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.Artifact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.Artifact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.Artifact.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    magic: jspb.Message.getFieldWithDefault(msg, 4, ""),
    binary: msg.getBinary_asB64(),
    text: jspb.Message.getFieldWithDefault(msg, 6, ""),
    tokens: (f = msg.getTokens()) && proto.gooseai.Tokens.toObject(includeInstance, f),
    classifier: (f = msg.getClassifier()) && proto.gooseai.ClassifierParameters.toObject(includeInstance, f),
    tensor: (f = msg.getTensor()) && tensors_pb.Tensor.toObject(includeInstance, f),
    index: jspb.Message.getFieldWithDefault(msg, 8, 0),
    finishReason: jspb.Message.getFieldWithDefault(msg, 9, 0),
    seed: jspb.Message.getFieldWithDefault(msg, 10, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    size: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.Artifact}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Artifact();
  return proto.gooseai.Artifact.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.Artifact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Artifact;
  return proto.gooseai.Artifact.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.Artifact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.Artifact}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.deserializeBinaryFromReader = function (msg, reader) {
=======
proto.gooseai.Artifact.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setId(value);
        break;
      case 2:
        var value = /** @type {!proto.gooseai.ArtifactType} */ (
          reader.readEnum()
        );
        msg.setType(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setMime(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setMagic(value);
        break;
      case 5:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setBinary(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readString());
        msg.setText(value);
        break;
      case 7:
        var value = new proto.gooseai.Tokens();
        reader.readMessage(
          value,
          proto.gooseai.Tokens.deserializeBinaryFromReader
        );
        msg.setTokens(value);
        break;
      case 11:
        var value = new proto.gooseai.ClassifierParameters();
        reader.readMessage(
          value,
          proto.gooseai.ClassifierParameters.deserializeBinaryFromReader
        );
        msg.setClassifier(value);
        break;
      case 14:
        var value = new tensors_pb.Tensor();
        reader.readMessage(
          value,
          tensors_pb.Tensor.deserializeBinaryFromReader
        );
        msg.setTensor(value);
        break;
      case 8:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setIndex(value);
        break;
      case 9:
        var value = /** @type {!proto.gooseai.FinishReason} */ (
          reader.readEnum()
        );
        msg.setFinishReason(value);
        break;
      case 10:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setSeed(value);
        break;
      case 12:
        var value = /** @type {string} */ (reader.readString());
        msg.setUuid(value);
        break;
      case 13:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSize(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.gooseai.ArtifactType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMagic(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBinary(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 7:
      var value = new proto.gooseai.Tokens;
      reader.readMessage(value,proto.gooseai.Tokens.deserializeBinaryFromReader);
      msg.setTokens(value);
      break;
    case 11:
      var value = new proto.gooseai.ClassifierParameters;
      reader.readMessage(value,proto.gooseai.ClassifierParameters.deserializeBinaryFromReader);
      msg.setClassifier(value);
      break;
    case 14:
      var value = new tensors_pb.Tensor;
      reader.readMessage(value,tensors_pb.Tensor.deserializeBinaryFromReader);
      msg.setTensor(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 9:
      var value = /** @type {!proto.gooseai.FinishReason} */ (reader.readEnum());
      msg.setFinishReason(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeed(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.serializeBinary = function () {
=======
proto.gooseai.Artifact.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.Artifact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.Artifact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.Artifact.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(2, f);
  }
  f = message.getMime();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(4, f);
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBytes(5, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(6, f);
  }
  f = message.getTokens();
  if (f != null) {
    writer.writeMessage(7, f, proto.gooseai.Tokens.serializeBinaryToWriter);
=======
proto.gooseai.Artifact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTokens();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.gooseai.Tokens.serializeBinaryToWriter
    );
>>>>>>> 917d866 (test)
  }
  f = message.getClassifier();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.gooseai.ClassifierParameters.serializeBinaryToWriter
    );
  }
  f = message.getTensor();
  if (f != null) {
<<<<<<< HEAD
    writer.writeMessage(14, f, tensors_pb.Tensor.serializeBinaryToWriter);
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(8, f);
  }
  f = message.getFinishReason();
  if (f !== 0.0) {
    writer.writeEnum(9, f);
  }
  f = message.getSeed();
  if (f !== 0) {
    writer.writeUint32(10, f);
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(12, f);
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(13, f);
  }
};

=======
    writer.writeMessage(
      14,
      f,
      tensors_pb.Tensor.serializeBinaryToWriter
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getFinishReason();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getSeed();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 id = 1;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

=======
proto.gooseai.Artifact.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

=======
proto.gooseai.Artifact.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * optional ArtifactType type = 2;
 * @return {!proto.gooseai.ArtifactType}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getType = function () {
  return /** @type {!proto.gooseai.ArtifactType} */ (
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};

=======
proto.gooseai.Artifact.prototype.getType = function() {
  return /** @type {!proto.gooseai.ArtifactType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.ArtifactType} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setType = function (value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};

=======
proto.gooseai.Artifact.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * optional string mime = 3;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getMime = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

=======
proto.gooseai.Artifact.prototype.getMime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setMime = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

=======
proto.gooseai.Artifact.prototype.setMime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * optional string magic = 4;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getMagic = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

=======
proto.gooseai.Artifact.prototype.getMagic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setMagic = function (value) {
  return jspb.Message.setField(this, 4, value);
};

=======
proto.gooseai.Artifact.prototype.setMagic = function(value) {
  return jspb.Message.setField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.clearMagic = function () {
  return jspb.Message.setField(this, 4, undefined);
};

=======
proto.gooseai.Artifact.prototype.clearMagic = function() {
  return jspb.Message.setField(this, 4, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.hasMagic = function () {
  return jspb.Message.getField(this, 4) != null;
};

=======
proto.gooseai.Artifact.prototype.hasMagic = function() {
  return jspb.Message.getField(this, 4) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional bytes binary = 5;
 * @return {!(string|Uint8Array)}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getBinary = function () {
  return /** @type {!(string|Uint8Array)} */ (
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};

=======
proto.gooseai.Artifact.prototype.getBinary = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


>>>>>>> 917d866 (test)
/**
 * optional bytes binary = 5;
 * This is a type-conversion wrapper around `getBinary()`
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getBinary_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getBinary()));
};

=======
proto.gooseai.Artifact.prototype.getBinary_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBinary()));
};


>>>>>>> 917d866 (test)
/**
 * optional bytes binary = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBinary()`
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getBinary_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getBinary()));
};

=======
proto.gooseai.Artifact.prototype.getBinary_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBinary()));
};


>>>>>>> 917d866 (test)
/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setBinary = function (value) {
  return jspb.Message.setOneofField(
    this,
    5,
    proto.gooseai.Artifact.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Artifact.prototype.setBinary = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.gooseai.Artifact.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.clearBinary = function () {
  return jspb.Message.setOneofField(
    this,
    5,
    proto.gooseai.Artifact.oneofGroups_[0],
    undefined
  );
};

=======
proto.gooseai.Artifact.prototype.clearBinary = function() {
  return jspb.Message.setOneofField(this, 5, proto.gooseai.Artifact.oneofGroups_[0], undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.hasBinary = function () {
  return jspb.Message.getField(this, 5) != null;
};

=======
proto.gooseai.Artifact.prototype.hasBinary = function() {
  return jspb.Message.getField(this, 5) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional string text = 6;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getText = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};

=======
proto.gooseai.Artifact.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setText = function (value) {
  return jspb.Message.setOneofField(
    this,
    6,
    proto.gooseai.Artifact.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Artifact.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.gooseai.Artifact.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.clearText = function () {
  return jspb.Message.setOneofField(
    this,
    6,
    proto.gooseai.Artifact.oneofGroups_[0],
    undefined
  );
};

=======
proto.gooseai.Artifact.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 6, proto.gooseai.Artifact.oneofGroups_[0], undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.hasText = function () {
  return jspb.Message.getField(this, 6) != null;
};

=======
proto.gooseai.Artifact.prototype.hasText = function() {
  return jspb.Message.getField(this, 6) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional Tokens tokens = 7;
 * @return {?proto.gooseai.Tokens}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getTokens = function () {
  return /** @type{?proto.gooseai.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Tokens, 7)
  );
};

/**
 * @param {?proto.gooseai.Tokens|undefined} value
 * @return {!proto.gooseai.Artifact} returns this
 */
proto.gooseai.Artifact.prototype.setTokens = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    7,
    proto.gooseai.Artifact.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Artifact.prototype.getTokens = function() {
  return /** @type{?proto.gooseai.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Tokens, 7));
};


/**
 * @param {?proto.gooseai.Tokens|undefined} value
 * @return {!proto.gooseai.Artifact} returns this
*/
proto.gooseai.Artifact.prototype.setTokens = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.gooseai.Artifact.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.clearTokens = function () {
  return this.setTokens(undefined);
};

=======
proto.gooseai.Artifact.prototype.clearTokens = function() {
  return this.setTokens(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.hasTokens = function () {
  return jspb.Message.getField(this, 7) != null;
};

=======
proto.gooseai.Artifact.prototype.hasTokens = function() {
  return jspb.Message.getField(this, 7) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional ClassifierParameters classifier = 11;
 * @return {?proto.gooseai.ClassifierParameters}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getClassifier = function () {
  return /** @type{?proto.gooseai.ClassifierParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.ClassifierParameters, 11)
  );
};

/**
 * @param {?proto.gooseai.ClassifierParameters|undefined} value
 * @return {!proto.gooseai.Artifact} returns this
 */
proto.gooseai.Artifact.prototype.setClassifier = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    11,
    proto.gooseai.Artifact.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Artifact.prototype.getClassifier = function() {
  return /** @type{?proto.gooseai.ClassifierParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.ClassifierParameters, 11));
};


/**
 * @param {?proto.gooseai.ClassifierParameters|undefined} value
 * @return {!proto.gooseai.Artifact} returns this
*/
proto.gooseai.Artifact.prototype.setClassifier = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.gooseai.Artifact.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.clearClassifier = function () {
  return this.setClassifier(undefined);
};

=======
proto.gooseai.Artifact.prototype.clearClassifier = function() {
  return this.setClassifier(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.hasClassifier = function () {
  return jspb.Message.getField(this, 11) != null;
};

=======
proto.gooseai.Artifact.prototype.hasClassifier = function() {
  return jspb.Message.getField(this, 11) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional tensors.Tensor tensor = 14;
 * @return {?proto.tensors.Tensor}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getTensor = function () {
  return /** @type{?proto.tensors.Tensor} */ (
    jspb.Message.getWrapperField(this, tensors_pb.Tensor, 14)
  );
};

/**
 * @param {?proto.tensors.Tensor|undefined} value
 * @return {!proto.gooseai.Artifact} returns this
 */
proto.gooseai.Artifact.prototype.setTensor = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    14,
    proto.gooseai.Artifact.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Artifact.prototype.getTensor = function() {
  return /** @type{?proto.tensors.Tensor} */ (
    jspb.Message.getWrapperField(this, tensors_pb.Tensor, 14));
};


/**
 * @param {?proto.tensors.Tensor|undefined} value
 * @return {!proto.gooseai.Artifact} returns this
*/
proto.gooseai.Artifact.prototype.setTensor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.gooseai.Artifact.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.clearTensor = function () {
  return this.setTensor(undefined);
};

=======
proto.gooseai.Artifact.prototype.clearTensor = function() {
  return this.setTensor(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.hasTensor = function () {
  return jspb.Message.getField(this, 14) != null;
};

=======
proto.gooseai.Artifact.prototype.hasTensor = function() {
  return jspb.Message.getField(this, 14) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional uint32 index = 8;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getIndex = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};

=======
proto.gooseai.Artifact.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setIndex = function (value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};

=======
proto.gooseai.Artifact.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


>>>>>>> 917d866 (test)
/**
 * optional FinishReason finish_reason = 9;
 * @return {!proto.gooseai.FinishReason}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getFinishReason = function () {
  return /** @type {!proto.gooseai.FinishReason} */ (
    jspb.Message.getFieldWithDefault(this, 9, 0)
  );
};

=======
proto.gooseai.Artifact.prototype.getFinishReason = function() {
  return /** @type {!proto.gooseai.FinishReason} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.FinishReason} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setFinishReason = function (value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};

=======
proto.gooseai.Artifact.prototype.setFinishReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


>>>>>>> 917d866 (test)
/**
 * optional uint32 seed = 10;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getSeed = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};

=======
proto.gooseai.Artifact.prototype.getSeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setSeed = function (value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};

=======
proto.gooseai.Artifact.prototype.setSeed = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


>>>>>>> 917d866 (test)
/**
 * optional string uuid = 12;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getUuid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};

=======
proto.gooseai.Artifact.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setUuid = function (value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};

=======
proto.gooseai.Artifact.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 size = 13;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.getSize = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};

=======
proto.gooseai.Artifact.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.Artifact} returns this
 */
<<<<<<< HEAD
proto.gooseai.Artifact.prototype.setSize = function (value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.PromptParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.PromptParameters.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.PromptParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.PromptParameters.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        init: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
        weight: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.Artifact.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.PromptParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.PromptParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.PromptParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.PromptParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    init: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    weight: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.PromptParameters}
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.PromptParameters();
  return proto.gooseai.PromptParameters.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.PromptParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.PromptParameters;
  return proto.gooseai.PromptParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.PromptParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.PromptParameters}
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.PromptParameters.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setInit(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setWeight(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWeight(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.prototype.serializeBinary = function () {
=======
proto.gooseai.PromptParameters.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.PromptParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.PromptParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(1, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(2, f);
  }
};

=======
proto.gooseai.PromptParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional bool init = 1;
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.prototype.getInit = function () {
  return /** @type {boolean} */ (
    jspb.Message.getBooleanFieldWithDefault(this, 1, false)
  );
};

=======
proto.gooseai.PromptParameters.prototype.getInit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


>>>>>>> 917d866 (test)
/**
 * @param {boolean} value
 * @return {!proto.gooseai.PromptParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.prototype.setInit = function (value) {
  return jspb.Message.setField(this, 1, value);
};

=======
proto.gooseai.PromptParameters.prototype.setInit = function(value) {
  return jspb.Message.setField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.PromptParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.prototype.clearInit = function () {
  return jspb.Message.setField(this, 1, undefined);
};

=======
proto.gooseai.PromptParameters.prototype.clearInit = function() {
  return jspb.Message.setField(this, 1, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.prototype.hasInit = function () {
  return jspb.Message.getField(this, 1) != null;
};

=======
proto.gooseai.PromptParameters.prototype.hasInit = function() {
  return jspb.Message.getField(this, 1) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional float weight = 2;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.prototype.getWeight = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0)
  );
};

=======
proto.gooseai.PromptParameters.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.PromptParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.prototype.setWeight = function (value) {
  return jspb.Message.setField(this, 2, value);
};

=======
proto.gooseai.PromptParameters.prototype.setWeight = function(value) {
  return jspb.Message.setField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.PromptParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.prototype.clearWeight = function () {
  return jspb.Message.setField(this, 2, undefined);
};

=======
proto.gooseai.PromptParameters.prototype.clearWeight = function() {
  return jspb.Message.setField(this, 2, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.PromptParameters.prototype.hasWeight = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.PromptParameters.prototype.hasWeight = function() {
  return jspb.Message.getField(this, 2) != null;
};



>>>>>>> 917d866 (test)
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
<<<<<<< HEAD
proto.gooseai.Prompt.oneofGroups_ = [[2, 3, 4]];
=======
proto.gooseai.Prompt.oneofGroups_ = [[2,3,4]];
>>>>>>> 917d866 (test)

/**
 * @enum {number}
 */
proto.gooseai.Prompt.PromptCase = {
  PROMPT_NOT_SET: 0,
  TEXT: 2,
  TOKENS: 3,
<<<<<<< HEAD
  ARTIFACT: 4,
=======
  ARTIFACT: 4
>>>>>>> 917d866 (test)
};

/**
 * @return {proto.gooseai.Prompt.PromptCase}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.getPromptCase = function () {
  return /** @type {proto.gooseai.Prompt.PromptCase} */ (
    jspb.Message.computeOneofCase(this, proto.gooseai.Prompt.oneofGroups_[0])
  );
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.Prompt.prototype.toObject = function (opt_includeInstance) {
    return proto.gooseai.Prompt.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.Prompt} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.Prompt.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        parameters:
          (f = msg.getParameters()) &&
          proto.gooseai.PromptParameters.toObject(includeInstance, f),
        text: jspb.Message.getFieldWithDefault(msg, 2, ""),
        tokens:
          (f = msg.getTokens()) &&
          proto.gooseai.Tokens.toObject(includeInstance, f),
        artifact:
          (f = msg.getArtifact()) &&
          proto.gooseai.Artifact.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.Prompt.prototype.getPromptCase = function() {
  return /** @type {proto.gooseai.Prompt.PromptCase} */(jspb.Message.computeOneofCase(this, proto.gooseai.Prompt.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.Prompt.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.Prompt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.Prompt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.Prompt.toObject = function(includeInstance, msg) {
  var f, obj = {
    parameters: (f = msg.getParameters()) && proto.gooseai.PromptParameters.toObject(includeInstance, f),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tokens: (f = msg.getTokens()) && proto.gooseai.Tokens.toObject(includeInstance, f),
    artifact: (f = msg.getArtifact()) && proto.gooseai.Artifact.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.Prompt}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Prompt();
  return proto.gooseai.Prompt.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.Prompt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Prompt;
  return proto.gooseai.Prompt.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.Prompt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.Prompt}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.deserializeBinaryFromReader = function (msg, reader) {
=======
proto.gooseai.Prompt.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = new proto.gooseai.PromptParameters();
        reader.readMessage(
          value,
          proto.gooseai.PromptParameters.deserializeBinaryFromReader
        );
        msg.setParameters(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setText(value);
        break;
      case 3:
        var value = new proto.gooseai.Tokens();
        reader.readMessage(
          value,
          proto.gooseai.Tokens.deserializeBinaryFromReader
        );
        msg.setTokens(value);
        break;
      case 4:
        var value = new proto.gooseai.Artifact();
        reader.readMessage(
          value,
          proto.gooseai.Artifact.deserializeBinaryFromReader
        );
        msg.setArtifact(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = new proto.gooseai.PromptParameters;
      reader.readMessage(value,proto.gooseai.PromptParameters.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = new proto.gooseai.Tokens;
      reader.readMessage(value,proto.gooseai.Tokens.deserializeBinaryFromReader);
      msg.setTokens(value);
      break;
    case 4:
      var value = new proto.gooseai.Artifact;
      reader.readMessage(value,proto.gooseai.Artifact.deserializeBinaryFromReader);
      msg.setArtifact(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.serializeBinary = function () {
=======
proto.gooseai.Prompt.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.Prompt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.Prompt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.Prompt.serializeBinaryToWriter = function (message, writer) {
=======
proto.gooseai.Prompt.serializeBinaryToWriter = function(message, writer) {
>>>>>>> 917d866 (test)
  var f = undefined;
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseai.PromptParameters.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
<<<<<<< HEAD
    writer.writeString(2, f);
  }
  f = message.getTokens();
  if (f != null) {
    writer.writeMessage(3, f, proto.gooseai.Tokens.serializeBinaryToWriter);
  }
  f = message.getArtifact();
  if (f != null) {
    writer.writeMessage(4, f, proto.gooseai.Artifact.serializeBinaryToWriter);
  }
};

=======
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTokens();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gooseai.Tokens.serializeBinaryToWriter
    );
  }
  f = message.getArtifact();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gooseai.Artifact.serializeBinaryToWriter
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional PromptParameters parameters = 1;
 * @return {?proto.gooseai.PromptParameters}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.getParameters = function () {
  return /** @type{?proto.gooseai.PromptParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.PromptParameters, 1)
  );
};

/**
 * @param {?proto.gooseai.PromptParameters|undefined} value
 * @return {!proto.gooseai.Prompt} returns this
 */
proto.gooseai.Prompt.prototype.setParameters = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

=======
proto.gooseai.Prompt.prototype.getParameters = function() {
  return /** @type{?proto.gooseai.PromptParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.PromptParameters, 1));
};


/**
 * @param {?proto.gooseai.PromptParameters|undefined} value
 * @return {!proto.gooseai.Prompt} returns this
*/
proto.gooseai.Prompt.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Prompt} returns this
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.clearParameters = function () {
  return this.setParameters(undefined);
};

=======
proto.gooseai.Prompt.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.hasParameters = function () {
  return jspb.Message.getField(this, 1) != null;
};

=======
proto.gooseai.Prompt.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 1) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional string text = 2;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.getText = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

=======
proto.gooseai.Prompt.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Prompt} returns this
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.setText = function (value) {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.gooseai.Prompt.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Prompt.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.gooseai.Prompt.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.Prompt} returns this
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.clearText = function () {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.gooseai.Prompt.oneofGroups_[0],
    undefined
  );
};

=======
proto.gooseai.Prompt.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 2, proto.gooseai.Prompt.oneofGroups_[0], undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.hasText = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.Prompt.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional Tokens tokens = 3;
 * @return {?proto.gooseai.Tokens}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.getTokens = function () {
  return /** @type{?proto.gooseai.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Tokens, 3)
  );
};

/**
 * @param {?proto.gooseai.Tokens|undefined} value
 * @return {!proto.gooseai.Prompt} returns this
 */
proto.gooseai.Prompt.prototype.setTokens = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.gooseai.Prompt.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Prompt.prototype.getTokens = function() {
  return /** @type{?proto.gooseai.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Tokens, 3));
};


/**
 * @param {?proto.gooseai.Tokens|undefined} value
 * @return {!proto.gooseai.Prompt} returns this
*/
proto.gooseai.Prompt.prototype.setTokens = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.gooseai.Prompt.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Prompt} returns this
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.clearTokens = function () {
  return this.setTokens(undefined);
};

=======
proto.gooseai.Prompt.prototype.clearTokens = function() {
  return this.setTokens(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.hasTokens = function () {
  return jspb.Message.getField(this, 3) != null;
};

=======
proto.gooseai.Prompt.prototype.hasTokens = function() {
  return jspb.Message.getField(this, 3) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional Artifact artifact = 4;
 * @return {?proto.gooseai.Artifact}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.getArtifact = function () {
  return /** @type{?proto.gooseai.Artifact} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Artifact, 4)
  );
};

/**
 * @param {?proto.gooseai.Artifact|undefined} value
 * @return {!proto.gooseai.Prompt} returns this
 */
proto.gooseai.Prompt.prototype.setArtifact = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.gooseai.Prompt.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Prompt.prototype.getArtifact = function() {
  return /** @type{?proto.gooseai.Artifact} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Artifact, 4));
};


/**
 * @param {?proto.gooseai.Artifact|undefined} value
 * @return {!proto.gooseai.Prompt} returns this
*/
proto.gooseai.Prompt.prototype.setArtifact = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.gooseai.Prompt.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Prompt} returns this
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.clearArtifact = function () {
  return this.setArtifact(undefined);
};

=======
proto.gooseai.Prompt.prototype.clearArtifact = function() {
  return this.setArtifact(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Prompt.prototype.hasArtifact = function () {
  return jspb.Message.getField(this, 4) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.SamplerParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.SamplerParameters.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.SamplerParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.SamplerParameters.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        eta: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
        samplingSteps: jspb.Message.getFieldWithDefault(msg, 2, 0),
        latentChannels: jspb.Message.getFieldWithDefault(msg, 3, 0),
        downsamplingFactor: jspb.Message.getFieldWithDefault(msg, 4, 0),
        cfgScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
        initNoiseScale: jspb.Message.getFloatingPointFieldWithDefault(
          msg,
          6,
          0.0
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.Prompt.prototype.hasArtifact = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.SamplerParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.SamplerParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.SamplerParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.SamplerParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    eta: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    samplingSteps: jspb.Message.getFieldWithDefault(msg, 2, 0),
    latentChannels: jspb.Message.getFieldWithDefault(msg, 3, 0),
    downsamplingFactor: jspb.Message.getFieldWithDefault(msg, 4, 0),
    cfgScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    initNoiseScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.SamplerParameters}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.SamplerParameters();
  return proto.gooseai.SamplerParameters.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.SamplerParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.SamplerParameters;
  return proto.gooseai.SamplerParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.SamplerParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.SamplerParameters}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.SamplerParameters.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setEta(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSamplingSteps(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setLatentChannels(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setDownsamplingFactor(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setCfgScale(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setInitNoiseScale(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEta(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSamplingSteps(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLatentChannels(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDownsamplingFactor(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCfgScale(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setInitNoiseScale(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.serializeBinary = function () {
=======
proto.gooseai.SamplerParameters.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.SamplerParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.SamplerParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(1, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(2, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(3, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(4, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(5, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeFloat(6, f);
  }
};

=======
proto.gooseai.SamplerParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeFloat(
      6,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional float eta = 1;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.getEta = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0)
  );
};

=======
proto.gooseai.SamplerParameters.prototype.getEta = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.setEta = function (value) {
  return jspb.Message.setField(this, 1, value);
};

=======
proto.gooseai.SamplerParameters.prototype.setEta = function(value) {
  return jspb.Message.setField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.clearEta = function () {
  return jspb.Message.setField(this, 1, undefined);
};

=======
proto.gooseai.SamplerParameters.prototype.clearEta = function() {
  return jspb.Message.setField(this, 1, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.hasEta = function () {
  return jspb.Message.getField(this, 1) != null;
};

=======
proto.gooseai.SamplerParameters.prototype.hasEta = function() {
  return jspb.Message.getField(this, 1) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 sampling_steps = 2;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.getSamplingSteps = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

=======
proto.gooseai.SamplerParameters.prototype.getSamplingSteps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.setSamplingSteps = function (value) {
  return jspb.Message.setField(this, 2, value);
};

=======
proto.gooseai.SamplerParameters.prototype.setSamplingSteps = function(value) {
  return jspb.Message.setField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.clearSamplingSteps = function () {
  return jspb.Message.setField(this, 2, undefined);
};

=======
proto.gooseai.SamplerParameters.prototype.clearSamplingSteps = function() {
  return jspb.Message.setField(this, 2, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.hasSamplingSteps = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.SamplerParameters.prototype.hasSamplingSteps = function() {
  return jspb.Message.getField(this, 2) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 latent_channels = 3;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.getLatentChannels = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

=======
proto.gooseai.SamplerParameters.prototype.getLatentChannels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.setLatentChannels = function (value) {
  return jspb.Message.setField(this, 3, value);
};

=======
proto.gooseai.SamplerParameters.prototype.setLatentChannels = function(value) {
  return jspb.Message.setField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.clearLatentChannels = function () {
  return jspb.Message.setField(this, 3, undefined);
};

=======
proto.gooseai.SamplerParameters.prototype.clearLatentChannels = function() {
  return jspb.Message.setField(this, 3, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.hasLatentChannels = function () {
  return jspb.Message.getField(this, 3) != null;
};

=======
proto.gooseai.SamplerParameters.prototype.hasLatentChannels = function() {
  return jspb.Message.getField(this, 3) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 downsampling_factor = 4;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.getDownsamplingFactor = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

=======
proto.gooseai.SamplerParameters.prototype.getDownsamplingFactor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.setDownsamplingFactor = function (
  value
) {
  return jspb.Message.setField(this, 4, value);
};

=======
proto.gooseai.SamplerParameters.prototype.setDownsamplingFactor = function(value) {
  return jspb.Message.setField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.clearDownsamplingFactor =
  function () {
    return jspb.Message.setField(this, 4, undefined);
  };
=======
proto.gooseai.SamplerParameters.prototype.clearDownsamplingFactor = function() {
  return jspb.Message.setField(this, 4, undefined);
};

>>>>>>> 917d866 (test)

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.hasDownsamplingFactor = function () {
  return jspb.Message.getField(this, 4) != null;
};

=======
proto.gooseai.SamplerParameters.prototype.hasDownsamplingFactor = function() {
  return jspb.Message.getField(this, 4) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional float cfg_scale = 5;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.getCfgScale = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0)
  );
};

=======
proto.gooseai.SamplerParameters.prototype.getCfgScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.setCfgScale = function (value) {
  return jspb.Message.setField(this, 5, value);
};

=======
proto.gooseai.SamplerParameters.prototype.setCfgScale = function(value) {
  return jspb.Message.setField(this, 5, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.clearCfgScale = function () {
  return jspb.Message.setField(this, 5, undefined);
};

=======
proto.gooseai.SamplerParameters.prototype.clearCfgScale = function() {
  return jspb.Message.setField(this, 5, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.hasCfgScale = function () {
  return jspb.Message.getField(this, 5) != null;
};

=======
proto.gooseai.SamplerParameters.prototype.hasCfgScale = function() {
  return jspb.Message.getField(this, 5) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional float init_noise_scale = 6;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.getInitNoiseScale = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0)
  );
};

=======
proto.gooseai.SamplerParameters.prototype.getInitNoiseScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.setInitNoiseScale = function (value) {
  return jspb.Message.setField(this, 6, value);
};

=======
proto.gooseai.SamplerParameters.prototype.setInitNoiseScale = function(value) {
  return jspb.Message.setField(this, 6, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.SamplerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.clearInitNoiseScale = function () {
  return jspb.Message.setField(this, 6, undefined);
};

=======
proto.gooseai.SamplerParameters.prototype.clearInitNoiseScale = function() {
  return jspb.Message.setField(this, 6, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.SamplerParameters.prototype.hasInitNoiseScale = function () {
  return jspb.Message.getField(this, 6) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.ConditionerParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.ConditionerParameters.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.ConditionerParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.ConditionerParameters.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        vectorAdjustPrior: jspb.Message.getFieldWithDefault(msg, 1, ""),
        conditioner:
          (f = msg.getConditioner()) &&
          proto.gooseai.Model.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.SamplerParameters.prototype.hasInitNoiseScale = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.ConditionerParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.ConditionerParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.ConditionerParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.ConditionerParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    vectorAdjustPrior: jspb.Message.getFieldWithDefault(msg, 1, ""),
    conditioner: (f = msg.getConditioner()) && proto.gooseai.Model.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.ConditionerParameters}
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ConditionerParameters();
  return proto.gooseai.ConditionerParameters.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.ConditionerParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ConditionerParameters;
  return proto.gooseai.ConditionerParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.ConditionerParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.ConditionerParameters}
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.ConditionerParameters.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setVectorAdjustPrior(value);
        break;
      case 2:
        var value = new proto.gooseai.Model();
        reader.readMessage(
          value,
          proto.gooseai.Model.deserializeBinaryFromReader
        );
        msg.setConditioner(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVectorAdjustPrior(value);
      break;
    case 2:
      var value = new proto.gooseai.Model;
      reader.readMessage(value,proto.gooseai.Model.deserializeBinaryFromReader);
      msg.setConditioner(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.prototype.serializeBinary = function () {
=======
proto.gooseai.ConditionerParameters.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.ConditionerParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.ConditionerParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(1, f);
  }
  f = message.getConditioner();
  if (f != null) {
    writer.writeMessage(2, f, proto.gooseai.Model.serializeBinaryToWriter);
  }
};

=======
proto.gooseai.ConditionerParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConditioner();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gooseai.Model.serializeBinaryToWriter
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional string vector_adjust_prior = 1;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.prototype.getVectorAdjustPrior =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, "")
    );
  };
=======
proto.gooseai.ConditionerParameters.prototype.getVectorAdjustPrior = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

>>>>>>> 917d866 (test)

/**
 * @param {string} value
 * @return {!proto.gooseai.ConditionerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.prototype.setVectorAdjustPrior = function (
  value
) {
  return jspb.Message.setField(this, 1, value);
};

=======
proto.gooseai.ConditionerParameters.prototype.setVectorAdjustPrior = function(value) {
  return jspb.Message.setField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ConditionerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.prototype.clearVectorAdjustPrior =
  function () {
    return jspb.Message.setField(this, 1, undefined);
  };
=======
proto.gooseai.ConditionerParameters.prototype.clearVectorAdjustPrior = function() {
  return jspb.Message.setField(this, 1, undefined);
};

>>>>>>> 917d866 (test)

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.prototype.hasVectorAdjustPrior =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };
=======
proto.gooseai.ConditionerParameters.prototype.hasVectorAdjustPrior = function() {
  return jspb.Message.getField(this, 1) != null;
};

>>>>>>> 917d866 (test)

/**
 * optional Model conditioner = 2;
 * @return {?proto.gooseai.Model}
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.prototype.getConditioner = function () {
  return /** @type{?proto.gooseai.Model} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Model, 2)
  );
};

/**
 * @param {?proto.gooseai.Model|undefined} value
 * @return {!proto.gooseai.ConditionerParameters} returns this
 */
proto.gooseai.ConditionerParameters.prototype.setConditioner = function (
  value
) {
  return jspb.Message.setWrapperField(this, 2, value);
};

=======
proto.gooseai.ConditionerParameters.prototype.getConditioner = function() {
  return /** @type{?proto.gooseai.Model} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Model, 2));
};


/**
 * @param {?proto.gooseai.Model|undefined} value
 * @return {!proto.gooseai.ConditionerParameters} returns this
*/
proto.gooseai.ConditionerParameters.prototype.setConditioner = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.ConditionerParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.prototype.clearConditioner = function () {
  return this.setConditioner(undefined);
};

=======
proto.gooseai.ConditionerParameters.prototype.clearConditioner = function() {
  return this.setConditioner(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ConditionerParameters.prototype.hasConditioner = function () {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.ScheduleParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.ScheduleParameters.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.ScheduleParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.ScheduleParameters.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        start: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
        end: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
        value: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.ConditionerParameters.prototype.hasConditioner = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.ScheduleParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.ScheduleParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.ScheduleParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.ScheduleParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    end: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.ScheduleParameters}
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ScheduleParameters();
  return proto.gooseai.ScheduleParameters.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.ScheduleParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ScheduleParameters;
  return proto.gooseai.ScheduleParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.ScheduleParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.ScheduleParameters}
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.ScheduleParameters.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setStart(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setEnd(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setValue(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.serializeBinary = function () {
=======
proto.gooseai.ScheduleParameters.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.ScheduleParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.ScheduleParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(1, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(2, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(3, f);
  }
};

=======
proto.gooseai.ScheduleParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional float start = 1;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.getStart = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0)
  );
};

=======
proto.gooseai.ScheduleParameters.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.ScheduleParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.setStart = function (value) {
  return jspb.Message.setField(this, 1, value);
};

=======
proto.gooseai.ScheduleParameters.prototype.setStart = function(value) {
  return jspb.Message.setField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ScheduleParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.clearStart = function () {
  return jspb.Message.setField(this, 1, undefined);
};

=======
proto.gooseai.ScheduleParameters.prototype.clearStart = function() {
  return jspb.Message.setField(this, 1, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.hasStart = function () {
  return jspb.Message.getField(this, 1) != null;
};

=======
proto.gooseai.ScheduleParameters.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional float end = 2;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.getEnd = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0)
  );
};

=======
proto.gooseai.ScheduleParameters.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.ScheduleParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.setEnd = function (value) {
  return jspb.Message.setField(this, 2, value);
};

=======
proto.gooseai.ScheduleParameters.prototype.setEnd = function(value) {
  return jspb.Message.setField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ScheduleParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.clearEnd = function () {
  return jspb.Message.setField(this, 2, undefined);
};

=======
proto.gooseai.ScheduleParameters.prototype.clearEnd = function() {
  return jspb.Message.setField(this, 2, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.hasEnd = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.ScheduleParameters.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional float value = 3;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.getValue = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0)
  );
};

=======
proto.gooseai.ScheduleParameters.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.ScheduleParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.setValue = function (value) {
  return jspb.Message.setField(this, 3, value);
};

=======
proto.gooseai.ScheduleParameters.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ScheduleParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.clearValue = function () {
  return jspb.Message.setField(this, 3, undefined);
};

=======
proto.gooseai.ScheduleParameters.prototype.clearValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ScheduleParameters.prototype.hasValue = function () {
  return jspb.Message.getField(this, 3) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.StepParameter.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.StepParameter.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.StepParameter} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.StepParameter.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        scaledStep: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
        sampler:
          (f = msg.getSampler()) &&
          proto.gooseai.SamplerParameters.toObject(includeInstance, f),
        schedule:
          (f = msg.getSchedule()) &&
          proto.gooseai.ScheduleParameters.toObject(includeInstance, f),
        guidance:
          (f = msg.getGuidance()) &&
          proto.gooseai.GuidanceParameters.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.ScheduleParameters.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.StepParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.StepParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.StepParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.StepParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    scaledStep: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    sampler: (f = msg.getSampler()) && proto.gooseai.SamplerParameters.toObject(includeInstance, f),
    schedule: (f = msg.getSchedule()) && proto.gooseai.ScheduleParameters.toObject(includeInstance, f),
    guidance: (f = msg.getGuidance()) && proto.gooseai.GuidanceParameters.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.StepParameter}
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.StepParameter();
  return proto.gooseai.StepParameter.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.StepParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.StepParameter;
  return proto.gooseai.StepParameter.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.StepParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.StepParameter}
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.StepParameter.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setScaledStep(value);
        break;
      case 2:
        var value = new proto.gooseai.SamplerParameters();
        reader.readMessage(
          value,
          proto.gooseai.SamplerParameters.deserializeBinaryFromReader
        );
        msg.setSampler(value);
        break;
      case 3:
        var value = new proto.gooseai.ScheduleParameters();
        reader.readMessage(
          value,
          proto.gooseai.ScheduleParameters.deserializeBinaryFromReader
        );
        msg.setSchedule(value);
        break;
      case 4:
        var value = new proto.gooseai.GuidanceParameters();
        reader.readMessage(
          value,
          proto.gooseai.GuidanceParameters.deserializeBinaryFromReader
        );
        msg.setGuidance(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScaledStep(value);
      break;
    case 2:
      var value = new proto.gooseai.SamplerParameters;
      reader.readMessage(value,proto.gooseai.SamplerParameters.deserializeBinaryFromReader);
      msg.setSampler(value);
      break;
    case 3:
      var value = new proto.gooseai.ScheduleParameters;
      reader.readMessage(value,proto.gooseai.ScheduleParameters.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    case 4:
      var value = new proto.gooseai.GuidanceParameters;
      reader.readMessage(value,proto.gooseai.GuidanceParameters.deserializeBinaryFromReader);
      msg.setGuidance(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.serializeBinary = function () {
=======
proto.gooseai.StepParameter.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.StepParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.StepParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getScaledStep();
  if (f !== 0.0) {
    writer.writeFloat(1, f);
=======
proto.gooseai.StepParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScaledStep();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
>>>>>>> 917d866 (test)
  }
  f = message.getSampler();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gooseai.SamplerParameters.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gooseai.ScheduleParameters.serializeBinaryToWriter
    );
  }
  f = message.getGuidance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gooseai.GuidanceParameters.serializeBinaryToWriter
    );
  }
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * optional float scaled_step = 1;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.getScaledStep = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0)
  );
};

=======
proto.gooseai.StepParameter.prototype.getScaledStep = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.StepParameter} returns this
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.setScaledStep = function (value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};

=======
proto.gooseai.StepParameter.prototype.setScaledStep = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * optional SamplerParameters sampler = 2;
 * @return {?proto.gooseai.SamplerParameters}
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.getSampler = function () {
  return /** @type{?proto.gooseai.SamplerParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.SamplerParameters, 2)
  );
};

/**
 * @param {?proto.gooseai.SamplerParameters|undefined} value
 * @return {!proto.gooseai.StepParameter} returns this
 */
proto.gooseai.StepParameter.prototype.setSampler = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

=======
proto.gooseai.StepParameter.prototype.getSampler = function() {
  return /** @type{?proto.gooseai.SamplerParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.SamplerParameters, 2));
};


/**
 * @param {?proto.gooseai.SamplerParameters|undefined} value
 * @return {!proto.gooseai.StepParameter} returns this
*/
proto.gooseai.StepParameter.prototype.setSampler = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.StepParameter} returns this
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.clearSampler = function () {
  return this.setSampler(undefined);
};

=======
proto.gooseai.StepParameter.prototype.clearSampler = function() {
  return this.setSampler(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.hasSampler = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.StepParameter.prototype.hasSampler = function() {
  return jspb.Message.getField(this, 2) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional ScheduleParameters schedule = 3;
 * @return {?proto.gooseai.ScheduleParameters}
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.getSchedule = function () {
  return /** @type{?proto.gooseai.ScheduleParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.ScheduleParameters, 3)
  );
};

/**
 * @param {?proto.gooseai.ScheduleParameters|undefined} value
 * @return {!proto.gooseai.StepParameter} returns this
 */
proto.gooseai.StepParameter.prototype.setSchedule = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

=======
proto.gooseai.StepParameter.prototype.getSchedule = function() {
  return /** @type{?proto.gooseai.ScheduleParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.ScheduleParameters, 3));
};


/**
 * @param {?proto.gooseai.ScheduleParameters|undefined} value
 * @return {!proto.gooseai.StepParameter} returns this
*/
proto.gooseai.StepParameter.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.StepParameter} returns this
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.clearSchedule = function () {
  return this.setSchedule(undefined);
};

=======
proto.gooseai.StepParameter.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.hasSchedule = function () {
  return jspb.Message.getField(this, 3) != null;
};

=======
proto.gooseai.StepParameter.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 3) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional GuidanceParameters guidance = 4;
 * @return {?proto.gooseai.GuidanceParameters}
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.getGuidance = function () {
  return /** @type{?proto.gooseai.GuidanceParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.GuidanceParameters, 4)
  );
};

/**
 * @param {?proto.gooseai.GuidanceParameters|undefined} value
 * @return {!proto.gooseai.StepParameter} returns this
 */
proto.gooseai.StepParameter.prototype.setGuidance = function (value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

=======
proto.gooseai.StepParameter.prototype.getGuidance = function() {
  return /** @type{?proto.gooseai.GuidanceParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.GuidanceParameters, 4));
};


/**
 * @param {?proto.gooseai.GuidanceParameters|undefined} value
 * @return {!proto.gooseai.StepParameter} returns this
*/
proto.gooseai.StepParameter.prototype.setGuidance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.StepParameter} returns this
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.clearGuidance = function () {
  return this.setGuidance(undefined);
};

=======
proto.gooseai.StepParameter.prototype.clearGuidance = function() {
  return this.setGuidance(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.StepParameter.prototype.hasGuidance = function () {
  return jspb.Message.getField(this, 4) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.Model.prototype.toObject = function (opt_includeInstance) {
    return proto.gooseai.Model.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.Model} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.Model.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        architecture: jspb.Message.getFieldWithDefault(msg, 1, 0),
        publisher: jspb.Message.getFieldWithDefault(msg, 2, ""),
        dataset: jspb.Message.getFieldWithDefault(msg, 3, ""),
        version: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
        semanticVersion: jspb.Message.getFieldWithDefault(msg, 5, ""),
        alias: jspb.Message.getFieldWithDefault(msg, 6, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.StepParameter.prototype.hasGuidance = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.Model.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.Model.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.Model} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.Model.toObject = function(includeInstance, msg) {
  var f, obj = {
    architecture: jspb.Message.getFieldWithDefault(msg, 1, 0),
    publisher: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dataset: jspb.Message.getFieldWithDefault(msg, 3, ""),
    version: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    semanticVersion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    alias: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.Model}
 */
<<<<<<< HEAD
proto.gooseai.Model.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Model();
  return proto.gooseai.Model.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.Model.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Model;
  return proto.gooseai.Model.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.Model} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.Model}
 */
<<<<<<< HEAD
proto.gooseai.Model.deserializeBinaryFromReader = function (msg, reader) {
=======
proto.gooseai.Model.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {!proto.gooseai.ModelArchitecture} */ (
          reader.readEnum()
        );
        msg.setArchitecture(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setPublisher(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setDataset(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setVersion(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setSemanticVersion(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readString());
        msg.setAlias(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {!proto.gooseai.ModelArchitecture} */ (reader.readEnum());
      msg.setArchitecture(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublisher(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSemanticVersion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.serializeBinary = function () {
=======
proto.gooseai.Model.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.Model.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.Model} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.Model.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getArchitecture();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPublisher();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getDataset();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getVersion();
  if (f !== 0.0) {
    writer.writeFloat(4, f);
  }
  f = message.getSemanticVersion();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
};

=======
proto.gooseai.Model.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArchitecture();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPublisher();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDataset();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getSemanticVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional ModelArchitecture architecture = 1;
 * @return {!proto.gooseai.ModelArchitecture}
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.getArchitecture = function () {
  return /** @type {!proto.gooseai.ModelArchitecture} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

=======
proto.gooseai.Model.prototype.getArchitecture = function() {
  return /** @type {!proto.gooseai.ModelArchitecture} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.ModelArchitecture} value
 * @return {!proto.gooseai.Model} returns this
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.setArchitecture = function (value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

=======
proto.gooseai.Model.prototype.setArchitecture = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * optional string publisher = 2;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.getPublisher = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

=======
proto.gooseai.Model.prototype.getPublisher = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Model} returns this
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.setPublisher = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

=======
proto.gooseai.Model.prototype.setPublisher = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * optional string dataset = 3;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.getDataset = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

=======
proto.gooseai.Model.prototype.getDataset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Model} returns this
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.setDataset = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

=======
proto.gooseai.Model.prototype.setDataset = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * optional float version = 4;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.getVersion = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0)
  );
};

=======
proto.gooseai.Model.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.Model} returns this
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.setVersion = function (value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};

=======
proto.gooseai.Model.prototype.setVersion = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * optional string semantic_version = 5;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.getSemanticVersion = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

=======
proto.gooseai.Model.prototype.getSemanticVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Model} returns this
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.setSemanticVersion = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

=======
proto.gooseai.Model.prototype.setSemanticVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


>>>>>>> 917d866 (test)
/**
 * optional string alias = 6;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.getAlias = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};

=======
proto.gooseai.Model.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Model} returns this
 */
<<<<<<< HEAD
proto.gooseai.Model.prototype.setAlias = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

=======
proto.gooseai.Model.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseai.CutoutParameters.repeatedFields_ = [1];

<<<<<<< HEAD
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.CutoutParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.CutoutParameters.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.CutoutParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.CutoutParameters.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cutoutsList: jspb.Message.toObjectList(
          msg.getCutoutsList(),
          proto.gooseai.CutoutParameters.toObject,
          includeInstance
        ),
        count: jspb.Message.getFieldWithDefault(msg, 2, 0),
        gray: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
        blur: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
        sizePower: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.CutoutParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.CutoutParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.CutoutParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.CutoutParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    cutoutsList: jspb.Message.toObjectList(msg.getCutoutsList(),
    proto.gooseai.CutoutParameters.toObject, includeInstance),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gray: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    blur: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    sizePower: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.CutoutParameters}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.CutoutParameters();
  return proto.gooseai.CutoutParameters.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.CutoutParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.CutoutParameters;
  return proto.gooseai.CutoutParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.CutoutParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.CutoutParameters}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.CutoutParameters.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = new proto.gooseai.CutoutParameters();
        reader.readMessage(
          value,
          proto.gooseai.CutoutParameters.deserializeBinaryFromReader
        );
        msg.addCutouts(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setCount(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setGray(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setBlur(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setSizePower(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = new proto.gooseai.CutoutParameters;
      reader.readMessage(value,proto.gooseai.CutoutParameters.deserializeBinaryFromReader);
      msg.addCutouts(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGray(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBlur(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSizePower(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.serializeBinary = function () {
=======
proto.gooseai.CutoutParameters.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.CutoutParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.CutoutParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
=======
proto.gooseai.CutoutParameters.serializeBinaryToWriter = function(message, writer) {
>>>>>>> 917d866 (test)
  var f = undefined;
  f = message.getCutoutsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gooseai.CutoutParameters.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
<<<<<<< HEAD
    writer.writeUint32(2, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(3, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(4, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(5, f);
  }
};

=======
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(
      5,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * repeated CutoutParameters cutouts = 1;
 * @return {!Array<!proto.gooseai.CutoutParameters>}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.getCutoutsList = function () {
  return /** @type{!Array<!proto.gooseai.CutoutParameters>} */ (
    jspb.Message.getRepeatedWrapperField(
      this,
      proto.gooseai.CutoutParameters,
      1
    )
  );
};

/**
 * @param {!Array<!proto.gooseai.CutoutParameters>} value
 * @return {!proto.gooseai.CutoutParameters} returns this
 */
proto.gooseai.CutoutParameters.prototype.setCutoutsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

=======
proto.gooseai.CutoutParameters.prototype.getCutoutsList = function() {
  return /** @type{!Array<!proto.gooseai.CutoutParameters>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.CutoutParameters, 1));
};


/**
 * @param {!Array<!proto.gooseai.CutoutParameters>} value
 * @return {!proto.gooseai.CutoutParameters} returns this
*/
proto.gooseai.CutoutParameters.prototype.setCutoutsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.CutoutParameters=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.CutoutParameters}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.addCutouts = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.gooseai.CutoutParameters,
    opt_index
  );
};

=======
proto.gooseai.CutoutParameters.prototype.addCutouts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.CutoutParameters, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.CutoutParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.clearCutoutsList = function () {
  return this.setCutoutsList([]);
};

=======
proto.gooseai.CutoutParameters.prototype.clearCutoutsList = function() {
  return this.setCutoutsList([]);
};


>>>>>>> 917d866 (test)
/**
 * optional uint32 count = 2;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.getCount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

=======
proto.gooseai.CutoutParameters.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.CutoutParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.setCount = function (value) {
  return jspb.Message.setField(this, 2, value);
};

=======
proto.gooseai.CutoutParameters.prototype.setCount = function(value) {
  return jspb.Message.setField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.CutoutParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.clearCount = function () {
  return jspb.Message.setField(this, 2, undefined);
};

=======
proto.gooseai.CutoutParameters.prototype.clearCount = function() {
  return jspb.Message.setField(this, 2, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.hasCount = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.CutoutParameters.prototype.hasCount = function() {
  return jspb.Message.getField(this, 2) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional float gray = 3;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.getGray = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0)
  );
};

=======
proto.gooseai.CutoutParameters.prototype.getGray = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.CutoutParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.setGray = function (value) {
  return jspb.Message.setField(this, 3, value);
};

=======
proto.gooseai.CutoutParameters.prototype.setGray = function(value) {
  return jspb.Message.setField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.CutoutParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.clearGray = function () {
  return jspb.Message.setField(this, 3, undefined);
};

=======
proto.gooseai.CutoutParameters.prototype.clearGray = function() {
  return jspb.Message.setField(this, 3, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.hasGray = function () {
  return jspb.Message.getField(this, 3) != null;
};

=======
proto.gooseai.CutoutParameters.prototype.hasGray = function() {
  return jspb.Message.getField(this, 3) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional float blur = 4;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.getBlur = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0)
  );
};

=======
proto.gooseai.CutoutParameters.prototype.getBlur = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.CutoutParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.setBlur = function (value) {
  return jspb.Message.setField(this, 4, value);
};

=======
proto.gooseai.CutoutParameters.prototype.setBlur = function(value) {
  return jspb.Message.setField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.CutoutParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.clearBlur = function () {
  return jspb.Message.setField(this, 4, undefined);
};

=======
proto.gooseai.CutoutParameters.prototype.clearBlur = function() {
  return jspb.Message.setField(this, 4, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.hasBlur = function () {
  return jspb.Message.getField(this, 4) != null;
};

=======
proto.gooseai.CutoutParameters.prototype.hasBlur = function() {
  return jspb.Message.getField(this, 4) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional float size_power = 5;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.getSizePower = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0)
  );
};

=======
proto.gooseai.CutoutParameters.prototype.getSizePower = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.CutoutParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.setSizePower = function (value) {
  return jspb.Message.setField(this, 5, value);
};

=======
proto.gooseai.CutoutParameters.prototype.setSizePower = function(value) {
  return jspb.Message.setField(this, 5, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.CutoutParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.clearSizePower = function () {
  return jspb.Message.setField(this, 5, undefined);
};

=======
proto.gooseai.CutoutParameters.prototype.clearSizePower = function() {
  return jspb.Message.setField(this, 5, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.CutoutParameters.prototype.hasSizePower = function () {
  return jspb.Message.getField(this, 5) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.GuidanceScheduleParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.GuidanceScheduleParameters.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.GuidanceScheduleParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.GuidanceScheduleParameters.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        duration: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
        value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.CutoutParameters.prototype.hasSizePower = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.GuidanceScheduleParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.GuidanceScheduleParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.GuidanceScheduleParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.GuidanceScheduleParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.GuidanceScheduleParameters}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceScheduleParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.GuidanceScheduleParameters();
  return proto.gooseai.GuidanceScheduleParameters.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.GuidanceScheduleParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.GuidanceScheduleParameters;
  return proto.gooseai.GuidanceScheduleParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.GuidanceScheduleParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.GuidanceScheduleParameters}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceScheduleParameters.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {number} */ (reader.readFloat());
          msg.setDuration(value);
          break;
        case 2:
          var value = /** @type {number} */ (reader.readFloat());
          msg.setValue(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };
=======
proto.gooseai.GuidanceScheduleParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDuration(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};

>>>>>>> 917d866 (test)

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceScheduleParameters.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.gooseai.GuidanceScheduleParameters.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };
=======
proto.gooseai.GuidanceScheduleParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseai.GuidanceScheduleParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

>>>>>>> 917d866 (test)

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.GuidanceScheduleParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.GuidanceScheduleParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getDuration();
  if (f !== 0.0) {
    writer.writeFloat(1, f);
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(2, f);
  }
};

=======
proto.gooseai.GuidanceScheduleParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuration();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional float duration = 1;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceScheduleParameters.prototype.getDuration = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0)
  );
};

=======
proto.gooseai.GuidanceScheduleParameters.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.GuidanceScheduleParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.GuidanceScheduleParameters.prototype.setDuration = function (
  value
) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};

=======
proto.gooseai.GuidanceScheduleParameters.prototype.setDuration = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * optional float value = 2;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceScheduleParameters.prototype.getValue = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0)
  );
};

=======
proto.gooseai.GuidanceScheduleParameters.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.GuidanceScheduleParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.GuidanceScheduleParameters.prototype.setValue = function (value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};

=======
proto.gooseai.GuidanceScheduleParameters.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.repeatedFields_ = [2, 4];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.GuidanceInstanceParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.GuidanceInstanceParameters.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.GuidanceInstanceParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.GuidanceInstanceParameters.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        modelsList: jspb.Message.toObjectList(
          msg.getModelsList(),
          proto.gooseai.Model.toObject,
          includeInstance
        ),
        guidanceStrength: jspb.Message.getFloatingPointFieldWithDefault(
          msg,
          3,
          0.0
        ),
        scheduleList: jspb.Message.toObjectList(
          msg.getScheduleList(),
          proto.gooseai.GuidanceScheduleParameters.toObject,
          includeInstance
        ),
        cutouts:
          (f = msg.getCutouts()) &&
          proto.gooseai.CutoutParameters.toObject(includeInstance, f),
        prompt:
          (f = msg.getPrompt()) &&
          proto.gooseai.Prompt.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.GuidanceInstanceParameters.repeatedFields_ = [2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.GuidanceInstanceParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.GuidanceInstanceParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.GuidanceInstanceParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.GuidanceInstanceParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.gooseai.Model.toObject, includeInstance),
    guidanceStrength: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    scheduleList: jspb.Message.toObjectList(msg.getScheduleList(),
    proto.gooseai.GuidanceScheduleParameters.toObject, includeInstance),
    cutouts: (f = msg.getCutouts()) && proto.gooseai.CutoutParameters.toObject(includeInstance, f),
    prompt: (f = msg.getPrompt()) && proto.gooseai.Prompt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.GuidanceInstanceParameters}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.GuidanceInstanceParameters();
  return proto.gooseai.GuidanceInstanceParameters.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.GuidanceInstanceParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.GuidanceInstanceParameters;
  return proto.gooseai.GuidanceInstanceParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.GuidanceInstanceParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.GuidanceInstanceParameters}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 2:
          var value = new proto.gooseai.Model();
          reader.readMessage(
            value,
            proto.gooseai.Model.deserializeBinaryFromReader
          );
          msg.addModels(value);
          break;
        case 3:
          var value = /** @type {number} */ (reader.readFloat());
          msg.setGuidanceStrength(value);
          break;
        case 4:
          var value = new proto.gooseai.GuidanceScheduleParameters();
          reader.readMessage(
            value,
            proto.gooseai.GuidanceScheduleParameters.deserializeBinaryFromReader
          );
          msg.addSchedule(value);
          break;
        case 5:
          var value = new proto.gooseai.CutoutParameters();
          reader.readMessage(
            value,
            proto.gooseai.CutoutParameters.deserializeBinaryFromReader
          );
          msg.setCutouts(value);
          break;
        case 6:
          var value = new proto.gooseai.Prompt();
          reader.readMessage(
            value,
            proto.gooseai.Prompt.deserializeBinaryFromReader
          );
          msg.setPrompt(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };
=======
proto.gooseai.GuidanceInstanceParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.gooseai.Model;
      reader.readMessage(value,proto.gooseai.Model.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGuidanceStrength(value);
      break;
    case 4:
      var value = new proto.gooseai.GuidanceScheduleParameters;
      reader.readMessage(value,proto.gooseai.GuidanceScheduleParameters.deserializeBinaryFromReader);
      msg.addSchedule(value);
      break;
    case 5:
      var value = new proto.gooseai.CutoutParameters;
      reader.readMessage(value,proto.gooseai.CutoutParameters.deserializeBinaryFromReader);
      msg.setCutouts(value);
      break;
    case 6:
      var value = new proto.gooseai.Prompt;
      reader.readMessage(value,proto.gooseai.Prompt.deserializeBinaryFromReader);
      msg.setPrompt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};

>>>>>>> 917d866 (test)

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.gooseai.GuidanceInstanceParameters.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };
=======
proto.gooseai.GuidanceInstanceParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseai.GuidanceInstanceParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

>>>>>>> 917d866 (test)

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.GuidanceInstanceParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
=======
proto.gooseai.GuidanceInstanceParameters.serializeBinaryToWriter = function(message, writer) {
>>>>>>> 917d866 (test)
  var f = undefined;
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gooseai.Model.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
<<<<<<< HEAD
    writer.writeFloat(3, f);
=======
    writer.writeFloat(
      3,
      f
    );
>>>>>>> 917d866 (test)
  }
  f = message.getScheduleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.gooseai.GuidanceScheduleParameters.serializeBinaryToWriter
    );
  }
  f = message.getCutouts();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.gooseai.CutoutParameters.serializeBinaryToWriter
    );
  }
  f = message.getPrompt();
  if (f != null) {
<<<<<<< HEAD
    writer.writeMessage(6, f, proto.gooseai.Prompt.serializeBinaryToWriter);
  }
};

=======
    writer.writeMessage(
      6,
      f,
      proto.gooseai.Prompt.serializeBinaryToWriter
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * repeated Model models = 2;
 * @return {!Array<!proto.gooseai.Model>}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.getModelsList = function () {
  return /** @type{!Array<!proto.gooseai.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Model, 2)
  );
};

/**
 * @param {!Array<!proto.gooseai.Model>} value
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
 */
proto.gooseai.GuidanceInstanceParameters.prototype.setModelsList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

=======
proto.gooseai.GuidanceInstanceParameters.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.gooseai.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Model, 2));
};


/**
 * @param {!Array<!proto.gooseai.Model>} value
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
*/
proto.gooseai.GuidanceInstanceParameters.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.Model}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.addModels = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.gooseai.Model,
    opt_index
  );
};

=======
proto.gooseai.GuidanceInstanceParameters.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseai.Model, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.clearModelsList =
  function () {
    return this.setModelsList([]);
  };
=======
proto.gooseai.GuidanceInstanceParameters.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};

>>>>>>> 917d866 (test)

/**
 * optional float guidance_strength = 3;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.getGuidanceStrength =
  function () {
    return /** @type {number} */ (
      jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0)
    );
  };
=======
proto.gooseai.GuidanceInstanceParameters.prototype.getGuidanceStrength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};

>>>>>>> 917d866 (test)

/**
 * @param {number} value
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.setGuidanceStrength =
  function (value) {
    return jspb.Message.setField(this, 3, value);
  };
=======
proto.gooseai.GuidanceInstanceParameters.prototype.setGuidanceStrength = function(value) {
  return jspb.Message.setField(this, 3, value);
};

>>>>>>> 917d866 (test)

/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.clearGuidanceStrength =
  function () {
    return jspb.Message.setField(this, 3, undefined);
  };
=======
proto.gooseai.GuidanceInstanceParameters.prototype.clearGuidanceStrength = function() {
  return jspb.Message.setField(this, 3, undefined);
};

>>>>>>> 917d866 (test)

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.hasGuidanceStrength =
  function () {
    return jspb.Message.getField(this, 3) != null;
  };
=======
proto.gooseai.GuidanceInstanceParameters.prototype.hasGuidanceStrength = function() {
  return jspb.Message.getField(this, 3) != null;
};

>>>>>>> 917d866 (test)

/**
 * repeated GuidanceScheduleParameters schedule = 4;
 * @return {!Array<!proto.gooseai.GuidanceScheduleParameters>}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.getScheduleList =
  function () {
    return /** @type{!Array<!proto.gooseai.GuidanceScheduleParameters>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        proto.gooseai.GuidanceScheduleParameters,
        4
      )
    );
  };
=======
proto.gooseai.GuidanceInstanceParameters.prototype.getScheduleList = function() {
  return /** @type{!Array<!proto.gooseai.GuidanceScheduleParameters>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.GuidanceScheduleParameters, 4));
};

>>>>>>> 917d866 (test)

/**
 * @param {!Array<!proto.gooseai.GuidanceScheduleParameters>} value
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
<<<<<<< HEAD
 */
proto.gooseai.GuidanceInstanceParameters.prototype.setScheduleList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};

=======
*/
proto.gooseai.GuidanceInstanceParameters.prototype.setScheduleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.GuidanceScheduleParameters=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.GuidanceScheduleParameters}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.addSchedule = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    4,
    opt_value,
    proto.gooseai.GuidanceScheduleParameters,
    opt_index
  );
};

=======
proto.gooseai.GuidanceInstanceParameters.prototype.addSchedule = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.gooseai.GuidanceScheduleParameters, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.clearScheduleList =
  function () {
    return this.setScheduleList([]);
  };
=======
proto.gooseai.GuidanceInstanceParameters.prototype.clearScheduleList = function() {
  return this.setScheduleList([]);
};

>>>>>>> 917d866 (test)

/**
 * optional CutoutParameters cutouts = 5;
 * @return {?proto.gooseai.CutoutParameters}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.getCutouts = function () {
  return /** @type{?proto.gooseai.CutoutParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.CutoutParameters, 5)
  );
};

/**
 * @param {?proto.gooseai.CutoutParameters|undefined} value
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
 */
proto.gooseai.GuidanceInstanceParameters.prototype.setCutouts = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

=======
proto.gooseai.GuidanceInstanceParameters.prototype.getCutouts = function() {
  return /** @type{?proto.gooseai.CutoutParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.CutoutParameters, 5));
};


/**
 * @param {?proto.gooseai.CutoutParameters|undefined} value
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
*/
proto.gooseai.GuidanceInstanceParameters.prototype.setCutouts = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.clearCutouts = function () {
  return this.setCutouts(undefined);
};

=======
proto.gooseai.GuidanceInstanceParameters.prototype.clearCutouts = function() {
  return this.setCutouts(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.hasCutouts = function () {
  return jspb.Message.getField(this, 5) != null;
};

=======
proto.gooseai.GuidanceInstanceParameters.prototype.hasCutouts = function() {
  return jspb.Message.getField(this, 5) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional Prompt prompt = 6;
 * @return {?proto.gooseai.Prompt}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.getPrompt = function () {
  return /** @type{?proto.gooseai.Prompt} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Prompt, 6)
  );
};

/**
 * @param {?proto.gooseai.Prompt|undefined} value
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
 */
proto.gooseai.GuidanceInstanceParameters.prototype.setPrompt = function (
  value
) {
  return jspb.Message.setWrapperField(this, 6, value);
};

=======
proto.gooseai.GuidanceInstanceParameters.prototype.getPrompt = function() {
  return /** @type{?proto.gooseai.Prompt} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Prompt, 6));
};


/**
 * @param {?proto.gooseai.Prompt|undefined} value
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
*/
proto.gooseai.GuidanceInstanceParameters.prototype.setPrompt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.GuidanceInstanceParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.clearPrompt = function () {
  return this.setPrompt(undefined);
};

=======
proto.gooseai.GuidanceInstanceParameters.prototype.clearPrompt = function() {
  return this.setPrompt(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceInstanceParameters.prototype.hasPrompt = function () {
  return jspb.Message.getField(this, 6) != null;
};

=======
proto.gooseai.GuidanceInstanceParameters.prototype.hasPrompt = function() {
  return jspb.Message.getField(this, 6) != null;
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseai.GuidanceParameters.repeatedFields_ = [2];

<<<<<<< HEAD
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.GuidanceParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.GuidanceParameters.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.GuidanceParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.GuidanceParameters.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        guidancePreset: jspb.Message.getFieldWithDefault(msg, 1, 0),
        instancesList: jspb.Message.toObjectList(
          msg.getInstancesList(),
          proto.gooseai.GuidanceInstanceParameters.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.GuidanceParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.GuidanceParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.GuidanceParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.GuidanceParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    guidancePreset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    instancesList: jspb.Message.toObjectList(msg.getInstancesList(),
    proto.gooseai.GuidanceInstanceParameters.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.GuidanceParameters}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.GuidanceParameters();
  return proto.gooseai.GuidanceParameters.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.GuidanceParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.GuidanceParameters;
  return proto.gooseai.GuidanceParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.GuidanceParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.GuidanceParameters}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceParameters.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.GuidanceParameters.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {!proto.gooseai.GuidancePreset} */ (
          reader.readEnum()
        );
        msg.setGuidancePreset(value);
        break;
      case 2:
        var value = new proto.gooseai.GuidanceInstanceParameters();
        reader.readMessage(
          value,
          proto.gooseai.GuidanceInstanceParameters.deserializeBinaryFromReader
        );
        msg.addInstances(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {!proto.gooseai.GuidancePreset} */ (reader.readEnum());
      msg.setGuidancePreset(value);
      break;
    case 2:
      var value = new proto.gooseai.GuidanceInstanceParameters;
      reader.readMessage(value,proto.gooseai.GuidanceInstanceParameters.deserializeBinaryFromReader);
      msg.addInstances(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceParameters.prototype.serializeBinary = function () {
=======
proto.gooseai.GuidanceParameters.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.GuidanceParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.GuidanceParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.GuidanceParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getGuidancePreset();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
=======
proto.gooseai.GuidanceParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuidancePreset();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
>>>>>>> 917d866 (test)
  }
  f = message.getInstancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gooseai.GuidanceInstanceParameters.serializeBinaryToWriter
    );
  }
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * optional GuidancePreset guidance_preset = 1;
 * @return {!proto.gooseai.GuidancePreset}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceParameters.prototype.getGuidancePreset = function () {
  return /** @type {!proto.gooseai.GuidancePreset} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

=======
proto.gooseai.GuidanceParameters.prototype.getGuidancePreset = function() {
  return /** @type {!proto.gooseai.GuidancePreset} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.GuidancePreset} value
 * @return {!proto.gooseai.GuidanceParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.GuidanceParameters.prototype.setGuidancePreset = function (
  value
) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

=======
proto.gooseai.GuidanceParameters.prototype.setGuidancePreset = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * repeated GuidanceInstanceParameters instances = 2;
 * @return {!Array<!proto.gooseai.GuidanceInstanceParameters>}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceParameters.prototype.getInstancesList = function () {
  return /** @type{!Array<!proto.gooseai.GuidanceInstanceParameters>} */ (
    jspb.Message.getRepeatedWrapperField(
      this,
      proto.gooseai.GuidanceInstanceParameters,
      2
    )
  );
};

/**
 * @param {!Array<!proto.gooseai.GuidanceInstanceParameters>} value
 * @return {!proto.gooseai.GuidanceParameters} returns this
 */
proto.gooseai.GuidanceParameters.prototype.setInstancesList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

=======
proto.gooseai.GuidanceParameters.prototype.getInstancesList = function() {
  return /** @type{!Array<!proto.gooseai.GuidanceInstanceParameters>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.GuidanceInstanceParameters, 2));
};


/**
 * @param {!Array<!proto.gooseai.GuidanceInstanceParameters>} value
 * @return {!proto.gooseai.GuidanceParameters} returns this
*/
proto.gooseai.GuidanceParameters.prototype.setInstancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.GuidanceInstanceParameters=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.GuidanceInstanceParameters}
 */
<<<<<<< HEAD
proto.gooseai.GuidanceParameters.prototype.addInstances = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.gooseai.GuidanceInstanceParameters,
    opt_index
  );
};

=======
proto.gooseai.GuidanceParameters.prototype.addInstances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseai.GuidanceInstanceParameters, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.GuidanceParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.GuidanceParameters.prototype.clearInstancesList = function () {
  return this.setInstancesList([]);
};

=======
proto.gooseai.GuidanceParameters.prototype.clearInstancesList = function() {
  return this.setInstancesList([]);
};



>>>>>>> 917d866 (test)
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
<<<<<<< HEAD
proto.gooseai.TransformType.oneofGroups_ = [[1, 2]];
=======
proto.gooseai.TransformType.oneofGroups_ = [[1,2]];
>>>>>>> 917d866 (test)

/**
 * @enum {number}
 */
proto.gooseai.TransformType.TypeCase = {
  TYPE_NOT_SET: 0,
  DIFFUSION: 1,
<<<<<<< HEAD
  UPSCALER: 2,
=======
  UPSCALER: 2
>>>>>>> 917d866 (test)
};

/**
 * @return {proto.gooseai.TransformType.TypeCase}
 */
<<<<<<< HEAD
proto.gooseai.TransformType.prototype.getTypeCase = function () {
  return /** @type {proto.gooseai.TransformType.TypeCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.gooseai.TransformType.oneofGroups_[0]
    )
  );
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.TransformType.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.TransformType.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.TransformType} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.TransformType.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        diffusion: jspb.Message.getFieldWithDefault(msg, 1, 0),
        upscaler: jspb.Message.getFieldWithDefault(msg, 2, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.TransformType.prototype.getTypeCase = function() {
  return /** @type {proto.gooseai.TransformType.TypeCase} */(jspb.Message.computeOneofCase(this, proto.gooseai.TransformType.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.TransformType.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.TransformType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.TransformType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.TransformType.toObject = function(includeInstance, msg) {
  var f, obj = {
    diffusion: jspb.Message.getFieldWithDefault(msg, 1, 0),
    upscaler: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.TransformType}
 */
<<<<<<< HEAD
proto.gooseai.TransformType.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.TransformType();
  return proto.gooseai.TransformType.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.TransformType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.TransformType;
  return proto.gooseai.TransformType.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.TransformType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.TransformType}
 */
<<<<<<< HEAD
proto.gooseai.TransformType.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.TransformType.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {!proto.gooseai.DiffusionSampler} */ (
          reader.readEnum()
        );
        msg.setDiffusion(value);
        break;
      case 2:
        var value = /** @type {!proto.gooseai.Upscaler} */ (reader.readEnum());
        msg.setUpscaler(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {!proto.gooseai.DiffusionSampler} */ (reader.readEnum());
      msg.setDiffusion(value);
      break;
    case 2:
      var value = /** @type {!proto.gooseai.Upscaler} */ (reader.readEnum());
      msg.setUpscaler(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.TransformType.prototype.serializeBinary = function () {
=======
proto.gooseai.TransformType.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.TransformType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.TransformType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.TransformType.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {!proto.gooseai.DiffusionSampler} */ (
    jspb.Message.getField(message, 1)
  );
  if (f != null) {
    writer.writeEnum(1, f);
  }
  f = /** @type {!proto.gooseai.Upscaler} */ (
    jspb.Message.getField(message, 2)
  );
  if (f != null) {
    writer.writeEnum(2, f);
  }
};

=======
proto.gooseai.TransformType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.gooseai.DiffusionSampler} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.gooseai.Upscaler} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional DiffusionSampler diffusion = 1;
 * @return {!proto.gooseai.DiffusionSampler}
 */
<<<<<<< HEAD
proto.gooseai.TransformType.prototype.getDiffusion = function () {
  return /** @type {!proto.gooseai.DiffusionSampler} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

=======
proto.gooseai.TransformType.prototype.getDiffusion = function() {
  return /** @type {!proto.gooseai.DiffusionSampler} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.DiffusionSampler} value
 * @return {!proto.gooseai.TransformType} returns this
 */
<<<<<<< HEAD
proto.gooseai.TransformType.prototype.setDiffusion = function (value) {
  return jspb.Message.setOneofField(
    this,
    1,
    proto.gooseai.TransformType.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.TransformType.prototype.setDiffusion = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.gooseai.TransformType.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.TransformType} returns this
 */
<<<<<<< HEAD
proto.gooseai.TransformType.prototype.clearDiffusion = function () {
  return jspb.Message.setOneofField(
    this,
    1,
    proto.gooseai.TransformType.oneofGroups_[0],
    undefined
  );
};

=======
proto.gooseai.TransformType.prototype.clearDiffusion = function() {
  return jspb.Message.setOneofField(this, 1, proto.gooseai.TransformType.oneofGroups_[0], undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.TransformType.prototype.hasDiffusion = function () {
  return jspb.Message.getField(this, 1) != null;
};

=======
proto.gooseai.TransformType.prototype.hasDiffusion = function() {
  return jspb.Message.getField(this, 1) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional Upscaler upscaler = 2;
 * @return {!proto.gooseai.Upscaler}
 */
<<<<<<< HEAD
proto.gooseai.TransformType.prototype.getUpscaler = function () {
  return /** @type {!proto.gooseai.Upscaler} */ (
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};

=======
proto.gooseai.TransformType.prototype.getUpscaler = function() {
  return /** @type {!proto.gooseai.Upscaler} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.Upscaler} value
 * @return {!proto.gooseai.TransformType} returns this
 */
<<<<<<< HEAD
proto.gooseai.TransformType.prototype.setUpscaler = function (value) {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.gooseai.TransformType.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.TransformType.prototype.setUpscaler = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.gooseai.TransformType.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.TransformType} returns this
 */
<<<<<<< HEAD
proto.gooseai.TransformType.prototype.clearUpscaler = function () {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.gooseai.TransformType.oneofGroups_[0],
    undefined
  );
};

=======
proto.gooseai.TransformType.prototype.clearUpscaler = function() {
  return jspb.Message.setOneofField(this, 2, proto.gooseai.TransformType.oneofGroups_[0], undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.TransformType.prototype.hasUpscaler = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.TransformType.prototype.hasUpscaler = function() {
  return jspb.Message.getField(this, 2) != null;
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.repeatedFields_ = [3, 7];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.ImageParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.ImageParameters.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.ImageParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.ImageParameters.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        height: jspb.Message.getFieldWithDefault(msg, 1, 0),
        width: jspb.Message.getFieldWithDefault(msg, 2, 0),
        seedList:
          (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
        samples: jspb.Message.getFieldWithDefault(msg, 4, 0),
        steps: jspb.Message.getFieldWithDefault(msg, 5, 0),
        transform:
          (f = msg.getTransform()) &&
          proto.gooseai.TransformType.toObject(includeInstance, f),
        parametersList: jspb.Message.toObjectList(
          msg.getParametersList(),
          proto.gooseai.StepParameter.toObject,
          includeInstance
        ),
        maskedAreaInit: jspb.Message.getFieldWithDefault(msg, 8, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.ImageParameters.repeatedFields_ = [3,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.ImageParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.ImageParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.ImageParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.ImageParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    width: jspb.Message.getFieldWithDefault(msg, 2, 0),
    seedList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    samples: jspb.Message.getFieldWithDefault(msg, 4, 0),
    steps: jspb.Message.getFieldWithDefault(msg, 5, 0),
    transform: (f = msg.getTransform()) && proto.gooseai.TransformType.toObject(includeInstance, f),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.gooseai.StepParameter.toObject, includeInstance),
    maskedAreaInit: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.ImageParameters}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ImageParameters();
  return proto.gooseai.ImageParameters.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.ImageParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ImageParameters;
  return proto.gooseai.ImageParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.ImageParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.ImageParameters}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.ImageParameters.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setWidth(value);
        break;
      case 3:
        var values = /** @type {!Array<number>} */ (
          reader.isDelimited()
            ? reader.readPackedUint32()
            : [reader.readUint32()]
        );
        for (var i = 0; i < values.length; i++) {
          msg.addSeed(values[i]);
        }
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSamples(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSteps(value);
        break;
      case 6:
        var value = new proto.gooseai.TransformType();
        reader.readMessage(
          value,
          proto.gooseai.TransformType.deserializeBinaryFromReader
        );
        msg.setTransform(value);
        break;
      case 7:
        var value = new proto.gooseai.StepParameter();
        reader.readMessage(
          value,
          proto.gooseai.StepParameter.deserializeBinaryFromReader
        );
        msg.addParameters(value);
        break;
      case 8:
        var value = /** @type {!proto.gooseai.MaskedAreaInit} */ (
          reader.readEnum()
        );
        msg.setMaskedAreaInit(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWidth(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSeed(values[i]);
      }
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSamples(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSteps(value);
      break;
    case 6:
      var value = new proto.gooseai.TransformType;
      reader.readMessage(value,proto.gooseai.TransformType.deserializeBinaryFromReader);
      msg.setTransform(value);
      break;
    case 7:
      var value = new proto.gooseai.StepParameter;
      reader.readMessage(value,proto.gooseai.StepParameter.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 8:
      var value = /** @type {!proto.gooseai.MaskedAreaInit} */ (reader.readEnum());
      msg.setMaskedAreaInit(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.serializeBinary = function () {
=======
proto.gooseai.ImageParameters.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.ImageParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.ImageParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(1, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(2, f);
  }
  f = message.getSeedList();
  if (f.length > 0) {
    writer.writePackedUint32(3, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(4, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(5, f);
=======
proto.gooseai.ImageParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSeedList();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
>>>>>>> 917d866 (test)
  }
  f = message.getTransform();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.gooseai.TransformType.serializeBinaryToWriter
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.gooseai.StepParameter.serializeBinaryToWriter
    );
  }
<<<<<<< HEAD
  f = /** @type {!proto.gooseai.MaskedAreaInit} */ (
    jspb.Message.getField(message, 8)
  );
  if (f != null) {
    writer.writeEnum(8, f);
  }
};

=======
  f = /** @type {!proto.gooseai.MaskedAreaInit} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 height = 1;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.getHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

=======
proto.gooseai.ImageParameters.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.setHeight = function (value) {
  return jspb.Message.setField(this, 1, value);
};

=======
proto.gooseai.ImageParameters.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.clearHeight = function () {
  return jspb.Message.setField(this, 1, undefined);
};

=======
proto.gooseai.ImageParameters.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 1, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.hasHeight = function () {
  return jspb.Message.getField(this, 1) != null;
};

=======
proto.gooseai.ImageParameters.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 1) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 width = 2;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.getWidth = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

=======
proto.gooseai.ImageParameters.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.setWidth = function (value) {
  return jspb.Message.setField(this, 2, value);
};

=======
proto.gooseai.ImageParameters.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.clearWidth = function () {
  return jspb.Message.setField(this, 2, undefined);
};

=======
proto.gooseai.ImageParameters.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 2, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.hasWidth = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.ImageParameters.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 2) != null;
};


>>>>>>> 917d866 (test)
/**
 * repeated uint32 seed = 3;
 * @return {!Array<number>}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.getSeedList = function () {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};

=======
proto.gooseai.ImageParameters.prototype.getSeedList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


>>>>>>> 917d866 (test)
/**
 * @param {!Array<number>} value
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.setSeedList = function (value) {
  return jspb.Message.setField(this, 3, value || []);
};

=======
proto.gooseai.ImageParameters.prototype.setSeedList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.addSeed = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};

=======
proto.gooseai.ImageParameters.prototype.addSeed = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.clearSeedList = function () {
  return this.setSeedList([]);
};

=======
proto.gooseai.ImageParameters.prototype.clearSeedList = function() {
  return this.setSeedList([]);
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 samples = 4;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.getSamples = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

=======
proto.gooseai.ImageParameters.prototype.getSamples = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.setSamples = function (value) {
  return jspb.Message.setField(this, 4, value);
};

=======
proto.gooseai.ImageParameters.prototype.setSamples = function(value) {
  return jspb.Message.setField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.clearSamples = function () {
  return jspb.Message.setField(this, 4, undefined);
};

=======
proto.gooseai.ImageParameters.prototype.clearSamples = function() {
  return jspb.Message.setField(this, 4, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.hasSamples = function () {
  return jspb.Message.getField(this, 4) != null;
};

=======
proto.gooseai.ImageParameters.prototype.hasSamples = function() {
  return jspb.Message.getField(this, 4) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 steps = 5;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.getSteps = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

=======
proto.gooseai.ImageParameters.prototype.getSteps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.setSteps = function (value) {
  return jspb.Message.setField(this, 5, value);
};

=======
proto.gooseai.ImageParameters.prototype.setSteps = function(value) {
  return jspb.Message.setField(this, 5, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.clearSteps = function () {
  return jspb.Message.setField(this, 5, undefined);
};

=======
proto.gooseai.ImageParameters.prototype.clearSteps = function() {
  return jspb.Message.setField(this, 5, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.hasSteps = function () {
  return jspb.Message.getField(this, 5) != null;
};

=======
proto.gooseai.ImageParameters.prototype.hasSteps = function() {
  return jspb.Message.getField(this, 5) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional TransformType transform = 6;
 * @return {?proto.gooseai.TransformType}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.getTransform = function () {
  return /** @type{?proto.gooseai.TransformType} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.TransformType, 6)
  );
};

/**
 * @param {?proto.gooseai.TransformType|undefined} value
 * @return {!proto.gooseai.ImageParameters} returns this
 */
proto.gooseai.ImageParameters.prototype.setTransform = function (value) {
  return jspb.Message.setWrapperField(this, 6, value);
};

=======
proto.gooseai.ImageParameters.prototype.getTransform = function() {
  return /** @type{?proto.gooseai.TransformType} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.TransformType, 6));
};


/**
 * @param {?proto.gooseai.TransformType|undefined} value
 * @return {!proto.gooseai.ImageParameters} returns this
*/
proto.gooseai.ImageParameters.prototype.setTransform = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.clearTransform = function () {
  return this.setTransform(undefined);
};

=======
proto.gooseai.ImageParameters.prototype.clearTransform = function() {
  return this.setTransform(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.hasTransform = function () {
  return jspb.Message.getField(this, 6) != null;
};

=======
proto.gooseai.ImageParameters.prototype.hasTransform = function() {
  return jspb.Message.getField(this, 6) != null;
};


>>>>>>> 917d866 (test)
/**
 * repeated StepParameter parameters = 7;
 * @return {!Array<!proto.gooseai.StepParameter>}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.getParametersList = function () {
  return /** @type{!Array<!proto.gooseai.StepParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.StepParameter, 7)
  );
};

/**
 * @param {!Array<!proto.gooseai.StepParameter>} value
 * @return {!proto.gooseai.ImageParameters} returns this
 */
proto.gooseai.ImageParameters.prototype.setParametersList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};

=======
proto.gooseai.ImageParameters.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.gooseai.StepParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.StepParameter, 7));
};


/**
 * @param {!Array<!proto.gooseai.StepParameter>} value
 * @return {!proto.gooseai.ImageParameters} returns this
*/
proto.gooseai.ImageParameters.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.StepParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.StepParameter}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.addParameters = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    7,
    opt_value,
    proto.gooseai.StepParameter,
    opt_index
  );
};

=======
proto.gooseai.ImageParameters.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.gooseai.StepParameter, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.clearParametersList = function () {
  return this.setParametersList([]);
};

=======
proto.gooseai.ImageParameters.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


>>>>>>> 917d866 (test)
/**
 * optional MaskedAreaInit masked_area_init = 8;
 * @return {!proto.gooseai.MaskedAreaInit}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.getMaskedAreaInit = function () {
  return /** @type {!proto.gooseai.MaskedAreaInit} */ (
    jspb.Message.getFieldWithDefault(this, 8, 0)
  );
};

=======
proto.gooseai.ImageParameters.prototype.getMaskedAreaInit = function() {
  return /** @type {!proto.gooseai.MaskedAreaInit} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.MaskedAreaInit} value
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.setMaskedAreaInit = function (value) {
  return jspb.Message.setField(this, 8, value);
};

=======
proto.gooseai.ImageParameters.prototype.setMaskedAreaInit = function(value) {
  return jspb.Message.setField(this, 8, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ImageParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.clearMaskedAreaInit = function () {
  return jspb.Message.setField(this, 8, undefined);
};

=======
proto.gooseai.ImageParameters.prototype.clearMaskedAreaInit = function() {
  return jspb.Message.setField(this, 8, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ImageParameters.prototype.hasMaskedAreaInit = function () {
  return jspb.Message.getField(this, 8) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.ClassifierConcept.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.ClassifierConcept.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.ClassifierConcept} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.ClassifierConcept.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        concept: jspb.Message.getFieldWithDefault(msg, 1, ""),
        threshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.ImageParameters.prototype.hasMaskedAreaInit = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.ClassifierConcept.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.ClassifierConcept.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.ClassifierConcept} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.ClassifierConcept.toObject = function(includeInstance, msg) {
  var f, obj = {
    concept: jspb.Message.getFieldWithDefault(msg, 1, ""),
    threshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.ClassifierConcept}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ClassifierConcept();
  return proto.gooseai.ClassifierConcept.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.ClassifierConcept.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ClassifierConcept;
  return proto.gooseai.ClassifierConcept.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.ClassifierConcept} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.ClassifierConcept}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.ClassifierConcept.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setConcept(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setThreshold(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConcept(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setThreshold(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept.prototype.serializeBinary = function () {
=======
proto.gooseai.ClassifierConcept.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.ClassifierConcept.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.ClassifierConcept} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getConcept();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(2, f);
  }
};

=======
proto.gooseai.ClassifierConcept.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConcept();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional string concept = 1;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept.prototype.getConcept = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

=======
proto.gooseai.ClassifierConcept.prototype.getConcept = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.ClassifierConcept} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept.prototype.setConcept = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

=======
proto.gooseai.ClassifierConcept.prototype.setConcept = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * optional float threshold = 2;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept.prototype.getThreshold = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0)
  );
};

=======
proto.gooseai.ClassifierConcept.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.ClassifierConcept} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept.prototype.setThreshold = function (value) {
  return jspb.Message.setField(this, 2, value);
};

=======
proto.gooseai.ClassifierConcept.prototype.setThreshold = function(value) {
  return jspb.Message.setField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ClassifierConcept} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept.prototype.clearThreshold = function () {
  return jspb.Message.setField(this, 2, undefined);
};

=======
proto.gooseai.ClassifierConcept.prototype.clearThreshold = function() {
  return jspb.Message.setField(this, 2, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierConcept.prototype.hasThreshold = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.ClassifierConcept.prototype.hasThreshold = function() {
  return jspb.Message.getField(this, 2) != null;
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseai.ClassifierCategory.repeatedFields_ = [2];

<<<<<<< HEAD
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.ClassifierCategory.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.ClassifierCategory.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.ClassifierCategory} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.ClassifierCategory.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 1, ""),
        conceptsList: jspb.Message.toObjectList(
          msg.getConceptsList(),
          proto.gooseai.ClassifierConcept.toObject,
          includeInstance
        ),
        adjustment: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
        action: jspb.Message.getFieldWithDefault(msg, 4, 0),
        classifierMode: jspb.Message.getFieldWithDefault(msg, 5, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.ClassifierCategory.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.ClassifierCategory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.ClassifierCategory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.ClassifierCategory.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    conceptsList: jspb.Message.toObjectList(msg.getConceptsList(),
    proto.gooseai.ClassifierConcept.toObject, includeInstance),
    adjustment: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    action: jspb.Message.getFieldWithDefault(msg, 4, 0),
    classifierMode: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.ClassifierCategory}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ClassifierCategory();
  return proto.gooseai.ClassifierCategory.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.ClassifierCategory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ClassifierCategory;
  return proto.gooseai.ClassifierCategory.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.ClassifierCategory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.ClassifierCategory}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.ClassifierCategory.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 2:
        var value = new proto.gooseai.ClassifierConcept();
        reader.readMessage(
          value,
          proto.gooseai.ClassifierConcept.deserializeBinaryFromReader
        );
        msg.addConcepts(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setAdjustment(value);
        break;
      case 4:
        var value = /** @type {!proto.gooseai.Action} */ (reader.readEnum());
        msg.setAction(value);
        break;
      case 5:
        var value = /** @type {!proto.gooseai.ClassifierMode} */ (
          reader.readEnum()
        );
        msg.setClassifierMode(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.gooseai.ClassifierConcept;
      reader.readMessage(value,proto.gooseai.ClassifierConcept.deserializeBinaryFromReader);
      msg.addConcepts(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAdjustment(value);
      break;
    case 4:
      var value = /** @type {!proto.gooseai.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 5:
      var value = /** @type {!proto.gooseai.ClassifierMode} */ (reader.readEnum());
      msg.setClassifierMode(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.serializeBinary = function () {
=======
proto.gooseai.ClassifierCategory.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.ClassifierCategory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.ClassifierCategory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(1, f);
=======
proto.gooseai.ClassifierCategory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
>>>>>>> 917d866 (test)
  }
  f = message.getConceptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gooseai.ClassifierConcept.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
<<<<<<< HEAD
    writer.writeFloat(3, f);
  }
  f = /** @type {!proto.gooseai.Action} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(4, f);
  }
  f = /** @type {!proto.gooseai.ClassifierMode} */ (
    jspb.Message.getField(message, 5)
  );
  if (f != null) {
    writer.writeEnum(5, f);
  }
};

=======
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {!proto.gooseai.Action} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.gooseai.ClassifierMode} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional string name = 1;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

=======
proto.gooseai.ClassifierCategory.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.ClassifierCategory} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

=======
proto.gooseai.ClassifierCategory.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * repeated ClassifierConcept concepts = 2;
 * @return {!Array<!proto.gooseai.ClassifierConcept>}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.getConceptsList = function () {
  return /** @type{!Array<!proto.gooseai.ClassifierConcept>} */ (
    jspb.Message.getRepeatedWrapperField(
      this,
      proto.gooseai.ClassifierConcept,
      2
    )
  );
};

/**
 * @param {!Array<!proto.gooseai.ClassifierConcept>} value
 * @return {!proto.gooseai.ClassifierCategory} returns this
 */
proto.gooseai.ClassifierCategory.prototype.setConceptsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

=======
proto.gooseai.ClassifierCategory.prototype.getConceptsList = function() {
  return /** @type{!Array<!proto.gooseai.ClassifierConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.ClassifierConcept, 2));
};


/**
 * @param {!Array<!proto.gooseai.ClassifierConcept>} value
 * @return {!proto.gooseai.ClassifierCategory} returns this
*/
proto.gooseai.ClassifierCategory.prototype.setConceptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.ClassifierConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.ClassifierConcept}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.addConcepts = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.gooseai.ClassifierConcept,
    opt_index
  );
};

=======
proto.gooseai.ClassifierCategory.prototype.addConcepts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseai.ClassifierConcept, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.ClassifierCategory} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.clearConceptsList = function () {
  return this.setConceptsList([]);
};

=======
proto.gooseai.ClassifierCategory.prototype.clearConceptsList = function() {
  return this.setConceptsList([]);
};


>>>>>>> 917d866 (test)
/**
 * optional float adjustment = 3;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.getAdjustment = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0)
  );
};

=======
proto.gooseai.ClassifierCategory.prototype.getAdjustment = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.ClassifierCategory} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.setAdjustment = function (value) {
  return jspb.Message.setField(this, 3, value);
};

=======
proto.gooseai.ClassifierCategory.prototype.setAdjustment = function(value) {
  return jspb.Message.setField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ClassifierCategory} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.clearAdjustment = function () {
  return jspb.Message.setField(this, 3, undefined);
};

=======
proto.gooseai.ClassifierCategory.prototype.clearAdjustment = function() {
  return jspb.Message.setField(this, 3, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.hasAdjustment = function () {
  return jspb.Message.getField(this, 3) != null;
};

=======
proto.gooseai.ClassifierCategory.prototype.hasAdjustment = function() {
  return jspb.Message.getField(this, 3) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional Action action = 4;
 * @return {!proto.gooseai.Action}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.getAction = function () {
  return /** @type {!proto.gooseai.Action} */ (
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};

=======
proto.gooseai.ClassifierCategory.prototype.getAction = function() {
  return /** @type {!proto.gooseai.Action} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.Action} value
 * @return {!proto.gooseai.ClassifierCategory} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.setAction = function (value) {
  return jspb.Message.setField(this, 4, value);
};

=======
proto.gooseai.ClassifierCategory.prototype.setAction = function(value) {
  return jspb.Message.setField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ClassifierCategory} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.clearAction = function () {
  return jspb.Message.setField(this, 4, undefined);
};

=======
proto.gooseai.ClassifierCategory.prototype.clearAction = function() {
  return jspb.Message.setField(this, 4, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.hasAction = function () {
  return jspb.Message.getField(this, 4) != null;
};

=======
proto.gooseai.ClassifierCategory.prototype.hasAction = function() {
  return jspb.Message.getField(this, 4) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional ClassifierMode classifier_mode = 5;
 * @return {!proto.gooseai.ClassifierMode}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.getClassifierMode = function () {
  return /** @type {!proto.gooseai.ClassifierMode} */ (
    jspb.Message.getFieldWithDefault(this, 5, 0)
  );
};

=======
proto.gooseai.ClassifierCategory.prototype.getClassifierMode = function() {
  return /** @type {!proto.gooseai.ClassifierMode} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.ClassifierMode} value
 * @return {!proto.gooseai.ClassifierCategory} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.setClassifierMode = function (
  value
) {
  return jspb.Message.setField(this, 5, value);
};

=======
proto.gooseai.ClassifierCategory.prototype.setClassifierMode = function(value) {
  return jspb.Message.setField(this, 5, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ClassifierCategory} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.clearClassifierMode = function () {
  return jspb.Message.setField(this, 5, undefined);
};

=======
proto.gooseai.ClassifierCategory.prototype.clearClassifierMode = function() {
  return jspb.Message.setField(this, 5, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierCategory.prototype.hasClassifierMode = function () {
  return jspb.Message.getField(this, 5) != null;
};

=======
proto.gooseai.ClassifierCategory.prototype.hasClassifierMode = function() {
  return jspb.Message.getField(this, 5) != null;
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.repeatedFields_ = [1, 2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.ClassifierParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.ClassifierParameters.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.ClassifierParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.ClassifierParameters.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        categoriesList: jspb.Message.toObjectList(
          msg.getCategoriesList(),
          proto.gooseai.ClassifierCategory.toObject,
          includeInstance
        ),
        exceedsList: jspb.Message.toObjectList(
          msg.getExceedsList(),
          proto.gooseai.ClassifierCategory.toObject,
          includeInstance
        ),
        realizedAction: jspb.Message.getFieldWithDefault(msg, 3, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.ClassifierParameters.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.ClassifierParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.ClassifierParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.ClassifierParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.ClassifierParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    categoriesList: jspb.Message.toObjectList(msg.getCategoriesList(),
    proto.gooseai.ClassifierCategory.toObject, includeInstance),
    exceedsList: jspb.Message.toObjectList(msg.getExceedsList(),
    proto.gooseai.ClassifierCategory.toObject, includeInstance),
    realizedAction: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.ClassifierParameters}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ClassifierParameters();
  return proto.gooseai.ClassifierParameters.deserializeBinaryFromReader(
    msg,
    reader
  );
};

=======
proto.gooseai.ClassifierParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ClassifierParameters;
  return proto.gooseai.ClassifierParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.ClassifierParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.ClassifierParameters}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.ClassifierParameters.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = new proto.gooseai.ClassifierCategory();
        reader.readMessage(
          value,
          proto.gooseai.ClassifierCategory.deserializeBinaryFromReader
        );
        msg.addCategories(value);
        break;
      case 2:
        var value = new proto.gooseai.ClassifierCategory();
        reader.readMessage(
          value,
          proto.gooseai.ClassifierCategory.deserializeBinaryFromReader
        );
        msg.addExceeds(value);
        break;
      case 3:
        var value = /** @type {!proto.gooseai.Action} */ (reader.readEnum());
        msg.setRealizedAction(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = new proto.gooseai.ClassifierCategory;
      reader.readMessage(value,proto.gooseai.ClassifierCategory.deserializeBinaryFromReader);
      msg.addCategories(value);
      break;
    case 2:
      var value = new proto.gooseai.ClassifierCategory;
      reader.readMessage(value,proto.gooseai.ClassifierCategory.deserializeBinaryFromReader);
      msg.addExceeds(value);
      break;
    case 3:
      var value = /** @type {!proto.gooseai.Action} */ (reader.readEnum());
      msg.setRealizedAction(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.serializeBinary = function () {
=======
proto.gooseai.ClassifierParameters.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.ClassifierParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.ClassifierParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
=======
proto.gooseai.ClassifierParameters.serializeBinaryToWriter = function(message, writer) {
>>>>>>> 917d866 (test)
  var f = undefined;
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gooseai.ClassifierCategory.serializeBinaryToWriter
    );
  }
  f = message.getExceedsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gooseai.ClassifierCategory.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.gooseai.Action} */ (jspb.Message.getField(message, 3));
  if (f != null) {
<<<<<<< HEAD
    writer.writeEnum(3, f);
  }
};

=======
    writer.writeEnum(
      3,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * repeated ClassifierCategory categories = 1;
 * @return {!Array<!proto.gooseai.ClassifierCategory>}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.getCategoriesList = function () {
  return /** @type{!Array<!proto.gooseai.ClassifierCategory>} */ (
    jspb.Message.getRepeatedWrapperField(
      this,
      proto.gooseai.ClassifierCategory,
      1
    )
  );
};

/**
 * @param {!Array<!proto.gooseai.ClassifierCategory>} value
 * @return {!proto.gooseai.ClassifierParameters} returns this
 */
proto.gooseai.ClassifierParameters.prototype.setCategoriesList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

=======
proto.gooseai.ClassifierParameters.prototype.getCategoriesList = function() {
  return /** @type{!Array<!proto.gooseai.ClassifierCategory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.ClassifierCategory, 1));
};


/**
 * @param {!Array<!proto.gooseai.ClassifierCategory>} value
 * @return {!proto.gooseai.ClassifierParameters} returns this
*/
proto.gooseai.ClassifierParameters.prototype.setCategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.ClassifierCategory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.ClassifierCategory}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.addCategories = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.gooseai.ClassifierCategory,
    opt_index
  );
};

=======
proto.gooseai.ClassifierParameters.prototype.addCategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.ClassifierCategory, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.ClassifierParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.clearCategoriesList = function () {
  return this.setCategoriesList([]);
};

=======
proto.gooseai.ClassifierParameters.prototype.clearCategoriesList = function() {
  return this.setCategoriesList([]);
};


>>>>>>> 917d866 (test)
/**
 * repeated ClassifierCategory exceeds = 2;
 * @return {!Array<!proto.gooseai.ClassifierCategory>}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.getExceedsList = function () {
  return /** @type{!Array<!proto.gooseai.ClassifierCategory>} */ (
    jspb.Message.getRepeatedWrapperField(
      this,
      proto.gooseai.ClassifierCategory,
      2
    )
  );
};

/**
 * @param {!Array<!proto.gooseai.ClassifierCategory>} value
 * @return {!proto.gooseai.ClassifierParameters} returns this
 */
proto.gooseai.ClassifierParameters.prototype.setExceedsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

=======
proto.gooseai.ClassifierParameters.prototype.getExceedsList = function() {
  return /** @type{!Array<!proto.gooseai.ClassifierCategory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.ClassifierCategory, 2));
};


/**
 * @param {!Array<!proto.gooseai.ClassifierCategory>} value
 * @return {!proto.gooseai.ClassifierParameters} returns this
*/
proto.gooseai.ClassifierParameters.prototype.setExceedsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.ClassifierCategory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.ClassifierCategory}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.addExceeds = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.gooseai.ClassifierCategory,
    opt_index
  );
};

=======
proto.gooseai.ClassifierParameters.prototype.addExceeds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseai.ClassifierCategory, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.ClassifierParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.clearExceedsList = function () {
  return this.setExceedsList([]);
};

=======
proto.gooseai.ClassifierParameters.prototype.clearExceedsList = function() {
  return this.setExceedsList([]);
};


>>>>>>> 917d866 (test)
/**
 * optional Action realized_action = 3;
 * @return {!proto.gooseai.Action}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.getRealizedAction = function () {
  return /** @type {!proto.gooseai.Action} */ (
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};

=======
proto.gooseai.ClassifierParameters.prototype.getRealizedAction = function() {
  return /** @type {!proto.gooseai.Action} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.Action} value
 * @return {!proto.gooseai.ClassifierParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.setRealizedAction = function (
  value
) {
  return jspb.Message.setField(this, 3, value);
};

=======
proto.gooseai.ClassifierParameters.prototype.setRealizedAction = function(value) {
  return jspb.Message.setField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.ClassifierParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.clearRealizedAction = function () {
  return jspb.Message.setField(this, 3, undefined);
};

=======
proto.gooseai.ClassifierParameters.prototype.clearRealizedAction = function() {
  return jspb.Message.setField(this, 3, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.ClassifierParameters.prototype.hasRealizedAction = function () {
  return jspb.Message.getField(this, 3) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.AssetParameters.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.AssetParameters.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.AssetParameters} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.AssetParameters.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        action: jspb.Message.getFieldWithDefault(msg, 1, 0),
        projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
        use: jspb.Message.getFieldWithDefault(msg, 3, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.ClassifierParameters.prototype.hasRealizedAction = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.AssetParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.AssetParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.AssetParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.AssetParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    use: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.AssetParameters}
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.AssetParameters();
  return proto.gooseai.AssetParameters.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.AssetParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.AssetParameters;
  return proto.gooseai.AssetParameters.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.AssetParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.AssetParameters}
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.AssetParameters.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {!proto.gooseai.AssetAction} */ (
          reader.readEnum()
        );
        msg.setAction(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setProjectId(value);
        break;
      case 3:
        var value = /** @type {!proto.gooseai.AssetUse} */ (reader.readEnum());
        msg.setUse(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {!proto.gooseai.AssetAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {!proto.gooseai.AssetUse} */ (reader.readEnum());
      msg.setUse(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters.prototype.serializeBinary = function () {
=======
proto.gooseai.AssetParameters.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.AssetParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.AssetParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getUse();
  if (f !== 0.0) {
    writer.writeEnum(3, f);
  }
};

=======
proto.gooseai.AssetParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUse();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional AssetAction action = 1;
 * @return {!proto.gooseai.AssetAction}
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters.prototype.getAction = function () {
  return /** @type {!proto.gooseai.AssetAction} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

=======
proto.gooseai.AssetParameters.prototype.getAction = function() {
  return /** @type {!proto.gooseai.AssetAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.AssetAction} value
 * @return {!proto.gooseai.AssetParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters.prototype.setAction = function (value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

=======
proto.gooseai.AssetParameters.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * optional string project_id = 2;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters.prototype.getProjectId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

=======
proto.gooseai.AssetParameters.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.AssetParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters.prototype.setProjectId = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

=======
proto.gooseai.AssetParameters.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * optional AssetUse use = 3;
 * @return {!proto.gooseai.AssetUse}
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters.prototype.getUse = function () {
  return /** @type {!proto.gooseai.AssetUse} */ (
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};

=======
proto.gooseai.AssetParameters.prototype.getUse = function() {
  return /** @type {!proto.gooseai.AssetUse} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.AssetUse} value
 * @return {!proto.gooseai.AssetParameters} returns this
 */
<<<<<<< HEAD
proto.gooseai.AssetParameters.prototype.setUse = function (value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.AnswerMeta.prototype.toObject = function (opt_includeInstance) {
    return proto.gooseai.AnswerMeta.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.AnswerMeta} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.AnswerMeta.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        gpuId: jspb.Message.getFieldWithDefault(msg, 1, ""),
        cpuId: jspb.Message.getFieldWithDefault(msg, 2, ""),
        nodeId: jspb.Message.getFieldWithDefault(msg, 3, ""),
        engineId: jspb.Message.getFieldWithDefault(msg, 4, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.AssetParameters.prototype.setUse = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.AnswerMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.AnswerMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.AnswerMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.AnswerMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    gpuId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cpuId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    engineId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.AnswerMeta}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.AnswerMeta();
  return proto.gooseai.AnswerMeta.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.AnswerMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.AnswerMeta;
  return proto.gooseai.AnswerMeta.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.AnswerMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.AnswerMeta}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.deserializeBinaryFromReader = function (msg, reader) {
=======
proto.gooseai.AnswerMeta.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setGpuId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setCpuId(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setNodeId(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setEngineId(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGpuId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpuId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEngineId(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.serializeBinary = function () {
=======
proto.gooseai.AnswerMeta.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.AnswerMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.AnswerMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(1, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(2, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(3, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(4, f);
  }
};

=======
proto.gooseai.AnswerMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * optional string gpu_id = 1;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.getGpuId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

=======
proto.gooseai.AnswerMeta.prototype.getGpuId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.AnswerMeta} returns this
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.setGpuId = function (value) {
  return jspb.Message.setField(this, 1, value);
};

=======
proto.gooseai.AnswerMeta.prototype.setGpuId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.AnswerMeta} returns this
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.clearGpuId = function () {
  return jspb.Message.setField(this, 1, undefined);
};

=======
proto.gooseai.AnswerMeta.prototype.clearGpuId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.hasGpuId = function () {
  return jspb.Message.getField(this, 1) != null;
};

=======
proto.gooseai.AnswerMeta.prototype.hasGpuId = function() {
  return jspb.Message.getField(this, 1) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional string cpu_id = 2;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.getCpuId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

=======
proto.gooseai.AnswerMeta.prototype.getCpuId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.AnswerMeta} returns this
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.setCpuId = function (value) {
  return jspb.Message.setField(this, 2, value);
};

=======
proto.gooseai.AnswerMeta.prototype.setCpuId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.AnswerMeta} returns this
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.clearCpuId = function () {
  return jspb.Message.setField(this, 2, undefined);
};

=======
proto.gooseai.AnswerMeta.prototype.clearCpuId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.hasCpuId = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.AnswerMeta.prototype.hasCpuId = function() {
  return jspb.Message.getField(this, 2) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional string node_id = 3;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.getNodeId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

=======
proto.gooseai.AnswerMeta.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.AnswerMeta} returns this
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.setNodeId = function (value) {
  return jspb.Message.setField(this, 3, value);
};

=======
proto.gooseai.AnswerMeta.prototype.setNodeId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.AnswerMeta} returns this
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.clearNodeId = function () {
  return jspb.Message.setField(this, 3, undefined);
};

=======
proto.gooseai.AnswerMeta.prototype.clearNodeId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.hasNodeId = function () {
  return jspb.Message.getField(this, 3) != null;
};

=======
proto.gooseai.AnswerMeta.prototype.hasNodeId = function() {
  return jspb.Message.getField(this, 3) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional string engine_id = 4;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.getEngineId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

=======
proto.gooseai.AnswerMeta.prototype.getEngineId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.AnswerMeta} returns this
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.setEngineId = function (value) {
  return jspb.Message.setField(this, 4, value);
};

=======
proto.gooseai.AnswerMeta.prototype.setEngineId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.AnswerMeta} returns this
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.clearEngineId = function () {
  return jspb.Message.setField(this, 4, undefined);
};

=======
proto.gooseai.AnswerMeta.prototype.clearEngineId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.AnswerMeta.prototype.hasEngineId = function () {
  return jspb.Message.getField(this, 4) != null;
};

=======
proto.gooseai.AnswerMeta.prototype.hasEngineId = function() {
  return jspb.Message.getField(this, 4) != null;
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseai.Answer.repeatedFields_ = [7];

<<<<<<< HEAD
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.Answer.prototype.toObject = function (opt_includeInstance) {
    return proto.gooseai.Answer.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.Answer} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.Answer.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        answerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
        requestId: jspb.Message.getFieldWithDefault(msg, 2, ""),
        received: jspb.Message.getFieldWithDefault(msg, 3, 0),
        created: jspb.Message.getFieldWithDefault(msg, 4, 0),
        meta:
          (f = msg.getMeta()) &&
          proto.gooseai.AnswerMeta.toObject(includeInstance, f),
        artifactsList: jspb.Message.toObjectList(
          msg.getArtifactsList(),
          proto.gooseai.Artifact.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.Answer.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.Answer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.Answer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.Answer.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    received: jspb.Message.getFieldWithDefault(msg, 3, 0),
    created: jspb.Message.getFieldWithDefault(msg, 4, 0),
    meta: (f = msg.getMeta()) && proto.gooseai.AnswerMeta.toObject(includeInstance, f),
    artifactsList: jspb.Message.toObjectList(msg.getArtifactsList(),
    proto.gooseai.Artifact.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.Answer}
 */
<<<<<<< HEAD
proto.gooseai.Answer.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Answer();
  return proto.gooseai.Answer.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.Answer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Answer;
  return proto.gooseai.Answer.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.Answer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.Answer}
 */
<<<<<<< HEAD
proto.gooseai.Answer.deserializeBinaryFromReader = function (msg, reader) {
=======
proto.gooseai.Answer.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAnswerId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setRequestId(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setReceived(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setCreated(value);
        break;
      case 6:
        var value = new proto.gooseai.AnswerMeta();
        reader.readMessage(
          value,
          proto.gooseai.AnswerMeta.deserializeBinaryFromReader
        );
        msg.setMeta(value);
        break;
      case 7:
        var value = new proto.gooseai.Artifact();
        reader.readMessage(
          value,
          proto.gooseai.Artifact.deserializeBinaryFromReader
        );
        msg.addArtifacts(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReceived(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreated(value);
      break;
    case 6:
      var value = new proto.gooseai.AnswerMeta;
      reader.readMessage(value,proto.gooseai.AnswerMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 7:
      var value = new proto.gooseai.Artifact;
      reader.readMessage(value,proto.gooseai.Artifact.deserializeBinaryFromReader);
      msg.addArtifacts(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.serializeBinary = function () {
=======
proto.gooseai.Answer.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.Answer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.Answer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.Answer.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAnswerId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getReceived();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getCreated();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(6, f, proto.gooseai.AnswerMeta.serializeBinaryToWriter);
=======
proto.gooseai.Answer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReceived();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCreated();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.gooseai.AnswerMeta.serializeBinaryToWriter
    );
>>>>>>> 917d866 (test)
  }
  f = message.getArtifactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.gooseai.Artifact.serializeBinaryToWriter
    );
  }
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * optional string answer_id = 1;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.getAnswerId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

=======
proto.gooseai.Answer.prototype.getAnswerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Answer} returns this
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.setAnswerId = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

=======
proto.gooseai.Answer.prototype.setAnswerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * optional string request_id = 2;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.getRequestId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

=======
proto.gooseai.Answer.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Answer} returns this
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.setRequestId = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

=======
proto.gooseai.Answer.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 received = 3;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.getReceived = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

=======
proto.gooseai.Answer.prototype.getReceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.Answer} returns this
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.setReceived = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

=======
proto.gooseai.Answer.prototype.setReceived = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * optional uint64 created = 4;
 * @return {number}
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.getCreated = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

=======
proto.gooseai.Answer.prototype.getCreated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {number} value
 * @return {!proto.gooseai.Answer} returns this
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.setCreated = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

=======
proto.gooseai.Answer.prototype.setCreated = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * optional AnswerMeta meta = 6;
 * @return {?proto.gooseai.AnswerMeta}
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.getMeta = function () {
  return /** @type{?proto.gooseai.AnswerMeta} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.AnswerMeta, 6)
  );
};

/**
 * @param {?proto.gooseai.AnswerMeta|undefined} value
 * @return {!proto.gooseai.Answer} returns this
 */
proto.gooseai.Answer.prototype.setMeta = function (value) {
  return jspb.Message.setWrapperField(this, 6, value);
};

=======
proto.gooseai.Answer.prototype.getMeta = function() {
  return /** @type{?proto.gooseai.AnswerMeta} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.AnswerMeta, 6));
};


/**
 * @param {?proto.gooseai.AnswerMeta|undefined} value
 * @return {!proto.gooseai.Answer} returns this
*/
proto.gooseai.Answer.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Answer} returns this
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.clearMeta = function () {
  return this.setMeta(undefined);
};

=======
proto.gooseai.Answer.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.hasMeta = function () {
  return jspb.Message.getField(this, 6) != null;
};

=======
proto.gooseai.Answer.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 6) != null;
};


>>>>>>> 917d866 (test)
/**
 * repeated Artifact artifacts = 7;
 * @return {!Array<!proto.gooseai.Artifact>}
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.getArtifactsList = function () {
  return /** @type{!Array<!proto.gooseai.Artifact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Artifact, 7)
  );
};

/**
 * @param {!Array<!proto.gooseai.Artifact>} value
 * @return {!proto.gooseai.Answer} returns this
 */
proto.gooseai.Answer.prototype.setArtifactsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};

=======
proto.gooseai.Answer.prototype.getArtifactsList = function() {
  return /** @type{!Array<!proto.gooseai.Artifact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Artifact, 7));
};


/**
 * @param {!Array<!proto.gooseai.Artifact>} value
 * @return {!proto.gooseai.Answer} returns this
*/
proto.gooseai.Answer.prototype.setArtifactsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.Artifact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.Artifact}
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.addArtifacts = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    7,
    opt_value,
    proto.gooseai.Artifact,
    opt_index
  );
};

=======
proto.gooseai.Answer.prototype.addArtifacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.gooseai.Artifact, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.Answer} returns this
 */
<<<<<<< HEAD
proto.gooseai.Answer.prototype.clearArtifactsList = function () {
  return this.setArtifactsList([]);
};

=======
proto.gooseai.Answer.prototype.clearArtifactsList = function() {
  return this.setArtifactsList([]);
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
<<<<<<< HEAD
proto.gooseai.Request.repeatedFields_ = [4, 10];
=======
proto.gooseai.Request.repeatedFields_ = [4,10];
>>>>>>> 917d866 (test)

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
<<<<<<< HEAD
proto.gooseai.Request.oneofGroups_ = [[5, 7, 8]];
=======
proto.gooseai.Request.oneofGroups_ = [[5,7,8]];
>>>>>>> 917d866 (test)

/**
 * @enum {number}
 */
proto.gooseai.Request.ParamsCase = {
  PARAMS_NOT_SET: 0,
  IMAGE: 5,
  CLASSIFIER: 7,
<<<<<<< HEAD
  ASSET: 8,
=======
  ASSET: 8
>>>>>>> 917d866 (test)
};

/**
 * @return {proto.gooseai.Request.ParamsCase}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getParamsCase = function () {
  return /** @type {proto.gooseai.Request.ParamsCase} */ (
    jspb.Message.computeOneofCase(this, proto.gooseai.Request.oneofGroups_[0])
  );
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.Request.prototype.toObject = function (opt_includeInstance) {
    return proto.gooseai.Request.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.Request} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.Request.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        engineId: jspb.Message.getFieldWithDefault(msg, 1, ""),
        requestId: jspb.Message.getFieldWithDefault(msg, 2, ""),
        requestedType: jspb.Message.getFieldWithDefault(msg, 3, 0),
        promptList: jspb.Message.toObjectList(
          msg.getPromptList(),
          proto.gooseai.Prompt.toObject,
          includeInstance
        ),
        image:
          (f = msg.getImage()) &&
          proto.gooseai.ImageParameters.toObject(includeInstance, f),
        classifier:
          (f = msg.getClassifier()) &&
          proto.gooseai.ClassifierParameters.toObject(includeInstance, f),
        asset:
          (f = msg.getAsset()) &&
          proto.gooseai.AssetParameters.toObject(includeInstance, f),
        conditioner:
          (f = msg.getConditioner()) &&
          proto.gooseai.ConditionerParameters.toObject(includeInstance, f),
        weightMethod: jspb.Message.getFieldWithDefault(msg, 9, 0),
        ucPromptList: jspb.Message.toObjectList(
          msg.getUcPromptList(),
          proto.gooseai.Prompt.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.Request.prototype.getParamsCase = function() {
  return /** @type {proto.gooseai.Request.ParamsCase} */(jspb.Message.computeOneofCase(this, proto.gooseai.Request.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    engineId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    requestedType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    promptList: jspb.Message.toObjectList(msg.getPromptList(),
    proto.gooseai.Prompt.toObject, includeInstance),
    image: (f = msg.getImage()) && proto.gooseai.ImageParameters.toObject(includeInstance, f),
    classifier: (f = msg.getClassifier()) && proto.gooseai.ClassifierParameters.toObject(includeInstance, f),
    asset: (f = msg.getAsset()) && proto.gooseai.AssetParameters.toObject(includeInstance, f),
    conditioner: (f = msg.getConditioner()) && proto.gooseai.ConditionerParameters.toObject(includeInstance, f),
    weightMethod: jspb.Message.getFieldWithDefault(msg, 9, 0),
    ucPromptList: jspb.Message.toObjectList(msg.getUcPromptList(),
    proto.gooseai.Prompt.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.Request}
 */
<<<<<<< HEAD
proto.gooseai.Request.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Request();
  return proto.gooseai.Request.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Request;
  return proto.gooseai.Request.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.Request}
 */
<<<<<<< HEAD
proto.gooseai.Request.deserializeBinaryFromReader = function (msg, reader) {
=======
proto.gooseai.Request.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setEngineId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setRequestId(value);
        break;
      case 3:
        var value = /** @type {!proto.gooseai.ArtifactType} */ (
          reader.readEnum()
        );
        msg.setRequestedType(value);
        break;
      case 4:
        var value = new proto.gooseai.Prompt();
        reader.readMessage(
          value,
          proto.gooseai.Prompt.deserializeBinaryFromReader
        );
        msg.addPrompt(value);
        break;
      case 5:
        var value = new proto.gooseai.ImageParameters();
        reader.readMessage(
          value,
          proto.gooseai.ImageParameters.deserializeBinaryFromReader
        );
        msg.setImage(value);
        break;
      case 7:
        var value = new proto.gooseai.ClassifierParameters();
        reader.readMessage(
          value,
          proto.gooseai.ClassifierParameters.deserializeBinaryFromReader
        );
        msg.setClassifier(value);
        break;
      case 8:
        var value = new proto.gooseai.AssetParameters();
        reader.readMessage(
          value,
          proto.gooseai.AssetParameters.deserializeBinaryFromReader
        );
        msg.setAsset(value);
        break;
      case 6:
        var value = new proto.gooseai.ConditionerParameters();
        reader.readMessage(
          value,
          proto.gooseai.ConditionerParameters.deserializeBinaryFromReader
        );
        msg.setConditioner(value);
        break;
      case 9:
        var value = /** @type {!proto.gooseai.WeightMethod} */ (
          reader.readEnum()
        );
        msg.setWeightMethod(value);
        break;
      case 10:
        var value = new proto.gooseai.Prompt();
        reader.readMessage(
          value,
          proto.gooseai.Prompt.deserializeBinaryFromReader
        );
        msg.addUcPrompt(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEngineId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 3:
      var value = /** @type {!proto.gooseai.ArtifactType} */ (reader.readEnum());
      msg.setRequestedType(value);
      break;
    case 4:
      var value = new proto.gooseai.Prompt;
      reader.readMessage(value,proto.gooseai.Prompt.deserializeBinaryFromReader);
      msg.addPrompt(value);
      break;
    case 5:
      var value = new proto.gooseai.ImageParameters;
      reader.readMessage(value,proto.gooseai.ImageParameters.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 7:
      var value = new proto.gooseai.ClassifierParameters;
      reader.readMessage(value,proto.gooseai.ClassifierParameters.deserializeBinaryFromReader);
      msg.setClassifier(value);
      break;
    case 8:
      var value = new proto.gooseai.AssetParameters;
      reader.readMessage(value,proto.gooseai.AssetParameters.deserializeBinaryFromReader);
      msg.setAsset(value);
      break;
    case 6:
      var value = new proto.gooseai.ConditionerParameters;
      reader.readMessage(value,proto.gooseai.ConditionerParameters.deserializeBinaryFromReader);
      msg.setConditioner(value);
      break;
    case 9:
      var value = /** @type {!proto.gooseai.WeightMethod} */ (reader.readEnum());
      msg.setWeightMethod(value);
      break;
    case 10:
      var value = new proto.gooseai.Prompt;
      reader.readMessage(value,proto.gooseai.Prompt.deserializeBinaryFromReader);
      msg.addUcPrompt(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.serializeBinary = function () {
=======
proto.gooseai.Request.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.Request.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getEngineId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getRequestedType();
  if (f !== 0.0) {
    writer.writeEnum(3, f);
=======
proto.gooseai.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEngineId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequestedType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
>>>>>>> 917d866 (test)
  }
  f = message.getPromptList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.gooseai.Prompt.serializeBinaryToWriter
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.gooseai.ImageParameters.serializeBinaryToWriter
    );
  }
  f = message.getClassifier();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.gooseai.ClassifierParameters.serializeBinaryToWriter
    );
  }
  f = message.getAsset();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.gooseai.AssetParameters.serializeBinaryToWriter
    );
  }
  f = message.getConditioner();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.gooseai.ConditionerParameters.serializeBinaryToWriter
    );
  }
<<<<<<< HEAD
  f = /** @type {!proto.gooseai.WeightMethod} */ (
    jspb.Message.getField(message, 9)
  );
  if (f != null) {
    writer.writeEnum(9, f);
=======
  f = /** @type {!proto.gooseai.WeightMethod} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
>>>>>>> 917d866 (test)
  }
  f = message.getUcPromptList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.gooseai.Prompt.serializeBinaryToWriter
    );
  }
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * optional string engine_id = 1;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getEngineId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

=======
proto.gooseai.Request.prototype.getEngineId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.setEngineId = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

=======
proto.gooseai.Request.prototype.setEngineId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * optional string request_id = 2;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getRequestId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

=======
proto.gooseai.Request.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.setRequestId = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

=======
proto.gooseai.Request.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * optional ArtifactType requested_type = 3;
 * @return {!proto.gooseai.ArtifactType}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getRequestedType = function () {
  return /** @type {!proto.gooseai.ArtifactType} */ (
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};

=======
proto.gooseai.Request.prototype.getRequestedType = function() {
  return /** @type {!proto.gooseai.ArtifactType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.ArtifactType} value
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.setRequestedType = function (value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};

=======
proto.gooseai.Request.prototype.setRequestedType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * repeated Prompt prompt = 4;
 * @return {!Array<!proto.gooseai.Prompt>}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getPromptList = function () {
  return /** @type{!Array<!proto.gooseai.Prompt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Prompt, 4)
  );
};

/**
 * @param {!Array<!proto.gooseai.Prompt>} value
 * @return {!proto.gooseai.Request} returns this
 */
proto.gooseai.Request.prototype.setPromptList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};

=======
proto.gooseai.Request.prototype.getPromptList = function() {
  return /** @type{!Array<!proto.gooseai.Prompt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Prompt, 4));
};


/**
 * @param {!Array<!proto.gooseai.Prompt>} value
 * @return {!proto.gooseai.Request} returns this
*/
proto.gooseai.Request.prototype.setPromptList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.Prompt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.Prompt}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.addPrompt = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    4,
    opt_value,
    proto.gooseai.Prompt,
    opt_index
  );
};

=======
proto.gooseai.Request.prototype.addPrompt = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.gooseai.Prompt, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.clearPromptList = function () {
  return this.setPromptList([]);
};

=======
proto.gooseai.Request.prototype.clearPromptList = function() {
  return this.setPromptList([]);
};


>>>>>>> 917d866 (test)
/**
 * optional ImageParameters image = 5;
 * @return {?proto.gooseai.ImageParameters}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getImage = function () {
  return /** @type{?proto.gooseai.ImageParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.ImageParameters, 5)
  );
};

/**
 * @param {?proto.gooseai.ImageParameters|undefined} value
 * @return {!proto.gooseai.Request} returns this
 */
proto.gooseai.Request.prototype.setImage = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    5,
    proto.gooseai.Request.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Request.prototype.getImage = function() {
  return /** @type{?proto.gooseai.ImageParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.ImageParameters, 5));
};


/**
 * @param {?proto.gooseai.ImageParameters|undefined} value
 * @return {!proto.gooseai.Request} returns this
*/
proto.gooseai.Request.prototype.setImage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.gooseai.Request.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.clearImage = function () {
  return this.setImage(undefined);
};

=======
proto.gooseai.Request.prototype.clearImage = function() {
  return this.setImage(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.hasImage = function () {
  return jspb.Message.getField(this, 5) != null;
};

=======
proto.gooseai.Request.prototype.hasImage = function() {
  return jspb.Message.getField(this, 5) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional ClassifierParameters classifier = 7;
 * @return {?proto.gooseai.ClassifierParameters}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getClassifier = function () {
  return /** @type{?proto.gooseai.ClassifierParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.ClassifierParameters, 7)
  );
};

/**
 * @param {?proto.gooseai.ClassifierParameters|undefined} value
 * @return {!proto.gooseai.Request} returns this
 */
proto.gooseai.Request.prototype.setClassifier = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    7,
    proto.gooseai.Request.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Request.prototype.getClassifier = function() {
  return /** @type{?proto.gooseai.ClassifierParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.ClassifierParameters, 7));
};


/**
 * @param {?proto.gooseai.ClassifierParameters|undefined} value
 * @return {!proto.gooseai.Request} returns this
*/
proto.gooseai.Request.prototype.setClassifier = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.gooseai.Request.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.clearClassifier = function () {
  return this.setClassifier(undefined);
};

=======
proto.gooseai.Request.prototype.clearClassifier = function() {
  return this.setClassifier(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.hasClassifier = function () {
  return jspb.Message.getField(this, 7) != null;
};

=======
proto.gooseai.Request.prototype.hasClassifier = function() {
  return jspb.Message.getField(this, 7) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional AssetParameters asset = 8;
 * @return {?proto.gooseai.AssetParameters}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getAsset = function () {
  return /** @type{?proto.gooseai.AssetParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.AssetParameters, 8)
  );
};

/**
 * @param {?proto.gooseai.AssetParameters|undefined} value
 * @return {!proto.gooseai.Request} returns this
 */
proto.gooseai.Request.prototype.setAsset = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    8,
    proto.gooseai.Request.oneofGroups_[0],
    value
  );
};

=======
proto.gooseai.Request.prototype.getAsset = function() {
  return /** @type{?proto.gooseai.AssetParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.AssetParameters, 8));
};


/**
 * @param {?proto.gooseai.AssetParameters|undefined} value
 * @return {!proto.gooseai.Request} returns this
*/
proto.gooseai.Request.prototype.setAsset = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.gooseai.Request.oneofGroups_[0], value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.clearAsset = function () {
  return this.setAsset(undefined);
};

=======
proto.gooseai.Request.prototype.clearAsset = function() {
  return this.setAsset(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.hasAsset = function () {
  return jspb.Message.getField(this, 8) != null;
};

=======
proto.gooseai.Request.prototype.hasAsset = function() {
  return jspb.Message.getField(this, 8) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional ConditionerParameters conditioner = 6;
 * @return {?proto.gooseai.ConditionerParameters}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getConditioner = function () {
  return /** @type{?proto.gooseai.ConditionerParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.ConditionerParameters, 6)
  );
};

/**
 * @param {?proto.gooseai.ConditionerParameters|undefined} value
 * @return {!proto.gooseai.Request} returns this
 */
proto.gooseai.Request.prototype.setConditioner = function (value) {
  return jspb.Message.setWrapperField(this, 6, value);
};

=======
proto.gooseai.Request.prototype.getConditioner = function() {
  return /** @type{?proto.gooseai.ConditionerParameters} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.ConditionerParameters, 6));
};


/**
 * @param {?proto.gooseai.ConditionerParameters|undefined} value
 * @return {!proto.gooseai.Request} returns this
*/
proto.gooseai.Request.prototype.setConditioner = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.clearConditioner = function () {
  return this.setConditioner(undefined);
};

=======
proto.gooseai.Request.prototype.clearConditioner = function() {
  return this.setConditioner(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.hasConditioner = function () {
  return jspb.Message.getField(this, 6) != null;
};

=======
proto.gooseai.Request.prototype.hasConditioner = function() {
  return jspb.Message.getField(this, 6) != null;
};


>>>>>>> 917d866 (test)
/**
 * optional WeightMethod weight_method = 9;
 * @return {!proto.gooseai.WeightMethod}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getWeightMethod = function () {
  return /** @type {!proto.gooseai.WeightMethod} */ (
    jspb.Message.getFieldWithDefault(this, 9, 0)
  );
};

=======
proto.gooseai.Request.prototype.getWeightMethod = function() {
  return /** @type {!proto.gooseai.WeightMethod} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.WeightMethod} value
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.setWeightMethod = function (value) {
  return jspb.Message.setField(this, 9, value);
};

=======
proto.gooseai.Request.prototype.setWeightMethod = function(value) {
  return jspb.Message.setField(this, 9, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.clearWeightMethod = function () {
  return jspb.Message.setField(this, 9, undefined);
};

=======
proto.gooseai.Request.prototype.clearWeightMethod = function() {
  return jspb.Message.setField(this, 9, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.hasWeightMethod = function () {
  return jspb.Message.getField(this, 9) != null;
};

=======
proto.gooseai.Request.prototype.hasWeightMethod = function() {
  return jspb.Message.getField(this, 9) != null;
};


>>>>>>> 917d866 (test)
/**
 * repeated Prompt uc_prompt = 10;
 * @return {!Array<!proto.gooseai.Prompt>}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.getUcPromptList = function () {
  return /** @type{!Array<!proto.gooseai.Prompt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Prompt, 10)
  );
};

/**
 * @param {!Array<!proto.gooseai.Prompt>} value
 * @return {!proto.gooseai.Request} returns this
 */
proto.gooseai.Request.prototype.setUcPromptList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};

=======
proto.gooseai.Request.prototype.getUcPromptList = function() {
  return /** @type{!Array<!proto.gooseai.Prompt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Prompt, 10));
};


/**
 * @param {!Array<!proto.gooseai.Prompt>} value
 * @return {!proto.gooseai.Request} returns this
*/
proto.gooseai.Request.prototype.setUcPromptList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.Prompt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.Prompt}
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.addUcPrompt = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    10,
    opt_value,
    proto.gooseai.Prompt,
    opt_index
  );
};

=======
proto.gooseai.Request.prototype.addUcPrompt = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.gooseai.Prompt, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.Request} returns this
 */
<<<<<<< HEAD
proto.gooseai.Request.prototype.clearUcPromptList = function () {
  return this.setUcPromptList([]);
};

=======
proto.gooseai.Request.prototype.clearUcPromptList = function() {
  return this.setUcPromptList([]);
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.repeatedFields_ = [1, 3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.OnStatus.prototype.toObject = function (opt_includeInstance) {
    return proto.gooseai.OnStatus.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.OnStatus} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.OnStatus.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        reasonList:
          (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
        target: jspb.Message.getFieldWithDefault(msg, 2, ""),
        actionList:
          (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======
proto.gooseai.OnStatus.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.OnStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.OnStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.OnStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.OnStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    reasonList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    target: jspb.Message.getFieldWithDefault(msg, 2, ""),
    actionList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.OnStatus}
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.OnStatus();
  return proto.gooseai.OnStatus.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.OnStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.OnStatus;
  return proto.gooseai.OnStatus.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.OnStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.OnStatus}
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.deserializeBinaryFromReader = function (msg, reader) {
=======
proto.gooseai.OnStatus.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var values = /** @type {!Array<!proto.gooseai.FinishReason>} */ (
          reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]
        );
        for (var i = 0; i < values.length; i++) {
          msg.addReason(values[i]);
        }
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setTarget(value);
        break;
      case 3:
        var values = /** @type {!Array<!proto.gooseai.StageAction>} */ (
          reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]
        );
        for (var i = 0; i < values.length; i++) {
          msg.addAction(values[i]);
        }
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var values = /** @type {!Array<!proto.gooseai.FinishReason>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addReason(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.gooseai.StageAction>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAction(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.serializeBinary = function () {
=======
proto.gooseai.OnStatus.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.OnStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.OnStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getReasonList();
  if (f.length > 0) {
    writer.writePackedEnum(1, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(2, f);
  }
  f = message.getActionList();
  if (f.length > 0) {
    writer.writePackedEnum(3, f);
  }
};

=======
proto.gooseai.OnStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReasonList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActionList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
};


>>>>>>> 917d866 (test)
/**
 * repeated FinishReason reason = 1;
 * @return {!Array<!proto.gooseai.FinishReason>}
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.getReasonList = function () {
  return /** @type {!Array<!proto.gooseai.FinishReason>} */ (
    jspb.Message.getRepeatedField(this, 1)
  );
};

=======
proto.gooseai.OnStatus.prototype.getReasonList = function() {
  return /** @type {!Array<!proto.gooseai.FinishReason>} */ (jspb.Message.getRepeatedField(this, 1));
};


>>>>>>> 917d866 (test)
/**
 * @param {!Array<!proto.gooseai.FinishReason>} value
 * @return {!proto.gooseai.OnStatus} returns this
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.setReasonList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

=======
proto.gooseai.OnStatus.prototype.setReasonList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.FinishReason} value
 * @param {number=} opt_index
 * @return {!proto.gooseai.OnStatus} returns this
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.addReason = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

=======
proto.gooseai.OnStatus.prototype.addReason = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.OnStatus} returns this
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.clearReasonList = function () {
  return this.setReasonList([]);
};

=======
proto.gooseai.OnStatus.prototype.clearReasonList = function() {
  return this.setReasonList([]);
};


>>>>>>> 917d866 (test)
/**
 * optional string target = 2;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.getTarget = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

=======
proto.gooseai.OnStatus.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.OnStatus} returns this
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.setTarget = function (value) {
  return jspb.Message.setField(this, 2, value);
};

=======
proto.gooseai.OnStatus.prototype.setTarget = function(value) {
  return jspb.Message.setField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the field making it undefined.
 * @return {!proto.gooseai.OnStatus} returns this
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.clearTarget = function () {
  return jspb.Message.setField(this, 2, undefined);
};

=======
proto.gooseai.OnStatus.prototype.clearTarget = function() {
  return jspb.Message.setField(this, 2, undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.hasTarget = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.OnStatus.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 2) != null;
};


>>>>>>> 917d866 (test)
/**
 * repeated StageAction action = 3;
 * @return {!Array<!proto.gooseai.StageAction>}
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.getActionList = function () {
  return /** @type {!Array<!proto.gooseai.StageAction>} */ (
    jspb.Message.getRepeatedField(this, 3)
  );
};

=======
proto.gooseai.OnStatus.prototype.getActionList = function() {
  return /** @type {!Array<!proto.gooseai.StageAction>} */ (jspb.Message.getRepeatedField(this, 3));
};


>>>>>>> 917d866 (test)
/**
 * @param {!Array<!proto.gooseai.StageAction>} value
 * @return {!proto.gooseai.OnStatus} returns this
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.setActionList = function (value) {
  return jspb.Message.setField(this, 3, value || []);
};

=======
proto.gooseai.OnStatus.prototype.setActionList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.StageAction} value
 * @param {number=} opt_index
 * @return {!proto.gooseai.OnStatus} returns this
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.addAction = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};

=======
proto.gooseai.OnStatus.prototype.addAction = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.OnStatus} returns this
 */
<<<<<<< HEAD
proto.gooseai.OnStatus.prototype.clearActionList = function () {
  return this.setActionList([]);
};

=======
proto.gooseai.OnStatus.prototype.clearActionList = function() {
  return this.setActionList([]);
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseai.Stage.repeatedFields_ = [3];

<<<<<<< HEAD
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.Stage.prototype.toObject = function (opt_includeInstance) {
    return proto.gooseai.Stage.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.Stage} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.Stage.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ""),
        request:
          (f = msg.getRequest()) &&
          proto.gooseai.Request.toObject(includeInstance, f),
        onStatusList: jspb.Message.toObjectList(
          msg.getOnStatusList(),
          proto.gooseai.OnStatus.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.Stage.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.Stage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.Stage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.Stage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    request: (f = msg.getRequest()) && proto.gooseai.Request.toObject(includeInstance, f),
    onStatusList: jspb.Message.toObjectList(msg.getOnStatusList(),
    proto.gooseai.OnStatus.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.Stage}
 */
<<<<<<< HEAD
proto.gooseai.Stage.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Stage();
  return proto.gooseai.Stage.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.Stage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.Stage;
  return proto.gooseai.Stage.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.Stage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.Stage}
 */
<<<<<<< HEAD
proto.gooseai.Stage.deserializeBinaryFromReader = function (msg, reader) {
=======
proto.gooseai.Stage.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setId(value);
        break;
      case 2:
        var value = new proto.gooseai.Request();
        reader.readMessage(
          value,
          proto.gooseai.Request.deserializeBinaryFromReader
        );
        msg.setRequest(value);
        break;
      case 3:
        var value = new proto.gooseai.OnStatus();
        reader.readMessage(
          value,
          proto.gooseai.OnStatus.deserializeBinaryFromReader
        );
        msg.addOnStatus(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.gooseai.Request;
      reader.readMessage(value,proto.gooseai.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 3:
      var value = new proto.gooseai.OnStatus;
      reader.readMessage(value,proto.gooseai.OnStatus.deserializeBinaryFromReader);
      msg.addOnStatus(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.Stage.prototype.serializeBinary = function () {
=======
proto.gooseai.Stage.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.Stage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.Stage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.Stage.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.gooseai.Request.serializeBinaryToWriter);
=======
proto.gooseai.Stage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gooseai.Request.serializeBinaryToWriter
    );
>>>>>>> 917d866 (test)
  }
  f = message.getOnStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.gooseai.OnStatus.serializeBinaryToWriter
    );
  }
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * optional string id = 1;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.Stage.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

=======
proto.gooseai.Stage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.Stage} returns this
 */
<<<<<<< HEAD
proto.gooseai.Stage.prototype.setId = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

=======
proto.gooseai.Stage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * optional Request request = 2;
 * @return {?proto.gooseai.Request}
 */
<<<<<<< HEAD
proto.gooseai.Stage.prototype.getRequest = function () {
  return /** @type{?proto.gooseai.Request} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Request, 2)
  );
};

/**
 * @param {?proto.gooseai.Request|undefined} value
 * @return {!proto.gooseai.Stage} returns this
 */
proto.gooseai.Stage.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

=======
proto.gooseai.Stage.prototype.getRequest = function() {
  return /** @type{?proto.gooseai.Request} */ (
    jspb.Message.getWrapperField(this, proto.gooseai.Request, 2));
};


/**
 * @param {?proto.gooseai.Request|undefined} value
 * @return {!proto.gooseai.Stage} returns this
*/
proto.gooseai.Stage.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseai.Stage} returns this
 */
<<<<<<< HEAD
proto.gooseai.Stage.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

=======
proto.gooseai.Stage.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


>>>>>>> 917d866 (test)
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD
proto.gooseai.Stage.prototype.hasRequest = function () {
  return jspb.Message.getField(this, 2) != null;
};

=======
proto.gooseai.Stage.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


>>>>>>> 917d866 (test)
/**
 * repeated OnStatus on_status = 3;
 * @return {!Array<!proto.gooseai.OnStatus>}
 */
<<<<<<< HEAD
proto.gooseai.Stage.prototype.getOnStatusList = function () {
  return /** @type{!Array<!proto.gooseai.OnStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.OnStatus, 3)
  );
};

/**
 * @param {!Array<!proto.gooseai.OnStatus>} value
 * @return {!proto.gooseai.Stage} returns this
 */
proto.gooseai.Stage.prototype.setOnStatusList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

=======
proto.gooseai.Stage.prototype.getOnStatusList = function() {
  return /** @type{!Array<!proto.gooseai.OnStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.OnStatus, 3));
};


/**
 * @param {!Array<!proto.gooseai.OnStatus>} value
 * @return {!proto.gooseai.Stage} returns this
*/
proto.gooseai.Stage.prototype.setOnStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.OnStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.OnStatus}
 */
<<<<<<< HEAD
proto.gooseai.Stage.prototype.addOnStatus = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    3,
    opt_value,
    proto.gooseai.OnStatus,
    opt_index
  );
};

=======
proto.gooseai.Stage.prototype.addOnStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.gooseai.OnStatus, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.Stage} returns this
 */
<<<<<<< HEAD
proto.gooseai.Stage.prototype.clearOnStatusList = function () {
  return this.setOnStatusList([]);
};

=======
proto.gooseai.Stage.prototype.clearOnStatusList = function() {
  return this.setOnStatusList([]);
};



>>>>>>> 917d866 (test)
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseai.ChainRequest.repeatedFields_ = [2];

<<<<<<< HEAD
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.gooseai.ChainRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.gooseai.ChainRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.gooseai.ChainRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.gooseai.ChainRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
        stageList: jspb.Message.toObjectList(
          msg.getStageList(),
          proto.gooseai.Stage.toObject,
          includeInstance
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

=======


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseai.ChainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseai.ChainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseai.ChainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseai.ChainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stageList: jspb.Message.toObjectList(msg.getStageList(),
    proto.gooseai.Stage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseai.ChainRequest}
 */
<<<<<<< HEAD
proto.gooseai.ChainRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ChainRequest();
  return proto.gooseai.ChainRequest.deserializeBinaryFromReader(msg, reader);
};

=======
proto.gooseai.ChainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseai.ChainRequest;
  return proto.gooseai.ChainRequest.deserializeBinaryFromReader(msg, reader);
};


>>>>>>> 917d866 (test)
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseai.ChainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseai.ChainRequest}
 */
<<<<<<< HEAD
proto.gooseai.ChainRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
=======
proto.gooseai.ChainRequest.deserializeBinaryFromReader = function(msg, reader) {
>>>>>>> 917d866 (test)
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
<<<<<<< HEAD
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setRequestId(value);
        break;
      case 2:
        var value = new proto.gooseai.Stage();
        reader.readMessage(
          value,
          proto.gooseai.Stage.deserializeBinaryFromReader
        );
        msg.addStage(value);
        break;
      default:
        reader.skipField();
        break;
=======
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = new proto.gooseai.Stage;
      reader.readMessage(value,proto.gooseai.Stage.deserializeBinaryFromReader);
      msg.addStage(value);
      break;
    default:
      reader.skipField();
      break;
>>>>>>> 917d866 (test)
    }
  }
  return msg;
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
<<<<<<< HEAD
proto.gooseai.ChainRequest.prototype.serializeBinary = function () {
=======
proto.gooseai.ChainRequest.prototype.serializeBinary = function() {
>>>>>>> 917d866 (test)
  var writer = new jspb.BinaryWriter();
  proto.gooseai.ChainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseai.ChainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
<<<<<<< HEAD
proto.gooseai.ChainRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(1, f);
=======
proto.gooseai.ChainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
>>>>>>> 917d866 (test)
  }
  f = message.getStageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gooseai.Stage.serializeBinaryToWriter
    );
  }
};

<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
/**
 * optional string request_id = 1;
 * @return {string}
 */
<<<<<<< HEAD
proto.gooseai.ChainRequest.prototype.getRequestId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

=======
proto.gooseai.ChainRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


>>>>>>> 917d866 (test)
/**
 * @param {string} value
 * @return {!proto.gooseai.ChainRequest} returns this
 */
<<<<<<< HEAD
proto.gooseai.ChainRequest.prototype.setRequestId = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

=======
proto.gooseai.ChainRequest.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


>>>>>>> 917d866 (test)
/**
 * repeated Stage stage = 2;
 * @return {!Array<!proto.gooseai.Stage>}
 */
<<<<<<< HEAD
proto.gooseai.ChainRequest.prototype.getStageList = function () {
  return /** @type{!Array<!proto.gooseai.Stage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Stage, 2)
  );
};

/**
 * @param {!Array<!proto.gooseai.Stage>} value
 * @return {!proto.gooseai.ChainRequest} returns this
 */
proto.gooseai.ChainRequest.prototype.setStageList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

=======
proto.gooseai.ChainRequest.prototype.getStageList = function() {
  return /** @type{!Array<!proto.gooseai.Stage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Stage, 2));
};


/**
 * @param {!Array<!proto.gooseai.Stage>} value
 * @return {!proto.gooseai.ChainRequest} returns this
*/
proto.gooseai.ChainRequest.prototype.setStageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


>>>>>>> 917d866 (test)
/**
 * @param {!proto.gooseai.Stage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseai.Stage}
 */
<<<<<<< HEAD
proto.gooseai.ChainRequest.prototype.addStage = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.gooseai.Stage,
    opt_index
  );
};

=======
proto.gooseai.ChainRequest.prototype.addStage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseai.Stage, opt_index);
};


>>>>>>> 917d866 (test)
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseai.ChainRequest} returns this
 */
<<<<<<< HEAD
proto.gooseai.ChainRequest.prototype.clearStageList = function () {
  return this.setStageList([]);
};

=======
proto.gooseai.ChainRequest.prototype.clearStageList = function() {
  return this.setStageList([]);
};


>>>>>>> 917d866 (test)
/**
 * @enum {number}
 */
proto.gooseai.FinishReason = {
  NULL: 0,
  LENGTH: 1,
  STOP: 2,
  ERROR: 3,
<<<<<<< HEAD
  FILTER: 4,
=======
  FILTER: 4
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.ArtifactType = {
  ARTIFACT_NONE: 0,
  ARTIFACT_IMAGE: 1,
  ARTIFACT_VIDEO: 2,
  ARTIFACT_TEXT: 3,
  ARTIFACT_TOKENS: 4,
  ARTIFACT_EMBEDDING: 5,
  ARTIFACT_CLASSIFICATIONS: 6,
  ARTIFACT_MASK: 7,
  ARTIFACT_LATENT: 8,
<<<<<<< HEAD
  ARTIFACT_TENSOR: 9,
=======
  ARTIFACT_TENSOR: 9
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.MaskedAreaInit = {
  MASKED_AREA_INIT_ZERO: 0,
  MASKED_AREA_INIT_RANDOM: 1,
<<<<<<< HEAD
  MASKED_AREA_INIT_ORIGINAL: 2,
=======
  MASKED_AREA_INIT_ORIGINAL: 2
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.WeightMethod = {
  TEXT_ENCODER: 0,
<<<<<<< HEAD
  CROSS_ATTENTION: 1,
=======
  CROSS_ATTENTION: 1
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.DiffusionSampler = {
  SAMPLER_DDIM: 0,
  SAMPLER_DDPM: 1,
  SAMPLER_K_EULER: 2,
  SAMPLER_K_EULER_ANCESTRAL: 3,
  SAMPLER_K_HEUN: 4,
  SAMPLER_K_DPM_2: 5,
  SAMPLER_K_DPM_2_ANCESTRAL: 6,
  SAMPLER_K_LMS: 7,
  SAMPLER_K_DPMPP_2S_ANCESTRAL: 8,
<<<<<<< HEAD
  SAMPLER_K_DPMPP_2M: 9,
=======
  SAMPLER_K_DPMPP_2M: 9
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.Upscaler = {
  UPSCALER_RGB: 0,
  UPSCALER_GFPGAN: 1,
<<<<<<< HEAD
  UPSCALER_ESRGAN: 2,
=======
  UPSCALER_ESRGAN: 2
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.GuidancePreset = {
  GUIDANCE_PRESET_NONE: 0,
  GUIDANCE_PRESET_SIMPLE: 1,
  GUIDANCE_PRESET_FAST_BLUE: 2,
  GUIDANCE_PRESET_FAST_GREEN: 3,
  GUIDANCE_PRESET_SLOW: 4,
  GUIDANCE_PRESET_SLOWER: 5,
<<<<<<< HEAD
  GUIDANCE_PRESET_SLOWEST: 6,
=======
  GUIDANCE_PRESET_SLOWEST: 6
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.ModelArchitecture = {
  MODEL_ARCHITECTURE_NONE: 0,
  MODEL_ARCHITECTURE_CLIP_VIT: 1,
  MODEL_ARCHITECTURE_CLIP_RESNET: 2,
<<<<<<< HEAD
  MODEL_ARCHITECTURE_LDM: 3,
=======
  MODEL_ARCHITECTURE_LDM: 3
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.Action = {
  ACTION_PASSTHROUGH: 0,
  ACTION_REGENERATE_DUPLICATE: 1,
  ACTION_REGENERATE: 2,
  ACTION_OBFUSCATE_DUPLICATE: 3,
  ACTION_OBFUSCATE: 4,
<<<<<<< HEAD
  ACTION_DISCARD: 5,
=======
  ACTION_DISCARD: 5
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.ClassifierMode = {
  CLSFR_MODE_ZEROSHOT: 0,
<<<<<<< HEAD
  CLSFR_MODE_MULTICLASS: 1,
=======
  CLSFR_MODE_MULTICLASS: 1
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.AssetAction = {
  ASSET_PUT: 0,
  ASSET_GET: 1,
<<<<<<< HEAD
  ASSET_DELETE: 2,
=======
  ASSET_DELETE: 2
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.AssetUse = {
  ASSET_USE_UNDEFINED: 0,
  ASSET_USE_INPUT: 1,
  ASSET_USE_OUTPUT: 2,
  ASSET_USE_INTERMEDIATE: 3,
<<<<<<< HEAD
  ASSET_USE_PROJECT: 4,
=======
  ASSET_USE_PROJECT: 4
>>>>>>> 917d866 (test)
};

/**
 * @enum {number}
 */
proto.gooseai.StageAction = {
  STAGE_ACTION_PASS: 0,
  STAGE_ACTION_DISCARD: 1,
<<<<<<< HEAD
  STAGE_ACTION_RETURN: 2,
=======
  STAGE_ACTION_RETURN: 2
>>>>>>> 917d866 (test)
};

goog.object.extend(exports, proto.gooseai);
