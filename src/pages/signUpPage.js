import React from "react";
import PageTemplate from "../components/templateAuthPage";
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import Header from "../components/headerMovieList"
import { useHistory } from "react-router-dom";



const SignUpPage = ( { history }) => {
    const SignUp = (userData) => {

        console.log(userData);
        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          history.push("/")
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
      }
  return (
      <>
    <Header title={"Sign Up"} />
    <PageTemplate
    action={SignUp}
    />
    </>
);
};

export default SignUpPage;