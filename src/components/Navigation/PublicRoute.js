import React from 'react';
//import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

//import { authSelectors } from '../../redux/auth';

export default function PublicRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  //const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route
      //  test began //
      component={Component}
      //test ended //

      //   {...routeProps}
      //   render={props =>
      // isAuthenticated && routeProps.restricted ? (
      //<Redirect to={redirectTo} />
      // ) :  (
      // <Component {...props} />
      // )
      //  }
    />
  );
}
