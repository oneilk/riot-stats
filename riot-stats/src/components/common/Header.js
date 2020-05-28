import React from "react";
import { Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as modeActions from "../../redux/actions/modeActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

function Header(props) {
  function handleChange(event, newValue) {
    props.actions.changeMode(newValue);
  }

  return (
    <>
      <Tabs
        value={props.mode}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab
          label="League of Legends"
          component={Link}
          to="/riot-stats/league-of-legends"
        />
        <Tab
          label="Team Fight Tactics"
          component={Link}
          to="/riot-stats/team-fight-tactics"
        />
        <Tab label="Valorant" component={Link} to="/riot-stats/valorant" />
      </Tabs>
    </>
  );
}

Header.propTypes = {
  mode: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    mode: state.mode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(modeActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
