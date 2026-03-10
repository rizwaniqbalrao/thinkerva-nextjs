'use client';
import { useRef } from 'react';

const items = [
  'Artificial Intelligence', 'Machine Learning', 'Systems Architecture',
  'Digital Transformation', 'Business Strategy', 'Aviation Systems',
  'Automotive & ADAS', 'FinTech & Banking', 'Government Advisory',
  'Product R&D', 'Cloud Infrastructure', 'Embedded Systems',
  'AI Architecture', 'Innovation Consulting', 'Technology Leadership',
  'Artificial Intelligence', 'Machine Learning', 'Systems Architecture',
  'Digital Transformation', 'Business Strategy', 'Aviation Systems',
  'Automotive & ADAS', 'FinTech & Banking', 'Government Advisory',
  'Product R&D', 'Cloud Infrastructure', 'Embedded Systems',
  'AI Architecture', 'Innovation Consulting', 'Technology Leadership',
];

export default function Marquee() {
  const trackRef = useRef(null);

  return (
    <div className="marquee-section">
      <div className="marquee-track" ref={trackRef}>
        <div
          className="marquee-content"
          onMouseEnter={() => { if (trackRef.current) trackRef.current.querySelector('.marquee-content').style.animationPlayState = 'paused'; }}
          onMouseLeave={() => { if (trackRef.current) trackRef.current.querySelector('.marquee-content').style.animationPlayState = 'running'; }}
        >
          {items.map((item, i) => (
            <span key={i}>
              {item} <span className="marquee-dot">●</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
