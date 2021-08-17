import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LoginCard from "../loginCard";


const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function LoginPageTemplate({ }) {
  const classes = useStyles();

  return (
    <>
        <LoginCard/>
        </>
  );
}
export default LoginPageTemplate;