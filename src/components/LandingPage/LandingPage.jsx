import React, { useState } from 'react';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');


  return (
    <div className="container">
      <h1>{heading}</h1>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <h2>
            Where having No Thyme, saves time. 
          </h2>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
