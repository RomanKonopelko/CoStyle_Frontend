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

  return (
    <>
      {lengthOfObject !== 0 ? (
        <div className="diagram-tab-container">
          <h2 className="titleStatistic">Статистика</h2>
          <div className="diagrmTab">
            <div>
              <Chart
                tableData={transactionsList}
                // handleChange={handleChange}
              />
            </div>

            <div>
              <Table
                tableData={transactionsList}
                // selected={selected}
                // handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      ) : (
        <AlpacaStat />
      )}
    </>
  );
}
