import React from 'react';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left: decorative image/background */}
          <div className="col-md-6 cta-image" />

          {/* Right: heading, text, button */}
          <div className="col-md-6 cta-content text-white text-right">
            <h2 className="cta-title">
                Do you have an <span className='text-teal'>idea</span>?
            </h2>
            <p className="cta-description">
              Book a <span className='text-teal'>Free Consultation</span> and let our team draw you a roadmap to turn your idea into reality.
            </p>
            <a href="/contact-us" className="banner-btn banner-btn-text">
                Book A Free Consultation
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
