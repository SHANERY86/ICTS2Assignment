import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase/app";
import "firebase/auth";
import { AuthContext } from "../../contexts/authContext"
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1.5),
    padding: "25px"
  },
}));

const Header = ( props ) => {
  const context = useContext(AuthContext);
  const classes = useStyles();
  const title = props.title
  let user = null
  if(process.env.REACT_APP_API_KEY){
  user = context.userCredentials
  }
  return (
    user ? 
    <Paper component="div" className={classes.root}>
      <Grid container>
        <Grid item xs={5}>
        <Typography variant="body2" component="h6">
          Logged In as:
       <br></br> {user.email}
      </Typography>
      <Typography variant="caption" component="h6">
          UID:
       <br></br> {user.uid}
      </Typography>
      </Grid>
      <Grid item xs={4}>
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      </Grid>
      </Grid>
    </Paper>
      :
      <Paper component="div" className={classes.root}>
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
    </Paper>
  );
};

export default Header;