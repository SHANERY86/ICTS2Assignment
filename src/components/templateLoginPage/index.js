import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AuthCard from "../authCard";


const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function AuthPageTemplate({ action }) {
  const classes = useStyles();

  return (
    <>
        <AuthCard
        action={action}/>
        </>
  );
}
export default AuthPageTemplate;