import React, { useState } from 'react';
import './LandingPage.css';
import "animate.css";

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');


  return (
    <div className="container">
      <h1>{heading}</h1>

      <div className="grid">
        <div className="grid-col grid-col_6">
          <div class="animate__animated animate__lightSpeedInRight">
            <h2>Where having No Thyme,</h2>
          </div>
          <div class="animate__animated animate__lightSpeedInLeft">
            <h2>saves time.</h2>
          </div>
        </div>
        <div className="grid-col grid-col_6">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
