// src/components/StatBubble.jsx
import React from 'react';

export default function Bubble({ count, label }) {
  return (
    <div className="col medium-3 small-6 large-3">
      <div
        className="col-inner text-center"
        style={{ justifySelf: 'center' }} >
        <div className="bubble">
          <span className="count">{count}</span><br />
          <span className="label">{label}</span>
        </div>
      </div>
    </div>
  );
}
