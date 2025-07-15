// src/components/ServicesHero.jsx
import React from 'react';
import ServicesDiamond from '../components/ServicesDiamond';
import SplashCursor from '../components/SplashCursor';


export default function ServicesHero() {
  const diamonds = [
    {
      id: 'diamond1',
      src: '/public/images/chart.svg',
      alt: 'Analytics Icon',
      title: 'Analytics Service',
    },
    {
      id: 'diamond2',
      src: '/public/images/hand.svg',
      alt: 'SEO Icon',
      title: 'SEO Service',
    },
    {
      id: 'diamond3',
      src: '/public/images/Laptop.svg',
      alt: 'Development Icon',
      title: 'Development Service',
    },
  ];

  return (
    <div className="page-wrapper">
          <SplashCursor/>

      <div className="hero-inner">
        <div className='services-section paddin-section'>
          <div className='col-md-6 col-sm-12'>
            <div className="hero-diamonds justify-content-center">
              {diamonds.map(({ id, src, alt, title }) => (
                <ServicesDiamond
                  key={id}
                  className={`diamond ${id}`}
                  src={src}
                  alt={alt}
                  title={title}
                />
              ))}
            </div>
          </div>
          <div className='col-6 col-sm-12'>
            <h2 className='services-header'>Our Services</h2>
            <p className='services-desc'>Here you can find the website that best suits you and your design
                <br/>fire away your campaigns, execute the best marketing strategies. From identifying your<br/> business needs,
                we can generate the needed approach to keep your business at it's peak.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
