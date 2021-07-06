import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import img from '../../images/Frame.png';

import './loginPage.scss';

export default function LoginPage() {
  return (
    <div>
      <img src={img} alt="finance app" />
      <LoginForm />
    </div>
  );
}
