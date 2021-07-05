import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function PrivateRoute({
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
      // isAuthenticated ? (
      // <Component {...props} />
      // ) : (
      //  <Redirect to={redirectTo} />
      // )
      // }
    />
  );
}
