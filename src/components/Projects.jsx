import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projects = gsap.utils.toArray('.project-row');
      projects.forEach((proj) => {
        gsap.fromTo(proj,
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: proj, start: 'top 80%' }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="container section-spacing" ref={containerRef}>
      <h2 className="serif-heading" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', marginBottom: '4rem' }}>
        Recent Projects
      </h2>
      
      {/* Project 01 */}
      <div className="about-grid project-row" style={{ gap: '2rem', marginBottom: '8rem' }}>
        <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
          <img style={{ width: '100%', height: 'auto', display: 'block' }} src="https://i.ibb.co.com/HTBSBYrJ/screencapture-restaurant-management-frontend-two-vercel-app-2026-03-29-23-36-54.png" alt="SUNFLOWER Project" />
        </div>
        <div style={{ padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>React Js / MongoDb / Node Js</span>
            <span className="serif-heading" style={{ fontSize: '3rem', color: 'var(--text-muted)', opacity: 0.5 }}>01</span>
          </div>
          <h3 className="serif-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>SUNFLOWER</h3>
          <p className="about-desc">
            A premium, full-stack restaurant management dashboard designed for seamless kitchen operations, guest reservations, and table management. Built with a modern tech stack focused on performance, aesthetics, and real-time data integration.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/anamikagain559/Restaurant-management-project" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>GitHub</a>
            <a href="https://restaurant-management-frontend-two.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--text-color)', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Live App</a>
          </div>
        </div>
      </div>

      {/* Project 02 */}
      <div className="about-grid project-row" style={{ gap: '2rem', marginBottom: '8rem' }}>
        <div style={{ padding: '0 2rem', order: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Next Js / Express / PostgreSql / Prisma</span>
            <span className="serif-heading" style={{ fontSize: '3rem', color: 'var(--text-muted)', opacity: 0.5 }}>02</span>
          </div>
          <h3 className="serif-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Team Hub</h3>
          <p className="about-desc">
            A premium, full-stack collaborative platform designed for high-performance teams to manage goals, announcements, and action items in real-time. Built with a modern aesthetic, robust monorepo architecture, and optimized for performance.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/anamikagain559/Team-Hub.git" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>GitHub</a>
            <a href="https://web-production-12fe.up.railway.app" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--text-color)', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Live App</a>
          </div>
        </div>
        <div style={{ order: 2, position: 'relative' }}>
          <div className="accent-flower-outline" style={{ bottom: '-30px', left: '-30px', width: '80px', height: '80px' }}></div>
          <div style={{ borderRadius: '500px 500px 20px 20px', overflow: 'hidden', aspectRatio: '1/1', background: '#333' }}>
             <img style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} src="https://i.ibb.co.com/Rk2kkN8n/team-hub.png" alt="Team Hub Mockup" />
          </div>
        </div>
      </div>

      {/* Project 03 */}
      <div className="about-grid project-row" style={{ gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ position: 'relative' }}>
          <div className="accent-flower-outline" style={{ top: '-30px', right: '-30px', width: '80px', height: '80px' }}></div>
          <div style={{ borderRadius: '500px 500px 20px 20px', overflow: 'hidden', aspectRatio: '1/1', background: '#333' }}>
             <img style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} src="https://i.ibb.co.com/QjfFnBhQ/screencapture-ecommerce-website-liart-pi-vercel-app-2026-06-26-20-02-27.png" alt="Cove Cafe Mockup" />
          </div>
        </div>
        <div style={{ padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>React Js / Tailwind CSS / Vite</span>
            <span className="serif-heading" style={{ fontSize: '3rem', color: 'var(--text-muted)', opacity: 0.5 }}>03</span>
          </div>
          <h3 className="serif-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Cove Cafe</h3>
          <p className="about-desc">
            A modern, responsive e-commerce web application for a Hawaiian-inspired restaurant. It features a stunning UI with smooth animations, dynamic shopping cart functionality, promotional code validation, and a beautiful product showcase. Built with React and Tailwind CSS, it offers a seamless ordering experience.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/anamikagain559/ecommerce-frontend-design" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>GitHub</a>
            <a href="https://ecommerce-website-liart-pi.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--text-color)', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Live App</a>
          </div>
        </div>
      </div>

    </section>
  );
}
