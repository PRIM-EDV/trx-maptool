/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Tracker {
  id: number;
  position: Tracker_Position | undefined;
}

export interface Tracker_Position {
  x: number;
  y: number;
}

export interface SetTracker {
  request?: SetTracker_Request | undefined;
  response?: SetTracker_Response | undefined;
  error?: string | undefined;
}

export interface SetTracker_Request {
  tracker: Tracker | undefined;
}

export interface SetTracker_Response {
}

function createBaseTracker(): Tracker {
  return { id: 0, position: undefined };
}

export const Tracker = {
  encode(message: Tracker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.position !== undefined) {
      Tracker_Position.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tracker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.position = Tracker_Position.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tracker {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      position: isSet(object.position) ? Tracker_Position.fromJSON(object.position) : undefined,
    };
  },

  toJSON(message: Tracker): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.position !== undefined) {
      obj.position = Tracker_Position.toJSON(message.position);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Tracker>, I>>(base?: I): Tracker {
    return Tracker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Tracker>, I>>(object: I): Tracker {
    const message = createBaseTracker();
    message.id = object.id ?? 0;
    message.position = (object.position !== undefined && object.position !== null)
      ? Tracker_Position.fromPartial(object.position)
      : undefined;
    return message;
  },
};

function createBaseTracker_Position(): Tracker_Position {
  return { x: 0, y: 0 };
}

export const Tracker_Position = {
  encode(message: Tracker_Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tracker_Position {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTracker_Position();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.y = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tracker_Position {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: Tracker_Position): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Tracker_Position>, I>>(base?: I): Tracker_Position {
    return Tracker_Position.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Tracker_Position>, I>>(object: I): Tracker_Position {
    const message = createBaseTracker_Position();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseSetTracker(): SetTracker {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetTracker = {
  encode(message: SetTracker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      SetTracker_Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      SetTracker_Response.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTracker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = SetTracker_Request.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.response = SetTracker_Response.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetTracker {
    return {
      request: isSet(object.request) ? SetTracker_Request.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? SetTracker_Response.fromJSON(object.response) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetTracker): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = SetTracker_Request.toJSON(message.request);
    }
    if (message.response !== undefined) {
      obj.response = SetTracker_Response.toJSON(message.response);
    }
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetTracker>, I>>(base?: I): SetTracker {
    return SetTracker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetTracker>, I>>(object: I): SetTracker {
    const message = createBaseSetTracker();
    message.request = (object.request !== undefined && object.request !== null)
      ? SetTracker_Request.fromPartial(object.request)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? SetTracker_Response.fromPartial(object.response)
      : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetTracker_Request(): SetTracker_Request {
  return { tracker: undefined };
}

export const SetTracker_Request = {
  encode(message: SetTracker_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tracker !== undefined) {
      Tracker.encode(message.tracker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTracker_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetTracker_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tracker = Tracker.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetTracker_Request {
    return { tracker: isSet(object.tracker) ? Tracker.fromJSON(object.tracker) : undefined };
  },

  toJSON(message: SetTracker_Request): unknown {
    const obj: any = {};
    if (message.tracker !== undefined) {
      obj.tracker = Tracker.toJSON(message.tracker);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetTracker_Request>, I>>(base?: I): SetTracker_Request {
    return SetTracker_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetTracker_Request>, I>>(object: I): SetTracker_Request {
    const message = createBaseSetTracker_Request();
    message.tracker = (object.tracker !== undefined && object.tracker !== null)
      ? Tracker.fromPartial(object.tracker)
      : undefined;
    return message;
  },
};

function createBaseSetTracker_Response(): SetTracker_Response {
  return {};
}

export const SetTracker_Response = {
  encode(_: SetTracker_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTracker_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetTracker_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): SetTracker_Response {
    return {};
  },

  toJSON(_: SetTracker_Response): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SetTracker_Response>, I>>(base?: I): SetTracker_Response {
    return SetTracker_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetTracker_Response>, I>>(_: I): SetTracker_Response {
    const message = createBaseSetTracker_Response();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
