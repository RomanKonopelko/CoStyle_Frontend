import ModalLogout from '../ModalLogout/ModalLogout';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import headerLogo from './header-logo.png';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <img className="img" src={headerLogo} alt="logo" />
      <h1 className="title">Wallet</h1>
      <p className="name">Имя</p>
      <span className="decor"></span>
      <ExitToAppIcon className="icon" />
      <ModalLogout />
    </header>
  );
}
