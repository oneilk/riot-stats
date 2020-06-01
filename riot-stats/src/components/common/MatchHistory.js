import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  notFoundContainer: {
    padding: "20px",
  },
});
function MatchHistory(props) {
  const classes = useStyles();
  const [champAssets, setChampAssets] = useState([]);
  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json"
    )
      .then((response) => response.json())
      .then((data) => setChampAssets(Object.values(data.data)));
  }, []);
  function getChampIcon(key) {
    const name = getChampName(key);
    return `https://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/${name}.png`;
  }
  function getChampName(key) {
    if (champAssets.length === 0) {
      return "";
    }
    const champ = champAssets.find((champ) => parseInt(champ.key) === key);
    return champ.name;
  }
  function getTime(timestamp) {
    const date = new Date(timestamp);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
  }
  if (props.isFetchingMatchHistory) {
    return (
      <Paper classes={{ root: classes.notFoundContainer }}>
        <CircularProgress />
      </Paper>
    );
  }
  if (props.summonerFound && props.matches.length === 0) {
    return (
      <Paper classes={{ root: classes.notFoundContainer }}>
        It appears this summoner has not played any recent games...
      </Paper>
    );
  }
  if (props.matches.length === 0) {
    return <></>;
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Champion</TableCell>
            <TableCell>Lane</TableCell>
            <TableCell>Region</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Season</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.matches.map((row) => {
            const champName = getChampName(row.champion);
            const imgSrc = getChampIcon(row.champion);
            return (
              <TableRow key={row.gameId}>
                <TableCell>
                  <img width="30px" src={imgSrc} alt={champName} />
                  {champName}
                </TableCell>
                <TableCell>{row.lane}</TableCell>
                <TableCell>{row.platformId}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.season}</TableCell>
                <TableCell>{getTime(row.timestamp)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MatchHistory;
