// import React, { useEffect, Suspense, lazy } from 'react';

// import routes from './routes';
import Container from './components/Container/Container';

// import { useDispatch } from 'react-redux';
// import { Route, Switch } from 'react-router';
// import { OperationsAuth } from './redux/auth';
// import Load from './components/Loader/Loader';
// import PrivateRoute from './components/Navigation/PrivateRoute';
// import PublicRoute from './components/Navigation/PublicRoute';

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
      <h1>Hello World!</h1>
      {/* <Suspense fallback={Load()}>
        <Switch>
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.register}
          >
            <Register />
          </PublicRoute>
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <Login />
          </PublicRoute>
          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <Dashboard />
          </PrivateRoute>
          <Route />
        </Switch>
      </Suspense> */}
    </Container>
  );
}
