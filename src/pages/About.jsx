import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content on scroll
      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
      });

      // Animate image on scroll
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      className="w-full py-20 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
                PHILOSOPHY OF<br />
                <span className="text-blue-400">THE DIGITAL AGE</span>
              </h2>
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              My work is characterized by a relentless focus on the intersection of human intuition and computational precision. I don't just build websites; I curate digital environments that breathe, react, and transcend.
            </p>

            {/* Services */}
            <div className="space-y-6">
              {[
                {
                  title: 'Architecture',
                  description: 'Robust, scalable solutions using MongoDB and Node.js.',
                },
                {
                  title: 'Curation',
                  description: 'Collecting curated UX that prioritizes typography and whitespace.',
                },
              ].map((service, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      {service.title}
                    </h4>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image & Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden h-96 md:h-[500px] bg-gray-800"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>

              {/* Stats Badge */}
              <div className="absolute bottom-8 right-8 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 rounded-xl p-4">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  5+
                </div>
                <p className="text-xs uppercase tracking-widest text-blue-300">
                  YEARS OF CRAFT
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'PROJECTS', value: '25+' },
                { label: 'CLIENTS', value: '15+' },
                { label: 'SATISFACTION', value: '100%' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-black text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
