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
          <img style={{ width: '100%', height: 'auto', display: 'block' }} src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop" alt="Project 1 Mockup" />
        </div>
        <div style={{ padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Social / Mobile app</span>
            <span className="serif-heading" style={{ fontSize: '3rem', color: 'var(--text-muted)', opacity: 0.5 }}>01</span>
          </div>
          <h3 className="serif-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Axon podcast</h3>
          <p className="about-desc">
            Axon podcast is a podcast iOS and Android application exclusively for internal use within 
            Axon IT company. With a user-friendly interface and high-quality content created by experienced 
            employees and special guests, employees can listen to a wide range of topics related to the IT 
            industry and others.
          </p>
        </div>
      </div>

      {/* Project 02 */}
      <div className="about-grid project-row" style={{ gap: '2rem', marginBottom: '8rem' }}>
        <div style={{ padding: '0 2rem', order: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>HR & Recruitment / Web app</span>
            <span className="serif-heading" style={{ fontSize: '3rem', color: 'var(--text-muted)', opacity: 0.5 }}>02</span>
          </div>
          <h3 className="serif-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Axterior</h3>
          <p className="about-desc">
            Axterior is a recruitment SaaS platform that allows companies and individuals to source, manage 
            and hire the best talent in less time and with little effort to grow their talent pools, and improve 
            their ROI on recruitment.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <h4 className="serif-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Challenges</h4>
            <ol style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.9rem' }}>
              <li>Identification of user needs and improvement or addition to the current functionality;</li>
              <li>Redesign of the existing functionality;</li>
              <li>Testing the implementation after developers;</li>
              <li>Development of a design system;</li>
              <li>Creation of documentation for it;</li>
              <li>Create design for the web app, admin panel, emails, and chrome extension;</li>
              <li>Collaborate with Grafic designer.</li>
            </ol>
          </div>
        </div>
        <div style={{ order: 2, position: 'relative' }}>
          <div className="accent-flower-outline" style={{ bottom: '-30px', left: '-30px', width: '80px', height: '80px' }}></div>
          <div style={{ borderRadius: '500px 500px 20px 20px', overflow: 'hidden', aspectRatio: '1/1', background: '#333' }}>
             <img style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" alt="Project 2 Mockup" />
          </div>
        </div>
      </div>

      {/* Project 03 */}
      <div className="about-grid project-row" style={{ gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ position: 'relative' }}>
          <div className="accent-flower-outline" style={{ top: '-30px', right: '-30px', width: '80px', height: '80px' }}></div>
          <div style={{ borderRadius: '500px 500px 20px 20px', overflow: 'hidden', aspectRatio: '1/1', background: '#333' }}>
             <img style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Project 3 Mockup" />
          </div>
        </div>
        <div style={{ padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Real state / Web & Mobile app</span>
            <span className="serif-heading" style={{ fontSize: '3rem', color: 'var(--text-muted)', opacity: 0.5 }}>03</span>
          </div>
          <h3 className="serif-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Taskpod</h3>
          <p className="about-desc">
            Taskpod is an application exclusively for internal use within the company. With a user-friendly 
            interface and high-quality content created by experienced employees, users can manage real estate tasks efficiently.
          </p>
        </div>
      </div>

    </section>
  );
}
