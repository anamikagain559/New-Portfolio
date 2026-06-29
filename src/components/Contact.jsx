import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="container section-spacing" style={{ marginBottom: '4rem' }}>
      <div className="contact-container" ref={containerRef}>
        <div>
          <h2 className="serif-heading" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '2rem' }}>
            Have a project in mind?<br />
            Let's build something<br />
            amazing together.
          </h2>
          <div style={{ position: 'relative', paddingLeft: '4rem', marginTop: '4rem' }}>
            <div className="accent-flower-outline" style={{ top: '-30px', left: '-20px', width: '80px', height: '80px' }}></div>
            <p className="about-desc" style={{ fontSize: '0.9rem' }}>
              Whether you need a full-stack web application, a dynamic frontend, or a robust backend architecture, I'm here to help bring your ideas to life. Let's collaborate!
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="serif-heading" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Say hello</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" className="form-input" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" className="form-input" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-input" placeholder="Thoughts" />
            </div>
            <button className="btn-primary">Let's cooperate</button>
          </form>
        </div>
      </div>
    </section>
  );
}
