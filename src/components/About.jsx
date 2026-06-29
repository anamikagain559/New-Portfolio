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
            Hello, <br /> my name is Anamika,
          </h2>
          <p className="about-desc">
            Crafting high-performance digital experiences with modern web technologies. Specialized in building scalable applications with elegant architectures. I enjoy blending my tech curiosity with a passion for robust software engineering.
          </p>
          <div className="tools-list">
            <span className="tool-item">React.js</span>
            <span className="tool-item">Node.js</span>
            <span className="tool-item">MongoDB</span>
            <span className="tool-item">Tailwind CSS</span>
          </div>
          <p className="about-desc">
            My passion for programming didn't happen overnight. I have completed my Bachelor's degree in Computer Science and Engineering at Bangabandhu Sheikh Mujibur Rahman Science and Technology University. Gradually, I realized that my calling lies in crafting intuitive and scalable applications that solve real-world problems.
          </p>
        </div>
        <div className="arch-wrapper" ref={imgRef}>
          <div className="accent-flower-outline" style={{ top: '-40px', right: '-40px', width: '120px', height: '120px' }}></div>
          <img className="arch-img" src="https://i.ibb.co/1b4b32G/DSC-0095-copyd.jpg" alt="Anamika Gain" />
        </div>
      </div>
    </section>
  );
}
