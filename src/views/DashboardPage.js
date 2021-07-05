import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import HomeTab from '../components/HomeTab/HomeTab';

export default function DashboardPage() {
  return (
    <>
      <h1>Tут буде header</h1>
      <Navigation />
      <div>
        <HomeTab />
        <p>Якщо вкладка "Головна" то: Currency, Balance і HomeTab</p>
        <p> Якщо вкладка "Статистика": DiagramTab (Chart і Table) </p>
      </div>
    </>
  );
}
