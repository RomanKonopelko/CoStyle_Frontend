import React, { useEffect, Suspense, lazy } from 'react';

import routes from './routes';
import Container from './components/Container/Container';

import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router';
import { OperationsAuth } from './redux/auth';
import Load from './components/Loader/Loader';
import Header from './components/Header';
import { selectorsAuth } from './redux/auth';

import PrivateRoute from './components/Navigation/PrivateRoute';
import PublicRoute from './components/Navigation/PublicRoute';
import { Redirect } from 'react-router-dom';

const Register = lazy(() => import('./views/RegistrationPage'));
const Login = lazy(() => import('./views/LoginPage'));
const Dashboard = lazy(() => import('./views/DashboardPage'));

export default function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectorsAuth.getIsAuthenticated);
  useEffect(() => {
    dispatch(OperationsAuth.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isAuth && <Header />}
      {/* <Container> */}
      <Suspense fallback={Load()}>
        <Switch>
          <PublicRoute path={routes.login} restricted redirectTo={routes.home}>
            <Login />
          </PublicRoute>
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.home}
          >
            <Register />
          </PublicRoute>

          <PrivateRoute path={routes.home} redirectTo={routes.login}>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path={routes.diagram} redirectTo={routes.login}>
            <Dashboard />
          </PrivateRoute>
          <Redirect to={routes.login} />
        </Switch>
      </Suspense>
      {/* </Container> */}
    </>
  );
}
