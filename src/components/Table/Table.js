import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function MyTable({ tableData, selected, handleChange }) {
  const { categoriesSummary, incomeValue, consumptionValue } = tableData;
  const result = Object.entries(categoriesSummary);

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
            value={selected.year}
            name="year"
            displayEmpty
            onChange={handleChange}
          >
            <MenuItem value={selected.year}>
              <em className="formControlEm">Год</em>
            </MenuItem>
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
