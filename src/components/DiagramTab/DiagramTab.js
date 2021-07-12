import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import Loader from 'react-loader-spinner';
import Chart from '../Chart';
import Table from '../Table';

import { Operations } from '../../redux/transactions';
import { Selectors } from '../../redux/transactions';

export default function DiagramTab() {
  const dispatch = useDispatch();

  const transactionsList = useSelector(Selectors.getTransactionsStatistic);

  const [selected, setSelected] = useState({});

  // function handleChange(event) {
  //   dispatch(Action.filterTransactions(event.target.value));
  //   const filteredData = payload.filter(el => {
  //     const myMonth = moment(el.time, 'DD.MM.YYYY').locale('ru').format('MMMM');
  //     const target = event.target.value;
  //     return myMonth === target;
  //   });
  //   const tableYearFilter = payload.filter(el => {
  //     const myYear = moment(el.time, 'DD.MM.YYYY').locale('ru').format('YYYY');
  //     const target = event.target.value;
  //     return myYear === target;
  //   });
  // }

  const reset = () => {
    setSelected({});
  };

  if (selected.month && selected.year) {
    dispatch(
      Operations.getFilterTransactionsStatistic(
        Number(selected.month),
        Number(selected.year),
      ),
    );

    reset();
  }

  // if (selected.month === 'undefined' && selected.year === 'undefined') {
  //   dispatch(Operations.getTransactionsStatistic());

  //   reset();
  // }

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(`name`, name);
    console.log(`value`, value);

    switch (name) {
      case 'month':
        setSelected(prevState => ({
          ...prevState,
          [name]: moment(value, 'MMMM').locale('ru').format('MM'),
        }));
        break;
      case 'year':
        setSelected(prevState => ({ ...prevState, [name]: value }));
        break;

      default:
        console.log("There aren't such data");
    }
  };

  console.log(`selected`, selected);
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
