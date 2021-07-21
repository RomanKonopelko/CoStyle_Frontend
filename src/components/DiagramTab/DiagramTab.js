import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import AlpacaStat from '../Alpaca/AlpacaStat';

import Chart from '../Chart';
import Table from '../Table';

import { Selectors } from '../../redux/transactions';

export default function DiagramTab() {
  const transactionsList = useSelector(Selectors.getTransactionsStatistic);

  const lengthOfObject = Object.keys(transactionsList.categoriesSummary).length;

  console.log(lengthOfObject, 'length');
  return (
    <>
      <div className="diagram-tab-container">
        <div className="diagrmTab">
          {lengthOfObject !== 0 ? (
            <div>
              <h2 className="titleStatistic">Статистика</h2>
              <Chart tableData={transactionsList} />
            </div>
          ) : (
            <AlpacaStat />
          )}
          <div>
            <Table tableData={transactionsList} />
          </div>
        </div>
      </div>
    </>
  );
}
