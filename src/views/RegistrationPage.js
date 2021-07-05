import React from 'react';

import img from '../images/Frame.png';

import RegistrationForm from '../components/RegistrationForm';

export default function RegistrationPage() {
  return (
    <div>
      <img src={img} alt="finance app" />
      <h1>Finance App</h1>
      <RegistrationForm />
    </div>
  );
}
