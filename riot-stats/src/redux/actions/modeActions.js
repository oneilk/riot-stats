import * as types from "./actionTypes";

export function changeMode(mode) {
  return { type: types.CHANGE_MODE, mode };
}
