// src/pages/Homepage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Bubble from '../components/Bubble';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ReadMoreBtn from '../components/ReadMoreBtn';
import Journey from '../components/Journey';
import LogoSlider from '../components/LogoSlider';
import WorldMap from '../components/WorldMap';
import StarBorderButton from '../components/StarBorderButton';
import LightRays from '../components/LightRays';
import Particles from '../components/Particles';


export default function Homepage() {
  // 1) Declare your stats array inside the function
  const stats = [
    { count: '225+', label: 'Visual Identity' },
    { count: '180+', label: 'Marketing Strategy' },
    { count: '135+', label: 'Technical Project' },
    { count: '8+', label: 'Experience Years' },
  ];
  const serviceCards = [
    {
      title: 'Sarrdeh Care',
      text: 'Support, analysis, and management services that keep you informed of every development in your business and provide data-driven strategic consulting. Through continuous monitoring and comprehensive market analysis, these services ensure the right solutions are implemented and guide your project optimally to achieve satisfying results.',
      accent: '#57B6B2',
    },
    {
      title: 'Sarrdeh Marketing',
      text: 'Services that make it easier to reach your target audience, strengthen your brand’s visibility, and thereby boost sales. By leveraging professional, well-studied marketing strategies, these services guarantee your message is delivered in the best light and at the perfect time.',
      accent: '#FFD100',
    },
    {
      title: 'Sarrdeh Creative',
      text: 'Design services that let you showcase your brand in a distinctive style, amplifying its impact in the eyes of your customers. With attractive, thoughtfully crafted visuals, you can convey your marketing messages in an effective visual language that captures attention and leaves a memorable impression of your work.',
      accent: '#F32735',
    },
    {
      title: 'Sarrdeh Development',
      text: 'Software services that empower you to enhance your digital presence in today’s fast-moving tech landscape. We build professional, secure interfaces that highlight your products or services online in an engaging and effective way.',
      accent: '#1E6390',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Custom Consultation',
      description: 'We begin with a session to understand your idea, needs, and goals in detail.',
    },
    {
      number: '02',
      title: 'Planning & Strategy',
      description: 'We analyze your project and lay out a clear marketing and technical roadmap.',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We carry out the plans efficiently according to a precise timeline and high-quality standards.',
    },
    {
      number: '04',
      title: 'Evaluation & Improvement',
      description: 'We monitor results, analyze performance, and suggest enhancements to ensure continued success.',
    },
  ];

  const logos = [
    '/images/Atlas-logo-01_result.webp',
    '/images/A-Z-logo-01_result.webp',
    '/images/bliss-logo-01_result.webp',
    '/images/Cayan-group-logo-01_result.webp',
    '/images/DD-logo-01_result.webp',
    '/images/Eat-wise-logo-01_result.webp',
    '/images/emtc-logo-01_result.webp',
    '/images/invest-for-you-logo-01_result.webp',
    '/images/lamaso-ogo-01_result.webp',
    '/images/megsult-01_result-300x295.webp',
    '/images/oppolia-logo-01_result-300x200.webp',
    '/images/emtc-logo-01_result.webp',
    '/images/Sevra-logo-01_result-300x72.webp',
    '/images/Safahat-logo-01_result-162x300.webp',
  ]





  const markers = [
    {
      coords: { t: '28%', l: '18%' },
      country: 'Canada',
      flagUrl: '/images/Canada-CA.svg',
      link: '/projects/',
      ariaLabel: 'Canada - Corporate Stays',
      projects: [
        {
          logoUrl: '/images/corporate-stays-logo_result.webp',
          title: 'Corporate Stays',
          location: 'Toronto',
        },
      ],
    },
    {
      coords: { t: '42%', l: '21%' },
      country: 'United States of America',
      flagUrl: '/images/United States of America-US.svg',
      link: '/projects/',
      ariaLabel: 'USA - Duke & Duchess',
      projects: [
        {
          logoUrl: '/images/DD-logo-01_result.webp',
          title: 'Duke & Duchess',
          location: 'New York',
        },
      ],
    },
    {
      coords: { t: '42.5%', l: '58.7%' },
      country: 'Syria',
      flagUrl: '/images/Syria-SY.svg',
      link: '/projects/',
      ariaLabel: 'سوريا - سيفرا و سكوبي',
      projects: [
        {
          logoUrl: '/images/Sevra-logo-01_result.webp',
          title: 'Sevra',
          location: 'Damascus',
        },
        {
          logoUrl: '/images/scooby-logo-01_result.webp',
          title: 'Scooby',
          location: 'Damascus',
        },
      ],
    },
    {
      coords: { t: '49%', l: '63%' },
      country: 'United Arab Emirates',
      flagUrl: '/images/United Arab Emirates-AE.svg',
      link: '/projects/',
      ariaLabel: 'الإمارات - E2E و مجموعة كيان',
      projects: [
        {
          logoUrl: '/images/E2E_result.webp',
          title: 'E2E',
          location: 'Dubai',
        },
        {
          logoUrl: '/images/Cayan-group-logo-01_result.webp',
          title: 'Cayan Group',
          location: 'Dubai',
        },
      ],
    },
    {
      coords: { t: '50%', l: '60.5%' },
      country: 'Saudi Arabia',
      flagUrl: '/images/Saudi Arabia-SA.svg',
      link: '/projects/',
      ariaLabel: 'السعودية - اوبوليا و فريق 1',
      projects: [
        {
          logoUrl: '/images/oppolia-logo-01_result.webp',
          title: 'Oppolia',
          location: 'Riyadh',
        },
        {
          logoUrl: '/images/team-one-logo-01_result.webp',
          title: 'Team 1',
          location: 'Riyadh',
        },
      ],
    },
    {
      coords: { t: '35%', l: '49%' },
      country: 'France',
      flagUrl: '/images/France-FR.svg',
      link: '/projects/',
      ariaLabel: 'فرنسا - Lagardère و BioPharmAnalyses',
      projects: [
        {
          logoUrl: '/images/lagardere-logo.webp',
          title: 'Lagardère',
          location: 'Paris',
        },
        {
          logoUrl: '/images/biopharmanalyses-logo.webp',
          title: 'BioPharmAnalyses',
          location: 'Paris',
        },
      ],
    },
    {
      coords: { t: '25%', l: '52%' },
      country: 'Sweden',
      flagUrl: '/images/Sweden-SE.svg',
      link: '/projects/',
      ariaLabel: 'السويد - ثقافة بلا حدود و صفحات ناشرون وموزعون',
      projects: [
        {
          logoUrl: '/images/thaqafa-logo_result-scaled.webp',
          title: 'ثقافة بلا حدود',
          location: 'Stockholm',
        },
        {
          logoUrl: '/images/Safahat-logo-01_result.webp',
          title: 'صفحات ناشرون وموزعون',
          location: 'Stockholm',
        },
      ],
    },
    {
      coords: { t: '34.5%', l: '50.5%' },
      country: 'Switzerland',
      flagUrl: '/images/Switzerland-CH.svg',
      link: '/projects/',
      ariaLabel: 'سويسرا - DadaDésir',
      projects: [
        {
          logoUrl: '/images/dadadesir-logo_result.webp',
          title: 'DadaDésir',
          location: 'Bern',
        },
      ],
    },
    {
      coords: { t: '61%', l: '76%' },
      country: 'Malaysia',
      flagUrl: '/images/Malaysia-MY.svg',
      link: '/projects/',
      ariaLabel: 'ماليزيا - A-Z Bookstore و Students Hub',
      projects: [
        {
          logoUrl: '/images/A-Z-logo-01_result.webp',
          title: 'A-Z Bookstore',
          location: 'Kuala Lampur',
        },
        {
          logoUrl: '/images/students-hub_result.webp',
          title: 'Students Hub',
          location: 'Kuala Lampur',
        },
      ],
    },
  ];


  // 2) Return your JSX, mapping over stats
  return (
    <div className="hero" id='hero'>
      <Navbar />
      <section className="services-section" style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Particles - z-index: 1 */}
        <div style={{ width: '100%', height: '600px', position: 'absolute', inset: 0, zIndex: 1 }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        
        {/* Light Rays - z-index: 2 */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
          <LightRays raysColor="#57B2B6" />
        </div>
        
        {/* Text Content - z-index: 3 */}
        <div className="container text-center paddin-section" style={{ position: 'relative', zIndex: 3 }}>
          <h1 className="banner-font">
            Nowhere Else but <span style={{ color: '#57b6b2' }}>Success</span>
          </h1>
          <p className="home-banner-subtext">
            Start today and let our <span style={{ color: '#57b6b2' }}>team </span>
            handle the rest.
          </p>
          <StarBorderButton
            href="/contact-us"
            className="banner-btn banner-btn-text"
            style={{ textDecoration: 'none' }}
          >
            Book Your Free Consultation
          </StarBorderButton>
        </div>
      </section>

      <section className="py-5" id='bubble'>
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {stats.map((stat, idx) => (
              // 3) Pass the dynamic props into Bubble
              <Bubble
                key={idx}
                count={stat.count}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section-content relative py-5 values-sec-right values-sec-left " id='sarrdeh in short'>
        {/* Header */}
        <div className="row row-collapse align-equal align-center mb-4">
          <div className="col small-12 large-12">
            <div className="col-inner text-center">
              <h2 className="section-names">
                <span style={{ color: '#57b6b2' }}>Sarrdeh</span> In Short
              </h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="row row-collapse align-middle">

          {/* Image Column */}
          <div className="col img-col medium-6 small-12 large-6">
            <div className="col-inner text-center img-logo">
              <img
                src="images/logo.png"
                alt="SarrdehTech Logo"
                width={165}
                height={292}
                className="img-fluid"
              />
            </div>
          </div>
          {/* Text Column */}
          <div className="col text-col medium-6 small-12 large-6 p-5">
            <div className="col-inner">
              <p className="banner-par mb-3" style={{ padding: 0 }}>
                We are a dedicated <span className='sarrdehTech-par'>team</span> of strategic thinkers, innovative developers,
                and professional designers. We believe that every purpose-driven brand
                has a unique story and remarkable ideas that deserve to be told in detail.
              </p>
              <p className="banner-par" style={{ padding: 0 }}>
                Our mission is to empower your business in a fiercely competitive market
                through advanced marketing strategies, top-tier development expertise,
                and compelling design. Together, we’ll bring our <span className="sarrdehTech-par">vision</span> to life,
                creating meaningful impact and achieving the results you aspire to.
              </p>
            </div>
          </div>


        </div>
      </section>
      <section id='service cards' className="py-5 values-sec-right values-sec-left ">
        <div className="container">
            <Services cards={serviceCards} />
                      <div className="row g-3 justify-content-center align-items-stretch m-5">
            <div className="col-4 d-flex justify-content-center align-items-center">
              <StarBorderButton
                href="/services"
                className="banner-btn banner-btn-text"
                style={{
                  background: 'rgba(87, 178, 182, 0.18)',
                  color: '#fff',
                  padding: '15px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '19px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 12px rgba(87,182,178,0.18)',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 0
                }}
              >
                Read More
              </StarBorderButton>
            </div>

         
          </div>
        </div>
      </section>
      <section
        id="journey"
        className="py-5 journey-row values-sec-right"
      >
        <div className='row justify-content-center align-content-center team-title m-5 '>Your Journey With Us</div>
        <Journey steps={steps} />
      </section>
      <section id='partners' className='py-5'>
        <div className='row justify-content-center align-content-center team-title m-5 '>Partners In Success</div>
        <LogoSlider
          logos={logos}
          slideWidth={150}     // px per logo
          scrollSpeed={80}     // px per second (tweak for desired speed)
        />
      </section>
      <section id='sarrdeh Global' className='py-5'>
        <div className="team-title text-center my-5">
          <h2 className="m-3">
            <span style={{ color: '#57B6B2' }}>Sarrdeh</span>{' '}
            Global
          </h2>
          <p className='services-text text-center'>From Syria to around the world... Our clients on every continent, and our print grows everyday.</p>
        </div>
        <WorldMap markers={markers} />
      </section>


      <Footer />
    </div>
  );
}
