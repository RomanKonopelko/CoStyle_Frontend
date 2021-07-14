import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import home from '../../images/home.png';
import stat from '../../images/stat.png';

import { Typography } from '@material-ui/core';
// import LockIcon from '@material-ui/icons/Lock';
// import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';

export default function Navigation() {
  return (
    <div>
      <nav className="NavigationDashbord">
        <NavLink
          exact
          to={routes.home}
          className="NavLink First"
          activeClassName="NavLinkActive"
        >
          <img src={home} className="ImageNav" alt="home page" />
          Главная
        </NavLink>
        <NavLink
          exact
          to={routes.diagram}
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          <img src={stat} alt="statistic page" className="ImageNav" />
          Статистика
        </NavLink>
      </nav>
    </div>
  );
}
