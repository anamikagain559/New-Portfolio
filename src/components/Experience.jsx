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
            <p>Designing complex web and mobile interfaces for B2C, B2B, SaaS, and CRM.</p>
          </div>
          <div className="exp-item cv-item">
            <p>Creating wireframes, prototypes, and high-fidelity mockups.</p>
          </div>
          <div className="exp-item cv-item">
            <p>Collaborating with developers and testing implementation.</p>
          </div>
        </div>
        <div>
          <div className="exp-item cv-item">
            <p>Adaptive design.</p>
          </div>
          <div className="exp-item cv-item">
            <p>Creating and maintaining design systems.</p>
          </div>
          <div className="exp-item cv-item">
            <p>Redesigning or improving designs.</p>
          </div>
        </div>
      </div>

      <div className="about-grid" style={{ marginTop: '8rem' }}>
        <div className="arch-wrapper">
          <img className="arch-img" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop" alt="Dog placeholder" />
        </div>
        <div>
          <h2 className="serif-heading" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '2rem' }}>
            <span className="accent-star" style={{ position: 'relative', top: '-10px', left: '-20px' }}>✦</span>
            Some more
          </h2>
          <p className="about-desc">
            My strong personal qualities include being easygoing, cheerful, and goal-oriented. 
            My true passions are yoga and dancing. I'm open to new knowledge and opportunities, 
            love reading educational books, and constantly strive for self-improvement.
          </p>
          <p className="about-desc">
            Recently, I became the happy owner of a small redhead terrier girl with a gentle 
            and sociable character. I adore walking together and spending time with her. 
            Watching my dog reminds me that <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>life is about the moment — it's here and now, and each new day is an opportunity to write a unique and unforgettable story.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
