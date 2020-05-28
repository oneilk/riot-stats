import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function modeReducer(state = initialState.mode, action) {
  switch (action.type) {
    case types.CHANGE_MODE:
      return action.mode;
    default:
      return state;
  }
}
