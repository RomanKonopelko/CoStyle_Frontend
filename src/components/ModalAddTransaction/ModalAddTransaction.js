import React from 'react';
import { useDispatch } from 'react-redux';
import s from './ModalAddTransaction.module.scss';
// Radio button
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Operations } from '../../redux/transactions';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AntSwitch = withStyles(theme => ({
  root: {
    width: 80,
    height: 40,
    padding: 0,
    display: 'flex',
    overflow: 'visible',
  },
  switchBase: {
    padding: 0,
    color: `#24CCA7`,
    '&$checked': {
      transform: 'translateX(36px)',
      color: `#FF6596`,
      '& + $track': {
        backgroundColor: theme.palette.common.white,
        borderColor: `1px solid #E0E0E0`,
      },
    },
  },
  thumb: {
    width: 44,
    height: 44,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 30,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function ModalAddTransaction() {
  const classes = useStyles();

  const [transaction, setTransaction] = React.useState({
    category: 'Другое',
    time: '',
    amount: 0,
    type: false,
    commentary: '',
  });
  const { category, time, amount, type, commentary } = transaction;

  console.log(transaction);
  // Switch for State
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'category':
        setTransaction(prevState => ({ ...prevState, [name]: value }));
        break;
      case 'time':
        setTransaction(prevState => ({ ...prevState, [name]: value }));
        break;
      case 'amount':
        setTransaction(prevState => ({ ...prevState, [name]: +value }));
        break;
      case 'type':
        setTransaction(prevState => ({
          ...prevState,
          [name]: e.target.checked,
        }));
        break;
      case 'commentary':
        setTransaction(prevState => ({ ...prevState, [name]: value }));
        break;
      default:
        console.log("There aren't such data");
    }
  };

  const sort = !type ? 'Доход' : 'Расход';

  const handleSubmit = e => {
    e.preventDefault();
    // console.log({ category, time, amount, sort, commentary });
    dispatch(
      Operations.addTransaction({
        category,
        time,
        amount,
        sort,
        commentary,
      }),
    );
    setTimeout(() => {
      dispatch(Operations.getTransaction());
      dispatch(Operations.getTransactionsStatistic());
    }, [3000]);
    reset();
  };

  const reset = () => {
    setTransaction({
      category: 'profit',
      time: '',
      amount: 0,
      type: false,
      commentary: '',
    });
  };

  //   const [state1, setState1] = React.useState({
  //     age: '',
  //   });
  //   const [state, setState] = React.useState({
  //     checkedC: false,
  //   });

  //   const [date, setDate] = React.useState('');
  //   const [money, setMoney] = React.useState();
  //   const [comment, setComment] = React.useState('');

  //   console.log(money);
  //   console.log(comment);

  //   const handleChange1 = event => {
  //     setState1({
  //       age: event.target.value,
  //     });
  //   };

  //   const handleChange = event => {
  //     setState({ ...state, [event.target.name]: event.target.checked });
  //   };
  //   console.log(state);

  //   const handleChangeData = event => {
  //     setDate(event.target.value);
  //     console.log(event.target.value);
  //   };
  //   const handleChangeMoney = event => {
  //     setMoney(event.target.value);
  //     console.log(event.target.value);
  //   };
  //   const handleChangeComment = event => {
  //     setComment(event.target.value);
  //     console.log(event.target.value);
  //   };

  let classNameProfit = s.grey;
  if (!type) {
    classNameProfit = s.green;
  }

  let classNameExpencess = s.grey;
  if (type) {
    classNameExpencess = s.red;
  }

  return (
    <div className={s.modalContainer}>
      <h2 className={s.title}>Добавить транзакцию</h2>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <div className={s.radioBtn}>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>
                <span className={classNameProfit}>Доход</span>
              </Grid>
              <Grid item>
                <AntSwitch checked={type} onChange={handleChange} name="type" />
              </Grid>
              <Grid item>
                <span className={classNameExpencess}>Рассход</span>
              </Grid>
            </Grid>
          </Typography>
        </div>
        <div className={s.dataMoney}>
          <form action="">
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={handleChange}
            />
          </form>
          <form>
            <input
              type="date"
              id="start"
              name="time"
              value={time}
              min="2010-01-01"
              max="2025-12-31"
              onChange={handleChange}
            />
          </form>
        </div>
        {type && (
          <div className={s.cetegory}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">
                Выберите категорию
              </InputLabel>
              <Select
                native
                value={category}
                onChange={handleChange}
                inputProps={{
                  name: 'category',
                  id: 'age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={'Основной'}>Основной</option>
                <option value={'Еда'}>Еда</option>
                <option value={'Авто'}>Авто</option>
                <option value={'Развитие'}>Развитие</option>
                <option value={'Дети'}>Дети</option>
                <option value={'Дом'}>Дом</option>
                <option value={'Образование'}>Образование</option>
                <option value={'Остальные'}>Остальные</option>
              </Select>
            </FormControl>
          </div>
        )}
        <div className={s.comment}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Комментарий"
              name="commentary"
              value={commentary}
              onChange={handleChange}
            />
          </form>
        </div>

        <div className={s.addBtn}>
          <Button color="primary" variant="contained" type="submit">
            Добавить
          </Button>
        </div>
        <div className={s.cancelBtn}>
          <Button color="default" variant="contained">
            Отменить
          </Button>
        </div>
      </form>
    </div>
  );
}
