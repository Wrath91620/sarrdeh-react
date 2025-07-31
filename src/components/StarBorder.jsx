import React, { useState } from 'react';

const StarBorder = ({ 
  children, 
  onClick, 
  className = '', 
  style = {}, 
  color = '#57B6B2',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`star-border-button ${className}`}
      style={{
        position: 'relative',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '12px 24px',
        fontSize: '16px',
        color: 'white',
        overflow: 'hidden',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        ...style
      }}
      {...props}
    >
      {/* Star border effect */}
      <div 
        className="star-border-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: `2px solid ${color}`,
          borderRadius: '8px',
          opacity: isHovered ? 1 : 0.3,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none'
        }}
      />
      
      {/* Animated stars */}
      <div className="stars-container" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: color,
              borderRadius: '50%',
              animation: `twinkle 2s infinite ${i * 0.25}s`,
              opacity: isHovered ? 1 : 0.3,
              transform: isHovered ? 'scale(1.2)' : 'scale(1)',
              transition: 'all 0.3s ease',
              left: `${10 + (i * 10)}%`,
              top: `${15 + (i * 8)}%`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>


    </button>
  );
};

export default StarBorder; 