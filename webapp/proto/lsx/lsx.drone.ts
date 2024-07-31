/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum BombAreaId {
  AREA_MED = 0,
  AREA_CIC = 1,
  AREA_CORRIDOR = 2,
  AREA_HALL = 3,
  AREA_SCI = 4,
  AREA_TEC = 5,
  AREA_PARCEL = 6,
  AREA_TUNNEL = 7,
  UNRECOGNIZED = -1,
}

export function bombAreaIdFromJSON(object: any): BombAreaId {
  switch (object) {
    case 0:
    case "AREA_MED":
      return BombAreaId.AREA_MED;
    case 1:
    case "AREA_CIC":
      return BombAreaId.AREA_CIC;
    case 2:
    case "AREA_CORRIDOR":
      return BombAreaId.AREA_CORRIDOR;
    case 3:
    case "AREA_HALL":
      return BombAreaId.AREA_HALL;
    case 4:
    case "AREA_SCI":
      return BombAreaId.AREA_SCI;
    case 5:
    case "AREA_TEC":
      return BombAreaId.AREA_TEC;
    case 6:
    case "AREA_PARCEL":
      return BombAreaId.AREA_PARCEL;
    case 7:
    case "AREA_TUNNEL":
      return BombAreaId.AREA_TUNNEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BombAreaId.UNRECOGNIZED;
  }
}

