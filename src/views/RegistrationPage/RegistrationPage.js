import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/';
import './registrationPage.scss';

import img from '../../images/Frame.png';

export default function RegistrationPage() {
  return (
    <div className="registrationPage">
      <div>
        <img src={img} alt="finance app" className="img" />
        <h1 className="title">Finance App</h1>
      </div>
      <RegistrationForm className="registrationForm" />
    </div>
  );
}
