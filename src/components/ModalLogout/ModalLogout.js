import { useDispatch } from 'react-redux';
import { OperationsAuth } from '../../redux/auth';
import './ModalLogout.scss';

export default function ModalLogout() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(OperationsAuth.LogoutUser());
  };

  return (
    <button type="button" className="btn" onClick={onLogout}>
      <p className="text">Выйти</p>
    </button>
  );
}
