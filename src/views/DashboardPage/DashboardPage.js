import React from 'react';
import { useSelector } from 'react-redux';
import { selectorsAuth } from '../../redux/auth';
import routes from '../../routes';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance';
import Currency from '../../components/Currency';
import Load from '../../components/Loader/Loader';
import Modal from '../../components/Shared/Modal';
import ButtonAddTransaction from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import { Route, Switch } from 'react-router';

import './dashboardPage.scss';

import { Suspense, lazy } from 'react';

const HomeTab = lazy(() => import('../../components/HomeTab/HomeTab'));
const DiagramTab = lazy(() => import('../../components/DiagramTab'));

export default function DashboardPage() {
  const isShowModal = useSelector(selectorsAuth.getShowModal);
  return (
    <>
      <Header />
      <div className="dashboradPage">
        <div>
          <Navigation />
          <Balance />
          <Currency />
          <ButtonAddTransaction />
          {isShowModal && <Modal />}
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
