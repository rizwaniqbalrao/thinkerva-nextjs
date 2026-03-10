'use client';
import { useEffect, useState } from 'react';

export default function Preloader({ onDone }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      if (onDone) onDone();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div id="preloader" className={hidden ? 'hidden' : ''}>
      <div className="preloader-inner">
        <div className="preloader-logo">T</div>
        <div className="preloader-bar">
          <div className="preloader-fill"></div>
        </div>
        <div className="preloader-brand">thinkerva.com</div>
      </div>
    </div>
  );
}
