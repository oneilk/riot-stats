import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, Typography, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  summonerContainer: {
    padding: "20px",
  },
}));

function Summoner(props) {
  const avatar_url = `https://ddragon.leagueoflegends.com/cdn/6.3.1/img/profileicon/${props.summoner.profileIconId}.png`;
  const classes = useStyles();
  if (props.isFetchingSummoner) {
    return (
      <Paper classes={{ root: classes.summonerContainer }}>
        <CircularProgress />
      </Paper>
    );
  }
  return (
    <Paper classes={{ root: classes.summonerContainer }}>
      <Typography
        component="div"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Avatar src={avatar_url} />
        <Typography variant="subtitle1" style={{ marginLeft: "10px" }}>
          {props.summoner.name}
        </Typography>
      </Typography>
      Level: {props.summoner.summonerLevel}
    </Paper>
  );
}

export default Summoner;
