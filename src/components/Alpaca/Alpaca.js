import { useSelector } from 'react-redux';
import { selectorsAuth } from '../../redux/auth';
import img from '../../images/lama2.png';

export default function Alpaca() {
  const name = useSelector(selectorsAuth.getUsername);

  return (
    <>
      <div className="alpacaText">
        <p>
          Привет, <span className="userName">{name}</span>!
        </p>
        <img
          className="alpacaImg"
          src="https://media1.giphy.com/media/ORjeGbJQP8bSKO9ZrQ/giphy.gif?cid=6c09b952acb22b31766abb3d50bb216699cf2517a7a53b11&rid=giphy.gif&ct=s"
          alt="alpaca"
        />
        <p> Я твой персональний финасовый менеджер.</p>
        <p>Вместе мы проконтролируем твои расходы, </p>
        <p>чтобы ты смог собрать деньги на мечту!</p>
        <p>Запиши свой первый регулярный доход!</p>
      </div>
    </>
  );
}
