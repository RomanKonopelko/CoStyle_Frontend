import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Operations } from '../../redux/transactions';
import { selectorsAuth } from '../../redux/auth';
import { Selectors } from '../../redux/transactions';

import routes from '../../routes';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance';
import Currency from '../../components/Currency';
import Load from '../../components/Loader/Loader';
import Modal from '../../components/Shared/Modal';
import ButtonAddTransaction from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import { Route, Switch } from 'react-router';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';

import './dashboardPage.scss';

import { Suspense, lazy } from 'react';

const HomeTab = lazy(() => import('../../components/HomeTab/HomeTab'));
const DiagramTab = lazy(() => import('../../components/DiagramTab'));

export default function DashboardPage() {
  const isShowModal = useSelector(selectorsAuth.getShowModal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Operations.getTransaction());
  }, [dispatch]);

  const transactionsList = useSelector(Selectors.getAllTransactions);

  return (
    <>
      <Header />
      <Suspense fallback={Load()}>
        <div className="dashboradPage">
          <div>
            <Navigation />
            <Balance />
            <Currency />
            {isShowModal && (
              <Modal>
                {' '}
                <ModalAddTransaction />
              </Modal>
            )}
          </div>
          {transactionsList.payload && (
            <Switch>
              <Route
                path={routes.home}
                render={props => (
                  <HomeTab {...props} tableData={transactionsList.payload} />
                )}
              ></Route>

              <Route path={routes.diagram} component={DiagramTab}></Route>
            </Switch>
          )}
        </div>
        <ButtonAddTransaction />
      </Suspense>
    </>
  );
}
