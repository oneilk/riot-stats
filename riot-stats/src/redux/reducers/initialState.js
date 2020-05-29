import modes from "../../modes";

export default {
  mode: modes.LEAGUE_OF_LEGENDS,
  search: {
    input: "",
    summoner: {},
    matches: [],
    isFetchingSummoner: false,
    isFetchingMatchHistory: false,
  },
};
