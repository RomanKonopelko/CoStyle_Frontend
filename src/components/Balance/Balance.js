import { useSelector } from 'react-redux';
import { Selectors } from '../../redux/transactions';
import Loader from 'react-loader-spinner';
import classes from './Balance.module.scss';

export default function Balance() {
  let balance = 0;
  const transactions = useSelector(Selectors.getAllTransactions);

  if (transactions) {
    transactions.map(el =>
      el.sort === 'Доход' ? (balance += el.amount) : (balance -= el.amount),
    );
  }

  return (
    <>
      {balance !== 0 ? (
        <div className={classes.mainContainer}>
          <h3 className={classes.title}>ВАШ БАЛАНС</h3>
          <div className={classes.balanceContainer}>
            <span className={classes.unicode}>₴</span>
            <span className={classes.balance}>{balance}</span>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
