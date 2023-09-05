/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum SquadState {
  STATE_UNDEFINED = 0,
  STATE_UNSTAGED = 1,
  STATE_READY = 2,
  STATE_QRF_READY = 3,
  STATE_IN_FIELD = 4,
  UNRECOGNIZED = -1,
}

export function squadStateFromJSON(object: any): SquadState {
  switch (object) {
    case 0:
    case "STATE_UNDEFINED":
      return SquadState.STATE_UNDEFINED;
    case 1:
    case "STATE_UNSTAGED":
      return SquadState.STATE_UNSTAGED;
    case 2:
    case "STATE_READY":
      return SquadState.STATE_READY;
    case 3:
    case "STATE_QRF_READY":
      return SquadState.STATE_QRF_READY;
    case 4:
    case "STATE_IN_FIELD":
      return SquadState.STATE_IN_FIELD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SquadState.UNRECOGNIZED;
  }
}

export function squadStateToJSON(object: SquadState): string {
  switch (object) {
    case SquadState.STATE_UNDEFINED:
      return "STATE_UNDEFINED";
    case SquadState.STATE_UNSTAGED:
      return "STATE_UNSTAGED";
    case SquadState.STATE_READY:
      return "STATE_READY";
    case SquadState.STATE_QRF_READY:
      return "STATE_QRF_READY";
    case SquadState.STATE_IN_FIELD:
      return "STATE_IN_FIELD";
    case SquadState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Squad {
  name: string;
  callsign: string;
  state: SquadState;
  combattants: number;
  position: number;
}

export interface GetAllSquads {
  request?: GetAllSquads_Request | undefined;
  response?: GetAllSquads_Response | undefined;
  error?: string | undefined;
}

export interface GetAllSquads_Request {
}

export interface GetAllSquads_Response {
  squads: Squad[];
}

export interface SetSquad {
  request?: SetSquad_Request | undefined;
  response?: SetSquad_Response | undefined;
  error?: string | undefined;
}

export interface SetSquad_Request {
  squad?: Squad | undefined;
}

export interface SetSquad_Response {
}

function createBaseSquad(): Squad {
  return { name: "", callsign: "", state: 0, combattants: 0, position: 0 };
}

export const Squad = {
  encode(message: Squad, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.callsign !== "") {
      writer.uint32(18).string(message.callsign);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.combattants !== 0) {
      writer.uint32(32).int32(message.combattants);
    }
    if (message.position !== 0) {
      writer.uint32(40).int32(message.position);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Squad {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSquad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.callsign = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.combattants = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.position = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Squad {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      callsign: isSet(object.callsign) ? String(object.callsign) : "",
      state: isSet(object.state) ? squadStateFromJSON(object.state) : 0,
      combattants: isSet(object.combattants) ? Number(object.combattants) : 0,
      position: isSet(object.position) ? Number(object.position) : 0,
    };
  },

  toJSON(message: Squad): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.callsign !== "") {
      obj.callsign = message.callsign;
    }
    if (message.state !== 0) {
      obj.state = squadStateToJSON(message.state);
    }
    if (message.combattants !== 0) {
      obj.combattants = Math.round(message.combattants);
    }
    if (message.position !== 0) {
      obj.position = Math.round(message.position);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Squad>, I>>(base?: I): Squad {
    return Squad.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Squad>, I>>(object: I): Squad {
    const message = createBaseSquad();
    message.name = object.name ?? "";
    message.callsign = object.callsign ?? "";
    message.state = object.state ?? 0;
    message.combattants = object.combattants ?? 0;
    message.position = object.position ?? 0;
    return message;
  },
};

function createBaseGetAllSquads(): GetAllSquads {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetAllSquads = {
  encode(message: GetAllSquads, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      GetAllSquads_Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      GetAllSquads_Response.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllSquads {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllSquads();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = GetAllSquads_Request.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.response = GetAllSquads_Response.decode(reader, reader.uint32());
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

  fromJSON(object: any): GetAllSquads {
    return {
      request: isSet(object.request) ? GetAllSquads_Request.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? GetAllSquads_Response.fromJSON(object.response) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetAllSquads): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = GetAllSquads_Request.toJSON(message.request);
    }
    if (message.response !== undefined) {
      obj.response = GetAllSquads_Response.toJSON(message.response);
    }
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllSquads>, I>>(base?: I): GetAllSquads {
    return GetAllSquads.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllSquads>, I>>(object: I): GetAllSquads {
    const message = createBaseGetAllSquads();
    message.request = (object.request !== undefined && object.request !== null)
      ? GetAllSquads_Request.fromPartial(object.request)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? GetAllSquads_Response.fromPartial(object.response)
      : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetAllSquads_Request(): GetAllSquads_Request {
  return {};
}

export const GetAllSquads_Request = {
  encode(_: GetAllSquads_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllSquads_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllSquads_Request();
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

  fromJSON(_: any): GetAllSquads_Request {
    return {};
  },

  toJSON(_: GetAllSquads_Request): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllSquads_Request>, I>>(base?: I): GetAllSquads_Request {
    return GetAllSquads_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllSquads_Request>, I>>(_: I): GetAllSquads_Request {
    const message = createBaseGetAllSquads_Request();
    return message;
  },
};

function createBaseGetAllSquads_Response(): GetAllSquads_Response {
  return { squads: [] };
}

export const GetAllSquads_Response = {
  encode(message: GetAllSquads_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.squads) {
      Squad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllSquads_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllSquads_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.squads.push(Squad.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllSquads_Response {
    return { squads: Array.isArray(object?.squads) ? object.squads.map((e: any) => Squad.fromJSON(e)) : [] };
  },

  toJSON(message: GetAllSquads_Response): unknown {
    const obj: any = {};
    if (message.squads?.length) {
      obj.squads = message.squads.map((e) => Squad.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllSquads_Response>, I>>(base?: I): GetAllSquads_Response {
    return GetAllSquads_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllSquads_Response>, I>>(object: I): GetAllSquads_Response {
    const message = createBaseGetAllSquads_Response();
    message.squads = object.squads?.map((e) => Squad.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetSquad(): SetSquad {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetSquad = {
  encode(message: SetSquad, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      SetSquad_Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      SetSquad_Response.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSquad {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSquad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = SetSquad_Request.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.response = SetSquad_Response.decode(reader, reader.uint32());
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

  fromJSON(object: any): SetSquad {
    return {
      request: isSet(object.request) ? SetSquad_Request.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? SetSquad_Response.fromJSON(object.response) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetSquad): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = SetSquad_Request.toJSON(message.request);
    }
    if (message.response !== undefined) {
      obj.response = SetSquad_Response.toJSON(message.response);
    }
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetSquad>, I>>(base?: I): SetSquad {
    return SetSquad.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetSquad>, I>>(object: I): SetSquad {
    const message = createBaseSetSquad();
    message.request = (object.request !== undefined && object.request !== null)
      ? SetSquad_Request.fromPartial(object.request)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? SetSquad_Response.fromPartial(object.response)
      : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetSquad_Request(): SetSquad_Request {
  return { squad: undefined };
}

export const SetSquad_Request = {
  encode(message: SetSquad_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.squad !== undefined) {
      Squad.encode(message.squad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSquad_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSquad_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.squad = Squad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetSquad_Request {
    return { squad: isSet(object.squad) ? Squad.fromJSON(object.squad) : undefined };
  },

  toJSON(message: SetSquad_Request): unknown {
    const obj: any = {};
    if (message.squad !== undefined) {
      obj.squad = Squad.toJSON(message.squad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetSquad_Request>, I>>(base?: I): SetSquad_Request {
    return SetSquad_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetSquad_Request>, I>>(object: I): SetSquad_Request {
    const message = createBaseSetSquad_Request();
    message.squad = (object.squad !== undefined && object.squad !== null) ? Squad.fromPartial(object.squad) : undefined;
    return message;
  },
};

function createBaseSetSquad_Response(): SetSquad_Response {
  return {};
}

export const SetSquad_Response = {
  encode(_: SetSquad_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSquad_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSquad_Response();
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

  fromJSON(_: any): SetSquad_Response {
    return {};
  },

  toJSON(_: SetSquad_Response): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SetSquad_Response>, I>>(base?: I): SetSquad_Response {
    return SetSquad_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetSquad_Response>, I>>(_: I): SetSquad_Response {
    const message = createBaseSetSquad_Response();
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
