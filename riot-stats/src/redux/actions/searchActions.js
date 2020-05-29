import * as types from "./actionTypes";
import * as leagueOfLegendsApi from "../../api/leagueOfLegendsApi";

export function updateSearch(searchField) {
  return { type: types.UPDATE_SEARCH_FIELD, searchField };
}

export function isFetchingSummoner() {
  return { type: types.IS_FETCHING_SUMMONER };
}

export function isFetchingMatchHistory() {
  return { type: types.IS_FETCHING_MATCH_HISTORY };
}

export function summonerFound(summoner) {
  return { type: types.SUMMONER_FOUND, summoner };
}

export function summonerNotFound() {
  return { type: types.SUMMONER_NOT_FOUND };
}

export function setMatchHistory(matches) {
  return { type: types.SET_MATCH_HISTORY, matches };
}

export function getMatchHistory(accountId) {
  return function (dispatch) {
    dispatch(isFetchingMatchHistory());
    return leagueOfLegendsApi
      .getMatchHistory(accountId)
      .then((matchHistory) => {
        let matches = [];
        if (matchHistory.matches) {
          matches = matchHistory.matches;
        }
        dispatch(setMatchHistory(matches));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function performSearch(searchField) {
  return function (dispatch) {
    dispatch(isFetchingSummoner());
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
