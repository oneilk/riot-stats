import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Container, Button } from "@material-ui/core";
import * as searchActions from "../../redux/actions/searchActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const useStyles = makeStyles({
  searchContainer: {
    maxWidth: "350px",
    padding: "20px",
    display: "inline-flex",
  },
  searchButton: {
    marginLeft: "15px",
  },
});

function SearchForm(props) {
  const classes = useStyles();

  function handleChange(event) {
    const { value } = event.target;
    props.actions.updateSearch(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.actions.performSearch(props.search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container classes={{ root: classes.searchContainer }} disableGutters>
        <TextField
          id="summoner-search"
          label="Find summoner"
          autoFocus={true}
          fullWidth={true}
          value={props.search}
          onChange={handleChange}
        />
        <Button
          classes={{ root: classes.searchButton }}
          type="submit"
          size="small"
        >
          Find
        </Button>
      </Container>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    search: state.search.input,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
