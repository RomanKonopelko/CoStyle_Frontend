import { useSelector } from 'react-redux';
import { Selectors } from '../../redux/transactions';
import Loader from 'react-loader-spinner';

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
        <div className="balance-container">
          <h3 className="title">Ваш баланс</h3>
          <span className="unicode">₴</span>
          <span className="balance">{balance}</span>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
