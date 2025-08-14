import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Journey from '../components/Journey.jsx';
import Threads from '../components/Backgrounds/Threads/Threads.jsx';
import LightRays from '../components/LightRays';
import Particles from '../components/Particles';
import StarBorder from '../components/Animations/StarBorder/StarBorder.jsx';
import BlurText from '../components/TextAnimations/BlurText/BlurText.jsx';

export default function AboutUs() {
  const journeySteps = [
    {
      number: '01',
      title: 'Custom Consultation',
      description:
        'We begin with a session to understand your idea, needs, and goals in detail.',
    },
    {
      number: '02',
      title: 'Planning & Strategy',
      description:
        'We analyze your project and lay out a clear marketing and technical roadmap.',
    },
    {
      number: '03',
      title: 'Execution',
      description:
        'We carry out the plans efficiently according to a precise timeline and high-quality standards.',
    },
    {
      number: '04',
      title: 'Evaluation & Improvement',
      description:
        'We monitor results, analyze performance, and suggest enhancements to ensure continued success.',
    },
  ];
  return (
    <div className="hero" id='hero'>
      <Navbar />
      <section className="services-section" style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '160%',
          height: '160%',
          position: 'absolute',
          top: '-30%',
          left: '-30%',
          zIndex: 1,
          overflow: 'visible'
        }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        {/* Light Rays - z-index: 2 */}
        <div style={{
          position: 'absolute',
          top: '-30%',
          left: '-30%',
          width: '160%',
          height: '160%',
          zIndex: 2,
          overflow: 'visible'
        }}>
          <LightRays raysColor="#57B2B6" />
        </div>

        {/* Text Content - z-index: 3 */}
        <div className="container text-center paddin-section" style={{ position: 'relative', zIndex: 3 }}>
          <h1 className="banner-font">
            Who we <span style={{ color: '#57b6b2' }}>Are</span>
          </h1>


          <div className="col-12 d-flex align-content-center justify-content-center p-3" style={{ justifySelf: "center" }}>
            <BlurText
              text={
                "At SarrdehTech, we believe that true success starts with deep understanding, precise execution, and long-term partnership.|br|" +
                "We don’t just deliver digital services — we craft integrated experiences that express your brand’s soul, strengthen its presence, and drive growth in the right direction.|br|" +
                "With a specialized team that blends creativity, technology, and strategy, we offer solutions across:|br|" +
                "Website and app design & development, UI/UX design, branding and visual identity, paid media management, search engine optimization (SEO), and digital content strategy.|br|" +
                "We collaborate closely with clients across sectors to be their trusted digital partner — one that drives impact, leads change, and keeps pace with a dynamic market.|br|" +
                "Welcome to SarrdehTech — where creativity knows no limits, and success is the only way."
              }
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={() => { }}
              className="text-2xl mb-8 justify-content-center align-items-center"
              highlightWords={['SarrdehTech']}
              lineBreakTokens={['|br|']}
            />
          </div>
          {/* <StarBorder color='#57b6b2' speed='5s'
            href="/contact-us"
            style={{ textDecoration: 'none' }}
          >
            Book Your Free Consultation
          </StarBorder> */}
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <div className="container">
          <h2 className="section-title text-center mb-4">Our Core Values</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="values-box position-relative w-100">
                <div className="text-center mb-3" aria-hidden="true">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <div className="values-box-title text-center">OUR MISSION</div>
                <p className="values-box-text text-center">
                  We empower ambitious businesses by delivering integrated digital solutions that include design, development, and marketing — enhancing their market presence, driving sustainable growth, and leaving a lasting impact.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="values-box position-relative w-100">
                <div className="text-center mb-3" aria-hidden="true">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div className="values-box-title text-center">OUR VISION</div>
                <p className="values-box-text text-center">
                  To become the go-to agency in the region for companies seeking to build strong brands and achieve effective digital transformation, through partnerships built on trust, creativity, and measurable results.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="values-box position-relative w-100">
                <div className="text-center mb-3" aria-hidden="true">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 9 12 22 22 9 12 2" />
                  </svg>
                </div>
                <div className="values-box-title text-center">OUR PASSION</div>
                <p className="values-box-text text-center">
                  Driven by passion and creativity, we deliver advanced digital solutions. We constantly innovate to help our clients turn their ideas into reality, build their brands, and strengthen their presence in the digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          position: 'relative',
          marginBottom: '40px',
          minHeight: '60vh',
          overflow: 'hidden',
          padding: '60px 0'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Threads
            color={[0.34, 0.71, 0.71]}
            amplitude={0.5}
            distance={0.1}
            enableMouseInteraction={true}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Journey With Us</h2>
          <Journey steps={journeySteps} />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2>Why Choose Sarrdeh</h2>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>Over 8 Years of Experience</li>
          <li>Implementing Modern and Innovative Out-of-the-Box Strategies</li>
          <li>We Always Keep You Ahead of the Competition</li>
        </ul>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2>Contact Us</h2>
        <p>
          Got an idea? Let us help you turn it into reality.<br />
          Our specialized design and development team is ready to listen to your needs and deliver innovative tech solutions tailored to your vision.
        </p>
        <div style={{ margin: '20px 0' }}>
          <p><strong>Email:</strong> [email protected]</p>
          <p><strong>WhatsApp:</strong> +963 941524455</p>
          <p><strong>Address:</strong> Al-Karama Avenue, Abu Rummaneh, Damascus, Syria</p>
        </div>
      </section>
    </div>
  );
} 