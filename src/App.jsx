import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import CV from './components/CV';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Lenis smooth scroll setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <div className="bg-lines">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200C300 100 800 400 1500 100" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
          <path d="M-100 600C400 800 1000 300 1500 500" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
          <path d="M-100 900C200 900 600 700 1500 800" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <Header />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <CV />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
