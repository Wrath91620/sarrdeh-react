import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar  py-3 fixed-top">
    <div className="container d-flex align-items-center justify-content-between header ">
      {/* CTA Button */}
      <a href="/consult" className="read-more-btn" style={{textDecoration: 'none'}}>
        Free Consultation
      </a>

      {/* Nav Links */}
      <ul className="navbar-nav  flex-row mx-4">
        <li className="nav-item mx-2">
          <a href="/" className="nav-top-link text-decoration-none text-white">Home</a>
        </li>
        <li className="nav-item mx-2">
          <a href="/services" className="nav-top-link text-decoration-none text-white">Services</a>
        </li>
        <li className="nav-item mx-2">
          <a href="/portfolio" className="nav-top-link text-decoration-none text-white">Portfolio</a>
        </li>
        <li className="nav-item mx-2">
          <a href="/about-us" className="nav-top-link text-decoration-none text-white">About Us</a>
        </li>
        <li className="nav-item mx-2">
          <a href="/contact" className="nav-top-link text-decoration-none text-white">Contact</a>
        </li>
      </ul>

      {/* Logo */}
      <a className="navbar-brand ms-4" href="/">
        <img src="/images/Logo-sarrdeh-react.png" alt="SarrdehTech" height="40" />
      </a>
    </div>
  </nav>
  );
}
