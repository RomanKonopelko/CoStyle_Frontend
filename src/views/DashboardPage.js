import React from 'react';
import Navigation from '../components/Navigation/Navigation';

export default function DashboardPage() {
  return (
    <>
      <h1>Tут буде header</h1>
      <Navigation />
      <div>
        Якщо вкладка "Головна" то: Currency, Balance і HomeTab Якщо вкладка
        "Статистика": DiagramTab (Chart і Table)
      </div>
    </>
  );
}
