import React from 'react';

/**
 * A single “pin” on the world map.
 *
 * @param {{ 
 *   coords: { t: string, l: string },
 *   country: string,
 *   flagUrl: string,
 *   link: string,
 *   ariaLabel: string,
 *   projects: { logoUrl: string, title: string, location: string }[]
 * }} props
 */
export default function MapMarker({
  coords,
  country,
  flagUrl,
  link,
  ariaLabel,
  projects,
}) {
  return (
    <div
      className="marker"
      style={{ '--t': coords.t, '--l': coords.l }}
    >
      <a
        href={link}
        className="marker-link"
        aria-label={ariaLabel}
      ></a>

      <div className="tooltip">
        <h3>
          <img
            src={flagUrl}
            alt={country}
            className="flag-icon"
            loading="lazy"
          />
          {country}
        </h3>

        <ul className="projects">
          {projects.map((p, j) => (
            <li key={j}>
              <img
                src={p.logoUrl}
                alt={p.title}
                loading="lazy"
              />
              <div className="info">
                <p className="title">{p.title}</p>
                <p className="location">{p.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
