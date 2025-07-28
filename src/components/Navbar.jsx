import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar py-3 fixed-top">
      <div className="container header d-flex align-items-center justify-content-between" style={{ minHeight: 60 }}>
        {/* CTA Button */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', minWidth: 180, marginRight: 24 }}>
          <a href="/consult" className="read-more-btn" style={{ textDecoration: 'none', width: '100%', color: '#57b2b6', backgroundColor: 'white', padding: '10px' }}>
            Free Consultation
          </a>
        </div>

        {/* Nav Links - flex-grow to center */}
        <div style={{ flex: '1 1 0', display: 'flex', justifyContent: 'center' }}>
          <ul className="navbar-nav flex-row" style={{ gap: 24, alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
            <li className="nav-item">
              <a href="/" className="nav-top-link text-decoration-none text-white">Home</a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-top-link text-decoration-none text-white">Services</a>
            </li>
            <li className="nav-item">
              <a href="/portfolio" className="nav-top-link text-decoration-none text-white">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="/about-us" className="nav-top-link text-decoration-none text-white">About Us</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-top-link text-decoration-none text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', marginLeft: 24 }}>
          <a className="navbar-brand" href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/Logo-sarrdeh-react.png" alt="SarrdehTech" height="40" />
          </a>
        </div>
      </div>
    </nav>
  );
}
