import React, { useEffect, Suspense, lazy } from 'react';

import routes from './routes';
import Container from './components/Container/Container';

import { useDispatch } from 'react-redux';
import { Switch } from 'react-router';
import { OperationsAuth } from './redux/auth';
import Load from './components/Loader/Loader';

import PrivateRoute from './components/Navigation/PrivateRoute';
import PublicRoute from './components/Navigation/PublicRoute';
import { Redirect } from 'react-router-dom';

const Register = lazy(() => import('./views/RegistrationPage'));
const Login = lazy(() => import('./views/LoginPage'));
const Dashboard = lazy(() => import('./views/DashboardPage'));

export default function App() {
  const disputch = useDispatch();

  useEffect(() => {
    disputch(OperationsAuth.getCurrentUser());
  }, [disputch]);

  return (
    <Container>
      <Suspense fallback={Load()}>
        <Switch>
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.home}
          >
            <Register />
          </PublicRoute>
          <PublicRoute path={routes.login} restricted redirectTo={routes.home}>
            <Login />
          </PublicRoute>
          <PrivateRoute path={routes.home} redirectTo={routes.login}>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path={routes.stats} redirectTo={routes.login}>
            <Dashboard />
          </PrivateRoute>
          <Redirect to={routes.register} />
        </Switch>
      </Suspense>
    </Container>
  );
}
