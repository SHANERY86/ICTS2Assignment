import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import useForm from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { withRouter, useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 50,
    maxWidth: 400
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: theme.spacing(2),
    },
  },
  textField: {
    width: "40ch",
  },
}));

const LoginForm = () => {            
  const context = useContext(MoviesContext);
  let history = useHistory();
  const classes = useStyles();
  const { handleSubmit } = useForm();

  const onSubmit = (username, password) => {
    context.authenticate(username,password);
    history.push("/");
  }

  return (
      
    <Card component="div" className={classes.root}>

      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="h6">
        Username
        </Typography>
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="author"
          label="Username"
          name="author"
          autoFocus
        />
                <Typography variant="h6">
        Password
        </Typography>
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="author"
          label="Password"
          name="author"
          autoFocus
        />
        <Box className={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}

          >
            Submit
          </Button>
        </Box>
      </form>
    </Card>
    
  );
};

export default withRouter(LoginForm);