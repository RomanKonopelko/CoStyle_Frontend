import { useSelector } from 'react-redux';
import ModalLogout from '../ModalLogout/ModalLogout';
import headerLogo from './header-logo.png';
import { selectorsAuth } from '../../redux/auth';
import Avatar from '@material-ui/core/Avatar';
import Container from '../Container/Container';

export default function Header() {
  const name = useSelector(selectorsAuth.getUsername);

  return (
    <header className="header">
      <Container>
        <div className="headerContainer">
          <div className="logo">
            <img className="img" src={headerLogo} alt="logo" />
            <h1 className="title">Wallet</h1>
          </div>
          <div className="userInfo">
            <Avatar className="avatarUser">{name.substr(0, 1)}</Avatar>
            <p className="name">{name}</p>
            <span className="decor"></span>
            <ModalLogout />
          </div>
        </div>
      </Container>
    </header>
  );
}
