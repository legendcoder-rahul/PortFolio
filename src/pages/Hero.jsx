import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdArrowForward } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Set initial state
    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(40px)';
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = '0';
      subtitleRef.current.style.transform = 'translateY(40px)';
    }
    if (descRef.current) {
      descRef.current.style.opacity = '0';
      descRef.current.style.transform = 'translateY(40px)';
    }
    if (buttonsRef.current) {
      Array.from(buttonsRef.current.children).forEach((child) => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(20px)';
      });
    }

    // Animate in sequence
    const timeline = gsap.timeline();
    
    timeline
      .to(titleRef.current, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
      }, 0)
      .to(subtitleRef.current, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
      }, 0.15)
      .to(descRef.current, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
      }, 0.3)
      .to(buttonsRef.current?.children || [], {
        duration: 0.6,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: 'power3.out',
      }, 0.5);

    return () => timeline.kill();
  }, []);

  return (
    <div
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-start overflow-hidden pt-24 md:pt-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl w-full">
        {/* Main Title */}
        <div ref={titleRef} className="mb-6">
          <p className="text-xs md:text-sm uppercase tracking-widest text-blue-400 mb-4 font-semibold">
            EMAIL — PORTFOLIO 2026
          </p>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-tight">
            <span className="text-white">CREATIVE</span>
            <br />
            <span className="text-white">DEVELOPER</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-500 mb-8">
            BUILDING THE WEB'S<br />FUTURE
          </h2>
        </div>

        {/* Description */}
        <div ref={descRef} className="max-w-2xl mb-12">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Architecting immersive digital experiences through the fusion of high-end aesthetics and high-performance engineering. Specialized in the MERN stack.
          </p>
        </div>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 md:py-4 md:px-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            <span>Explore Work</span>
            <MdArrowForward className="w-5 h-5" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-3 md:py-4 md:px-10 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <svg
          className="w-6 h-6 text-gray-600 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
