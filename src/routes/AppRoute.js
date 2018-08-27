import React from "react"
import { Route, Redirect } from "react-router-dom";

const AppRoute = ({ component: Component, ...appRouteProps, componentProps }) => (
  <Route {...appRouteProps}
    render={props => {
      const auth = appRouteProps.auth.isAuthenticated;

      //PUBLIC ROUTES
      if (appRouteProps.public) {
        return !auth ?
          <Component {...props} {...componentProps} /> :
          <Redirect to={{ pathname: "/home" }} />;

        //PRIVATE ROUTES
      } else if (appRouteProps.private) {
        return auth ?
          <Component {...props} {...componentProps} /> :
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />;

        // DEFAULT - REGULAR REACT-ROUTER OBJCET
      } else {
        return (<Component {...props} {...componentProps} />)
      }

    }}
  />
);

// to do prop types

export default AppRoute;