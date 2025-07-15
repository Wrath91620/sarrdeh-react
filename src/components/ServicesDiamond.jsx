// src/components/ServicesDiamond.jsx
import React from 'react';
import PropTypes from 'prop-types';

const ServicesDiamond = ({
  src,
  alt,
  title,
  size = 160,
  borderWidth = 2,
  borderColor = '#fff',
  className = '',
}) => {
  const wrapperStyle = {
    width: size,
    height: size,
    transform: 'rotate(45deg)',
    transformOrigin: 'center center',
    overflow: 'hidden',
    border: `${borderWidth}px solid ${borderColor}`,
    boxSizing: 'border-box',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    transform: 'rotate(-45deg)',
    display: 'block',
    objectFit: 'cover',
  };

  return (
    <div className={className} style={wrapperStyle}>
      <img
        src={src}
        alt={alt}
        title={title}
        style={imgStyle}
        decoding="async"
      />
    </div>
  );
};

ServicesDiamond.propTypes = {
  /** Image URL */
  src: PropTypes.string.isRequired,
  /** Alt text for accessibility */
  alt: PropTypes.string,
  /** Title attribute on the image */
  title: PropTypes.string,
  /** Width & height of the diamond (px) */
  size: PropTypes.number,
  /** Border thickness (px) */
  borderWidth: PropTypes.number,
  /** Border color */
  borderColor: PropTypes.string,
  /** Optional extra class name(s) (e.g. "diamond1") */
  className: PropTypes.string,
};

ServicesDiamond.defaultProps = {
  alt: '',
  title: '',
  size: 160,
  borderWidth: 2,
  borderColor: '#fff',
  className: '',
};

export default ServicesDiamond;
