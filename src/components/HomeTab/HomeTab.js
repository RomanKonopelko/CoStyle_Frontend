import React from 'react';
import { useDispatch } from 'react-redux';
import { Operations } from '../../redux/transactions';
import { makeStyles } from '@material-ui/core/styles';

import ButtonAddTransaction from '../ButtonAddTransactions/ButtonAddTransactions';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import Alpaca from '../Alpaca/Alpaca';
import { SignalWifi1BarLockSharp } from '@material-ui/icons';

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

function createData(id, date, type, category, comment, sum, balance) {
  return { id, date, type, category, comment, sum, balance };
}

const useStyles = makeStyles({
  container: {
    maxWidth: 700,
    maxHeight: 320,
  },
});

export default function StickyHeadTable({ tableData }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const deleteTransaction = id => {
    dispatch(Operations.deleteTransaction(id));
  };

  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  let rows = [];
  //console.log('TABLE_DATA', tableData);

  tableData.map(t => {
    const time = t.time ? t.time.date.substr(0, 10) : '';
    const sort = t.sort === 'Расход' ? '-' : '+';
    rows.push(
      createData(
        t.id,
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

  // console.log(tableData, 'tableData');
  // console.log(rows, 'rows');

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = event => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <>
      {tableData.length === 0 ? (
        <Alpaca />
      ) : (
        <>
          <div className="homeTab">
            <Paper
              className={classes.root}
              style={{
                backgroundColor: '#11ffee00',
                borderCollapse: 'collapse',
                boxShadow: '0px 0px 0px 0px',
              }}
            >
              <TableContainer className={classes.container}>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  className="table"
                  style={{
                    width: 'none',
                  }}
                >
                  <TableHead className="thead">
                    <TableRow className="tableHeader">
                      {columns.map(column => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className="rowHeader"
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      // .slice(
                      //   page * rowsPerPage,
                      //   page * rowsPerPage + rowsPerPage,
                      // )
                      .map(row => {
                        return (
                          <>
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.id}
                              className={
                                row.type === '-' ? 'row expenses' : 'row income'
                              }
                            >
                              {columns.map(column => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    className={`cellBody ${column.id}`}
                                  >
                                    {typeof value === 'number'
                                      ? new Intl.NumberFormat('ru-RU').format(
                                          value,
                                        )
                                      : value}
                                  </TableCell>
                                );
                              })}
                              <DeleteForeverIcon
                                className="deleteIcon"
                                onClick={() => deleteTransaction(row.id)}
                              />
                            </TableRow>
                          </>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* <TablePagination
                rowsPerPageOptions={[10, 20, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </Paper>
          </div>
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
                              {typeof value === 'number'
                                ? new Intl.NumberFormat('ru-RU').format(value)
                                : value}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <DeleteForeverIcon
                      className="deleteIconM"
                      onClick={() => deleteTransaction(row.id)}
                    />
                  </tbody>
                </>
              );
            })}
          </table>

          <ButtonAddTransaction />
        </>
      )}
    </>
  );
}
