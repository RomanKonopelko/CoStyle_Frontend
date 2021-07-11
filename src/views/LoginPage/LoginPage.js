import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import img from '../../images/Frame.png';

export default function LoginPage() {
  return (
    <div className="mainPage">
      <div className="split left">
        <div className="centred">
          <img src={img} alt="finance app" className="imgApp" />
          <h1 className="financeApp">Finance App</h1>
        </div>
      </div>
      <div className="split right">
        <div className="centred">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
