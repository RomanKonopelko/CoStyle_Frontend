import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Operations } from '../../redux/transactions';
import { Selectors } from '../../redux/transactions';

import Chart from '../Chart';
import Table from '../Table';

export default function DiagramTab() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operations.getTransaction());
  }, [dispatch]);

  const transactionsList = useSelector(Selectors.getAllTransactions);
  const { transactions } = transactionsList.payload;

  const [tableData, setTableData] = useState(transactions);
  const [selected, setSelected] = useState('');

  let filteredData;
  let tableYearFilter;

  function handleChange(event) {
    setSelected(event.target.value);

    filteredData = tableData.filter(el => {
      const myMonth = moment(el.time, 'DD.MM.YYYY').locale('ru').format('MMMM');
      const target = event.target.value;

      return myMonth === target;
    });

    tableYearFilter = transactions.filter(el => {
      const myYear = moment(el.time, 'DD.MM.YYYY').locale('ru').format('YYYY');
      const target = event.target.value;
      return myYear === target;
    });

    setTableData(filteredData);
    setTableData(tableYearFilter);
  }

  return (
    <>
      <Chart tableData={tableData} handleChange={handleChange} />
      <Table
        tableData={tableData}
        selected={selected}
        handleChange={handleChange}
      />
    </>
  );
}
