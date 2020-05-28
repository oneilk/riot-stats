import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case types.UPDATE_SEARCH_FIELD:
      return { ...state, input: action.searchField };
    case types.SUMMONER_FOUND:
      return { ...state, summoner: { ...action.summoner } };
    case types.SUMMONER_NOT_FOUND:
      return { ...state, summoner: {} };
    case types.SET_MATCH_HISTORY:
      return { ...state, matchHistory: { ...action.matchHistory } };
    default:
      return state;
  }
}
