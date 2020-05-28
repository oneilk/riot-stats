import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import SearchForm from "./form/SearchForm";
import LeagueOfLegendsResults from "./results/LeagueOfLegendsResults";
import TeamFightTacticsResults from "./results/TeamFightTacticsResults";
import ValorantResults from "./results/ValorantResults";

const useStyles = makeStyles({
  rootContainer: {
    textAlign: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <CssBaseline>
      <Container classes={{ root: classes.rootContainer }}>
        <Header />
        <SearchForm />
        <Switch>
          <Route exact path="/riot-stats/" component={LeagueOfLegendsResults} />
          <Route
            exact
            path="/riot-stats/league-of-legends"
            component={LeagueOfLegendsResults}
          />
          <Route
            exact
            path="/riot-stats/team-fight-tactics"
            component={TeamFightTacticsResults}
          />
          <Route
            exact
            path="/riot-stats/valorant"
            component={ValorantResults}
          />
        </Switch>
      </Container>
    </CssBaseline>
  );
}

export default App;
