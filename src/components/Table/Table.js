import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';

// предварительные стили
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '40%',
  },
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function MyTable({ transactions }) {
  const classes = useStyles();

  const [tableData, setTableData] = React.useState(transactions);
  const [selected, setSelected] = React.useState('');

  function handleChange(event) {
    setSelected(event.target.value);
    console.log(`event.target.value`, event.target.value);

    const tableMonthFilter = tableData.filter(r => {
      const myMonth = moment(r.time, 'DD.MM.YYYY').locale('ru').format('MMMM');
      console.log(`myMonth`, myMonth);
      return myMonth;
    });

    const tableYearFilter = tableData.filter(r => {
      const myYear = moment(r.time, 'DD.MM.YYYY').locale('ru').format('YYYY');
      console.log(`myYear`, myYear);
      return myYear;
    });

    // что-то тут не так ((
    // let _vals = event.target.value
    //   ? tableMonthFilter === event.target.value
    //   : tableData;
    // setTableData(_vals);
  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={selected}
          name="month"
          displayEmpty
          onChange={handleChange}
        >
          <MenuItem value={selected}>
            <em>Месяц</em>
          </MenuItem>
          <MenuItem value="January">Январь</MenuItem>
          <MenuItem value="February">Февраль</MenuItem>
          <MenuItem value="March">Март</MenuItem>
          <MenuItem value="April">Апрель</MenuItem>
          <MenuItem value="May">Май</MenuItem>
          <MenuItem value="June">Июнь</MenuItem>
          <MenuItem value="July">Июль</MenuItem>
          <MenuItem value="August">Август</MenuItem>
          <MenuItem value="September">Сентябрь</MenuItem>
          <MenuItem value="October">Октябрь</MenuItem>
          <MenuItem value="November">Ноябрь</MenuItem>
          <MenuItem value="December">Декабрь</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={selected}
          name="year"
          displayEmpty
          onChange={handleChange}
        >
          <MenuItem value={selected}>
            <em>Год</em>
          </MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
        </Select>
      </FormControl>

      <Table>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell align="center">Категория</TableCell>
            <TableCell align="center">Сумма</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{Number(row.amount)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell align="left">Расходы</TableCell>
            <TableCell align="left">{'Тут будет общая сумма'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Доходы</TableCell>
            <TableCell align="left">{'Тут будет общая сумма'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default MyTable;
