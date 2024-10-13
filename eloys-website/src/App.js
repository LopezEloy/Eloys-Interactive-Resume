import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar'; // Import Sidebar component
import AboutMe from './components/AboutMe'; // Import AboutMe component
import Introduction from './components/Introduction'; // Import Introduction component
import ResumePage from "./components/Resume";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Introduction /> {/* Introduction component */}

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
