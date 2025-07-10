import React, { useMemo } from 'react';

export default function LogoSlider({
  logos,
  slideWidth = 150,   // px per slide
  scrollSpeed = 100,   // px per second
}) {
  // duplicate logos for seamless looping
  const slides = useMemo(() => [...logos, ...logos], [logos]);

  // total width of the flex track
  const trackWidth = slides.length * slideWidth; 
  // compute duration from width and speed
  const duration = trackWidth / scrollSpeed;

  return (
    <div className="slider-home">
      <div
        className="slide-track"
        style={{
          width: `${trackWidth}px`,
          animation: `scroll ${duration}s linear infinite`,
        }}
      >
        {slides.map((url, idx) => (
          <div
            key={idx}
            className="slide"
            style={{ flex: `0 0 ${slideWidth}px` }}
          >
            <img src={url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
