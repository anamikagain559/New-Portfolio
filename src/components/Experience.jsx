import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const wrapperRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".exp-item", 
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: wrapperRef.current, start: 'top 70%' }
        }
      );
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="container section-spacing" ref={wrapperRef}>
      <h2 className="serif-heading" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '4rem' }}>
        <span className="accent-star" style={{ position: 'relative', top: '-20px', left: '-20px' }}>✦</span>
        My experience:
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '8rem' }}>
        <div>
          <div className="exp-item cv-item">
            <p>Developing full-stack web applications using React, Node.js, and Express.</p>
          </div>
          <div className="exp-item cv-item">
            <p>Designing elegant and responsive frontend interfaces using Tailwind CSS and Material UI.</p>
          </div>
          <div className="exp-item cv-item">
            <p>Architecting scalable and secure backend services and APIs.</p>
          </div>
        </div>
        <div>
          <div className="exp-item cv-item">
            <p>Database modeling and management with MongoDB and MySQL.</p>
          </div>
          <div className="exp-item cv-item">
            <p>Implementing seamless authentication using Firebase and JWT.</p>
          </div>
          <div className="exp-item cv-item">
            <p>Collaborating in agile environments and ensuring high-quality code delivery.</p>
          </div>
        </div>
      </div>

      <div className="about-grid" style={{ marginTop: '8rem' }}>
        <div className="arch-wrapper">
          <img className="arch-img" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" alt="Workspace placeholder" />
        </div>
        <div>
          <h2 className="serif-heading" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '2rem' }}>
            <span className="accent-star" style={{ position: 'relative', top: '-10px', left: '-20px' }}>✦</span>
            Some more
          </h2>
          <p className="about-desc">
            My strong personal qualities include being dedicated, adaptable, and highly motivated. 
            I am deeply passionate about continuous learning and exploring new technologies. 
            Whether it's diving into a new JavaScript framework or optimizing database queries, I constantly strive to expand my skillset.
          </p>
          <p className="about-desc">
            Beyond coding, I enjoy engaging with the tech community and contributing to meaningful projects that have a positive impact. 
            I believe that <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>great software is built at the intersection of creativity, logic, and empathy — always keeping the user at the heart of the experience.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
