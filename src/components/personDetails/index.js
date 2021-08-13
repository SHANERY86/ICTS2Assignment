import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
           backgroundColor: "rgb(255, 0, 0)",
    },
    }));

export default function PersonDetails ({ person }) {  
 //   const classes = useStyles();
 let imageLink = "";
if(person.profile_path){
       imageLink = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${person.profile_path}`
}
if(!person.profile_path){
       imageLink = "https://bolderadvocacy.org/wp-content/uploads/2018/08/blue-icon-question-mark-image.png"
} 

const classes = useStyles();
    return (
      <>
      <Grid container spacing={5} style={{ padding: "15px" }}>
      <Grid item xs={3}>
          <Card className={classes.card}>
              <CardMedia className={classes.media} image={imageLink}/>
          </Card>
      </Grid>
      
      <Grid item xs={9}>
        <Typography variant="h3" component="h3">
          {person.name}
        </Typography>
  
        <Typography variant="h6" component="p">
          {person.biography}
        </Typography>
        </Grid>
        </Grid>
        <Link to={`/moviesbyactor/${person.id}`}>
      <Fab
        color="secondary"
        variant="extended"
        className={classes.fab}
      >
        See Movies
        </Fab>
        </Link>
        </>
  );
  }