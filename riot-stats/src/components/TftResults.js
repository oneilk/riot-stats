import React from "react";
import Summoner from "./common/Summoner";
import SummonerNotFound from "./common/SummonerNotFound";
import Typography from "@material-ui/core/Typography";

function TftResults(props) {
  if (props.summoner === null) {
    return <Typography>Search for a summoner.</Typography>;
  }
  if (props.summoner.notFound) {
    return <SummonerNotFound />;
  }
  return <Summoner summoner={props.summoner} />;
}

export default TftResults;
