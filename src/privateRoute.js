import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { MoviesContext } from "./contexts/moviesContext";

const PrivateRoute = (props) => {
  const context = useContext(MoviesContext);
  // Destructure props from <privateRoute>
  const { component: Component, ...rest } = props;
  // console.log(props.location)
  return context.isAuthenticated ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location },
      }}
    />
  );
};

export default PrivateRoute;