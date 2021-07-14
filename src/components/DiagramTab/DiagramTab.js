import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import AlpacaStat from '../Alpaca/AlpacaStat';

import Chart from '../Chart';
import Table from '../Table';

// import { Operations } from '../../redux/transactions';
import { Selectors } from '../../redux/transactions';

export default function DiagramTab() {
  const transactionsList = useSelector(Selectors.getTransactionsStatistic);

  const lengthOfObject = Object.keys(transactionsList.categoriesSummary).length;

  console.log(lengthOfObject, 'length');
  return (
    <>
      <div className="diagram-tab-container">
        <h2 className="titleStatistic">Статистика</h2>
        <div className="diagrmTab">
          {lengthOfObject !== 0 ? (
            <div>
              <Chart
                tableData={transactionsList}
                // handleChange={handleChange}
              />
            </div>
          ) : (
            <AlpacaStat />
          )}
          <div>
            <Table
              tableData={transactionsList}
              // selected={selected}
              // handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
