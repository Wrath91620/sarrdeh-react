import React, { useRef, useLayoutEffect, useState } from 'react';

/**
 * StarBorderButton: Animated SVG border that matches button size, styled like ReactBits demo.
 * Props: as ('a' or 'button'), className, style, children, ...rest
 */
export default function StarBorderButton({
  as = 'a',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const Component = as;
  const btnRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const borderRadius = 5; // px, larger for pill shape

  useLayoutEffect(() => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    }
  }, [children]);

  // Default text if children is empty
  const content = (children === undefined || children === null || (typeof children === 'string' && children.trim() === '') || (Array.isArray(children) && children.length === 0))
    ? 'Read More'
    : children;

  // Calculate perimeter for smooth, continuous animation
  const perimeter = 2 * (size.width + size.height - 2 * borderRadius);
  const dashLength = perimeter * 0.15; // Balanced segment length
  const gapLength = perimeter * 0.35; // Balanced gap length
  const dashArray = `${dashLength} ${gapLength}`;

  return (
    <Component
      ref={btnRef}
      className={`star-border-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'visible',
        borderRadius: `${borderRadius}px`,
        background: 'rgba(20, 16, 28, 0.9)',
        color: '#fff',
        fontWeight: 500,
        fontSize: '20px',
        padding: '15px',
        border: 'none',
        textAlign: 'center',
        ...style,
      }}
      {...rest}
    >
      {/* SVG border animation - slightly outside the button for glow */}
      {size.width > 0 && size.height > 0 && (
        <svg
          className="star-border-svg"
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          style={{ position: 'absolute', top: 0, left: 0, width: size.width, height: size.height, pointerEvents: 'none', zIndex: 0, filter: 'drop-shadow(0 0 12px #57B2B6) blur(0.5px)' }}
          aria-hidden="true"
          focusable="false"
        >
          <rect
            x="0" y="0"
            width={size.width}
            height={size.height}
            rx={borderRadius}
            ry={borderRadius}
            fill="none"
            stroke="#57B2B6"
            strokeWidth="1"
            strokeDasharray={dashArray}
            strokeDashoffset="0"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to={-perimeter}
              dur="3s"
              repeatCount="indefinite"
              keyTimes="0;1"
              calcMode="linear"
              begin="0s"
            />
          </rect>
        </svg>
      )}
      {/* Button content */}
      <span style={{ position: 'relative', zIndex: 1, display: 'inline-block', textAlign: 'center' }}>{content}</span>
    </Component>
  );
}
