import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Container } from "@material-ui/core";

const useStyles = makeStyles({
  searchContainer: {
    textAlign: "center",
    padding: "20px",
  },
  searchButton: {
    marginLeft: "10px",
  },
});

function Form(props) {
  const classes = useStyles();
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <Container className={classes.searchContainer}>
          <TextField
            value={props.form.search}
            name="search"
            onChange={props.onChange}
            placeholder="Summoner Name"
          />
          <Button type="submit" size="small" className={classes.searchButton}>
            Find
          </Button>
        </Container>
      </form>
    </>
  );
}

export default Form;
