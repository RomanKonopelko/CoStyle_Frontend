import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Operations } from '../../redux/transactions';
import { Selectors } from '../../redux/transactions';
import { Action } from '../../redux/transactions';

import Chart from '../Chart';
import Table from '../Table';

import './diagramTab.scss';

export default function DiagramTab() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operations.getTransactionsStatistic());
  }, [dispatch]);

  const transactionsList = useSelector(Selectors.getTransactionsStatistic);
  // console.log('transactionsList', transactionsList);
  const selected = useSelector(Selectors.getFilterValue);

  const { payload } = transactionsList;
  console.log('payload', payload);

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
      {payload && (
        <>
          <Chart tableData={payload} handleChange={handleChange} />
          <Table
            tableData={payload}
            selected={selected}
            handleChange={handleChange}
          />
        </>
      )}
    </>
  );
}
