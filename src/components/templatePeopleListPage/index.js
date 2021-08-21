import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PeopleList from "../peopleList";
import Paginator from "../paginator"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    alignItems: "center"
  },
  paginator: {
    margin: theme.spacing(3)
  }
}));

function PeopleListPageTemplate({ people, title, pageUpdate }) {
  const classes = useStyles();

  return (
      <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
        <Header title={title} />
        </Grid>
        <Grid item container className={classes.paginator} justify="center" padding="20">
    <Paginator  pageUpdate={pageUpdate}/>
    </Grid>
        <Grid item container spacing={6}>
        <PeopleList people={people}></PeopleList>
        </Grid>
      </Grid>
 </>
  );
}
export default PeopleListPageTemplate;