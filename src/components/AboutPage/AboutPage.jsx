import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Thank you!</p>
        <ul> Technologies used: </ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>React</li>
        <li>Redux/Saga</li>
        <li>Edamam API</li>
        <li>Material UI</li>
        <li>Dbdesigner</li>
        <li>Figma</li>
        <li>Trello</li>
        <h3></h3>
      </div>
    </div>
  );
}

export default AboutPage;
