import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case types.UPDATE_SEARCH_FIELD:
      return { ...state, input: action.searchField };
    case types.SUMMONER_FOUND:
      return {
        ...state,
        summoner: { ...action.summoner },
        isFetchingSummoner: false,
      };
    case types.SUMMONER_NOT_FOUND:
      return { ...state, summoner: {}, isFetchingSummoner: false };
    case types.SET_MATCH_HISTORY:
      return {
        ...state,
        matches: [...action.matches],
        isFetchingMatchHistory: false,
      };
    case types.IS_FETCHING_SUMMONER:
      return { ...state, isFetchingSummoner: true };
    case types.IS_FETCHING_MATCH_HISTORY:
      return { ...state, isFetchingMatchHistory: true };
    default:
      return state;
  }
}
