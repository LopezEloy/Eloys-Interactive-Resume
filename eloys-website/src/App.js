import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar'; // Import Sidebar component
import ResumePage from "./components/Resume";
import AboutMe from './components/AboutMe'; // Import AboutMe component
import Introduction from './components/Introduction'; // Import Introduction component
import Experience from './components/Experience'; // Import Experience component
import Projects from './components/Projects';
import './App.css';


function App() {

  useEffect(() => {
    // Scroll to the top when reloading page
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Router>
      <div>
        <Introduction /> {/* Introduction component */}

        <Sidebar /> {/* Sidebar component */}

        <AboutMe /> {/* Aboutme component */}

        <Experience /> {/* Experience component */}

        <Projects /> {/* Projects component */}

        <Routes>
          <Route path="/resume" element={<ResumePage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
