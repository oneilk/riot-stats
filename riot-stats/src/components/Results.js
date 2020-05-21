import React from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import TabPanel from "./TabPanel";
import modes from "../modes";
import LolResults from "./LolResults";
import TftResults from "./TftResults";
import ValResults from "./ValResults";

function Results(props) {
  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={props.mode}
          name="mode"
          onChange={props.onModeChange}
          centered
        >
          <Tab label="League of Legends" />
          <Tab label="Team Fight Tactics" />
          <Tab label="Valorant" />
        </Tabs>
      </AppBar>
      <TabPanel value={props.mode} index={modes.LEAGUE_OF_LEGENDS}>
        <LolResults summoner={props.summoner} />
      </TabPanel>
      <TabPanel value={props.mode} index={modes.TEAM_FIGHT_TACTICS}>
        <TftResults summoner={props.summoner} />
      </TabPanel>
      <TabPanel value={props.mode} index={modes.VALORANT}>
        <ValResults summoner={props.summoner} />
      </TabPanel>
    </>
  );
}

export default Results;
