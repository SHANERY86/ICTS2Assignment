import React, { useContext } from "react";
import PageTemplate from "../components/templateAuthPage";
import firebase from "firebase/app";
import "firebase/auth";
import Header from "../components/headerMovieList"
import MoviesContext from "../contexts/moviesContext"
import { useHistory } from "react-router-dom";



const LoginPage = ( { history }) => {
  const Login = ( userData ) => {
    firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        history.push('/')
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
  return ( 
    <> 
    <Header title={"Login"} />
    <PageTemplate
    action={Login}
    />
    </>
);
};

export default LoginPage;