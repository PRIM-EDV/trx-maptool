/* eslint-disable */
export const protobufPackage = "";

export enum LockState {
  LOCK_STATE_EMPTY = 0,
  LOCK_STATE_LOCKED = 1,
  LOCK_STATE_UNLOCKED = 2,
  UNRECOGNIZED = -1,
}

export function lockStateFromJSON(object: any): LockState {
  switch (object) {
    case 0:
    case "LOCK_STATE_EMPTY":
      return LockState.LOCK_STATE_EMPTY;
    case 1:
    case "LOCK_STATE_LOCKED":
      return LockState.LOCK_STATE_LOCKED;
    case 2:
    case "LOCK_STATE_UNLOCKED":
      return LockState.LOCK_STATE_UNLOCKED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LockState.UNRECOGNIZED;
  }
}

export function lockStateToJSON(object: LockState): string {
  switch (object) {
    case LockState.LOCK_STATE_EMPTY:
      return "LOCK_STATE_EMPTY";
    case LockState.LOCK_STATE_LOCKED:
      return "LOCK_STATE_LOCKED";
    case LockState.LOCK_STATE_UNLOCKED:
      return "LOCK_STATE_UNLOCKED";
    case LockState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
