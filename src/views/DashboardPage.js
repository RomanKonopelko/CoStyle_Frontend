import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorsAuth, ActionAuth } from '../redux/auth';
import Header from '../components/Header';
import Navigation from '../components/Navigation/Navigation';

import HomeTab from '../components/HomeTab/HomeTab';

import Balance from '../components/Balance';
import Currency from '../components/Currency';
import ButtonAddTransaction from '../components/ButtonAddTransactions/ButtonAddTransactions';
import Modal from '../components/Shared/Modal';

export default function DashboardPage() {
  const isShowModal = useSelector(selectorsAuth.getShowModal);
  return (
    <>
      <Header />
      <Navigation />
      <Balance />
      <Currency />
      <div>
        <HomeTab />
        <p>Якщо вкладка "Головна" то: Currency, Balance і HomeTab</p>
        <p> Якщо вкладка "Статистика": DiagramTab (Chart і Table) </p>
      </div>
      <ButtonAddTransaction />
      {isShowModal && <Modal />}
    </>
  );
}
