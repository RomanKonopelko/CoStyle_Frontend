import Loader from 'react-loader-spinner';
import s from './loader.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Load() {
  return (
    <div className={s.loaderContainer}>
      <Loader
        type="MutatingDots"
        color="#24cca7"
        secondaryColor="#4a56e2"
        height={120}
        width={120}
        timeout={5000}
      />
    </div>
  );
}

export default Load;
