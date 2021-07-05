import React from 'react';
import Navigation from '../components/Navigation/Navigation';

import HomeTab from '../components/HomeTab/HomeTab';

import Balance from '../components/Balance';
import Currency from '../components/Currency';


export default function DashboardPage() {
  return (
    <>
      <h1>Tут буде header</h1>
      <Navigation />
      <Balance />
      <Currency />
      <div>
        <HomeTab />
        <p>Якщо вкладка "Головна" то: Currency, Balance і HomeTab</p>
        <p> Якщо вкладка "Статистика": DiagramTab (Chart і Table) </p>
      </div>
    </>
  );
}
