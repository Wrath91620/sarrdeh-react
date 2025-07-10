import React from 'react';

export default function ServicesCard({ title, text, accent }) {
  return (
     <div className="col-12 col-md-6 col-lg-3 d-flex services-card-home">
      <div className="col-inner flex-fill" style={{ '--accent': accent }}>
        <h2 className="card-headline">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
