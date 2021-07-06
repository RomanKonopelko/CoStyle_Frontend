import React from 'react';
import routes from '../../routes';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance';
import Currency from '../../components/Currency';
import Load from '../../components/Loader/Loader';
import { Route, Switch } from 'react-router';

import './dashboardPage.scss';

import { Suspense, lazy } from 'react';

const HomeTab = lazy(() => import('../../components/HomeTab/HomeTab'));
const DiagramTab = lazy(() => import('../../components/DiagramTab'));

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="dashboradPage">
        <div>
          <Navigation />
          <Balance />
          <Currency />
        </div>
        <Suspense fallback={Load()}>
          <Switch>
            <Route path={routes.home} component={HomeTab}></Route>
            <Route path={routes.diagram} component={DiagramTab}></Route>
          </Switch>
        </Suspense>
      </div>
    </>
  );
}
