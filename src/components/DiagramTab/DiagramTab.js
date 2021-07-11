import { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import moment from 'moment';

import Loader from 'react-loader-spinner';
import Chart from '../Chart';
import Table from '../Table';

import { Operations } from '../../redux/transactions';
import { Selectors } from '../../redux/transactions';
import { Action } from '../../redux/transactions';

export default function DiagramTab() {
  const dispatch = useDispatch();

  const transactionsList = useSelector(Selectors.getTransactionsStatistic);
  const { categoriesSummary, incomeValue, consumptionValue } = transactionsList;

  useEffect(() => {
    categoriesSummary === 0 &&
      consumptionValue === 0 &&
      incomeValue === 0 &&
      dispatch(Operations.getTransactionsStatistic());
  }, [dispatch]);

  const selected = useSelector(Selectors.getFilterValue);

  // const { payload } = transactionsList;
  // console.log('payload', payload);

  function handleChange(event) {
    // dispatch(Action.filterTransactions(event.target.value));
    // const filteredData = payload.filter(el => {
    //   const myMonth = moment(el.time, 'DD.MM.YYYY').locale('ru').format('MMMM');
    //   const target = event.target.value;
    //   return myMonth === target;
    // });
    // const tableYearFilter = payload.filter(el => {
    //   const myYear = moment(el.time, 'DD.MM.YYYY').locale('ru').format('YYYY');
    //   const target = event.target.value;
    //   return myYear === target;
    // });
  }

  return (
    <>
      {transactionsList ? (
        <>
          <div>
            <h2 className="titleStatistic">Статистика</h2>

            <div className="diagrmTab">
              <div>
                <Chart
                  tableData={transactionsList}
                  handleChange={handleChange}
                />
              </div>

              <div>
                <Table
                  tableData={transactionsList}
                  selected={selected}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
