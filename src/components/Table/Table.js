import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Operations } from '../../redux/transactions';

function MyTable({ tableData }) {
  const { categoriesSummary, incomeValue, consumptionValue } = tableData;
  const result = Object.entries(categoriesSummary);

  const dispatch = useDispatch();
  const [selected, setSelected] = useState({ month: '', year: '' });

  //console.log(`selected`, selected);

  // if (selected.month === 'undefined' && selected.year === 'undefined') {
  //   dispatch(Operations.getTransactionsStatistic());

  //   reset();
  // }

  const handleChange = e => {
    const { name, value } = e.target;
    // console.log(`name`, name);
    // console.log(`value`, value);

    switch (name) {
      case 'month':
        setSelected(prevState => ({
          ...prevState,
          [name]: value,
        }));
        break;
      case 'year':
        setSelected(prevState => ({ ...prevState, [name]: value }));
        break;

      default:
        console.log("There aren't such data");
    }
  };

  const reset = () => {
    setSelected(prevState => ({ ...prevState, month: '', year: '' }));
  };

  useEffect(() => {
    if (selected.month && selected.year) {
      dispatch(
        Operations.getFilterTransactionsStatistic(
          Number(selected.month),
          Number(selected.year),
        ),
      );

      reset();
    }
    if (selected.month === 'All' && selected.year === 'All') {
      dispatch(Operations.getTransactionsStatistic());

      reset();
    }
  }, [selected]);

  return (
    <div>
      <div className="tableFormStatistic">
        <FormControl variant="outlined" className="formControl">
          <Select
            value={selected.month}
            name="month"
            displayEmpty
            onChange={handleChange}
          >
            <MenuItem value={selected.month}>
              <em className="formControlEm">Месяц</em>
            </MenuItem>
            <MenuItem value="All">All Period</MenuItem>
            <MenuItem value="01">Январь</MenuItem>
            <MenuItem value="02">Февраль</MenuItem>
            <MenuItem value="03">Март</MenuItem>
            <MenuItem value="04">Апрель</MenuItem>
            <MenuItem value="05">Май</MenuItem>
            <MenuItem value="06">Июнь</MenuItem>
            <MenuItem value="7">Июль</MenuItem>
            <MenuItem value="08">Август</MenuItem>
            <MenuItem value="09">Сентябрь</MenuItem>
            <MenuItem value="10">Октябрь</MenuItem>
            <MenuItem value="11">Ноябрь</MenuItem>
            <MenuItem value="12">Декабрь</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className="formControl">
          <Select
            value={selected.year}
            name="year"
            displayEmpty
            onChange={handleChange}
          >
            <MenuItem value={selected.year}>
              <em className="formControlEm">Год</em>
            </MenuItem>
            <MenuItem value="All">All Period</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>
        </FormControl>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" className="tableHeadCell">
                Категория
              </TableCell>
              <TableCell align="center" className="tableHeadCell">
                Сумма
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {result.map(row => (
              <TableRow key={row[0]} className="tableColorRow">
                <TableCell>
                  <div className="tableColorSpan">
                    <span
                      className="tableOption"
                      style={{ backgroundColor: row[1].color }}
                    ></span>

                    {row[0]}
                  </div>
                </TableCell>
                <TableCell align="right">
                  {new Intl.NumberFormat('ru-RU').format(row[1].value)}
                </TableCell>
              </TableRow>
            ))}

            <TableRow className="hiddenBorder">
              <TableCell align="left" className="tableValue ">
                Расходы:
              </TableCell>
              <TableCell align="right" className="tableConsumptionValue">
                {new Intl.NumberFormat('ru-RU').format(consumptionValue)}
              </TableCell>
            </TableRow>

            <TableRow className="hiddenBorder">
              <TableCell align="left" className="tableValue">
                Доходы:
              </TableCell>
              <TableCell align="right" className="tableIncomeValue">
                {new Intl.NumberFormat('ru-RU').format(incomeValue)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default MyTable;
