import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <center>
        <div>
          <h1>Thank you!</h1>
          <h2> Technologies used: </h2>
          <h4>Javascript</h4>
          <h4>Node.js</h4>
          <h4>Express</h4>
          <h4>PostgreSQL</h4>
          <h4>React</h4>
          <h4>Redux</h4>
          <h4>Redux/Saga</h4>
          <h4>POSTMAN</h4>
          <h4>Postico</h4>
          <h4>Edamam API</h4>
          <h4>Sweet Alerts</h4>
          <h4>Animate.CSS</h4>
          <h4>Material UI</h4>
          <h4>Dbdesigner</h4>
          <h4>Figma</h4>
          <h4>Trello</h4>
          <h3></h3>
        </div>
      </center>
    </div>
  );
}

export default AboutPage;
