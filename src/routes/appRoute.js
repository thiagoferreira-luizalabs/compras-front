import React from "react"
import { Route, Redirect } from "react-router-dom";

const AppRoute = ({ component: Component, ...routeProps, state }) => (
  <Route {...routeProps}
    render={props => {
      const auth = routeProps.isAuthenticated;

      //PUBLIC ROUTES
      if (routeProps.public) {
        return !auth ?
          <Component {...props} state={state} /> :
          <Redirect to={{ pathname: "/home" }} />;

        //PRIVATE ROUTES
      } else if (routeProps.private) {
        return auth ?
          <Component {...props} state={state} /> :
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;

        // DEFAULT - REGULAR REACT-ROUTER OBJCET
      } else {
        return (<Component {...props} />)
      }

    }
    }
  />
);

export default AppRoute;