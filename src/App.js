// import React, { useEffect, Suspense, lazy } from 'react';

import routes from './routes';
import Container from './components/Container/Container';
import RegistrationPage from '../src/views/RegistrationPage';
import LoginPage from '../src/views/LoginPage';
import DashboardPage from './views/DashboardPage';

// import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
// import { OperationsAuth } from './redux/auth';
// import Load from './components/Loader/Loader';

import PrivateRoute from './components/Navigation/PrivateRoute';
import PublicRoute from './components/Navigation/PublicRoute';
//import { Dashboard } from '@material-ui/icons';

// const Register = lazy(() => import('./views/RegistrationPage'));
// const Login = lazy(() => import('./views/LoginPage'));
// const Dashboard = lazy(() => import('./views/DashboardPage'));

export default function App() {
  // const disputch = useDispatch();

  // useEffect(() => {
  //   disputch(OperationsAuth.getCurrentUser());
  // }, [disputch]);

  return (
    <Container>
      <h1>My Wallet</h1>

      {/*  <Suspense fallback={Load()}> */}
      <Switch>
        <PublicRoute
          path={routes.register}
          restricted
          redirectTo={routes.register}
          component={RegistrationPage}
        ></PublicRoute>
        <PublicRoute
          path={routes.login}
          restricted
          //redirectTo={routes.contacts}
          component={LoginPage}
        ></PublicRoute>

        <PrivateRoute
          path={routes.home}
          redirectTo={routes.login}
          component={DashboardPage}
        >
          {/* <DashboardPage /> */}
        </PrivateRoute>
        <Route />
      </Switch>
      {/* </Suspense>  */}
    </Container>
  );
}
