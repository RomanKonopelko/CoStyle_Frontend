import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Load() {
  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={5000} //3 secs
    />
  );
}

export default Load;
