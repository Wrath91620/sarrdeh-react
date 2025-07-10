// src/components/ReadMoreBtn.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable "Read More" button.
 * 
 * @param {Object} props
 * @param {string} props.href — the URL to navigate to when clicked
 */
export default function ReadMoreBtn({ href }) {
    return (
        <a
            href={href}
            className="read-more-btn mt-4"
            style={{ textDecoration: 'none' }}
        >
           <span>Read More</span> 
        </a>
    );
}

ReadMoreBtn.propTypes = {
    href: PropTypes.string.isRequired,
};
