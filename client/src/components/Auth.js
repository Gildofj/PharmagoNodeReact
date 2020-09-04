import React from "react";
import { Route, Redirect } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("user"));

const Auth = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      user.nome ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default Auth;
