/* eslint-disable */
import {
  GetPowerPlantState_Request,
  SetPowerPlantState_Request,
  GetDevicePowerState_Request,
  SetDevicePowerState_Request,
  GetPowerPlantState_Response,
  SetPowerPlantState_Response,
  GetDevicePowerState_Response,
  SetDevicePowerState_Response,
} from "./lsx.power";
import {
  GetLockdownState_Request,
  SetLockdownState_Request,
  GetAutoLockdown_Request,
  SetAutoLockdown_Request,
  GetLockdownAnnouncements_Request,
  SetLockdownAnnouncements_Request,
  GetLockdownState_Response,
  SetLockdownState_Response,
  GetAutoLockdown_Response,
  SetAutoLockdown_Response,
  GetLockdownAnnouncements_Response,
  SetLockdownAnnouncements_Response,
} from "./lsx.lockdown";
import {
  GetFluffFiles_Request,
  GetFluffState_Request,
  SetFluffState_Request,
  GetFluffFiles_Response,
  GetFluffState_Response,
  SetFluffState_Response,
} from "./lsx.fluff";
import {
  GetModeSilentState_Request,
  SetModeSilentState_Request,
  BombBase_Request,
  BombArea_Request,
  GetBombAreaState_Request,
  GetModeSilentState_Response,
  SetModeSilentState_Response,
  BombBase_Response,
  BombArea_Response,
  GetBombAreaState_Response,
} from "./lsx.drone";
import {
  GetLightPowerState_Request,
  SetLightPowerState_Request,
  GetLightSwitchState_Request,
  SetLightSwitchState_Request,
  GetLightDmxState_Request,
  SetLightDmxState_Request,
  GetLightLockState_Request,
  SetLightLockState_Request,
  GetLightMode_Request,
  SetLightMode_Request,
  GetLightPowerState_Response,
  SetLightPowerState_Response,
  GetLightSwitchState_Response,
  SetLightSwitchState_Response,
  GetLightDmxState_Response,
  SetLightDmxState_Response,
  GetLightLockState_Response,
  SetLightLockState_Response,
  GetLightMode_Response,
  SetLightMode_Response,
} from "./lsx.light";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Request {
  getPowerPlantState?: GetPowerPlantState_Request | undefined;
  setPowerPlantState?: SetPowerPlantState_Request | undefined;
  /**
   * GetPowerLineState.Request get_power_line_state = 3;
   * SetPowerLineState.Request set_power_line_state = 4;
   */
  getAnnouncementFiles?: GetAnnouncementFiles_Request | undefined;
  getLockdownState?: GetLockdownState_Request | undefined;
  setLockdownState?: SetLockdownState_Request | undefined;
  getAutoLockdown?: GetAutoLockdown_Request | undefined;
  setAutoLockdown?: SetAutoLockdown_Request | undefined;
  getLockdownAnnouncements?: GetLockdownAnnouncements_Request | undefined;
  setLockdownAnnouncements?: SetLockdownAnnouncements_Request | undefined;
  getFluffFiles?: GetFluffFiles_Request | undefined;
  getFluffState?: GetFluffState_Request | undefined;
  setFluffState?: SetFluffState_Request | undefined;
  playAnnouncement?: PlayAnnouncement_Request | undefined;
  getModeSilentState?: GetModeSilentState_Request | undefined;
  setModeSilentState?: SetModeSilentState_Request | undefined;
  bombBase?: BombBase_Request | undefined;
  bombArea?: BombArea_Request | undefined;
  getBombAreaState?: GetBombAreaState_Request | undefined;
  /** Light */
  getLightPowerState?: GetLightPowerState_Request | undefined;
  setLightPowerState?: SetLightPowerState_Request | undefined;
  getLightSwitchState?: GetLightSwitchState_Request | undefined;
  setLightSwitchState?: SetLightSwitchState_Request | undefined;
  getLightDmxState?: GetLightDmxState_Request | undefined;
  setLightDmxState?: SetLightDmxState_Request | undefined;
  getLightLockState?: GetLightLockState_Request | undefined;
  setLightLockState?: SetLightLockState_Request | undefined;
  getLightMode?: GetLightMode_Request | undefined;
  setLightMode?: SetLightMode_Request | undefined;
  /**  */
  getDevicePowerState?: GetDevicePowerState_Request | undefined;
  setDevicePowerState?: SetDevicePowerState_Request | undefined;
}

export interface Response {
  getPowerPlantState?: GetPowerPlantState_Response | undefined;
  setPowerPlantState?: SetPowerPlantState_Response | undefined;
  /**
   * GetPowerLineState.Response get_power_line_state = 3;
   * SetPowerLineState.Response set_power_line_state = 4;
   */
  getAnnouncementFiles?: GetAnnouncementFiles_Response | undefined;
  getLockdownState?: GetLockdownState_Response | undefined;
  setLockdownState?: SetLockdownState_Response | undefined;
  getAutoLockdown?: GetAutoLockdown_Response | undefined;
  setAutoLockdown?: SetAutoLockdown_Response | undefined;
  getLockdownAnnouncements?: GetLockdownAnnouncements_Response | undefined;
  setLockdownAnnouncements?: SetLockdownAnnouncements_Response | undefined;
  getFluffFiles?: GetFluffFiles_Response | undefined;
  getFluffState?: GetFluffState_Response | undefined;
  setFluffState?: SetFluffState_Response | undefined;
  playAnnouncement?: PlayAnnouncement_Response | undefined;
  getModeSilentState?: GetModeSilentState_Response | undefined;
  setModeSilentState?: SetModeSilentState_Response | undefined;
  bombBase?: BombBase_Response | undefined;
  bombArea?: BombArea_Response | undefined;
  getBombAreaState?: GetBombAreaState_Response | undefined;
  /** Light */
  getLightPowerState?: GetLightPowerState_Response | undefined;
  setLightPowerState?: SetLightPowerState_Response | undefined;
  getLightSwitchState?: GetLightSwitchState_Response | undefined;
  setLightSwitchState?: SetLightSwitchState_Response | undefined;
  getLightDmxState?: GetLightDmxState_Response | undefined;
  setLightDmxState?: SetLightDmxState_Response | undefined;
  getLightLockState?: GetLightLockState_Response | undefined;
  setLightLockState?: SetLightLockState_Response | undefined;
  getLightMode?: GetLightMode_Response | undefined;
  setLightMode?: SetLightMode_Response | undefined;
  /**  */
  getDevicePowerState?: GetDevicePowerState_Response | undefined;
  setDevicePowerState?: SetDevicePowerState_Response | undefined;
}

export interface Error {
  type: string;
  message: string;
}

export interface LsxMessage {
  id: string;
  request?: Request | undefined;
  response?: Response | undefined;
  error?: Error | undefined;
}

export interface GetAnnouncementFiles {}

export interface GetAnnouncementFiles_Response {
  files: string[];
}

export interface GetAnnouncementFiles_Request {}

export interface PlayAnnouncement {}

export interface PlayAnnouncement_Request {
  filepath: string;
}

export interface PlayAnnouncement_Response {}

