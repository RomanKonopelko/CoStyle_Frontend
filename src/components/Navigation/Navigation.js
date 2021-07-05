import { NavLink } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';

export default function Navigation() {
  return (
    <div>
      <nav>
        <Typography variant="h6">
          <NavLink exact to="/home">
            <HomeRoundedIcon />
            Главная
          </NavLink>
        </Typography>
        <Typography variant="h6">
          <NavLink exact to="/diagram">
            <EqualizerOutlinedIcon />
            Статистика
          </NavLink>
        </Typography>
      </nav>
    </div>
  );
}
