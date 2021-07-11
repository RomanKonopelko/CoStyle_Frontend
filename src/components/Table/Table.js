import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './Table.scss';

function MyTable({ tableData, selected, handleChange }) {
  const { categoriesSummary, incomeValue, consumptionValue } = tableData;
  const result = Object.entries(categoriesSummary);

  return (
    <div>
      <div className="tableForm">
        <FormControl variant="outlined" className="formControl">
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

        <FormControl variant="outlined" className="formControl">
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
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="center">Категория</TableCell>
              <TableCell align="center">Сумма</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {result.map(row => (
              <TableRow key={row[0]} className="tableColorRow">
                <TableCell>
                  <span
                    className="tableOption"
                    style={{ backgroundColor: row[1].color }}
                  ></span>

                  {row[0]}
                </TableCell>
                <TableCell align="right">{row[1].value}</TableCell>
              </TableRow>
            ))}

            <TableRow className="hiddenBorder">
              <TableCell align="left" className="tableValue ">
                Расходы:
              </TableCell>
              <TableCell align="right" className="tableConsumptionValue">
                {consumptionValue}
              </TableCell>
            </TableRow>

            <TableRow className="hiddenBorder">
              <TableCell align="left" className="tableValue">
                Доходы:
              </TableCell>
              <TableCell align="right" className="tableIncomeValue">
                {incomeValue}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default MyTable;