function createBaseRequest(): Request {
  return {
    getPowerPlantState: undefined,
    setPowerPlantState: undefined,
    getAnnouncementFiles: undefined,
    getLockdownState: undefined,
    setLockdownState: undefined,
    getAutoLockdown: undefined,
    setAutoLockdown: undefined,
    getLockdownAnnouncements: undefined,
    setLockdownAnnouncements: undefined,
    getFluffFiles: undefined,
    getFluffState: undefined,
    setFluffState: undefined,
    playAnnouncement: undefined,
    getModeSilentState: undefined,
    setModeSilentState: undefined,
    bombBase: undefined,
    bombArea: undefined,
    getBombAreaState: undefined,
    getLightPowerState: undefined,
    setLightPowerState: undefined,
    getLightSwitchState: undefined,
    setLightSwitchState: undefined,
    getLightDmxState: undefined,
    setLightDmxState: undefined,
    getLightLockState: undefined,
    setLightLockState: undefined,
    getLightMode: undefined,
    setLightMode: undefined,
    getDevicePowerState: undefined,
    setDevicePowerState: undefined,
  };
}

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.getPowerPlantState !== undefined) {
      GetPowerPlantState_Request.encode(
        message.getPowerPlantState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.setPowerPlantState !== undefined) {
      SetPowerPlantState_Request.encode(
        message.setPowerPlantState,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.getAnnouncementFiles !== undefined) {
      GetAnnouncementFiles_Request.encode(
        message.getAnnouncementFiles,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.getLockdownState !== undefined) {
      GetLockdownState_Request.encode(
        message.getLockdownState,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.setLockdownState !== undefined) {
      SetLockdownState_Request.encode(
        message.setLockdownState,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.getAutoLockdown !== undefined) {
      GetAutoLockdown_Request.encode(
        message.getAutoLockdown,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.setAutoLockdown !== undefined) {
      SetAutoLockdown_Request.encode(
        message.setAutoLockdown,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.getLockdownAnnouncements !== undefined) {
      GetLockdownAnnouncements_Request.encode(
        message.getLockdownAnnouncements,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.setLockdownAnnouncements !== undefined) {
      SetLockdownAnnouncements_Request.encode(
        message.setLockdownAnnouncements,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.getFluffFiles !== undefined) {
      GetFluffFiles_Request.encode(
        message.getFluffFiles,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.getFluffState !== undefined) {
      GetFluffState_Request.encode(
        message.getFluffState,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.setFluffState !== undefined) {
      SetFluffState_Request.encode(
        message.setFluffState,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.playAnnouncement !== undefined) {
      PlayAnnouncement_Request.encode(
        message.playAnnouncement,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.getModeSilentState !== undefined) {
      GetModeSilentState_Request.encode(
        message.getModeSilentState,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.setModeSilentState !== undefined) {
      SetModeSilentState_Request.encode(
        message.setModeSilentState,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.bombBase !== undefined) {
      BombBase_Request.encode(
        message.bombBase,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.bombArea !== undefined) {
      BombArea_Request.encode(
        message.bombArea,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.getBombAreaState !== undefined) {
      GetBombAreaState_Request.encode(
        message.getBombAreaState,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.getLightPowerState !== undefined) {
      GetLightPowerState_Request.encode(
        message.getLightPowerState,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.setLightPowerState !== undefined) {
      SetLightPowerState_Request.encode(
        message.setLightPowerState,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.getLightSwitchState !== undefined) {
      GetLightSwitchState_Request.encode(
        message.getLightSwitchState,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.setLightSwitchState !== undefined) {
      SetLightSwitchState_Request.encode(
        message.setLightSwitchState,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.getLightDmxState !== undefined) {
      GetLightDmxState_Request.encode(
        message.getLightDmxState,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.setLightDmxState !== undefined) {
      SetLightDmxState_Request.encode(
        message.setLightDmxState,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.getLightLockState !== undefined) {
      GetLightLockState_Request.encode(
        message.getLightLockState,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.setLightLockState !== undefined) {
      SetLightLockState_Request.encode(
        message.setLightLockState,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.getLightMode !== undefined) {
      GetLightMode_Request.encode(
        message.getLightMode,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.setLightMode !== undefined) {
      SetLightMode_Request.encode(
        message.setLightMode,
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.getDevicePowerState !== undefined) {
      GetDevicePowerState_Request.encode(
        message.getDevicePowerState,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.setDevicePowerState !== undefined) {
      SetDevicePowerState_Request.encode(
        message.setDevicePowerState,
        writer.uint32(258).fork()
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
          message.getPowerPlantState = GetPowerPlantState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.setPowerPlantState = SetPowerPlantState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.getAnnouncementFiles = GetAnnouncementFiles_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.getLockdownState = GetLockdownState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.setLockdownState = SetLockdownState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.getAutoLockdown = GetAutoLockdown_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.setAutoLockdown = SetAutoLockdown_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.getLockdownAnnouncements =
            GetLockdownAnnouncements_Request.decode(reader, reader.uint32());
          break;
        case 11:
          message.setLockdownAnnouncements =
            SetLockdownAnnouncements_Request.decode(reader, reader.uint32());
          break;
        case 12:
          message.getFluffFiles = GetFluffFiles_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.getFluffState = GetFluffState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.setFluffState = SetFluffState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.playAnnouncement = PlayAnnouncement_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.getModeSilentState = GetModeSilentState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.setModeSilentState = SetModeSilentState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.bombBase = BombBase_Request.decode(reader, reader.uint32());
          break;
        case 19:
          message.bombArea = BombArea_Request.decode(reader, reader.uint32());
          break;
        case 20:
          message.getBombAreaState = GetBombAreaState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.getLightPowerState = GetLightPowerState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.setLightPowerState = SetLightPowerState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.getLightSwitchState = GetLightSwitchState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.setLightSwitchState = SetLightSwitchState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.getLightDmxState = GetLightDmxState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.setLightDmxState = SetLightDmxState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 27:
          message.getLightLockState = GetLightLockState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 28:
          message.setLightLockState = SetLightLockState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 29:
          message.getLightMode = GetLightMode_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 30:
          message.setLightMode = SetLightMode_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 31:
          message.getDevicePowerState = GetDevicePowerState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 32:
          message.setDevicePowerState = SetDevicePowerState_Request.decode(
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
      getPowerPlantState: isSet(object.getPowerPlantState)
        ? GetPowerPlantState_Request.fromJSON(object.getPowerPlantState)
        : undefined,
      setPowerPlantState: isSet(object.setPowerPlantState)
        ? SetPowerPlantState_Request.fromJSON(object.setPowerPlantState)
        : undefined,
      getAnnouncementFiles: isSet(object.getAnnouncementFiles)
        ? GetAnnouncementFiles_Request.fromJSON(object.getAnnouncementFiles)
        : undefined,
      getLockdownState: isSet(object.getLockdownState)
        ? GetLockdownState_Request.fromJSON(object.getLockdownState)
        : undefined,
      setLockdownState: isSet(object.setLockdownState)
        ? SetLockdownState_Request.fromJSON(object.setLockdownState)
        : undefined,
      getAutoLockdown: isSet(object.getAutoLockdown)
        ? GetAutoLockdown_Request.fromJSON(object.getAutoLockdown)
        : undefined,
      setAutoLockdown: isSet(object.setAutoLockdown)
        ? SetAutoLockdown_Request.fromJSON(object.setAutoLockdown)
        : undefined,
      getLockdownAnnouncements: isSet(object.getLockdownAnnouncements)
        ? GetLockdownAnnouncements_Request.fromJSON(
            object.getLockdownAnnouncements
          )
        : undefined,
      setLockdownAnnouncements: isSet(object.setLockdownAnnouncements)
        ? SetLockdownAnnouncements_Request.fromJSON(
            object.setLockdownAnnouncements
          )
        : undefined,
      getFluffFiles: isSet(object.getFluffFiles)
        ? GetFluffFiles_Request.fromJSON(object.getFluffFiles)
        : undefined,
      getFluffState: isSet(object.getFluffState)
        ? GetFluffState_Request.fromJSON(object.getFluffState)
        : undefined,
      setFluffState: isSet(object.setFluffState)
        ? SetFluffState_Request.fromJSON(object.setFluffState)
        : undefined,
      playAnnouncement: isSet(object.playAnnouncement)
        ? PlayAnnouncement_Request.fromJSON(object.playAnnouncement)
        : undefined,
      getModeSilentState: isSet(object.getModeSilentState)
        ? GetModeSilentState_Request.fromJSON(object.getModeSilentState)
        : undefined,
      setModeSilentState: isSet(object.setModeSilentState)
        ? SetModeSilentState_Request.fromJSON(object.setModeSilentState)
        : undefined,
      bombBase: isSet(object.bombBase)
        ? BombBase_Request.fromJSON(object.bombBase)
        : undefined,
      bombArea: isSet(object.bombArea)
        ? BombArea_Request.fromJSON(object.bombArea)
        : undefined,
      getBombAreaState: isSet(object.getBombAreaState)
        ? GetBombAreaState_Request.fromJSON(object.getBombAreaState)
        : undefined,
      getLightPowerState: isSet(object.getLightPowerState)
        ? GetLightPowerState_Request.fromJSON(object.getLightPowerState)
        : undefined,
      setLightPowerState: isSet(object.setLightPowerState)
        ? SetLightPowerState_Request.fromJSON(object.setLightPowerState)
        : undefined,
      getLightSwitchState: isSet(object.getLightSwitchState)
        ? GetLightSwitchState_Request.fromJSON(object.getLightSwitchState)
        : undefined,
      setLightSwitchState: isSet(object.setLightSwitchState)
        ? SetLightSwitchState_Request.fromJSON(object.setLightSwitchState)
        : undefined,
      getLightDmxState: isSet(object.getLightDmxState)
        ? GetLightDmxState_Request.fromJSON(object.getLightDmxState)
        : undefined,
      setLightDmxState: isSet(object.setLightDmxState)
        ? SetLightDmxState_Request.fromJSON(object.setLightDmxState)
        : undefined,
      getLightLockState: isSet(object.getLightLockState)
        ? GetLightLockState_Request.fromJSON(object.getLightLockState)
        : undefined,
      setLightLockState: isSet(object.setLightLockState)
        ? SetLightLockState_Request.fromJSON(object.setLightLockState)
        : undefined,
      getLightMode: isSet(object.getLightMode)
        ? GetLightMode_Request.fromJSON(object.getLightMode)
        : undefined,
      setLightMode: isSet(object.setLightMode)
        ? SetLightMode_Request.fromJSON(object.setLightMode)
        : undefined,
      getDevicePowerState: isSet(object.getDevicePowerState)
        ? GetDevicePowerState_Request.fromJSON(object.getDevicePowerState)
        : undefined,
      setDevicePowerState: isSet(object.setDevicePowerState)
        ? SetDevicePowerState_Request.fromJSON(object.setDevicePowerState)
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.getPowerPlantState !== undefined &&
      (obj.getPowerPlantState = message.getPowerPlantState
        ? GetPowerPlantState_Request.toJSON(message.getPowerPlantState)
        : undefined);
    message.setPowerPlantState !== undefined &&
      (obj.setPowerPlantState = message.setPowerPlantState
        ? SetPowerPlantState_Request.toJSON(message.setPowerPlantState)
        : undefined);
    message.getAnnouncementFiles !== undefined &&
      (obj.getAnnouncementFiles = message.getAnnouncementFiles
        ? GetAnnouncementFiles_Request.toJSON(message.getAnnouncementFiles)
        : undefined);
    message.getLockdownState !== undefined &&
      (obj.getLockdownState = message.getLockdownState
        ? GetLockdownState_Request.toJSON(message.getLockdownState)
        : undefined);
    message.setLockdownState !== undefined &&
      (obj.setLockdownState = message.setLockdownState
        ? SetLockdownState_Request.toJSON(message.setLockdownState)
        : undefined);
    message.getAutoLockdown !== undefined &&
      (obj.getAutoLockdown = message.getAutoLockdown
        ? GetAutoLockdown_Request.toJSON(message.getAutoLockdown)
        : undefined);
    message.setAutoLockdown !== undefined &&
      (obj.setAutoLockdown = message.setAutoLockdown
        ? SetAutoLockdown_Request.toJSON(message.setAutoLockdown)
        : undefined);
    message.getLockdownAnnouncements !== undefined &&
      (obj.getLockdownAnnouncements = message.getLockdownAnnouncements
        ? GetLockdownAnnouncements_Request.toJSON(
            message.getLockdownAnnouncements
          )
        : undefined);
    message.setLockdownAnnouncements !== undefined &&
      (obj.setLockdownAnnouncements = message.setLockdownAnnouncements
        ? SetLockdownAnnouncements_Request.toJSON(
            message.setLockdownAnnouncements
          )
        : undefined);
    message.getFluffFiles !== undefined &&
      (obj.getFluffFiles = message.getFluffFiles
        ? GetFluffFiles_Request.toJSON(message.getFluffFiles)
        : undefined);
    message.getFluffState !== undefined &&
      (obj.getFluffState = message.getFluffState
        ? GetFluffState_Request.toJSON(message.getFluffState)
        : undefined);
    message.setFluffState !== undefined &&
      (obj.setFluffState = message.setFluffState
        ? SetFluffState_Request.toJSON(message.setFluffState)
        : undefined);
    message.playAnnouncement !== undefined &&
      (obj.playAnnouncement = message.playAnnouncement
        ? PlayAnnouncement_Request.toJSON(message.playAnnouncement)
        : undefined);
    message.getModeSilentState !== undefined &&
      (obj.getModeSilentState = message.getModeSilentState
        ? GetModeSilentState_Request.toJSON(message.getModeSilentState)
        : undefined);
    message.setModeSilentState !== undefined &&
      (obj.setModeSilentState = message.setModeSilentState
        ? SetModeSilentState_Request.toJSON(message.setModeSilentState)
        : undefined);
    message.bombBase !== undefined &&
      (obj.bombBase = message.bombBase
        ? BombBase_Request.toJSON(message.bombBase)
        : undefined);
    message.bombArea !== undefined &&
      (obj.bombArea = message.bombArea
        ? BombArea_Request.toJSON(message.bombArea)
        : undefined);
    message.getBombAreaState !== undefined &&
      (obj.getBombAreaState = message.getBombAreaState
        ? GetBombAreaState_Request.toJSON(message.getBombAreaState)
        : undefined);
    message.getLightPowerState !== undefined &&
      (obj.getLightPowerState = message.getLightPowerState
        ? GetLightPowerState_Request.toJSON(message.getLightPowerState)
        : undefined);
    message.setLightPowerState !== undefined &&
      (obj.setLightPowerState = message.setLightPowerState
        ? SetLightPowerState_Request.toJSON(message.setLightPowerState)
        : undefined);
    message.getLightSwitchState !== undefined &&
      (obj.getLightSwitchState = message.getLightSwitchState
        ? GetLightSwitchState_Request.toJSON(message.getLightSwitchState)
        : undefined);
    message.setLightSwitchState !== undefined &&
      (obj.setLightSwitchState = message.setLightSwitchState
        ? SetLightSwitchState_Request.toJSON(message.setLightSwitchState)
        : undefined);
    message.getLightDmxState !== undefined &&
      (obj.getLightDmxState = message.getLightDmxState
        ? GetLightDmxState_Request.toJSON(message.getLightDmxState)
        : undefined);
    message.setLightDmxState !== undefined &&
      (obj.setLightDmxState = message.setLightDmxState
        ? SetLightDmxState_Request.toJSON(message.setLightDmxState)
        : undefined);
    message.getLightLockState !== undefined &&
      (obj.getLightLockState = message.getLightLockState
        ? GetLightLockState_Request.toJSON(message.getLightLockState)
        : undefined);
    message.setLightLockState !== undefined &&
      (obj.setLightLockState = message.setLightLockState
        ? SetLightLockState_Request.toJSON(message.setLightLockState)
        : undefined);
    message.getLightMode !== undefined &&
      (obj.getLightMode = message.getLightMode
        ? GetLightMode_Request.toJSON(message.getLightMode)
        : undefined);
    message.setLightMode !== undefined &&
      (obj.setLightMode = message.setLightMode
        ? SetLightMode_Request.toJSON(message.setLightMode)
        : undefined);
    message.getDevicePowerState !== undefined &&
      (obj.getDevicePowerState = message.getDevicePowerState
        ? GetDevicePowerState_Request.toJSON(message.getDevicePowerState)
        : undefined);
    message.setDevicePowerState !== undefined &&
      (obj.setDevicePowerState = message.setDevicePowerState
        ? SetDevicePowerState_Request.toJSON(message.setDevicePowerState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.getPowerPlantState =
      object.getPowerPlantState !== undefined &&
      object.getPowerPlantState !== null
        ? GetPowerPlantState_Request.fromPartial(object.getPowerPlantState)
        : undefined;
    message.setPowerPlantState =
      object.setPowerPlantState !== undefined &&
      object.setPowerPlantState !== null
        ? SetPowerPlantState_Request.fromPartial(object.setPowerPlantState)
        : undefined;
    message.getAnnouncementFiles =
      object.getAnnouncementFiles !== undefined &&
      object.getAnnouncementFiles !== null
        ? GetAnnouncementFiles_Request.fromPartial(object.getAnnouncementFiles)
        : undefined;
    message.getLockdownState =
      object.getLockdownState !== undefined && object.getLockdownState !== null
        ? GetLockdownState_Request.fromPartial(object.getLockdownState)
        : undefined;
    message.setLockdownState =
      object.setLockdownState !== undefined && object.setLockdownState !== null
        ? SetLockdownState_Request.fromPartial(object.setLockdownState)
        : undefined;
    message.getAutoLockdown =
      object.getAutoLockdown !== undefined && object.getAutoLockdown !== null
        ? GetAutoLockdown_Request.fromPartial(object.getAutoLockdown)
        : undefined;
    message.setAutoLockdown =
      object.setAutoLockdown !== undefined && object.setAutoLockdown !== null
        ? SetAutoLockdown_Request.fromPartial(object.setAutoLockdown)
        : undefined;
    message.getLockdownAnnouncements =
      object.getLockdownAnnouncements !== undefined &&
      object.getLockdownAnnouncements !== null
        ? GetLockdownAnnouncements_Request.fromPartial(
            object.getLockdownAnnouncements
          )
        : undefined;
    message.setLockdownAnnouncements =
      object.setLockdownAnnouncements !== undefined &&
      object.setLockdownAnnouncements !== null
        ? SetLockdownAnnouncements_Request.fromPartial(
            object.setLockdownAnnouncements
          )
        : undefined;
    message.getFluffFiles =
      object.getFluffFiles !== undefined && object.getFluffFiles !== null
        ? GetFluffFiles_Request.fromPartial(object.getFluffFiles)
        : undefined;
    message.getFluffState =
      object.getFluffState !== undefined && object.getFluffState !== null
        ? GetFluffState_Request.fromPartial(object.getFluffState)
        : undefined;
    message.setFluffState =
      object.setFluffState !== undefined && object.setFluffState !== null
        ? SetFluffState_Request.fromPartial(object.setFluffState)
        : undefined;
    message.playAnnouncement =
      object.playAnnouncement !== undefined && object.playAnnouncement !== null
        ? PlayAnnouncement_Request.fromPartial(object.playAnnouncement)
        : undefined;
    message.getModeSilentState =
      object.getModeSilentState !== undefined &&
      object.getModeSilentState !== null
        ? GetModeSilentState_Request.fromPartial(object.getModeSilentState)
        : undefined;
    message.setModeSilentState =
      object.setModeSilentState !== undefined &&
      object.setModeSilentState !== null
        ? SetModeSilentState_Request.fromPartial(object.setModeSilentState)
        : undefined;
    message.bombBase =
      object.bombBase !== undefined && object.bombBase !== null
        ? BombBase_Request.fromPartial(object.bombBase)
        : undefined;
    message.bombArea =
      object.bombArea !== undefined && object.bombArea !== null
        ? BombArea_Request.fromPartial(object.bombArea)
        : undefined;
    message.getBombAreaState =
      object.getBombAreaState !== undefined && object.getBombAreaState !== null
        ? GetBombAreaState_Request.fromPartial(object.getBombAreaState)
        : undefined;
    message.getLightPowerState =
      object.getLightPowerState !== undefined &&
      object.getLightPowerState !== null
        ? GetLightPowerState_Request.fromPartial(object.getLightPowerState)
        : undefined;
    message.setLightPowerState =
      object.setLightPowerState !== undefined &&
      object.setLightPowerState !== null
        ? SetLightPowerState_Request.fromPartial(object.setLightPowerState)
        : undefined;
    message.getLightSwitchState =
      object.getLightSwitchState !== undefined &&
      object.getLightSwitchState !== null
        ? GetLightSwitchState_Request.fromPartial(object.getLightSwitchState)
        : undefined;
    message.setLightSwitchState =
      object.setLightSwitchState !== undefined &&
      object.setLightSwitchState !== null
        ? SetLightSwitchState_Request.fromPartial(object.setLightSwitchState)
        : undefined;
    message.getLightDmxState =
      object.getLightDmxState !== undefined && object.getLightDmxState !== null
        ? GetLightDmxState_Request.fromPartial(object.getLightDmxState)
        : undefined;
    message.setLightDmxState =
      object.setLightDmxState !== undefined && object.setLightDmxState !== null
        ? SetLightDmxState_Request.fromPartial(object.setLightDmxState)
        : undefined;
    message.getLightLockState =
      object.getLightLockState !== undefined &&
      object.getLightLockState !== null
        ? GetLightLockState_Request.fromPartial(object.getLightLockState)
        : undefined;
    message.setLightLockState =
      object.setLightLockState !== undefined &&
      object.setLightLockState !== null
        ? SetLightLockState_Request.fromPartial(object.setLightLockState)
        : undefined;
    message.getLightMode =
      object.getLightMode !== undefined && object.getLightMode !== null
        ? GetLightMode_Request.fromPartial(object.getLightMode)
        : undefined;
    message.setLightMode =
      object.setLightMode !== undefined && object.setLightMode !== null
        ? SetLightMode_Request.fromPartial(object.setLightMode)
        : undefined;
    message.getDevicePowerState =
      object.getDevicePowerState !== undefined &&
      object.getDevicePowerState !== null
        ? GetDevicePowerState_Request.fromPartial(object.getDevicePowerState)
        : undefined;
    message.setDevicePowerState =
      object.setDevicePowerState !== undefined &&
      object.setDevicePowerState !== null
        ? SetDevicePowerState_Request.fromPartial(object.setDevicePowerState)
        : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return {
    getPowerPlantState: undefined,
    setPowerPlantState: undefined,
    getAnnouncementFiles: undefined,
    getLockdownState: undefined,
    setLockdownState: undefined,
    getAutoLockdown: undefined,
    setAutoLockdown: undefined,
    getLockdownAnnouncements: undefined,
    setLockdownAnnouncements: undefined,
    getFluffFiles: undefined,
    getFluffState: undefined,
    setFluffState: undefined,
    playAnnouncement: undefined,
    getModeSilentState: undefined,
    setModeSilentState: undefined,
    bombBase: undefined,
    bombArea: undefined,
    getBombAreaState: undefined,
    getLightPowerState: undefined,
    setLightPowerState: undefined,
    getLightSwitchState: undefined,
    setLightSwitchState: undefined,
    getLightDmxState: undefined,
    setLightDmxState: undefined,
    getLightLockState: undefined,
    setLightLockState: undefined,
    getLightMode: undefined,
    setLightMode: undefined,
    getDevicePowerState: undefined,
    setDevicePowerState: undefined,
  };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.getPowerPlantState !== undefined) {
      GetPowerPlantState_Response.encode(
        message.getPowerPlantState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.setPowerPlantState !== undefined) {
      SetPowerPlantState_Response.encode(
        message.setPowerPlantState,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.getAnnouncementFiles !== undefined) {
      GetAnnouncementFiles_Response.encode(
        message.getAnnouncementFiles,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.getLockdownState !== undefined) {
      GetLockdownState_Response.encode(
        message.getLockdownState,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.setLockdownState !== undefined) {
      SetLockdownState_Response.encode(
        message.setLockdownState,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.getAutoLockdown !== undefined) {
      GetAutoLockdown_Response.encode(
        message.getAutoLockdown,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.setAutoLockdown !== undefined) {
      SetAutoLockdown_Response.encode(
        message.setAutoLockdown,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.getLockdownAnnouncements !== undefined) {
      GetLockdownAnnouncements_Response.encode(
        message.getLockdownAnnouncements,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.setLockdownAnnouncements !== undefined) {
      SetLockdownAnnouncements_Response.encode(
        message.setLockdownAnnouncements,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.getFluffFiles !== undefined) {
      GetFluffFiles_Response.encode(
        message.getFluffFiles,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.getFluffState !== undefined) {
      GetFluffState_Response.encode(
        message.getFluffState,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.setFluffState !== undefined) {
      SetFluffState_Response.encode(
        message.setFluffState,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.playAnnouncement !== undefined) {
      PlayAnnouncement_Response.encode(
        message.playAnnouncement,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.getModeSilentState !== undefined) {
      GetModeSilentState_Response.encode(
        message.getModeSilentState,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.setModeSilentState !== undefined) {
      SetModeSilentState_Response.encode(
        message.setModeSilentState,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.bombBase !== undefined) {
      BombBase_Response.encode(
        message.bombBase,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.bombArea !== undefined) {
      BombArea_Response.encode(
        message.bombArea,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.getBombAreaState !== undefined) {
      GetBombAreaState_Response.encode(
        message.getBombAreaState,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.getLightPowerState !== undefined) {
      GetLightPowerState_Response.encode(
        message.getLightPowerState,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.setLightPowerState !== undefined) {
      SetLightPowerState_Response.encode(
        message.setLightPowerState,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.getLightSwitchState !== undefined) {
      GetLightSwitchState_Response.encode(
        message.getLightSwitchState,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.setLightSwitchState !== undefined) {
      SetLightSwitchState_Response.encode(
        message.setLightSwitchState,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.getLightDmxState !== undefined) {
      GetLightDmxState_Response.encode(
        message.getLightDmxState,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.setLightDmxState !== undefined) {
      SetLightDmxState_Response.encode(
        message.setLightDmxState,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.getLightLockState !== undefined) {
      GetLightLockState_Response.encode(
        message.getLightLockState,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.setLightLockState !== undefined) {
      SetLightLockState_Response.encode(
        message.setLightLockState,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.getLightMode !== undefined) {
      GetLightMode_Response.encode(
        message.getLightMode,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.setLightMode !== undefined) {
      SetLightMode_Response.encode(
        message.setLightMode,
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.getDevicePowerState !== undefined) {
      GetDevicePowerState_Response.encode(
        message.getDevicePowerState,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.setDevicePowerState !== undefined) {
      SetDevicePowerState_Response.encode(
        message.setDevicePowerState,
        writer.uint32(258).fork()
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
          message.getPowerPlantState = GetPowerPlantState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.setPowerPlantState = SetPowerPlantState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.getAnnouncementFiles = GetAnnouncementFiles_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.getLockdownState = GetLockdownState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.setLockdownState = SetLockdownState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.getAutoLockdown = GetAutoLockdown_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.setAutoLockdown = SetAutoLockdown_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.getLockdownAnnouncements =
            GetLockdownAnnouncements_Response.decode(reader, reader.uint32());
          break;
        case 11:
          message.setLockdownAnnouncements =
            SetLockdownAnnouncements_Response.decode(reader, reader.uint32());
          break;
        case 12:
          message.getFluffFiles = GetFluffFiles_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.getFluffState = GetFluffState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.setFluffState = SetFluffState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.playAnnouncement = PlayAnnouncement_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.getModeSilentState = GetModeSilentState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.setModeSilentState = SetModeSilentState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.bombBase = BombBase_Response.decode(reader, reader.uint32());
          break;
        case 19:
          message.bombArea = BombArea_Response.decode(reader, reader.uint32());
          break;
        case 20:
          message.getBombAreaState = GetBombAreaState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.getLightPowerState = GetLightPowerState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.setLightPowerState = SetLightPowerState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.getLightSwitchState = GetLightSwitchState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.setLightSwitchState = SetLightSwitchState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.getLightDmxState = GetLightDmxState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.setLightDmxState = SetLightDmxState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 27:
          message.getLightLockState = GetLightLockState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 28:
          message.setLightLockState = SetLightLockState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 29:
          message.getLightMode = GetLightMode_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 30:
          message.setLightMode = SetLightMode_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 31:
          message.getDevicePowerState = GetDevicePowerState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 32:
          message.setDevicePowerState = SetDevicePowerState_Response.decode(
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
      getPowerPlantState: isSet(object.getPowerPlantState)
        ? GetPowerPlantState_Response.fromJSON(object.getPowerPlantState)
        : undefined,
      setPowerPlantState: isSet(object.setPowerPlantState)
        ? SetPowerPlantState_Response.fromJSON(object.setPowerPlantState)
        : undefined,
      getAnnouncementFiles: isSet(object.getAnnouncementFiles)
        ? GetAnnouncementFiles_Response.fromJSON(object.getAnnouncementFiles)
        : undefined,
      getLockdownState: isSet(object.getLockdownState)
        ? GetLockdownState_Response.fromJSON(object.getLockdownState)
        : undefined,
      setLockdownState: isSet(object.setLockdownState)
        ? SetLockdownState_Response.fromJSON(object.setLockdownState)
        : undefined,
      getAutoLockdown: isSet(object.getAutoLockdown)
        ? GetAutoLockdown_Response.fromJSON(object.getAutoLockdown)
        : undefined,
      setAutoLockdown: isSet(object.setAutoLockdown)
        ? SetAutoLockdown_Response.fromJSON(object.setAutoLockdown)
        : undefined,
      getLockdownAnnouncements: isSet(object.getLockdownAnnouncements)
        ? GetLockdownAnnouncements_Response.fromJSON(
            object.getLockdownAnnouncements
          )
        : undefined,
      setLockdownAnnouncements: isSet(object.setLockdownAnnouncements)
        ? SetLockdownAnnouncements_Response.fromJSON(
            object.setLockdownAnnouncements
          )
        : undefined,
      getFluffFiles: isSet(object.getFluffFiles)
        ? GetFluffFiles_Response.fromJSON(object.getFluffFiles)
        : undefined,
      getFluffState: isSet(object.getFluffState)
        ? GetFluffState_Response.fromJSON(object.getFluffState)
        : undefined,
      setFluffState: isSet(object.setFluffState)
        ? SetFluffState_Response.fromJSON(object.setFluffState)
        : undefined,
      playAnnouncement: isSet(object.playAnnouncement)
        ? PlayAnnouncement_Response.fromJSON(object.playAnnouncement)
        : undefined,
      getModeSilentState: isSet(object.getModeSilentState)
        ? GetModeSilentState_Response.fromJSON(object.getModeSilentState)
        : undefined,
      setModeSilentState: isSet(object.setModeSilentState)
        ? SetModeSilentState_Response.fromJSON(object.setModeSilentState)
        : undefined,
      bombBase: isSet(object.bombBase)
        ? BombBase_Response.fromJSON(object.bombBase)
        : undefined,
      bombArea: isSet(object.bombArea)
        ? BombArea_Response.fromJSON(object.bombArea)
        : undefined,
      getBombAreaState: isSet(object.getBombAreaState)
        ? GetBombAreaState_Response.fromJSON(object.getBombAreaState)
        : undefined,
      getLightPowerState: isSet(object.getLightPowerState)
        ? GetLightPowerState_Response.fromJSON(object.getLightPowerState)
        : undefined,
      setLightPowerState: isSet(object.setLightPowerState)
        ? SetLightPowerState_Response.fromJSON(object.setLightPowerState)
        : undefined,
      getLightSwitchState: isSet(object.getLightSwitchState)
        ? GetLightSwitchState_Response.fromJSON(object.getLightSwitchState)
        : undefined,
      setLightSwitchState: isSet(object.setLightSwitchState)
        ? SetLightSwitchState_Response.fromJSON(object.setLightSwitchState)
        : undefined,
      getLightDmxState: isSet(object.getLightDmxState)
        ? GetLightDmxState_Response.fromJSON(object.getLightDmxState)
        : undefined,
      setLightDmxState: isSet(object.setLightDmxState)
        ? SetLightDmxState_Response.fromJSON(object.setLightDmxState)
        : undefined,
      getLightLockState: isSet(object.getLightLockState)
        ? GetLightLockState_Response.fromJSON(object.getLightLockState)
        : undefined,
      setLightLockState: isSet(object.setLightLockState)
        ? SetLightLockState_Response.fromJSON(object.setLightLockState)
        : undefined,
      getLightMode: isSet(object.getLightMode)
        ? GetLightMode_Response.fromJSON(object.getLightMode)
        : undefined,
      setLightMode: isSet(object.setLightMode)
        ? SetLightMode_Response.fromJSON(object.setLightMode)
        : undefined,
      getDevicePowerState: isSet(object.getDevicePowerState)
        ? GetDevicePowerState_Response.fromJSON(object.getDevicePowerState)
        : undefined,
      setDevicePowerState: isSet(object.setDevicePowerState)
        ? SetDevicePowerState_Response.fromJSON(object.setDevicePowerState)
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.getPowerPlantState !== undefined &&
      (obj.getPowerPlantState = message.getPowerPlantState
        ? GetPowerPlantState_Response.toJSON(message.getPowerPlantState)
        : undefined);
    message.setPowerPlantState !== undefined &&
      (obj.setPowerPlantState = message.setPowerPlantState
        ? SetPowerPlantState_Response.toJSON(message.setPowerPlantState)
        : undefined);
    message.getAnnouncementFiles !== undefined &&
      (obj.getAnnouncementFiles = message.getAnnouncementFiles
        ? GetAnnouncementFiles_Response.toJSON(message.getAnnouncementFiles)
        : undefined);
    message.getLockdownState !== undefined &&
      (obj.getLockdownState = message.getLockdownState
        ? GetLockdownState_Response.toJSON(message.getLockdownState)
        : undefined);
    message.setLockdownState !== undefined &&
      (obj.setLockdownState = message.setLockdownState
        ? SetLockdownState_Response.toJSON(message.setLockdownState)
        : undefined);
    message.getAutoLockdown !== undefined &&
      (obj.getAutoLockdown = message.getAutoLockdown
        ? GetAutoLockdown_Response.toJSON(message.getAutoLockdown)
        : undefined);
    message.setAutoLockdown !== undefined &&
      (obj.setAutoLockdown = message.setAutoLockdown
        ? SetAutoLockdown_Response.toJSON(message.setAutoLockdown)
        : undefined);
    message.getLockdownAnnouncements !== undefined &&
      (obj.getLockdownAnnouncements = message.getLockdownAnnouncements
        ? GetLockdownAnnouncements_Response.toJSON(
            message.getLockdownAnnouncements
          )
        : undefined);
    message.setLockdownAnnouncements !== undefined &&
      (obj.setLockdownAnnouncements = message.setLockdownAnnouncements
        ? SetLockdownAnnouncements_Response.toJSON(
            message.setLockdownAnnouncements
          )
        : undefined);
    message.getFluffFiles !== undefined &&
      (obj.getFluffFiles = message.getFluffFiles
        ? GetFluffFiles_Response.toJSON(message.getFluffFiles)
        : undefined);
    message.getFluffState !== undefined &&
      (obj.getFluffState = message.getFluffState
        ? GetFluffState_Response.toJSON(message.getFluffState)
        : undefined);
    message.setFluffState !== undefined &&
      (obj.setFluffState = message.setFluffState
        ? SetFluffState_Response.toJSON(message.setFluffState)
        : undefined);
    message.playAnnouncement !== undefined &&
      (obj.playAnnouncement = message.playAnnouncement
        ? PlayAnnouncement_Response.toJSON(message.playAnnouncement)
        : undefined);
    message.getModeSilentState !== undefined &&
      (obj.getModeSilentState = message.getModeSilentState
        ? GetModeSilentState_Response.toJSON(message.getModeSilentState)
        : undefined);
    message.setModeSilentState !== undefined &&
      (obj.setModeSilentState = message.setModeSilentState
        ? SetModeSilentState_Response.toJSON(message.setModeSilentState)
        : undefined);
    message.bombBase !== undefined &&
      (obj.bombBase = message.bombBase
        ? BombBase_Response.toJSON(message.bombBase)
        : undefined);
    message.bombArea !== undefined &&
      (obj.bombArea = message.bombArea
        ? BombArea_Response.toJSON(message.bombArea)
        : undefined);
    message.getBombAreaState !== undefined &&
      (obj.getBombAreaState = message.getBombAreaState
        ? GetBombAreaState_Response.toJSON(message.getBombAreaState)
        : undefined);
    message.getLightPowerState !== undefined &&
      (obj.getLightPowerState = message.getLightPowerState
        ? GetLightPowerState_Response.toJSON(message.getLightPowerState)
        : undefined);
    message.setLightPowerState !== undefined &&
      (obj.setLightPowerState = message.setLightPowerState
        ? SetLightPowerState_Response.toJSON(message.setLightPowerState)
        : undefined);
    message.getLightSwitchState !== undefined &&
      (obj.getLightSwitchState = message.getLightSwitchState
        ? GetLightSwitchState_Response.toJSON(message.getLightSwitchState)
        : undefined);
    message.setLightSwitchState !== undefined &&
      (obj.setLightSwitchState = message.setLightSwitchState
        ? SetLightSwitchState_Response.toJSON(message.setLightSwitchState)
        : undefined);
    message.getLightDmxState !== undefined &&
      (obj.getLightDmxState = message.getLightDmxState
        ? GetLightDmxState_Response.toJSON(message.getLightDmxState)
        : undefined);
    message.setLightDmxState !== undefined &&
      (obj.setLightDmxState = message.setLightDmxState
        ? SetLightDmxState_Response.toJSON(message.setLightDmxState)
        : undefined);
    message.getLightLockState !== undefined &&
      (obj.getLightLockState = message.getLightLockState
        ? GetLightLockState_Response.toJSON(message.getLightLockState)
        : undefined);
    message.setLightLockState !== undefined &&
      (obj.setLightLockState = message.setLightLockState
        ? SetLightLockState_Response.toJSON(message.setLightLockState)
        : undefined);
    message.getLightMode !== undefined &&
      (obj.getLightMode = message.getLightMode
        ? GetLightMode_Response.toJSON(message.getLightMode)
        : undefined);
    message.setLightMode !== undefined &&
      (obj.setLightMode = message.setLightMode
        ? SetLightMode_Response.toJSON(message.setLightMode)
        : undefined);
    message.getDevicePowerState !== undefined &&
      (obj.getDevicePowerState = message.getDevicePowerState
        ? GetDevicePowerState_Response.toJSON(message.getDevicePowerState)
        : undefined);
    message.setDevicePowerState !== undefined &&
      (obj.setDevicePowerState = message.setDevicePowerState
        ? SetDevicePowerState_Response.toJSON(message.setDevicePowerState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.getPowerPlantState =
      object.getPowerPlantState !== undefined &&
      object.getPowerPlantState !== null
        ? GetPowerPlantState_Response.fromPartial(object.getPowerPlantState)
        : undefined;
    message.setPowerPlantState =
      object.setPowerPlantState !== undefined &&
      object.setPowerPlantState !== null
        ? SetPowerPlantState_Response.fromPartial(object.setPowerPlantState)
        : undefined;
    message.getAnnouncementFiles =
      object.getAnnouncementFiles !== undefined &&
      object.getAnnouncementFiles !== null
        ? GetAnnouncementFiles_Response.fromPartial(object.getAnnouncementFiles)
        : undefined;
    message.getLockdownState =
      object.getLockdownState !== undefined && object.getLockdownState !== null
        ? GetLockdownState_Response.fromPartial(object.getLockdownState)
        : undefined;
    message.setLockdownState =
      object.setLockdownState !== undefined && object.setLockdownState !== null
        ? SetLockdownState_Response.fromPartial(object.setLockdownState)
        : undefined;
    message.getAutoLockdown =
      object.getAutoLockdown !== undefined && object.getAutoLockdown !== null
        ? GetAutoLockdown_Response.fromPartial(object.getAutoLockdown)
        : undefined;
    message.setAutoLockdown =
      object.setAutoLockdown !== undefined && object.setAutoLockdown !== null
        ? SetAutoLockdown_Response.fromPartial(object.setAutoLockdown)
        : undefined;
    message.getLockdownAnnouncements =
      object.getLockdownAnnouncements !== undefined &&
      object.getLockdownAnnouncements !== null
        ? GetLockdownAnnouncements_Response.fromPartial(
            object.getLockdownAnnouncements
          )
        : undefined;
    message.setLockdownAnnouncements =
      object.setLockdownAnnouncements !== undefined &&
      object.setLockdownAnnouncements !== null
        ? SetLockdownAnnouncements_Response.fromPartial(
            object.setLockdownAnnouncements
          )
        : undefined;
    message.getFluffFiles =
      object.getFluffFiles !== undefined && object.getFluffFiles !== null
        ? GetFluffFiles_Response.fromPartial(object.getFluffFiles)
        : undefined;
    message.getFluffState =
      object.getFluffState !== undefined && object.getFluffState !== null
        ? GetFluffState_Response.fromPartial(object.getFluffState)
        : undefined;
    message.setFluffState =
      object.setFluffState !== undefined && object.setFluffState !== null
        ? SetFluffState_Response.fromPartial(object.setFluffState)
        : undefined;
    message.playAnnouncement =
      object.playAnnouncement !== undefined && object.playAnnouncement !== null
        ? PlayAnnouncement_Response.fromPartial(object.playAnnouncement)
        : undefined;
    message.getModeSilentState =
      object.getModeSilentState !== undefined &&
      object.getModeSilentState !== null
        ? GetModeSilentState_Response.fromPartial(object.getModeSilentState)
        : undefined;
    message.setModeSilentState =
      object.setModeSilentState !== undefined &&
      object.setModeSilentState !== null
        ? SetModeSilentState_Response.fromPartial(object.setModeSilentState)
        : undefined;
    message.bombBase =
      object.bombBase !== undefined && object.bombBase !== null
        ? BombBase_Response.fromPartial(object.bombBase)
        : undefined;
    message.bombArea =
      object.bombArea !== undefined && object.bombArea !== null
        ? BombArea_Response.fromPartial(object.bombArea)
        : undefined;
    message.getBombAreaState =
      object.getBombAreaState !== undefined && object.getBombAreaState !== null
        ? GetBombAreaState_Response.fromPartial(object.getBombAreaState)
        : undefined;
    message.getLightPowerState =
      object.getLightPowerState !== undefined &&
      object.getLightPowerState !== null
        ? GetLightPowerState_Response.fromPartial(object.getLightPowerState)
        : undefined;
    message.setLightPowerState =
      object.setLightPowerState !== undefined &&
      object.setLightPowerState !== null
        ? SetLightPowerState_Response.fromPartial(object.setLightPowerState)
        : undefined;
    message.getLightSwitchState =
      object.getLightSwitchState !== undefined &&
      object.getLightSwitchState !== null
        ? GetLightSwitchState_Response.fromPartial(object.getLightSwitchState)
        : undefined;
    message.setLightSwitchState =
      object.setLightSwitchState !== undefined &&
      object.setLightSwitchState !== null
        ? SetLightSwitchState_Response.fromPartial(object.setLightSwitchState)
        : undefined;
    message.getLightDmxState =
      object.getLightDmxState !== undefined && object.getLightDmxState !== null
        ? GetLightDmxState_Response.fromPartial(object.getLightDmxState)
        : undefined;
    message.setLightDmxState =
      object.setLightDmxState !== undefined && object.setLightDmxState !== null
        ? SetLightDmxState_Response.fromPartial(object.setLightDmxState)
        : undefined;
    message.getLightLockState =
      object.getLightLockState !== undefined &&
      object.getLightLockState !== null
        ? GetLightLockState_Response.fromPartial(object.getLightLockState)
        : undefined;
    message.setLightLockState =
      object.setLightLockState !== undefined &&
      object.setLightLockState !== null
        ? SetLightLockState_Response.fromPartial(object.setLightLockState)
        : undefined;
    message.getLightMode =
      object.getLightMode !== undefined && object.getLightMode !== null
        ? GetLightMode_Response.fromPartial(object.getLightMode)
        : undefined;
    message.setLightMode =
      object.setLightMode !== undefined && object.setLightMode !== null
        ? SetLightMode_Response.fromPartial(object.setLightMode)
        : undefined;
    message.getDevicePowerState =
      object.getDevicePowerState !== undefined &&
      object.getDevicePowerState !== null
        ? GetDevicePowerState_Response.fromPartial(object.getDevicePowerState)
        : undefined;
    message.setDevicePowerState =
      object.setDevicePowerState !== undefined &&
      object.setDevicePowerState !== null
        ? SetDevicePowerState_Response.fromPartial(object.setDevicePowerState)
        : undefined;
    return message;
  },
};

function createBaseError(): Error {
  return { type: "", message: "" };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.type = object.type ?? "";
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseLsxMessage(): LsxMessage {
  return { id: "", request: undefined, response: undefined, error: undefined };
}

export const LsxMessage = {
  encode(
    message: LsxMessage,
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
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LsxMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLsxMessage();
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
        case 4:
          message.error = Error.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LsxMessage {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      request: isSet(object.request)
        ? Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: LsxMessage): unknown {
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
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LsxMessage>, I>>(
    object: I
  ): LsxMessage {
    const message = createBaseLsxMessage();
    message.id = object.id ?? "";
    message.request =
      object.request !== undefined && object.request !== null
        ? Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? Response.fromPartial(object.response)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? Error.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGetAnnouncementFiles(): GetAnnouncementFiles {
  return {};
}

export const GetAnnouncementFiles = {
  encode(
    _: GetAnnouncementFiles,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAnnouncementFiles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAnnouncementFiles();
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

  fromJSON(_: any): GetAnnouncementFiles {
    return {};
  },

  toJSON(_: GetAnnouncementFiles): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAnnouncementFiles>, I>>(
    _: I
  ): GetAnnouncementFiles {
    const message = createBaseGetAnnouncementFiles();
    return message;
  },
};

function createBaseGetAnnouncementFiles_Response(): GetAnnouncementFiles_Response {
  return { files: [] };
}

export const GetAnnouncementFiles_Response = {
  encode(
    message: GetAnnouncementFiles_Response,
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
  ): GetAnnouncementFiles_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAnnouncementFiles_Response();
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

  fromJSON(object: any): GetAnnouncementFiles_Response {
    return {
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetAnnouncementFiles_Response): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAnnouncementFiles_Response>, I>>(
    object: I
  ): GetAnnouncementFiles_Response {
    const message = createBaseGetAnnouncementFiles_Response();
    message.files = object.files?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetAnnouncementFiles_Request(): GetAnnouncementFiles_Request {
  return {};
}

export const GetAnnouncementFiles_Request = {
  encode(
    _: GetAnnouncementFiles_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAnnouncementFiles_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAnnouncementFiles_Request();
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

  fromJSON(_: any): GetAnnouncementFiles_Request {
    return {};
  },

  toJSON(_: GetAnnouncementFiles_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAnnouncementFiles_Request>, I>>(
    _: I
  ): GetAnnouncementFiles_Request {
    const message = createBaseGetAnnouncementFiles_Request();
    return message;
  },
};

function createBasePlayAnnouncement(): PlayAnnouncement {
  return {};
}

export const PlayAnnouncement = {
  encode(
    _: PlayAnnouncement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayAnnouncement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayAnnouncement();
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

  fromJSON(_: any): PlayAnnouncement {
    return {};
  },

  toJSON(_: PlayAnnouncement): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayAnnouncement>, I>>(
    _: I
  ): PlayAnnouncement {
    const message = createBasePlayAnnouncement();
    return message;
  },
};

function createBasePlayAnnouncement_Request(): PlayAnnouncement_Request {
  return { filepath: "" };
}

export const PlayAnnouncement_Request = {
  encode(
    message: PlayAnnouncement_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.filepath !== "") {
      writer.uint32(10).string(message.filepath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlayAnnouncement_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayAnnouncement_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filepath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayAnnouncement_Request {
    return {
      filepath: isSet(object.filepath) ? String(object.filepath) : "",
    };
  },

  toJSON(message: PlayAnnouncement_Request): unknown {
    const obj: any = {};
    message.filepath !== undefined && (obj.filepath = message.filepath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayAnnouncement_Request>, I>>(
    object: I
  ): PlayAnnouncement_Request {
    const message = createBasePlayAnnouncement_Request();
    message.filepath = object.filepath ?? "";
    return message;
  },
};

function createBasePlayAnnouncement_Response(): PlayAnnouncement_Response {
  return {};
}

export const PlayAnnouncement_Response = {
  encode(
    _: PlayAnnouncement_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlayAnnouncement_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayAnnouncement_Response();
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

  fromJSON(_: any): PlayAnnouncement_Response {
    return {};
  },

  toJSON(_: PlayAnnouncement_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayAnnouncement_Response>, I>>(
    _: I
  ): PlayAnnouncement_Response {
    const message = createBasePlayAnnouncement_Response();
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
