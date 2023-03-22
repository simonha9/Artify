// package: gooseai
// file: engines.proto

import * as jspb from "google-protobuf";

export class EngineInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getReady(): boolean;
  setReady(value: boolean): void;

  getType(): EngineTypeMap[keyof EngineTypeMap];
  setType(value: EngineTypeMap[keyof EngineTypeMap]): void;

  getTokenizer(): EngineTokenizerMap[keyof EngineTokenizerMap];
  setTokenizer(value: EngineTokenizerMap[keyof EngineTokenizerMap]): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineInfo.AsObject;
<<<<<<< HEAD
  static toObject(
    includeInstance: boolean,
    msg: EngineInfo
  ): EngineInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: EngineInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): EngineInfo;
  static deserializeBinaryFromReader(
    message: EngineInfo,
    reader: jspb.BinaryReader
  ): EngineInfo;
=======
  static toObject(includeInstance: boolean, msg: EngineInfo): EngineInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineInfo;
  static deserializeBinaryFromReader(message: EngineInfo, reader: jspb.BinaryReader): EngineInfo;
>>>>>>> 917d866 (test)
}

export namespace EngineInfo {
  export type AsObject = {
<<<<<<< HEAD
    id: string;
    owner: string;
    ready: boolean;
    type: EngineTypeMap[keyof EngineTypeMap];
    tokenizer: EngineTokenizerMap[keyof EngineTokenizerMap];
    name: string;
    description: string;
  };
=======
    id: string,
    owner: string,
    ready: boolean,
    type: EngineTypeMap[keyof EngineTypeMap],
    tokenizer: EngineTokenizerMap[keyof EngineTokenizerMap],
    name: string,
    description: string,
  }
>>>>>>> 917d866 (test)
}

export class ListEnginesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEnginesRequest.AsObject;
<<<<<<< HEAD
  static toObject(
    includeInstance: boolean,
    msg: ListEnginesRequest
  ): ListEnginesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListEnginesRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListEnginesRequest;
  static deserializeBinaryFromReader(
    message: ListEnginesRequest,
    reader: jspb.BinaryReader
  ): ListEnginesRequest;
}

export namespace ListEnginesRequest {
  export type AsObject = {};
=======
  static toObject(includeInstance: boolean, msg: ListEnginesRequest): ListEnginesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEnginesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEnginesRequest;
  static deserializeBinaryFromReader(message: ListEnginesRequest, reader: jspb.BinaryReader): ListEnginesRequest;
}

export namespace ListEnginesRequest {
  export type AsObject = {
  }
>>>>>>> 917d866 (test)
}

export class Engines extends jspb.Message {
  clearEngineList(): void;
  getEngineList(): Array<EngineInfo>;
  setEngineList(value: Array<EngineInfo>): void;
  addEngine(value?: EngineInfo, index?: number): EngineInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Engines.AsObject;
  static toObject(includeInstance: boolean, msg: Engines): Engines.AsObject;
<<<<<<< HEAD
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Engines,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Engines;
  static deserializeBinaryFromReader(
    message: Engines,
    reader: jspb.BinaryReader
  ): Engines;
=======
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Engines, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Engines;
  static deserializeBinaryFromReader(message: Engines, reader: jspb.BinaryReader): Engines;
>>>>>>> 917d866 (test)
}

export namespace Engines {
  export type AsObject = {
<<<<<<< HEAD
    engineList: Array<EngineInfo.AsObject>;
  };
=======
    engineList: Array<EngineInfo.AsObject>,
  }
>>>>>>> 917d866 (test)
}

export interface EngineTypeMap {
  TEXT: 0;
  PICTURE: 1;
  AUDIO: 2;
  VIDEO: 3;
  CLASSIFICATION: 4;
  STORAGE: 5;
}

export const EngineType: EngineTypeMap;

export interface EngineTokenizerMap {
  GPT2: 0;
  PILE: 1;
}

export const EngineTokenizer: EngineTokenizerMap;
<<<<<<< HEAD
=======

>>>>>>> 917d866 (test)
