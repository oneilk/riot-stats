import React from "react";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";

function Summoner(props) {
  console.log(props.summoner);
  const avatar_url = `http://ddragon.leagueoflegends.com/cdn/6.3.1/img/profileicon/${props.summoner.profileIconId}.png`;
  return (
    <Card>
      <CardContent>
        <Avatar src={avatar_url} />
        <Typography>{props.summoner.name}</Typography>
        <Typography>Level: {props.summoner.summonerLevel}</Typography>
      </CardContent>
    </Card>
  );
}

export default Summoner;
