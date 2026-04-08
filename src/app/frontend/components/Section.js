'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Section() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{ height: '100vh', background: '#111', color: '#fff' }}
    >
      <h1>Scroll Animation</h1>
    </div>
  );
}