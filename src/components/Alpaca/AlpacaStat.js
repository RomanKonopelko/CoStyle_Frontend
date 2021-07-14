import img from '../../images/lamaAvatars.png';
export default function AlpacaStat() {
  // const name = useSelector(selectorsAuth.getUsername);

  return (
    <>
      <div className="table alpacaText">
        <img className="alpacatImg" src={img} alt="alpaca" />
        <p>C помощью графика контролируй на что потратил больше всего денег.</p>
        <p>Но сначала добавь свои первые рассходы!</p>
      </div>
    </>
  );
}
