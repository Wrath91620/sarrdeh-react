import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar py-3 fixed-top">
      <div className="container header d-flex align-items-center justify-content-between" style={{ minHeight: 60 }}>
        {/* CTA Button */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', minWidth: 180, marginRight: 24 }}>
          <Link to="/consult" className="read-more-btn" style={{ textDecoration: 'none', width: '100%', color: '#57b2b6', backgroundColor: 'white', padding: '10px' }}>
            Free Consultation
          </Link>
        </div>

        {/* Nav Links - flex-grow to center */}
        <div style={{ flex: '1 1 0', display: 'flex', justifyContent: 'center' }}>
          <ul className="navbar-nav flex-row" style={{ gap: 24, alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
            <li className="nav-item">
              <Link to="/" className="nav-top-link text-decoration-none text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-top-link text-decoration-none text-white">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-top-link text-decoration-none text-white">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-top-link text-decoration-none text-white">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-top-link text-decoration-none text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', marginLeft: 24 }}>
          <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/Logo-sarrdeh-react.png" alt="SarrdehTech" height="40" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
