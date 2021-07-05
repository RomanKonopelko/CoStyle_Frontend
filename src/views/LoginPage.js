import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import img from '../images/Frame.png';

export default function RegistrationPage() {
  return (
    <div>
      <img src={img} alt="finance app" />
      <LoginForm />
    </div>
  );
}
