import React from 'react';
import MapMarker from './MapMarker';

/**
 * @param {{ 
 *   coords: { t: string, l: string },
 *   country: string,
 *   flagUrl: string,
 *   link: string,
 *   ariaLabel: string,
 *   projects: { logoUrl: string, title: string, location: string }[]
 * }[]} markers
 */
export default function WorldMap({ markers }) {
  return (
    <div className="map-container">
      <img
        src="/images/world-map.webp"
        alt="World Map"
        className="world-map"
        loading="lazy"
      />

      {markers.map((m, i) => (
        <MapMarker key={i} {...m} />
      ))}
    </div>
  );
}
