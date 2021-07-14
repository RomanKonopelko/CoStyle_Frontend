import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Operations } from '../../redux/transactions';
import { selectorsAuth } from '../../redux/auth';
import { Selectors } from '../../redux/transactions';

import routes from '../../routes';

import Container from '../../components/Container/Container';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance';
import Currency from '../../components/Currency';

import Loader from '../../components/Loader/Loader';

import Modal from '../../components/Shared/Modal';
import ButtonAddTransaction from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import { Route, Switch } from 'react-router';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';

import { lazy } from 'react';

const HomeTab = lazy(() => import('../../components/HomeTab/HomeTab'));
const DiagramTab = lazy(() => import('../../components/DiagramTab'));

export default function DashboardPage() {
  const isShowModal = useSelector(selectorsAuth.getShowModal);

  // Added new logic by Chernyshenko

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Operations.getTransaction());
    dispatch(Operations.getTransactionsStatistic());
  }, [dispatch]);

  const transactionsList = useSelector(Selectors.getAllTransactions);
  //console.log(`transactionsList.payload`, transactionsList);

  return (
    <>
      {transactionsList ? (
        <div className="dashboard-bcgi">
          <Container>
            <div className="dashboradPage">
              <div className="nav-container">
                <div className="nav-tablet-container">
                  <Navigation />
                  <Balance className="balance" />
                </div>
                <Currency className="currency" />
                {isShowModal && (
                  <Modal>
                    <ModalAddTransaction />
                  </Modal>
                )}
              </div>
              <span className="splitter"></span>
              <Switch>
                <Route
                  path={routes.home}
                  render={props => (
                    <HomeTab {...props} tableData={transactionsList} />
                  )}
                />
                <Route path={routes.diagram} component={DiagramTab} />
              </Switch>
            </div>
          </Container>

          <ButtonAddTransaction />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
