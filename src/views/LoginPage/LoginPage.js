import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import img from '../../images/Frame.png';

export default function LoginPage() {
  return (
    <div className="loginPage">
      <div>
        <img src={img} alt="finance app" className="imgApp" />
        <h1 className="financeApp">Finance App</h1>
      </div>
      <LoginForm className="loginForm" />
    </div>
  );
}
