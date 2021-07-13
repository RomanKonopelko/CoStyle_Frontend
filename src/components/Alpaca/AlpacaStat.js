import img from '../../images/lamaAvatars.png';
export default function AlpacaStat() {
  // const name = useSelector(selectorsAuth.getUsername);

  return (
    <>
      <div className="table alpacaText">
        <img className="alpacatImg" src={img} alt="alpaca" />
        <p>
          Здесь ты можешь с помощью графика контролировать на что потратил
          больше всего?{' '}
        </p>
        <p>Мой совет - не экономь на еде</p>
      </div>
    </>
  );
}
