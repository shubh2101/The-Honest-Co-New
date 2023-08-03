import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CustomerContact from './pages/CustomerContact';
import Portfolio from './pages/Portfolio.js';
import Project1 from './components/Portfolio/Project1.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-in-touch" element={<CustomerContact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/project1" element={<Project1 />} />
      </Routes>
    </Router>
  );
}

export default App;

