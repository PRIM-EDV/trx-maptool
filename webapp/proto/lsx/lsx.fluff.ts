/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface GetFluffFiles {}

export interface GetFluffFiles_Response {
  files: string[];
}

export interface GetFluffFiles_Request {}

export interface GetFluffState {}

export interface GetFluffState_Response {
  state: boolean;
}

export interface GetFluffState_Request {}

export interface SetFluffState {}

export interface SetFluffState_Request {
  state: boolean;
}

export interface SetFluffState_Response {}

function createBaseGetFluffFiles(): GetFluffFiles {
  return {};
}

export const GetFluffFiles = {
  encode(
    _: GetFluffFiles,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFluffFiles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffFiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetFluffFiles {
    return {};
  },

  toJSON(_: GetFluffFiles): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffFiles>, I>>(
    _: I
  ): GetFluffFiles {
    const message = createBaseGetFluffFiles();
    return message;
  },
};

function createBaseGetFluffFiles_Response(): GetFluffFiles_Response {
  return { files: [] };
}

export const GetFluffFiles_Response = {
  encode(
    message: GetFluffFiles_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.files) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFluffFiles_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffFiles_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFluffFiles_Response {
    return {
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetFluffFiles_Response): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffFiles_Response>, I>>(
    object: I
  ): GetFluffFiles_Response {
    const message = createBaseGetFluffFiles_Response();
    message.files = object.files?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetFluffFiles_Request(): GetFluffFiles_Request {
  return {};
}

export const GetFluffFiles_Request = {
  encode(
    _: GetFluffFiles_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFluffFiles_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffFiles_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetFluffFiles_Request {
    return {};
  },

  toJSON(_: GetFluffFiles_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffFiles_Request>, I>>(
    _: I
  ): GetFluffFiles_Request {
    const message = createBaseGetFluffFiles_Request();
    return message;
  },
};

function createBaseGetFluffState(): GetFluffState {
  return {};
}

export const GetFluffState = {
  encode(
    _: GetFluffState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFluffState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetFluffState {
    return {};
  },

  toJSON(_: GetFluffState): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffState>, I>>(
    _: I
  ): GetFluffState {
    const message = createBaseGetFluffState();
    return message;
  },
};

function createBaseGetFluffState_Response(): GetFluffState_Response {
  return { state: false };
}

export const GetFluffState_Response = {
  encode(
    message: GetFluffState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state === true) {
      writer.uint32(8).bool(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFluffState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFluffState_Response {
    return {
      state: isSet(object.state) ? Boolean(object.state) : false,
    };
  },

  toJSON(message: GetFluffState_Response): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffState_Response>, I>>(
    object: I
  ): GetFluffState_Response {
    const message = createBaseGetFluffState_Response();
    message.state = object.state ?? false;
    return message;
  },
};

function createBaseGetFluffState_Request(): GetFluffState_Request {
  return {};
}

export const GetFluffState_Request = {
  encode(
    _: GetFluffState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFluffState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetFluffState_Request {
    return {};
  },

  toJSON(_: GetFluffState_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffState_Request>, I>>(
    _: I
  ): GetFluffState_Request {
    const message = createBaseGetFluffState_Request();
    return message;
  },
};

function createBaseSetFluffState(): SetFluffState {
  return {};
}

export const SetFluffState = {
  encode(
    _: SetFluffState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFluffState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFluffState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetFluffState {
    return {};
  },

  toJSON(_: SetFluffState): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFluffState>, I>>(
    _: I
  ): SetFluffState {
    const message = createBaseSetFluffState();
    return message;
  },
};

function createBaseSetFluffState_Request(): SetFluffState_Request {
  return { state: false };
}

export const SetFluffState_Request = {
  encode(
    message: SetFluffState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state === true) {
      writer.uint32(8).bool(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetFluffState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFluffState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetFluffState_Request {
    return {
      state: isSet(object.state) ? Boolean(object.state) : false,
    };
  },

  toJSON(message: SetFluffState_Request): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFluffState_Request>, I>>(
    object: I
  ): SetFluffState_Request {
    const message = createBaseSetFluffState_Request();
    message.state = object.state ?? false;
    return message;
  },
};

function createBaseSetFluffState_Response(): SetFluffState_Response {
  return {};
}

export const SetFluffState_Response = {
  encode(
    _: SetFluffState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetFluffState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFluffState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetFluffState_Response {
    return {};
  },

  toJSON(_: SetFluffState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFluffState_Response>, I>>(
    _: I
  ): SetFluffState_Response {
    const message = createBaseSetFluffState_Response();
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
