import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ExploreList from "../exploreList/exploreList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
    alignItems: "center"
  }
});

function ExploreListPageTemplate({ explore, title }) {
  const classes = useStyles();

  return (
      <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
        <Header title={title} />
        </Grid>
        <Grid item container justify="center" spacing={6}>
        <ExploreList explore={explore}></ExploreList>
        </Grid>
      </Grid>
 </>
  );
}
export default ExploreListPageTemplate;