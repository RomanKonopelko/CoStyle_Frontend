import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import s from './Currency.module.scss';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const CURRENCY_EXCHANGE = ['EUR', 'USD', 'RUR'];
const TIME_NORMOLIZE = 60000;

const getCurrencyRate = async () => {
  try {
    // const { data } = await axios.get(
    //   'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',

    const { data } = await axios.get('https://api.monobank.ua/bank/currency');
    // console.log(data);
    // console.log('HELLO');
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

  const timeOnLocalstorage = Number(localStorage.getItem('time'));
  const currencyOnLocalstorage = localStorage.getItem('currency');

  console.log(
    new Date().valueOf() > Number(timeOnLocalstorage) + TIME_NORMOLIZE,
  );

  useEffect(() => {
    if (!currencyOnLocalstorage && !timeOnLocalstorage) {
      getCurrencyRate().then(data => {
        // console.log('Noooo!!!It was ME!!!');
        setCurrency(data);
        localStorage.setItem('currency', JSON.stringify(data));
      });
      localStorage.setItem('time', JSON.stringify(new Date().valueOf()));
      return;
    }

    if (new Date().valueOf() > timeOnLocalstorage + TIME_NORMOLIZE) {
      getCurrencyRate().then(data => {
        // console.log('It was ME!!!');
        setCurrency(data);
        localStorage.setItem('currency', JSON.stringify(data));
      });
      localStorage.setItem('time', JSON.stringify(new Date().valueOf()));
      return;
    }

    if (currencyOnLocalstorage) {
      // console.log('No, MAN!!!It was ME!!!');
      const parsedLocalStorage = JSON.parse(currencyOnLocalstorage);
      setCurrency(parsedLocalStorage);
      return;
    }

    if (currency.length === 0) {
      setTimeout(() => {
        getCurrencyRate().then(data => {
          // console.log('Xa-XA-XA!!!!Tht is me');
          setCurrency(data);
          localStorage.setItem('currency', JSON.stringify(data));
        });
        localStorage.setItem('time', JSON.stringify(new Date().valueOf()));
      }, 2000);
    }
  }, []);
  // console.log(currency);

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
      {!money ? (
        <div className="loaderContainer">
          <Loader
            type="MutatingDots"
            color="#24cca7"
            secondaryColor="#4a56e2"
            height={120}
            width={120}
            timeout={5000}
          />
        </div>
      ) : (
        <table className="tableCurrency">
          <thead className="tableHead">
            <tr>
              <th className="tableHeaderTitle">Валюта</th>
              <th className="tableHeaderTitle">Покупка</th>
              <th className="tableHeaderTitle">Продажа</th>
            </tr>
          </thead>
          <tbody className="currencyBody">
            {money.map(item => {
              const buy = pad(Number(item.buy).toFixed(2));
              const sale = pad(Number(item.sale).toFixed(2));

              return CURRENCY_EXCHANGE.map(coint => {
                if (coint === item.ccy) {
                  return (
                    <tr key={item.ccy}>
                      <td className="rowTitle">{item.ccy}</td>
                      <td className="rowTitle second">{buy}</td>
                      <td className="rowTitle third">{sale}</td>
                    </tr>
                  );
                }
              });
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
