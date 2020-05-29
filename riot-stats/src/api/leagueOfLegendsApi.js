import { handleError, handleResponse } from "./apiUtils";
const baseUrl =
  "https://un4nmfv2nk.execute-api.us-west-2.amazonaws.com/development";

export function getSummonerByName(name) {
  const url = `${baseUrl}/summoner?region=na1&name=${name}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getMatchHistory(accountId) {
  const url = `${baseUrl}/match-history?region=na1&endIndex=15&accountId=${accountId}`;
  return fetch(url).then(handleResponse).catch(handleError);
}
