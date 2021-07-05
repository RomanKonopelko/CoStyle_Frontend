import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import './homeTab.scss';

const columns = [
  { id: 'date', label: 'Дата', minWidth: 57 },
  { id: 'type', label: 'Тип', minWidth: 57 },
  {
    id: 'category',
    label: 'Категория',
    minWidth: 57,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'comment',
    label: 'Комментарий',
    minWidth: 57,
    align: 'right',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'sum',
    label: 'Сума',
    minWidth: 57,
    align: 'right',
    format: value => value.toFixed(2),
  },
  {
    id: 'balance',
    label: 'Баланс',
    minWidth: 57,
    align: 'right',
    format: value => value.toFixed(2),
  },
];

function createData(date, type, category, comment, sum, balance) {
  return { date, type, category, comment, sum, balance };
}

const rows = [
  createData('4.01.10', '-', 'Різне', 'Подарунок', '123', '6900'),
  createData('4.01.10', '-', 'Різне', 'Подарунок', '123', '6900'),
  createData('4.01.10', '-', 'Різне', 'Подарунок', '123', '6900'),
  createData('4.01.10', '-', 'Різне', 'Подарунок', '123', '6900'),
  createData('4.01.10', '-', 'Різне', 'Подарунок', '123', '6900'),
  createData('4.01.10', '-', 'Різне', 'Подарунок', '123', '6900'),
  createData('4.01.10', '-', 'Різне', 'Подарунок', '123', '6900'),
  createData('4.01.10', '-', 'Різне', 'Подарунок', '123', '6900'),
];

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
  container: {
    maxHeight: 340,
    maxWidth: 700,
  },
  pagination: {
    maxWidth: 700,
  },
});

export default function HomeTab() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="hometab">
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
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
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
        {/* <TablePagination 
      className={classes.pagination}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
      </Paper>
    </div>
  );
}
