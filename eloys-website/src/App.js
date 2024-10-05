import React from 'react';
import LinkedinIcon from './Linkedin.png';
import './App.css';

function App() {
  return (
    <div>
      <div className="introduction">
        Hey there! <br />{/*for enter lines*/}
        I'm Eloy Lopez <br />
        Welcome to my React-folio! 
      </div>

      <div className="shortBio">
        
          Here I will showcase the experience I've gained
          throughout my time at The University of North Texas
          up until my current career!
          Let's travel!
      </div>

      <div className="menuBackground">
      </div>

      <div className="Linkedin">
        <a href="https://Linkedin.com/in/lopez-eloy/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinIcon} alt="LinkedIn Thumbnail" />
        </a>
      </div>

    </div>
  );
}

export default App;