export function bombAreaIdToJSON(object: BombAreaId): string {
  switch (object) {
    case BombAreaId.AREA_MED:
      return "AREA_MED";
    case BombAreaId.AREA_CIC:
      return "AREA_CIC";
    case BombAreaId.AREA_CORRIDOR:
      return "AREA_CORRIDOR";
    case BombAreaId.AREA_HALL:
      return "AREA_HALL";
    case BombAreaId.AREA_SCI:
      return "AREA_SCI";
    case BombAreaId.AREA_TEC:
      return "AREA_TEC";
    case BombAreaId.AREA_PARCEL:
      return "AREA_PARCEL";
    case BombAreaId.AREA_TUNNEL:
      return "AREA_TUNNEL";
    case BombAreaId.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BombAreaState {
  STATE_ARMED = 0,
  STATE_FUSED = 1,
  UNRECOGNIZED = -1,
}

export function bombAreaStateFromJSON(object: any): BombAreaState {
  switch (object) {
    case 0:
    case "STATE_ARMED":
      return BombAreaState.STATE_ARMED;
    case 1:
    case "STATE_FUSED":
      return BombAreaState.STATE_FUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BombAreaState.UNRECOGNIZED;
  }
}

export function bombAreaStateToJSON(object: BombAreaState): string {
  switch (object) {
    case BombAreaState.STATE_ARMED:
      return "STATE_ARMED";
    case BombAreaState.STATE_FUSED:
      return "STATE_FUSED";
    case BombAreaState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ModeSilentState {
  MODE_SILENT_STATE_EMPTY = 0,
  MODE_SILENT_STATE_NORMAL = 1,
  MODE_SILENT_STATE_SILENT = 2,
  MODE_SILENT_STATE_SILENT_DRONE = 3,
  UNRECOGNIZED = -1,
}

export function modeSilentStateFromJSON(object: any): ModeSilentState {
  switch (object) {
    case 0:
    case "MODE_SILENT_STATE_EMPTY":
      return ModeSilentState.MODE_SILENT_STATE_EMPTY;
    case 1:
    case "MODE_SILENT_STATE_NORMAL":
      return ModeSilentState.MODE_SILENT_STATE_NORMAL;
    case 2:
    case "MODE_SILENT_STATE_SILENT":
      return ModeSilentState.MODE_SILENT_STATE_SILENT;
    case 3:
    case "MODE_SILENT_STATE_SILENT_DRONE":
      return ModeSilentState.MODE_SILENT_STATE_SILENT_DRONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModeSilentState.UNRECOGNIZED;
  }
}

export function modeSilentStateToJSON(object: ModeSilentState): string {
  switch (object) {
    case ModeSilentState.MODE_SILENT_STATE_EMPTY:
      return "MODE_SILENT_STATE_EMPTY";
    case ModeSilentState.MODE_SILENT_STATE_NORMAL:
      return "MODE_SILENT_STATE_NORMAL";
    case ModeSilentState.MODE_SILENT_STATE_SILENT:
      return "MODE_SILENT_STATE_SILENT";
    case ModeSilentState.MODE_SILENT_STATE_SILENT_DRONE:
      return "MODE_SILENT_STATE_SILENT_DRONE";
    case ModeSilentState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface BombBase {}

export interface BombBase_Response {}

export interface BombBase_Request {}

export interface BombArea {}

export interface BombArea_Response {}

export interface BombArea_Request {
  id: BombAreaId;
}

export interface GetBombAreaState {}

export interface GetBombAreaState_Response {
  state: BombAreaState;
}

export interface GetBombAreaState_Request {
  id: BombAreaId;
}

export interface GetModeSilentState {}

export interface GetModeSilentState_Response {
  state: ModeSilentState;
}

export interface GetModeSilentState_Request {}

export interface SetModeSilentState {}

export interface SetModeSilentState_Request {
  state: ModeSilentState;
}

export interface SetModeSilentState_Response {}

function createBaseBombBase(): BombBase {
  return {};
}

export const BombBase = {
  encode(_: BombBase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BombBase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBombBase();
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

  fromJSON(_: any): BombBase {
    return {};
  },

  toJSON(_: BombBase): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BombBase>, I>>(_: I): BombBase {
    const message = createBaseBombBase();
    return message;
  },
};

function createBaseBombBase_Response(): BombBase_Response {
  return {};
}

export const BombBase_Response = {
  encode(
    _: BombBase_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BombBase_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBombBase_Response();
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

  fromJSON(_: any): BombBase_Response {
    return {};
  },

  toJSON(_: BombBase_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BombBase_Response>, I>>(
    _: I
  ): BombBase_Response {
    const message = createBaseBombBase_Response();
    return message;
  },
};

function createBaseBombBase_Request(): BombBase_Request {
  return {};
}

export const BombBase_Request = {
  encode(
    _: BombBase_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BombBase_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBombBase_Request();
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

  fromJSON(_: any): BombBase_Request {
    return {};
  },

  toJSON(_: BombBase_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BombBase_Request>, I>>(
    _: I
  ): BombBase_Request {
    const message = createBaseBombBase_Request();
    return message;
  },
};

function createBaseBombArea(): BombArea {
  return {};
}

export const BombArea = {
  encode(_: BombArea, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BombArea {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBombArea();
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

  fromJSON(_: any): BombArea {
    return {};
  },

  toJSON(_: BombArea): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BombArea>, I>>(_: I): BombArea {
    const message = createBaseBombArea();
    return message;
  },
};

function createBaseBombArea_Response(): BombArea_Response {
  return {};
}

export const BombArea_Response = {
  encode(
    _: BombArea_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BombArea_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBombArea_Response();
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

  fromJSON(_: any): BombArea_Response {
    return {};
  },

  toJSON(_: BombArea_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BombArea_Response>, I>>(
    _: I
  ): BombArea_Response {
    const message = createBaseBombArea_Response();
    return message;
  },
};

function createBaseBombArea_Request(): BombArea_Request {
  return { id: 0 };
}

export const BombArea_Request = {
  encode(
    message: BombArea_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BombArea_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBombArea_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BombArea_Request {
    return {
      id: isSet(object.id) ? bombAreaIdFromJSON(object.id) : 0,
    };
  },

  toJSON(message: BombArea_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = bombAreaIdToJSON(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BombArea_Request>, I>>(
    object: I
  ): BombArea_Request {
    const message = createBaseBombArea_Request();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetBombAreaState(): GetBombAreaState {
  return {};
}

export const GetBombAreaState = {
  encode(
    _: GetBombAreaState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBombAreaState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBombAreaState();
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

  fromJSON(_: any): GetBombAreaState {
    return {};
  },

  toJSON(_: GetBombAreaState): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBombAreaState>, I>>(
    _: I
  ): GetBombAreaState {
    const message = createBaseGetBombAreaState();
    return message;
  },
};

function createBaseGetBombAreaState_Response(): GetBombAreaState_Response {
  return { state: 0 };
}

export const GetBombAreaState_Response = {
  encode(
    message: GetBombAreaState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBombAreaState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBombAreaState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBombAreaState_Response {
    return {
      state: isSet(object.state) ? bombAreaStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetBombAreaState_Response): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = bombAreaStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBombAreaState_Response>, I>>(
    object: I
  ): GetBombAreaState_Response {
    const message = createBaseGetBombAreaState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetBombAreaState_Request(): GetBombAreaState_Request {
  return { id: 0 };
}

export const GetBombAreaState_Request = {
  encode(
    message: GetBombAreaState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBombAreaState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBombAreaState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBombAreaState_Request {
    return {
      id: isSet(object.id) ? bombAreaIdFromJSON(object.id) : 0,
    };
  },

  toJSON(message: GetBombAreaState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = bombAreaIdToJSON(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBombAreaState_Request>, I>>(
    object: I
  ): GetBombAreaState_Request {
    const message = createBaseGetBombAreaState_Request();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetModeSilentState(): GetModeSilentState {
  return {};
}

export const GetModeSilentState = {
  encode(
    _: GetModeSilentState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetModeSilentState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModeSilentState();
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

  fromJSON(_: any): GetModeSilentState {
    return {};
  },

  toJSON(_: GetModeSilentState): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetModeSilentState>, I>>(
    _: I
  ): GetModeSilentState {
    const message = createBaseGetModeSilentState();
    return message;
  },
};

function createBaseGetModeSilentState_Response(): GetModeSilentState_Response {
  return { state: 0 };
}

export const GetModeSilentState_Response = {
  encode(
    message: GetModeSilentState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetModeSilentState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModeSilentState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetModeSilentState_Response {
    return {
      state: isSet(object.state) ? modeSilentStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetModeSilentState_Response): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = modeSilentStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetModeSilentState_Response>, I>>(
    object: I
  ): GetModeSilentState_Response {
    const message = createBaseGetModeSilentState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetModeSilentState_Request(): GetModeSilentState_Request {
  return {};
}

export const GetModeSilentState_Request = {
  encode(
    _: GetModeSilentState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetModeSilentState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModeSilentState_Request();
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

  fromJSON(_: any): GetModeSilentState_Request {
    return {};
  },

  toJSON(_: GetModeSilentState_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetModeSilentState_Request>, I>>(
    _: I
  ): GetModeSilentState_Request {
    const message = createBaseGetModeSilentState_Request();
    return message;
  },
};

function createBaseSetModeSilentState(): SetModeSilentState {
  return {};
}

export const SetModeSilentState = {
  encode(
    _: SetModeSilentState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetModeSilentState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetModeSilentState();
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

  fromJSON(_: any): SetModeSilentState {
    return {};
  },

  toJSON(_: SetModeSilentState): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetModeSilentState>, I>>(
    _: I
  ): SetModeSilentState {
    const message = createBaseSetModeSilentState();
    return message;
  },
};

function createBaseSetModeSilentState_Request(): SetModeSilentState_Request {
  return { state: 0 };
}

export const SetModeSilentState_Request = {
  encode(
    message: SetModeSilentState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetModeSilentState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetModeSilentState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetModeSilentState_Request {
    return {
      state: isSet(object.state) ? modeSilentStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SetModeSilentState_Request): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = modeSilentStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetModeSilentState_Request>, I>>(
    object: I
  ): SetModeSilentState_Request {
    const message = createBaseSetModeSilentState_Request();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetModeSilentState_Response(): SetModeSilentState_Response {
  return {};
}

export const SetModeSilentState_Response = {
  encode(
    _: SetModeSilentState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetModeSilentState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetModeSilentState_Response();
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

  fromJSON(_: any): SetModeSilentState_Response {
    return {};
  },

  toJSON(_: SetModeSilentState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetModeSilentState_Response>, I>>(
    _: I
  ): SetModeSilentState_Response {
    const message = createBaseSetModeSilentState_Response();
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
