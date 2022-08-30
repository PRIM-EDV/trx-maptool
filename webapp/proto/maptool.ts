/* eslint-disable */
import {
  GetAllMapEntities_Request,
  SetMapEntity_Request,
  DeleteMapEntity_Request,
  GetAllMapEntities_Response,
  SetMapEntity_Response,
  DeleteMapEntity_Response,
} from "./maptool.map-entity";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Request {
  getAllMapEntities?: GetAllMapEntities_Request | undefined;
  setMapEntity?: SetMapEntity_Request | undefined;
  deleteMapEntity?: DeleteMapEntity_Request | undefined;
}

export interface Response {
  getAllMapEntities?: GetAllMapEntities_Response | undefined;
  setMapEntity?: SetMapEntity_Response | undefined;
  deleteMapEntity?: DeleteMapEntity_Response | undefined;
}

export interface MaptoolMessage {
  id: string;
  request?: Request | undefined;
  response?: Response | undefined;
}

function createBaseRequest(): Request {
  return {
    getAllMapEntities: undefined,
    setMapEntity: undefined,
    deleteMapEntity: undefined,
  };
}

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.getAllMapEntities !== undefined) {
      GetAllMapEntities_Request.encode(
        message.getAllMapEntities,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.setMapEntity !== undefined) {
      SetMapEntity_Request.encode(
        message.setMapEntity,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.deleteMapEntity !== undefined) {
      DeleteMapEntity_Request.encode(
        message.deleteMapEntity,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.getAllMapEntities = GetAllMapEntities_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.setMapEntity = SetMapEntity_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.deleteMapEntity = DeleteMapEntity_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      getAllMapEntities: isSet(object.getAllMapEntities)
        ? GetAllMapEntities_Request.fromJSON(object.getAllMapEntities)
        : undefined,
      setMapEntity: isSet(object.setMapEntity)
        ? SetMapEntity_Request.fromJSON(object.setMapEntity)
        : undefined,
      deleteMapEntity: isSet(object.deleteMapEntity)
        ? DeleteMapEntity_Request.fromJSON(object.deleteMapEntity)
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.getAllMapEntities !== undefined &&
      (obj.getAllMapEntities = message.getAllMapEntities
        ? GetAllMapEntities_Request.toJSON(message.getAllMapEntities)
        : undefined);
    message.setMapEntity !== undefined &&
      (obj.setMapEntity = message.setMapEntity
        ? SetMapEntity_Request.toJSON(message.setMapEntity)
        : undefined);
    message.deleteMapEntity !== undefined &&
      (obj.deleteMapEntity = message.deleteMapEntity
        ? DeleteMapEntity_Request.toJSON(message.deleteMapEntity)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.getAllMapEntities =
      object.getAllMapEntities !== undefined &&
      object.getAllMapEntities !== null
        ? GetAllMapEntities_Request.fromPartial(object.getAllMapEntities)
        : undefined;
    message.setMapEntity =
      object.setMapEntity !== undefined && object.setMapEntity !== null
        ? SetMapEntity_Request.fromPartial(object.setMapEntity)
        : undefined;
    message.deleteMapEntity =
      object.deleteMapEntity !== undefined && object.deleteMapEntity !== null
        ? DeleteMapEntity_Request.fromPartial(object.deleteMapEntity)
        : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return {
    getAllMapEntities: undefined,
    setMapEntity: undefined,
    deleteMapEntity: undefined,
  };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.getAllMapEntities !== undefined) {
      GetAllMapEntities_Response.encode(
        message.getAllMapEntities,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.setMapEntity !== undefined) {
      SetMapEntity_Response.encode(
        message.setMapEntity,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.deleteMapEntity !== undefined) {
      DeleteMapEntity_Response.encode(
        message.deleteMapEntity,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.getAllMapEntities = GetAllMapEntities_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.setMapEntity = SetMapEntity_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.deleteMapEntity = DeleteMapEntity_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      getAllMapEntities: isSet(object.getAllMapEntities)
        ? GetAllMapEntities_Response.fromJSON(object.getAllMapEntities)
        : undefined,
      setMapEntity: isSet(object.setMapEntity)
        ? SetMapEntity_Response.fromJSON(object.setMapEntity)
        : undefined,
      deleteMapEntity: isSet(object.deleteMapEntity)
        ? DeleteMapEntity_Response.fromJSON(object.deleteMapEntity)
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.getAllMapEntities !== undefined &&
      (obj.getAllMapEntities = message.getAllMapEntities
        ? GetAllMapEntities_Response.toJSON(message.getAllMapEntities)
        : undefined);
    message.setMapEntity !== undefined &&
      (obj.setMapEntity = message.setMapEntity
        ? SetMapEntity_Response.toJSON(message.setMapEntity)
        : undefined);
    message.deleteMapEntity !== undefined &&
      (obj.deleteMapEntity = message.deleteMapEntity
        ? DeleteMapEntity_Response.toJSON(message.deleteMapEntity)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.getAllMapEntities =
      object.getAllMapEntities !== undefined &&
      object.getAllMapEntities !== null
        ? GetAllMapEntities_Response.fromPartial(object.getAllMapEntities)
        : undefined;
    message.setMapEntity =
      object.setMapEntity !== undefined && object.setMapEntity !== null
        ? SetMapEntity_Response.fromPartial(object.setMapEntity)
        : undefined;
    message.deleteMapEntity =
      object.deleteMapEntity !== undefined && object.deleteMapEntity !== null
        ? DeleteMapEntity_Response.fromPartial(object.deleteMapEntity)
        : undefined;
    return message;
  },
};

function createBaseMaptoolMessage(): MaptoolMessage {
  return { id: "", request: undefined, response: undefined };
}

export const MaptoolMessage = {
  encode(
    message: MaptoolMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(18).fork()).ldelim();
    }
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaptoolMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaptoolMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.request = Request.decode(reader, reader.uint32());
          break;
        case 3:
          message.response = Response.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MaptoolMessage {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      request: isSet(object.request)
        ? Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? Response.fromJSON(object.response)
        : undefined,
    };
  },

  toJSON(message: MaptoolMessage): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.request !== undefined &&
      (obj.request = message.request
        ? Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? Response.toJSON(message.response)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MaptoolMessage>, I>>(
    object: I
  ): MaptoolMessage {
    const message = createBaseMaptoolMessage();
    message.id = object.id ?? "";
    message.request =
      object.request !== undefined && object.request !== null
        ? Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? Response.fromPartial(object.response)
        : undefined;
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
