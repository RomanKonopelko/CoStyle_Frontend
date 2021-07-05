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

// для примера захардкодила значения
// логику нужно еще писать
const API_DATA = [
  {
    category: 'Основные расходы',
    summ: '8 700.00',
    month: 'Jan',
    year: '2020',
  },
  { category: 'Продукты', summ: '3 800.74', month: 'Feb', year: '2022' },
  { category: 'Машина', summ: '1 500.00', month: 'Dec', year: '2021' },
  { category: 'Забота о себе', summ: '800.00', month: 'Jul', year: '2021' },
  { category: 'Забота о детях', summ: '2208.50', month: 'Jan', year: '2021' },
  { category: 'Товары для дома', summ: '300.00', month: 'Jun', year: '2021' },
  { category: 'Образование', summ: '3 400.00', month: 'Aug', year: '2020' },
  { category: 'Досуг', summ: '1 230.00', month: 'May', year: '2020' },
  { category: 'Другие расходы', summ: '610.00', month: 'Aug', year: '2020' },
];

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

function MyTable() {
  const classes = useStyles();
  const [tableData, setTableData] = React.useState(API_DATA);
  const [selected, setSelected] = React.useState('');

  function handleChange(event) {
    setSelected(event.target.value);
    console.log(event.target.value);
    let _vals = event.target.value
      ? API_DATA.filter(r => r.month === event.target.value)
      : API_DATA;
    setTableData(_vals);
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
          <MenuItem value="">
            <em>Месяц</em>
          </MenuItem>
          <MenuItem value="Jan">Январь</MenuItem>
          <MenuItem value="Feb">Февраль</MenuItem>
          <MenuItem value="Mar">Март</MenuItem>
          <MenuItem value="Apr">Апрель</MenuItem>
          <MenuItem value="May">Май</MenuItem>
          <MenuItem value="Jun">Июнь</MenuItem>
          <MenuItem value="Jul">Июль</MenuItem>
          <MenuItem value="Aug">Август</MenuItem>
          <MenuItem value="Sept">Сентябрь</MenuItem>
          <MenuItem value="Oct">Октябрь</MenuItem>
          <MenuItem value="Nov">Ноябрь</MenuItem>
          <MenuItem value="Dec">Декабрь</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <Select value={''} name="year" displayEmpty onChange={handleChange}>
          <MenuItem value="">
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
            <TableRow key={row.category}>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.summ}</TableCell>
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
