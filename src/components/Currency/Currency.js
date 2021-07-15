import React from 'react';
import { useEffect, useState } from 'react';

import GetCurrencyRate from '../../PrivatApi/PrivatApi';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const CURRENCY_EXCHANGE = ['EUR', 'USD', 'RUR'];
const TIME_NORMOLIZE = 60000;

const pad = n => {
  if (n < 10) return '0' + n;
  return n;
};

export default function Currency() {
  const [currency, setCurrency] = useState([]);
  console.log(currency);

  const timeOnLocalstorage = Number(localStorage.getItem('time'));
  const currencyOnLocalstorage = localStorage.getItem('currency');

  console.log(
    new Date().valueOf() > Number(timeOnLocalstorage) + TIME_NORMOLIZE,
  );

  useEffect(() => {
    if (!currencyOnLocalstorage && !timeOnLocalstorage) {
      GetCurrencyRate.fetchRates().then(data => {
        // console.log('Yeahoo!!!It was ME!!!');
        setCurrency(data);
        localStorage.setItem('currency', JSON.stringify(data));
      });
      localStorage.setItem('time', JSON.stringify(new Date().valueOf()));
      return;
    }

    if (new Date().valueOf() > timeOnLocalstorage + TIME_NORMOLIZE) {
      GetCurrencyRate.fetchRates().then(data => {
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
        GetCurrencyRate.fetchRates().then(data => {
          // console.log('Xa-XA-XA!!!!Tht is me');
          setCurrency(data);
          localStorage.setItem('currency', JSON.stringify(data));
        });
        localStorage.setItem('time', JSON.stringify(new Date().valueOf()));
      }, 2000);
    }
  }, []);

  return (
    <>
      {!currency ? (
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
            {currency.map(item => {
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
