import React from 'react';
import routes from '../../routes';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation/Navigation';
import HomeTab from '../../components/HomeTab/HomeTab';
import Balance from '../../components/Balance';
import Currency from '../../components/Currency';
import { Route, Switch } from 'react-router';

import './dashboardPage.scss';
import DiagramTab from '../../components/DiagramTab';

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
        <Switch>
          <Route path={routes.home} component={HomeTab}></Route>
          <Route path={routes.diagram} component={DiagramTab}></Route>
        </Switch>
      </div>
    </>
  );
}
