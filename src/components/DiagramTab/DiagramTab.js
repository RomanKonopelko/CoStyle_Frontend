import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Operations } from '../../redux/transactions';
import { Selectors } from '../../redux/transactions';

import Chart from '../Chart';
import Table from '../Table';

import './diagramTab.scss';

export default function DiagramTab() {
  const transactionsList = useSelector(Selectors.getAllTransactions);
  console.log(`transactionsList`, transactionsList);

  const { transactions } = transactionsList.payload;
  console.log(`transactions`, transactions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operations.getTransaction());
  }, [dispatch]);

  return (
    <>
      <Chart transactions={transactions} />
      <Table transactions={transactions} />
    </>
  );
}
