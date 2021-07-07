import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Operations } from '../../redux/transactions';
import { Selectors } from '../../redux/transactions';

import Chart from '../Chart';
import Table from '../Table';

import './diagramTab.scss';

export default function DiagramTab() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operations.getTransaction());
  }, [dispatch]);

  const transactionsList = useSelector(Selectors.getAllTransactions);
  const { transactions } = transactionsList.payload;

  const [tableData, setTableData] = useState(transactions);
  const [selected, setSelected] = useState('');

  function handleChange(event) {
    setSelected(event.target.value);
    console.log(`event.target.value`, event.target.value);

    const tableMonthFilter = transactions.filter(r => {
      const myMonth = moment(r.time, 'DD.MM.YYYY').locale('ru').format('MMMM');
      console.log(`myMonth`, myMonth);
      return myMonth;
    });

    const tableYearFilter = transactions.filter(r => {
      const myYear = moment(r.time, 'DD.MM.YYYY').locale('ru').format('YYYY');
      console.log(`myYear`, myYear);
      return myYear;
    });

    // что-то тут не так ((
    let _vals = event.target.value
      ? tableMonthFilter === event.target.value
      : tableData;
    setTableData(_vals);
  }

  return (
    <>
      <Chart transactions={transactions} handleChange={handleChange} />
      <Table
        transactions={transactions}
        selected={selected}
        handleChange={handleChange}
      />
    </>
  );
}
