import React from "react";
import { connect } from "react-redux";

function TeamFightTacticsResults(props) {
  if (!props.summoner.id) {
    return <></>;
  }
  return <></>;
}

function mapStateToProps(state) {
  return {
    summoner: state.search.summoner,
  };
}

export default connect(mapStateToProps)(TeamFightTacticsResults);
