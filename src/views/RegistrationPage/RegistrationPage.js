import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/';

import img from '../../images/Frame.png';

export default function RegistrationPage() {
  return (
    <div>
      <img src={img} alt="finance app" />
      <h1>Finance App</h1>
      <RegistrationForm />
    </div>
  );
}
