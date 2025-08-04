import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Consult from './Pages/Consult';

console.log('✅ App.js rendered');

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consult" element={<Consult />} />
      </Routes>
    </Router>
  );
}
