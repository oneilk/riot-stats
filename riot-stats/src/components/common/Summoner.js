import React from "react";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";

function Summoner(props) {
  const avatar_url = `https://ddragon.leagueoflegends.com/cdn/6.3.1/img/profileicon/${props.summoner.profileIconId}.png`;
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
