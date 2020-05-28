import * as types from "./actionTypes";
import * as leagueOfLegendsApi from "../../api/leagueOfLegendsApi";

export function updateSearch(searchField) {
  return { type: types.UPDATE_SEARCH_FIELD, searchField };
}

export function summonerFound(summoner) {
  return { type: types.SUMMONER_FOUND, summoner };
}

export function summonerNotFound() {
  return { type: types.SUMMONER_NOT_FOUND };
}

export function setMatchHistory(matchHistory) {
  return { type: types.SET_MATCH_HISTORY, matchHistory };
}

export function getMatchHistory(accountId) {
  return function (dispatch) {
    return leagueOfLegendsApi
      .getMatchHistory(accountId)
      .then((matchHistory) => {
        dispatch(setMatchHistory(matchHistory));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function performSearch(searchField) {
  return function (dispatch) {
    return leagueOfLegendsApi
      .getSummonerByName(searchField)
      .then((summoner) => {
        if (summoner.id) {
          dispatch(summonerFound(summoner));
          dispatch(getMatchHistory(summoner.accountId));
        } else {
          dispatch(summonerNotFound());
        }
      })
      .catch((error) => {
        throw error;
      });
  };
}
