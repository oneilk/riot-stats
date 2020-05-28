import React from "react";
import { connect } from "react-redux";

function LeagueOfLegendsResults(props) {
  console.log(props.summoner);
  console.log(props.matchHistory);
  return <>League</>;
}
function mapStateToProps(state) {
  return {
    summoner: state.search.summoner,
    matchHistory: state.search.matchHistory,
  };
}

export default connect(mapStateToProps)(LeagueOfLegendsResults);
