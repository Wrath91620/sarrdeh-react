// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './Pages/Homepage';
import Services from './Pages/Services';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          {/* 
            Uncomment and add these pages in src/Pages when ready:
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/consult" element={<Consult />} />
          */}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
