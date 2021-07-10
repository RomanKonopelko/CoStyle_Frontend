import { useSelector } from 'react-redux';
import ModalLogout from '../ModalLogout/ModalLogout';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import headerLogo from './header-logo.png';
import { selectorsAuth } from '../../redux/auth';
import Avatar from '@material-ui/core/Avatar';
import './header.scss';

export default function Header() {
  const name = useSelector(selectorsAuth.getUsername);

  return (
    <header className="header">
      <img className="img" src={headerLogo} alt="logo" />
      <h1 className="title">Wallet</h1>
      <Avatar
        style={{
          width: '30px',
          height: '30px',
          fontSize: '16px',
          backgroundColor: '#4a56e2',
          fontWeight: 'normal',
          fontStyle: 'italic',
        }}
      >
        {name.substr(0, 1)}
      </Avatar>
      <p className="name">{name}</p>
      <span className="decor"></span>
      <ExitToAppIcon className="icon" />
      <ModalLogout />
    </header>
  );
}
