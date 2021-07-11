import React from 'react';
import Container from '../../components/Container/Container';
import RegistrationForm from '../../components/RegistrationForm/';

import img from '../../images/Frame.png';

export default function RegistrationPage() {
  return (
    <Container>
      <div className="mainPage">
        <div className="split left">
          <div className="centred">
            <img src={img} alt="finance app" className="imgApp" />
            <h1 className="financeApp">Finance App</h1>
          </div>
        </div>
        <div className="split right">
          <div className="centred">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
