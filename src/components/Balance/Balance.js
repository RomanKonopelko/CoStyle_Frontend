import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import classes from './Balance.module.scss';

export default function Balance() {
  // there will be dispatch to check whether the balance has been changed
  //     const initBalance = useDispatch();
  //   useEffect(() => {
  //     initBalance(Operations.getBalance());
  //   }, [initBalance]);

  return (
    <div className={classes.mainContainer}>
      <h3 className={classes.title}>ВАШ БАЛАНС</h3>
      <div className={classes.balanceContainer}>
        <span className={classes.unicod}>₴</span>
        <span className={classes.balance}>24000.00</span>
      </div>
    </div>
  );
}
