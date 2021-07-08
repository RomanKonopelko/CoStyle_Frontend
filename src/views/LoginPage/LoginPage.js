import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import img from '../../images/Frame.png';
import './loginPage.scss';

import './loginPage.scss';

export default function LoginPage() {
  return (
    <div className="loginPage">
      <img src={img} alt="finance app" className="img" />
      <LoginForm className="loginForm" />
    </div>
  );
}
