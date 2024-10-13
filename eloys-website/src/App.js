import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar'; // Import Sidebar component
import AboutMe from './components/AboutMe'; // Import AboutMe component
import ResumePage from "./components/Resume";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        
        <div className="introduction">
          Hey there! <br />
          I'm Eloy Lopez <br />
          Welcome to my React-folio!
        </div>

        <div className="shortBio">
          Here I will showcase the experience I've gained
          throughout my time at The University of North Texas
          up until my current career! Enjoy!
        </div>

        <Sidebar /> {/* Sidebar component */}

        <AboutMe /> {/* Aboutme component */}

        <Routes>
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
