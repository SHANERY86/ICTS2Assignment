import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PersonDetails from "../personDetails";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function MovieListPageTemplate({ person, title }) {
  const classes = useStyles();

  return (
    <>
        <Header title={title} />
        <PersonDetails person={person}></PersonDetails>
        </>
  );
}
export default MovieListPageTemplate;