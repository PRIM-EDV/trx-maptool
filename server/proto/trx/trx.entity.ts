/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum MapEntityType {
  TYPE_UNDEFINED = 0,
  TYPE_FOE = 1,
  TYPE_FRIEND = 2,
  TYPE_OBJECT = 3,
  UNRECOGNIZED = -1,
}

export function mapEntityTypeFromJSON(object: any): MapEntityType {
  switch (object) {
    case 0:
    case "TYPE_UNDEFINED":
      return MapEntityType.TYPE_UNDEFINED;
    case 1:
    case "TYPE_FOE":
      return MapEntityType.TYPE_FOE;
    case 2:
    case "TYPE_FRIEND":
      return MapEntityType.TYPE_FRIEND;
    case 3:
    case "TYPE_OBJECT":
      return MapEntityType.TYPE_OBJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MapEntityType.UNRECOGNIZED;
  }
}

export function mapEntityTypeToJSON(object: MapEntityType): string {
  switch (object) {
    case MapEntityType.TYPE_UNDEFINED:
      return "TYPE_UNDEFINED";
    case MapEntityType.TYPE_FOE:
      return "TYPE_FOE";
    case MapEntityType.TYPE_FRIEND:
      return "TYPE_FRIEND";
    case MapEntityType.TYPE_OBJECT:
      return "TYPE_OBJECT";
    case MapEntityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MapEntityStatus {
  ENTITY_STATUS_UNDEFINED = 0,
  ENTITY_STATUS_REGULAR = 1,
  ENTITY_STATUS_COMBAT = 2,
  UNRECOGNIZED = -1,
}

export function mapEntityStatusFromJSON(object: any): MapEntityStatus {
  switch (object) {
    case 0:
    case "ENTITY_STATUS_UNDEFINED":
      return MapEntityStatus.ENTITY_STATUS_UNDEFINED;
    case 1:
    case "ENTITY_STATUS_REGULAR":
      return MapEntityStatus.ENTITY_STATUS_REGULAR;
    case 2:
    case "ENTITY_STATUS_COMBAT":
      return MapEntityStatus.ENTITY_STATUS_COMBAT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MapEntityStatus.UNRECOGNIZED;
  }
}

export function mapEntityStatusToJSON(object: MapEntityStatus): string {
  switch (object) {
    case MapEntityStatus.ENTITY_STATUS_UNDEFINED:
      return "ENTITY_STATUS_UNDEFINED";
    case MapEntityStatus.ENTITY_STATUS_REGULAR:
      return "ENTITY_STATUS_REGULAR";
    case MapEntityStatus.ENTITY_STATUS_COMBAT:
      return "ENTITY_STATUS_COMBAT";
    case MapEntityStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MapEntity {
  id: string;
  type: MapEntityType;
  position: MapEntity_Position | undefined;
  squad?: MapEntity_Squad | undefined;
  enemy?: MapEntity_Enemy | undefined;
  objective?: MapEntity_Objective | undefined;
}

export interface MapEntity_Squad {
  name: string;
  callsign: string;
  trackerId: number;
  combattants: number;
  status: MapEntityStatus;
}

export interface MapEntity_Enemy {
  combattants: number;
}

export interface MapEntity_Objective {
  name: string;
  description: string;
}

export interface MapEntity_Position {
  x: number;
  y: number;
}

export interface DeleteMapEntity {
  request?: DeleteMapEntity_Request | undefined;
  response?: DeleteMapEntity_Response | undefined;
  error?: string | undefined;
}

export interface DeleteMapEntity_Request {
  entity: MapEntity | undefined;
}

export interface DeleteMapEntity_Response {
}

export interface SetMapEntity {
  request?: SetMapEntity_Request | undefined;
  response?: SetMapEntity_Response | undefined;
  error?: string | undefined;
}

export interface SetMapEntity_Request {
  entity: MapEntity | undefined;
}

export interface SetMapEntity_Response {
}

export interface GetAllMapEntities {
  request?: GetAllMapEntities_Request | undefined;
  response?: GetAllMapEntities_Response | undefined;
  error?: string | undefined;
}

export interface GetAllMapEntities_Request {
}

export interface GetAllMapEntities_Response {
  entities: MapEntity[];
}

function createBaseMapEntity(): MapEntity {
  return { id: "", type: 0, position: undefined, squad: undefined, enemy: undefined, objective: undefined };
}

export const MapEntity = {
  encode(message: MapEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.position !== undefined) {
      MapEntity_Position.encode(message.position, writer.uint32(26).fork()).ldelim();
    }
    if (message.squad !== undefined) {
      MapEntity_Squad.encode(message.squad, writer.uint32(34).fork()).ldelim();
    }
    if (message.enemy !== undefined) {
      MapEntity_Enemy.encode(message.enemy, writer.uint32(42).fork()).ldelim();
    }
    if (message.objective !== undefined) {
      MapEntity_Objective.encode(message.objective, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapEntity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.position = MapEntity_Position.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.squad = MapEntity_Squad.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.enemy = MapEntity_Enemy.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.objective = MapEntity_Objective.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapEntity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? mapEntityTypeFromJSON(object.type) : 0,
      position: isSet(object.position) ? MapEntity_Position.fromJSON(object.position) : undefined,
      squad: isSet(object.squad) ? MapEntity_Squad.fromJSON(object.squad) : undefined,
      enemy: isSet(object.enemy) ? MapEntity_Enemy.fromJSON(object.enemy) : undefined,
      objective: isSet(object.objective) ? MapEntity_Objective.fromJSON(object.objective) : undefined,
    };
  },

  toJSON(message: MapEntity): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.type !== 0) {
      obj.type = mapEntityTypeToJSON(message.type);
    }
    if (message.position !== undefined) {
      obj.position = MapEntity_Position.toJSON(message.position);
    }
    if (message.squad !== undefined) {
      obj.squad = MapEntity_Squad.toJSON(message.squad);
    }
    if (message.enemy !== undefined) {
      obj.enemy = MapEntity_Enemy.toJSON(message.enemy);
    }
    if (message.objective !== undefined) {
      obj.objective = MapEntity_Objective.toJSON(message.objective);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapEntity>, I>>(base?: I): MapEntity {
    return MapEntity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapEntity>, I>>(object: I): MapEntity {
    const message = createBaseMapEntity();
    message.id = object.id ?? "";
    message.type = object.type ?? 0;
    message.position = (object.position !== undefined && object.position !== null)
      ? MapEntity_Position.fromPartial(object.position)
      : undefined;
    message.squad = (object.squad !== undefined && object.squad !== null)
      ? MapEntity_Squad.fromPartial(object.squad)
      : undefined;
    message.enemy = (object.enemy !== undefined && object.enemy !== null)
      ? MapEntity_Enemy.fromPartial(object.enemy)
      : undefined;
    message.objective = (object.objective !== undefined && object.objective !== null)
      ? MapEntity_Objective.fromPartial(object.objective)
      : undefined;
    return message;
  },
};

function createBaseMapEntity_Squad(): MapEntity_Squad {
  return { name: "", callsign: "", trackerId: 0, combattants: 0, status: 0 };
}

export const MapEntity_Squad = {
  encode(message: MapEntity_Squad, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.callsign !== "") {
      writer.uint32(18).string(message.callsign);
    }
    if (message.trackerId !== 0) {
      writer.uint32(24).int32(message.trackerId);
    }
    if (message.combattants !== 0) {
      writer.uint32(32).int32(message.combattants);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapEntity_Squad {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapEntity_Squad();
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

          message.trackerId = reader.int32();
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

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapEntity_Squad {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      callsign: isSet(object.callsign) ? String(object.callsign) : "",
      trackerId: isSet(object.trackerId) ? Number(object.trackerId) : 0,
      combattants: isSet(object.combattants) ? Number(object.combattants) : 0,
      status: isSet(object.status) ? mapEntityStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MapEntity_Squad): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.callsign !== "") {
      obj.callsign = message.callsign;
    }
    if (message.trackerId !== 0) {
      obj.trackerId = Math.round(message.trackerId);
    }
    if (message.combattants !== 0) {
      obj.combattants = Math.round(message.combattants);
    }
    if (message.status !== 0) {
      obj.status = mapEntityStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapEntity_Squad>, I>>(base?: I): MapEntity_Squad {
    return MapEntity_Squad.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapEntity_Squad>, I>>(object: I): MapEntity_Squad {
    const message = createBaseMapEntity_Squad();
    message.name = object.name ?? "";
    message.callsign = object.callsign ?? "";
    message.trackerId = object.trackerId ?? 0;
    message.combattants = object.combattants ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMapEntity_Enemy(): MapEntity_Enemy {
  return { combattants: 0 };
}

export const MapEntity_Enemy = {
  encode(message: MapEntity_Enemy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.combattants !== 0) {
      writer.uint32(8).int32(message.combattants);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapEntity_Enemy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapEntity_Enemy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.combattants = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapEntity_Enemy {
    return { combattants: isSet(object.combattants) ? Number(object.combattants) : 0 };
  },

  toJSON(message: MapEntity_Enemy): unknown {
    const obj: any = {};
    if (message.combattants !== 0) {
      obj.combattants = Math.round(message.combattants);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapEntity_Enemy>, I>>(base?: I): MapEntity_Enemy {
    return MapEntity_Enemy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapEntity_Enemy>, I>>(object: I): MapEntity_Enemy {
    const message = createBaseMapEntity_Enemy();
    message.combattants = object.combattants ?? 0;
    return message;
  },
};

function createBaseMapEntity_Objective(): MapEntity_Objective {
  return { name: "", description: "" };
}

export const MapEntity_Objective = {
  encode(message: MapEntity_Objective, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapEntity_Objective {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapEntity_Objective();
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

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapEntity_Objective {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: MapEntity_Objective): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapEntity_Objective>, I>>(base?: I): MapEntity_Objective {
    return MapEntity_Objective.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapEntity_Objective>, I>>(object: I): MapEntity_Objective {
    const message = createBaseMapEntity_Objective();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMapEntity_Position(): MapEntity_Position {
  return { x: 0, y: 0 };
}

export const MapEntity_Position = {
  encode(message: MapEntity_Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapEntity_Position {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapEntity_Position();
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

  fromJSON(object: any): MapEntity_Position {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: MapEntity_Position): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapEntity_Position>, I>>(base?: I): MapEntity_Position {
    return MapEntity_Position.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapEntity_Position>, I>>(object: I): MapEntity_Position {
    const message = createBaseMapEntity_Position();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseDeleteMapEntity(): DeleteMapEntity {
  return { request: undefined, response: undefined, error: undefined };
}

export const DeleteMapEntity = {
  encode(message: DeleteMapEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      DeleteMapEntity_Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      DeleteMapEntity_Response.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMapEntity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMapEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = DeleteMapEntity_Request.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.response = DeleteMapEntity_Response.decode(reader, reader.uint32());
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

  fromJSON(object: any): DeleteMapEntity {
    return {
      request: isSet(object.request) ? DeleteMapEntity_Request.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? DeleteMapEntity_Response.fromJSON(object.response) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: DeleteMapEntity): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = DeleteMapEntity_Request.toJSON(message.request);
    }
    if (message.response !== undefined) {
      obj.response = DeleteMapEntity_Response.toJSON(message.response);
    }
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMapEntity>, I>>(base?: I): DeleteMapEntity {
    return DeleteMapEntity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMapEntity>, I>>(object: I): DeleteMapEntity {
    const message = createBaseDeleteMapEntity();
    message.request = (object.request !== undefined && object.request !== null)
      ? DeleteMapEntity_Request.fromPartial(object.request)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? DeleteMapEntity_Response.fromPartial(object.response)
      : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseDeleteMapEntity_Request(): DeleteMapEntity_Request {
  return { entity: undefined };
}

export const DeleteMapEntity_Request = {
  encode(message: DeleteMapEntity_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      MapEntity.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMapEntity_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMapEntity_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = MapEntity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteMapEntity_Request {
    return { entity: isSet(object.entity) ? MapEntity.fromJSON(object.entity) : undefined };
  },

  toJSON(message: DeleteMapEntity_Request): unknown {
    const obj: any = {};
    if (message.entity !== undefined) {
      obj.entity = MapEntity.toJSON(message.entity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMapEntity_Request>, I>>(base?: I): DeleteMapEntity_Request {
    return DeleteMapEntity_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMapEntity_Request>, I>>(object: I): DeleteMapEntity_Request {
    const message = createBaseDeleteMapEntity_Request();
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? MapEntity.fromPartial(object.entity)
      : undefined;
    return message;
  },
};

function createBaseDeleteMapEntity_Response(): DeleteMapEntity_Response {
  return {};
}

export const DeleteMapEntity_Response = {
  encode(_: DeleteMapEntity_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMapEntity_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMapEntity_Response();
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

  fromJSON(_: any): DeleteMapEntity_Response {
    return {};
  },

  toJSON(_: DeleteMapEntity_Response): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMapEntity_Response>, I>>(base?: I): DeleteMapEntity_Response {
    return DeleteMapEntity_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMapEntity_Response>, I>>(_: I): DeleteMapEntity_Response {
    const message = createBaseDeleteMapEntity_Response();
    return message;
  },
};

function createBaseSetMapEntity(): SetMapEntity {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetMapEntity = {
  encode(message: SetMapEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      SetMapEntity_Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      SetMapEntity_Response.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMapEntity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMapEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = SetMapEntity_Request.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.response = SetMapEntity_Response.decode(reader, reader.uint32());
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

  fromJSON(object: any): SetMapEntity {
    return {
      request: isSet(object.request) ? SetMapEntity_Request.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? SetMapEntity_Response.fromJSON(object.response) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetMapEntity): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = SetMapEntity_Request.toJSON(message.request);
    }
    if (message.response !== undefined) {
      obj.response = SetMapEntity_Response.toJSON(message.response);
    }
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetMapEntity>, I>>(base?: I): SetMapEntity {
    return SetMapEntity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetMapEntity>, I>>(object: I): SetMapEntity {
    const message = createBaseSetMapEntity();
    message.request = (object.request !== undefined && object.request !== null)
      ? SetMapEntity_Request.fromPartial(object.request)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? SetMapEntity_Response.fromPartial(object.response)
      : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetMapEntity_Request(): SetMapEntity_Request {
  return { entity: undefined };
}

export const SetMapEntity_Request = {
  encode(message: SetMapEntity_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      MapEntity.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMapEntity_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMapEntity_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = MapEntity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetMapEntity_Request {
    return { entity: isSet(object.entity) ? MapEntity.fromJSON(object.entity) : undefined };
  },

  toJSON(message: SetMapEntity_Request): unknown {
    const obj: any = {};
    if (message.entity !== undefined) {
      obj.entity = MapEntity.toJSON(message.entity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetMapEntity_Request>, I>>(base?: I): SetMapEntity_Request {
    return SetMapEntity_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetMapEntity_Request>, I>>(object: I): SetMapEntity_Request {
    const message = createBaseSetMapEntity_Request();
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? MapEntity.fromPartial(object.entity)
      : undefined;
    return message;
  },
};

function createBaseSetMapEntity_Response(): SetMapEntity_Response {
  return {};
}

export const SetMapEntity_Response = {
  encode(_: SetMapEntity_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMapEntity_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMapEntity_Response();
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

  fromJSON(_: any): SetMapEntity_Response {
    return {};
  },

  toJSON(_: SetMapEntity_Response): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SetMapEntity_Response>, I>>(base?: I): SetMapEntity_Response {
    return SetMapEntity_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetMapEntity_Response>, I>>(_: I): SetMapEntity_Response {
    const message = createBaseSetMapEntity_Response();
    return message;
  },
};

function createBaseGetAllMapEntities(): GetAllMapEntities {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetAllMapEntities = {
  encode(message: GetAllMapEntities, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      GetAllMapEntities_Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      GetAllMapEntities_Response.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllMapEntities {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllMapEntities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = GetAllMapEntities_Request.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.response = GetAllMapEntities_Response.decode(reader, reader.uint32());
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

  fromJSON(object: any): GetAllMapEntities {
    return {
      request: isSet(object.request) ? GetAllMapEntities_Request.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? GetAllMapEntities_Response.fromJSON(object.response) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetAllMapEntities): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = GetAllMapEntities_Request.toJSON(message.request);
    }
    if (message.response !== undefined) {
      obj.response = GetAllMapEntities_Response.toJSON(message.response);
    }
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllMapEntities>, I>>(base?: I): GetAllMapEntities {
    return GetAllMapEntities.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllMapEntities>, I>>(object: I): GetAllMapEntities {
    const message = createBaseGetAllMapEntities();
    message.request = (object.request !== undefined && object.request !== null)
      ? GetAllMapEntities_Request.fromPartial(object.request)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? GetAllMapEntities_Response.fromPartial(object.response)
      : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetAllMapEntities_Request(): GetAllMapEntities_Request {
  return {};
}

export const GetAllMapEntities_Request = {
  encode(_: GetAllMapEntities_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllMapEntities_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllMapEntities_Request();
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

  fromJSON(_: any): GetAllMapEntities_Request {
    return {};
  },

  toJSON(_: GetAllMapEntities_Request): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllMapEntities_Request>, I>>(base?: I): GetAllMapEntities_Request {
    return GetAllMapEntities_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllMapEntities_Request>, I>>(_: I): GetAllMapEntities_Request {
    const message = createBaseGetAllMapEntities_Request();
    return message;
  },
};

function createBaseGetAllMapEntities_Response(): GetAllMapEntities_Response {
  return { entities: [] };
}

export const GetAllMapEntities_Response = {
  encode(message: GetAllMapEntities_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entities) {
      MapEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllMapEntities_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllMapEntities_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entities.push(MapEntity.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllMapEntities_Response {
    return { entities: Array.isArray(object?.entities) ? object.entities.map((e: any) => MapEntity.fromJSON(e)) : [] };
  },

  toJSON(message: GetAllMapEntities_Response): unknown {
    const obj: any = {};
    if (message.entities?.length) {
      obj.entities = message.entities.map((e) => MapEntity.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllMapEntities_Response>, I>>(base?: I): GetAllMapEntities_Response {
    return GetAllMapEntities_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllMapEntities_Response>, I>>(object: I): GetAllMapEntities_Response {
    const message = createBaseGetAllMapEntities_Response();
    message.entities = object.entities?.map((e) => MapEntity.fromPartial(e)) || [];
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
