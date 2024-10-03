import React from 'react';
import LinkedinImg from './LinkedinThumbnail.PNG';
import './App.css';

function App() {
  return (
    <div>
      <div className="introduction">
        <p>Hello,<br />
        I am Eloy Lopez</p>
      </div>

      <div className="welcome">
        <p> Welcome to my website!<br /> {/*Enter lines*/}
        Here I will showcase all my experience
        but first...
        </p>
      </div>

      <div className="bio">
        <div className="bioHeader">A little about myself</div> 
        <p> {/*for paragraphs*/}
          "I graduated from the University of North Texas (GO MEAN GREEN) with a
          Bachelor's in Mechanical and Energy Engineering"
        </p>
      </div>

      <div className="links">
        <p>Now that you know a little about me,
        what else would you like to see?</p>
      </div>

      <div className="Linkedin">
        <a href="https://Linkedin.com/in/lopez-eloy/" target="_blank" rel="noopener noreferrer">
          Linkedin
          <img src={LinkedinImg} alt="LinkedIn Thumbnail" />
        </a>
      </div>
    </div>
  );
}

export default App;
