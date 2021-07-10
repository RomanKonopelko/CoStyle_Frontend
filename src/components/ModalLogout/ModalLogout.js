import { useDispatch } from 'react-redux';
import { OperationsAuth } from '../../redux/auth';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './ModalLogout.scss';

export default function ModalLogout() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(OperationsAuth.LogoutUser());
  };

  return (
    <button type="button" className="btn" onClick={onLogout}>
      <ExitToAppIcon className="icon" />
      <p className="text">Выйти</p>
    </button>
  );
}
