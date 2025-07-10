// src/components/Journey.jsx
import React from 'react';

export default function Journey({ steps }) {
  return (
    <div className="container">
      <div className="row gy-4 gx-4 justify-content-center align-items-stretch">
        {steps.map((step, i) => (
          <div key={i} className="journey-col col-12 col-md-6 col-lg-3 d-flex flex-column">
            <p className="big-number">{step.number}</p>
            <div className="glass-box flex-fill">
              <p className="big-text">{step.title}</p>
              <p className="small-text">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
