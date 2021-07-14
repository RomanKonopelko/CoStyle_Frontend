import img from '../../images/lamaAvatars.png';
export default function AlpacaStat() {
  // const name = useSelector(selectorsAuth.getUsername);

  return (
    <>
      <div className="table alpacaText">
        <img
          className="alpacatImg"
          src="https://media2.giphy.com/media/5nh30ByowIC9jVH1b6/source.gif"
          alt="alpaca"
        />
        <p>C помощью графика контролируй на что потратил больше всего денег.</p>
        <p>Но сначала добавь свои первые рассходы!</p>
      </div>
    </>
  );
}
