// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5" style={{ borderTop: '0.2px solid #FFF' }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Social & Copy */}
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <div className="mb-3">
              <a href="#" className="me-3 text-white">
                <img src='images/facebook.svg' alt='Facebook'/>
              </a>
              <a href="#" className="me-3 text-white">
                <img src='images/instagram.svg' alt='instagram'/>
              </a>
              <a href="#" className="me-3 text-white">
                <img src='images/tiktok.svg' alt='tiktok' />
              </a>
              <a href="#" className="text-white">
                <img src='images/linkedin.svg' alt='linkedin'/>
              </a>
            </div>
            <p className="opacity-50 mb-0">
              © 2025 SarrdehTech All Rights Reserved
            </p>
          </div>

          {/* Logo */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <img src="/images/logo.png"
              alt="Sarrdeh Tech Logo"
              className="img-fluid"
              style={{ maxWidth: '100px' }} />
          </div>

          {/* Contact & Links */}
          <div className="col-md-4 text-center text-md-end">
            <p className="mb-2">
              <i className="fas fa-phone-alt me-2" />
              <a href="tel:+963941524455" className="text-white text-decoration-none">
                +963 941524455
              </a>
            </p>
            <p className="mb-2">
              <i className="fab fa-whatsapp me-2" />
              <a href="https://wa.me/963941524455" className="text-white text-decoration-none">
                +963 941524455
              </a>
            </p>
            <p className="mb-3">
              <i className="fas fa-envelope me-2" />
              <a href="mailto:info@sarrdeh-tech.com" className="text-white text-decoration-none">
                info@sarrdeh-tech.com
              </a>
            </p>

            <div>
              <a href="#" className="footer-text-links">
                Privacy Policy              </a>
              <a href="#" className="footer-text-links">
                FAQ              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
