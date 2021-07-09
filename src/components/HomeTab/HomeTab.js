import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/styles';

import './homeTab.scss';

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
  tableBody: {},
});

export default function HomeTab({ tableData }) {
  const classes = useStyles();
  const { transactions } = tableData;

  let rows = [];

  transactions.map(t => {
    rows.push(
      createData(
        t.time,
        t.sort,
        t.category,
        t.commentary || 'Без комментариев',
        t.amount,
        '6900',
      ),
    );
    return rows;
  });

  return (
    <>
      <div className="hometab">
        <Paper>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead className={classes.tableHead}>
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
                {rows.map(row => {
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
    </>
  );
}
