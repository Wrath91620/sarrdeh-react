import React from 'react';
import Navbar from '../components/Navbar.jsx';

export default function Contact() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <div style={{ 
        padding: '100px 20px', 
        textAlign: 'center', 
        color: 'white',
        backgroundColor: '#1a1a1a',
        minHeight: '100vh'
      }}>
        <h1>Contact Us</h1>
        <p>Get in touch with us. Our contact page is coming soon!</p>
      </div>
    </div>
  );
} 