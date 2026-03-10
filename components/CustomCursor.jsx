'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 900) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mx = 0, my = 0, fx = 0, fy = 0;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };
    document.addEventListener('mousemove', onMove, { passive: true });

    const hoverTargets = 'a, button, .expertise-card, .service-item, .industry-card, .tl-card, .credential-card';
    const onOver = (e) => { if (e.target.closest(hoverTargets)) { cursor.classList.add('hovering'); follower.classList.add('hovering'); } };
    const onOut = (e) => { if (e.target.closest(hoverTargets)) { cursor.classList.remove('hovering'); follower.classList.remove('hovering'); } };
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    let rafId;
    const animate = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef} id="cursor"></div>
      <div className="custom-cursor-follower" ref={followerRef} id="cursor-follower"></div>
    </>
  );
}
