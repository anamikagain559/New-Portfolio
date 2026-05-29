import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 50, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <section className="hero-wrapper container">
      <div className="accent-flower-outline" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '350px', height: '350px' }}></div>
      <h3 className="hero-name" style={{ fontWeight: 400 }}>Lisa Karahodina</h3>
      <h1 className="hero-title serif-heading" ref={titleRef}>
        Portfolio
        <span className="accent-star" style={{ top: '30px', right: '-60px' }}>✦</span>
      </h1>
      <div className="hero-footer">
        <span>2024</span>
        <span>UX/UI designer</span>
      </div>
    </section>
  );
}
