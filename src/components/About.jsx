import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current.children, 
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 80%' }
        }
      );
      
      gsap.fromTo(imgRef.current,
        { y: 100 },
        {
          y: 0, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: imgRef.current, start: 'top 85%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="container section-spacing">
      <div className="about-grid">
        <div ref={textRef}>
          <h2 className="about-title serif-heading">
            Hello, <br /> my name is Lisa,
          </h2>
          <p className="about-desc">
            For 5 years, I've been in this profession, crafting designs for over 40 projects
            catering to medium and large businesses. I enjoy blending my tech curiosity
            with a passion for art and design. Leveraging my creativity and skills, I
            specialize in crafting digital product designs that not only look stunning but
            prioritize user-centricity.
          </p>
          <div className="tools-list">
            <span className="tool-item">Figma</span>
            <span className="tool-item">Photoshop</span>
            <span className="tool-item">Illustrator</span>
            <span className="tool-item">and others.</span>
          </div>
          <p className="about-desc">
            My passion for design didn't happen overnight. For over 1.5 years, I worked as a
            FrontEnd developer after graduating from university with a degree in computer
            technology. Gradually, I realized that my calling lies in crafting intuitive and appealing
            designs that prioritize user needs.
          </p>
        </div>
        <div className="arch-wrapper" ref={imgRef}>
          <div className="accent-flower-outline" style={{ top: '-40px', right: '-40px', width: '120px', height: '120px' }}></div>
          <img className="arch-img" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Lisa placeholder" />
        </div>
      </div>
    </section>
  );
}
