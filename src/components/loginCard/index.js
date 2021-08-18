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
  const { register, handleSubmit } = useForm();


  const onSubmit = (userData) => {
    context.authenticate(userData.username,userData.password);
    history.push("/");
  } 


  return (
      
    <Card component="div" className={classes.root}>

      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Typography variant="h6">
        Username
        </Typography>
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="username"
          label="Username"
          name="username"
          defaultValue="user"
          autoFocus
          inputRef={register("username")}
        />
                <Typography variant="h6">
        Password
        </Typography>
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="password"
          label="Password"
          name="password"
          defaultValue="secret"
          autoFocus
          inputRef={register("password")}
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