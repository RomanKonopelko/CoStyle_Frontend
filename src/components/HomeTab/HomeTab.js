import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/styles';

import Alpaca from '../Alpaca/Alpaca';

const columns = [
  { id: 'date', label: 'Дата' },
  { id: 'type', label: 'Тип' },
  {
    id: 'category',
    label: 'Категория',
  },
  {
    id: 'comment',
    label: 'Комментарий',
  },
  {
    id: 'sum',
    label: 'Сума',
  },
  {
    id: 'balance',
    label: 'Баланс',
  },
];

function createData(date, type, category, comment, sum, balance) {
  return { date, type, category, comment, sum, balance };
}

// const useStyles = makeStyles({
//   container: {
//     maxHeight: 320,
//     maxWidth: 700,
//   },
//   pagination: {
//     maxWidth: 700,
//   },
//   tableHead: {
//     borderRadius: 30,
//   },
//   tableBody: {},
// });

export default function HomeTab({ tableData }) {
  // const classes = useStyles();
  // const { transactions } = tableData;

  let rows = [];

  tableData.map(t => {
    const time = t.time.date;
    console.log('t.time', t.time);
    console.log('t.time.date', t.time.date);
    const sort = t.sort === 'Расход' ? '-' : '+';
    rows.push(
      createData(
        time,
        sort,
        t.category,
        t.commentary || 'Без комментариев',
        t.amount,
        t.balance,
      ),
    );
    return rows;
  });

  console.log(tableData, 'tableData');
  return (
    <>
      {/* <Paper> */}
      {tableData.length === 0 ? (
        <Alpaca />
      ) : (
        <div className="hometab">
          <table stickyHeader aria-label="sticky table" className="table">
            <thead className="thead">
              <tr className="tableHeader">
                {columns.map(column => (
                  <th
                    key={column.id}
                    align={column.align}
                    className="rowHeader"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="tableBody">
              {rows.map(row => {
                return (
                  <tr
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    className={row.type === '-' ? 'row expenses' : 'row income'}
                  >
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <td
                          key={column.id}
                          align={column.align}
                          className={`cellBody ${column.id}`}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Mobile */}

          <table stickyHeader aria-label="sticky table" className="tableMobile">
            {rows.map(row => {
              return (
                <>
                  <tbody
                    key={row.code}
                    className={
                      row.type === '-'
                        ? 'sectionMobile expensesM'
                        : 'sectionMobile incomeM'
                    }
                  >
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <>
                          <tr className="rowMobile">
                            <th
                              key={`${column.id}mobile`}
                              align={column.align}
                              className="cellHeader "
                            >
                              {column.label}
                            </th>

                            <td
                              key={column.id}
                              align={column.align}
                              className={`cellValue ${column.id}`}
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      )}
      {/* </Paper> */}
    </>
  );
}
