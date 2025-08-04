import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBorder from '../components/Animations/StarBorder/StarBorder.jsx';
import BlurText from '../components/TextAnimations/BlurText/BlurText.jsx';
import RippleGrid from '../components/Backgrounds/RippleGrid/RippleGrid.jsx';
import CTA from '../components/CTA.jsx';

export default function Services() {
  const services = [
    {
      id: 'development',
      title: 'Sarrdeh Development',
      description: 'Software services that empower you to enhance your digital presence in today\'s fast-moving tech landscape. We build professional, secure interfaces that highlight your products or services online in an engaging and effective way.',
      features: [
        'Websites',
        'Mobile Applications',
        'E-commerce Stores',
        'Landing Pages',
        'Business Systems'
      ],
      accent: '#57B6B2'
    },
    {
      id: 'creative',
      title: 'Sarrdeh Creative',
      description: 'Design services that let you showcase your brand in a distinctive style, amplifying its impact in the eyes of your customers. With attractive, thoughtfully crafted visuals, you can convey your marketing messages in an effective visual language that captures attention and leaves a memorable impression of your work.',
      features: [
        'Visual Identities',
        'UI/UX Design',
        'Social Media Posts',
        'Print Materials',
        'Motion Graphics & Video Editing',
        'Presentations'
      ],
      accent: '#FFD100'
    },
    {
      id: 'marketing',
      title: 'Sarrdeh Marketing',
      description: 'Services that make it easier to reach your target audience, strengthen your brand\'s visibility, and thereby boost sales. By leveraging professional, well-studied marketing strategies, these services guarantee your message is delivered in the best light and at the perfect time.',
      features: [
        'Paid Advertising Campaign Management',
        'Content Marketing',
        'Email & WhatsApp Marketing',
        'Search Engine Optimization (SEO)',
        'Marketing Strategy Development',
        'Social Media Account Management'
      ],
      accent: '#F32735'
    },
    {
      id: 'care',
      title: 'Sarrdeh Care',
      description: 'Support, analysis, and management services that keep you informed of every development in your business and provide data-driven strategic consulting. Through continuous monitoring and comprehensive market analysis, these services ensure the right solutions are implemented and guide your project optimally to achieve satisfying results.',
      features: [
        'Marketing Strategies',
        'Hosting, Domain & Email Services',
        'Technical Support & Development Services',
        'Technical Strategies'
      ],
      accent: '#1E6390'
    }
  ];

  return (
    <div className="hero" id='hero'>
      <Navbar />
      
      {/* Hero Section */}
      <section className="services-section" style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Full Width RippleGrid Background */}
        <div style={{
          width: '100vw',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          overflow: 'hidden'
        }}>
          <RippleGrid
            enableRainbow={false}
            gridColor="#57B6B2"
            rippleIntensity={0.03}
            gridSize={8.0}
            gridThickness={12.0}
            fadeDistance={1.2}
            vignetteStrength={1.5}
            glowIntensity={0.15}
            opacity={0.8}
            gridRotation={0}
            mouseInteraction={true}
            mouseInteractionRadius={1.5}
          />
        </div>

        {/* Content */}
        <div className="container text-center" style={{ position: 'relative', zIndex: 3 }}>
          <h1 className="banner-font mb-4">
            <span style={{ color: '#57b6b2' }}>Our Services</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <BlurText
                text="From here, you can get a website designed specifically for you that reflects your identity, launch smart marketing campaigns that achieve the highest conversion rates, by identifying your project's needs and implementing modern strategies that keep you always ahead of the competition."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-xl mb-5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className="mb-5">
              <div className="row align-items-center">
                {/* Service Content - Alternates between left and right */}
                <div className={`col-lg-6 mb-4 mb-lg-0 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                  <div className="service-content">
                    <h2 className="section-names mb-4" style={{ color: service.accent }}>
                      {service.title}
                    </h2>
                    <p className="banner-par mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="features-list">
                      <h4 className="mb-3" style={{ color: service.accent }}>Creation and Development:</h4>
                      <div className="list-unstyled">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="mb-2 align-items-center bordered-pill">
                            <span style={{ fontSize: '1rem' }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Visual - Alternates between right and left */}
                <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                  <div className="service-visual">
                    <div 
                      className="service-image-container"
                      style={{
                        width: 'calc(100% + 50vw)',
                        height: '400px',
                        borderRadius: index % 2 === 0 ? '500px 0 0 500px' : '0 500px 500px 0',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        marginLeft: index % 2 === 1 ? '0' : 'auto',
                        marginRight: index % 2 === 0 ? '0' : 'auto',
                        transform: index % 2 === 1 ? 'translateX(-50vw)' : 'translateX(0)'
                      }}
                    >
                      <img 
                        src={`/images/${service.id}-service.webp`}
                        alt={`${service.title} Service`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          e.target.style.background = `linear-gradient(135deg, ${service.accent}20, ${service.accent}40)`;
                          e.target.style.display = 'flex';
                          e.target.style.alignItems = 'center';
                          e.target.style.justifyContent = 'center';
                          e.target.style.fontSize = '3rem';
                          e.target.style.color = service.accent;
                          e.target.style.fontWeight = 'bold';
                          e.target.src = '';
                          e.target.alt = '';
                          e.target.textContent = service.id === 'development' ? '💻' : 
                                                 service.id === 'creative' ? '🎨' : 
                                                 service.id === 'marketing' ? '📈' : '🛠️';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5 p-0">
        <CTA />
      </section>


      <Footer />
    </div>
  );
} 