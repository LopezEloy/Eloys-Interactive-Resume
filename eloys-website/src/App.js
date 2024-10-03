import React from 'react';
import LinkedinImg from './LinkedinThumbnail.PNG';
import './App.css';

function App() {
  return (
    <div>
      <div className="introduction">
        Hello, <br />
        I am Eloy Lopez
      </div>

      <div className="welcome">
        Welcome to my website! <br /> {/*Enter lines*/}
        Here I will showcase all my experience <br />
        but first...
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

      <div className="Resume">
        <a href="https://Linkedin.com/in/lopez-eloy/" target="_blank" rel="noopener noreferrer">
          Eloys Resume
          <img src={LinkedinImg} alt="LinkedIn Thumbnail" />
        </a>
      </div>

      <div className="Github">
        <a href="https://Linkedin.com/in/lopez-eloy/" target="_blank" rel="noopener noreferrer">
          Github
          <img src={LinkedinImg} alt="LinkedIn Thumbnail" />
        </a>
      </div>

    </div>
  );
}

export default App;
