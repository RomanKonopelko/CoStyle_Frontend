import { useSelector } from 'react-redux';
import { selectorsAuth } from '../../redux/auth';
import img from '../../images/lama2.png';

export default function Alpaca() {
  const name = useSelector(selectorsAuth.getUsername);

  return (
    <>
      <div className="table alpacaText">
        <p>Привет, {name}!</p>
        <img className="alpacatImg" src={img} alt="alpaca" />
        <p> Я твой персональний финасовый менеджер.</p>
        <p>
          {' '}
          Вместе мы проконтролируем твои расходы, чтобы ты смог собрать деньги
          на мечту!
        </p>
        <p>Запиши свой первый регулярный доход!</p>
      </div>
    </>
  );
}
