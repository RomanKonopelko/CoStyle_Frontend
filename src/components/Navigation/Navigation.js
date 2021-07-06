import { NavLink } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import './nav.scss';

export default function Navigation() {
  return (
    <div>
      <nav>
        <Typography variant="h6">
          <NavLink
            exact
            to="/home"
            className="Nav-link"
            activeClassName="NavLink--active"
          >
            <HomeRoundedIcon />
            Главная
          </NavLink>
        </Typography>
        <Typography variant="h6">
          <NavLink
            exact
            to="/diagram"
            className="Nav-link"
            activeClassName="NavLink--active"
          >
            <EqualizerOutlinedIcon />
            Статистика
          </NavLink>
        </Typography>
      </nav>
    </div>
  );
}
