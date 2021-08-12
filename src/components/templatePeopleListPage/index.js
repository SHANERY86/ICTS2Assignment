import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PeopleList from "../peopleList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
    alignItems: "center"
  }
});

function PeopleListPageTemplate({ people, title }) {
  const classes = useStyles();

  return (
      <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
        <Header title={title} />
        </Grid>
        <Grid item container spacing={6}>
        <PeopleList people={people}></PeopleList>
        </Grid>
      </Grid>
 </>
  );
}
export default PeopleListPageTemplate;