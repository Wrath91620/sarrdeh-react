// src/components/Services.jsx
import React from 'react';
import ServicesCard from './Servicescard';

export default function Services({ cards }) {
  return (
<div className="row gx-3 gy-3 justify-content-center align-items-stretch">
        {cards.map((c, i) => (
        <ServicesCard
          key={i}
          title={c.title}
          text={c.text}
          accent={c.accent}
        />
      ))}
    </div>
  );
}
