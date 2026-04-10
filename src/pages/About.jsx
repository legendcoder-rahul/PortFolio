import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text =
  "Welcome to my portfolio! I'm a passionate web developer with a knack for creating dynamic and responsive web applications. With expertise in React, Node.js, and MongoDB, I thrive on turning complex problems into elegant solutions. Explore my projects to see how I bring ideas to life through code.";

export default function ScrollTextAnimation() {
  const paraRef = useRef(null);

  useEffect(() => {
    const para = paraRef.current;
    if (!para) return;

    const letterEls = para.querySelectorAll(".letter");

    const ctx = gsap.context(() => {
      gsap.to(letterEls, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.008,
        scrollTrigger: {
          trigger: para,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1.2,
        },
      });
    }, para);

    return () => ctx.revert();
  }, []);

  const characters = text.split("");

  return (
    <div id="about" className="min-h-screen">

      {/* Animated text section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-[8vw] py-12 sm:py-16 md:py-20">
        <p
          ref={paraRef}
          className="text-white text-[clamp(1.2rem,5vw,2.8rem)] leading-[1.3] sm:leading-relaxed font-light max-w-4xl"
          style={{ wordSpacing: "0px" }}
        >
          {characters.map((char, i) => (
            <span
              key={i}
              className="letter"
              style={{ 
                display: "inline",
                transform: "translateX(30px)", 
                opacity: 0,
                transformOrigin: "left center"
              }}
            >
              {char}
            </span>
          ))}
        </p>
      </section>

    </div>
  );
}