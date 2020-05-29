import React from "react";
import { connect } from "react-redux";
import Summoner from "../common/Summoner";
import { Grid } from "@material-ui/core";
import MatchHistory from "../common/MatchHistory";

function LeagueOfLegendsResults(props) {
  if (!props.summoner.id) {
    return <></>;
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Summoner
          summoner={props.summoner}
          isFetchingSummoner={props.isFetchingSummoner}
        />
      </Grid>
      <Grid item xs={9}>
        <MatchHistory
          matches={props.matches}
          summonerFound={props.summoner.id !== undefined}
          isFetchingMatchHistory={props.isFetchingMatchHistory}
        />
      </Grid>
    </Grid>
  );
}
function mapStateToProps(state) {
  return {
    isFetchingSummoner: state.search.isFetchingSummoner,
    isFetchingMatchHistory: state.search.isFetchingMatchHistory,
    summoner: state.search.summoner,
    matches: state.search.matches,
  };
}

export default connect(mapStateToProps)(LeagueOfLegendsResults);
