import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import s from './Currency.module.scss';

const CURRENCY_EXCHANGE = ['EUR', 'USD', 'RUR'];

const getCurrencyRate = async () => {
  try {
    const { data } = await axios.get(
      'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
    );
    console.log(data);
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
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    getCurrencyRate().then(data => setCurrency(data));
    console.log('say Hello');
  }, []);

  console.log(currency);

  const money = [
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
    <>
      <div className={s.container}>
        <table className={s.table}>
          <thead>
            <tr className={s.tableContainer}>
              <th className={s.tableHeaderTitle}>Валюта</th>
              <th className={s.tableHeaderTitle}>Покупка</th>
              <th className={s.tableHeaderTitle}>Продажа</th>
            </tr>
          </thead>
          <tbody>
            {money.map(item => {
              const buy = pad(Number(item.buy).toFixed(2));
              const sale = pad(Number(item.sale).toFixed(2));

              return CURRENCY_EXCHANGE.map(coint => {
                if (coint === item.ccy) {
                  return (
                    <tr key={item.ccy} className={s.tableContainer}>
                      <td className={s.rowTitle}>{item.ccy}</td>
                      <td className={s.rowTitle}>{buy}</td>
                      <td className={s.rowTitle}>{sale}</td>
                    </tr>
                  );
                }
              });
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
