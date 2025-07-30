import React from 'react';
import StarBorder from './Animations/StarBorder/StarBorder.jsx';

const CTA = ({ 
  title = "Have a project in the idea stage?",
  subtitle = "Take advantage of our free consultation to develop your idea, and let our team help you map out a plan and turn your concept into a successful, real-world project.",
  buttonText = "Book a Free Consultation",
  buttonLink = "/contact-us",
  backgroundImage = "/images/cta-man.png", // CTA background image
  className = ""
}) => {
  return (
    <section className={`cta-section  ${className}`} style={{ 
      position: 'relative',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Gradient Background */}
      <div 
        className="cta-gradient"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, #0a2a2a 0%, #000000 100%)',
          zIndex: 0
        }}
      />
      
      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8">
            <h2 className="cta-title mb-4" style={{ 
              color: '#fff', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '1.5rem'
            }}>
              Have a <span style={{ color: '#57b6b2' }}>project</span> in the idea stage?
            </h2>
            
            <p className="cta-subtitle mb-5" style={{ 
              color: '#fff', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              {subtitle}
            </p>
            
            <StarBorder 
              href={buttonLink}
              color='#57b6b2' 
              speed='5s'
              style={{
                textDecoration: 'none'
              }}
            >
              {buttonText}
            </StarBorder>
          </div>
          
          <div className="col-lg-6 col-md-4 d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>
            {/* Light effect behind the man's head */}
            <div 
              style={{
                position: 'absolute',
                width: '136px',
                height: '136px',
                background: '#57B6B2',
                filter: 'blur(100px)',
                left: '35%',
                top: '15%',
                zIndex: 0
              }}
            />
            
            <img 
              src={backgroundImage}
              alt="CTA Man"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
                transform: 'scaleX(-1)',
                transformOrigin: 'center',
                position: 'relative',
                zIndex: 2
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 