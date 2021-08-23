import firebase from "firebase/app";
import "firebase/auth";
import React, { useState } from "react";
export const AuthContext = React.createContext(null);

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(firebase.auth().currentUser);
  
  
  if(process.env.REACT_APP_API_KEY){
  firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        setUser(user);
      } 
      else {
        setUser(firebase.auth().currentUser)
      }
  });
  }
  
  const userCredentials = user ? {
      email: user.email,
      uid: user.uid
  } : null
  
    const isAuthenticated = user === null ? false : true

  
    return (
      <AuthContext.Provider
        value={{
          userCredentials,
          isAuthenticated,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContextProvider;