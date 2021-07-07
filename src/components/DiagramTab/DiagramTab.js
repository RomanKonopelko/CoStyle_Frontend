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

  let filteredData;

  function handleChange(event) {
    // console.log(tableData);
    setSelected(event.target.value);

    filteredData = tableData.filter(el => {
      const myMonth = moment(el.time, 'DD.MM.YYYY').locale('ru').format('MMMM');
      const target = event.target.value;

      return myMonth === target;
    });

    // console.log(filteredData);

    const tableYearFilter = transactions.filter(r => {
      const myYear = moment(r.time, 'DD.MM.YYYY').locale('ru').format('YYYY');
      // console.log(`myYear`, myYear);
      return myYear;
    });

    // что-то тут не так ((
    // let _vals = event.target.value
    //   ? tableMonthFilter === event.target.value
    //   : tableData;

    setTableData(filteredData);
  }

  return (
    <>
      <Chart transactions={tableData} handleChange={handleChange} />
      <Table
        tableData={tableData}
        selected={selected}
        handleChange={handleChange}
      />
    </>
  );
}
