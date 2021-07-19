import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './loader.module.css';

// function Load() {
//   return (
//     <div className="loaderContainer">
//       <Loader
//         type="MutatingDots"
//         color="#24cca7"
//         secondaryColor="#4a56e2"
//         height={120}
//         width={120}
//         timeout={5000}
//       />
//     </div>
//   );
// }

const Load = () => {
  return (
    <div className={css.wrapper}>
      <div className={`${css.container}`}>
        <div className={`${css.box} ${css['box-1']}`}></div>
        <div className={`${css.box} ${css['box-2']}`}></div>
        <div className={`${css.box} ${css['box-3']}`}></div>
      </div>
    </div>
  );
};

export default Load;
