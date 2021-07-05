import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import s from './Currency.module.scss';

const getCurrencyRate = async () => {
  try {
    const { data } = await axios.get(
      'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
    );

    return data;
  } catch (e) {
    console.log(e.message);
  }
};

const pad = n => {
  if (n < 10) return '0' + n;
  return n;
};

export default function Currency() {
  useEffect(() => {
    getCurrencyRate();
  });

  const currencies = [
    {
      ccy: 'RUR',
      base_ccy: 'UAH',
      buy: '0.28000',
      sale: '0.32000',
    },
    {
      ccy: 'EUR',
      base_ccy: 'UAH',
      buy: '19.20000',
      sale: '20.00000',
    },
    {
      ccy: 'USD',
      base_ccy: 'UAH',
      buy: '15.50000',
      sale: '15.85000',
    },
  ];

  return (
    <div className={s.container}>
      <table className={s.table}>
        <tr className={s.tableContainer}>
          <th className={s.tableHeaderTitle}>Валюта</th>
          <th className={s.tableHeaderTitle}>Покупка</th>
          <th className={s.tableHeaderTitle}>Продажа</th>
        </tr>
        {currencies.map(item => {
          const buy = pad(Number(item.buy).toFixed(2));
          const sale = pad(Number(item.sale).toFixed(2));

          return (
            <tr className={s.tableContainer}>
              <td className={s.rowTitle}>{item.ccy}</td>
              <td className={s.rowTitle}>{buy}</td>
              <td className={s.rowTitle}>{sale}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
