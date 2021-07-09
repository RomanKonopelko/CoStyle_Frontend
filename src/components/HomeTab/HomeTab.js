import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/styles';
import { Selectors } from '../../redux/transactions';

import './homeTab.scss';

const columns = [
  { id: 'date', label: 'Дата', minWidth: 57 },
  { id: 'type', label: 'Тип', minWidth: 57 },
  {
    id: 'category',
    label: 'Категория',
    minWidth: 57,
  },
  {
    id: 'comment',
    label: 'Комментарий',
    minWidth: 57,
  },
  {
    id: 'sum',
    label: 'Сума',
    minWidth: 57,
  },
  {
    id: 'balance',
    label: 'Баланс',
    minWidth: 57,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
];

function createData(date, type, category, comment, sum, balance) {
  return { date, type, category, comment, sum, balance };
}

const useStyles = makeStyles({
  container: {
    maxHeight: 320,
    maxWidth: 700,
  },
  pagination: {
    maxWidth: 700,
  },
  tableHead: {
    borderRadius: 30,
  },
  tableBody: {
    background: '#fafafa',
  },
});

export default function HomeTab() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(10);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(Operations.getTransaction());
  // }, [dispatch]);

  const transactionsList = useSelector(Selectors.getAllTransactions);

  // console.log(transactionsList.payload, 'transactionsList');
  //const { transactions } = transactionsList.payload;

  let rows = [];

  // if (transactions) {
  //   transactions.map(t => {
  //     rows.push(
  //       createData(
  //         t.time,
  //         t.sort,
  //         t.category,
  //         t.commentary || 'Без комментариев',
  //         t.amount,
  //         '6900',
  //       ),
  //     );
  //     return rows;
  //   });
  // }

  return (
    <>
      {transactionsList && <h1>Hallo, Jenja</h1>}
      {/* {transactions && ( */}
      <div className="hometab">
        <Paper>
          <TableContainer className={classes.container}>
            <Table>
              <TableHead fontWeight={700} className="tableHead test">
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className={classes.tableBody}>
                {rows
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map(column => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      {/* )} */}
    </>
  );
}
