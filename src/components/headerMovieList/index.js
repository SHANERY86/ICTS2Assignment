import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1.5),
    padding: "25px"
  },
}));

const Header = (props ) => {
  const classes = useStyles();
  const title = props.title
  return (
    <Paper component="div" className={classes.root}>
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
    </Paper>
  );
};

export default Header;