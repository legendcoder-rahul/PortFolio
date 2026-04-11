import { useState, useEffect, useRef } from "react";
import resume from '../assets/Resume.pdf';

const ROLES = ["Creative Developer", "UI/UX Designer", "Digital Craftsman", "Motion Artist"];

function useScramble(text, trigger) {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#@$%&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    let interval;
    const totalFrames = 18;

    interval = setInterval(() => {
      frame++;
      setDisplay(
        text.split("").map((char, i) => {
          if (char === " ") return " ";
          if (frame / totalFrames > i / text.length) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (frame >= totalFrames + text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [trigger, text]);

  return display;
}
const handleScroll = (targetId) => {
  const elem = document.getElementById(targetId);
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
const PROJECTS = [
  { num: "01", title: "Nebula OS", tag: "UI Design · Motion", year: "2024" },
  { num: "02", title: "Flux Commerce", tag: "Web Dev · Branding", year: "2024" },
  { num: "03", title: "Aether App", tag: "Product Design", year: "2023" },
];

const SKILLS = ["Html","Css","JavaScript","TypeScript","React","Node.js","Express","MongoDB","GenAI", "Three.js", "GSAP", "Figma", "Next.js", "WebGL", "Framer", "Scss","tailwind Css"];

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [scrambleTrigger, setScrambleTrigger] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => setScrambleTrigger(true), 400);
    }, 200);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setRoleIdx(i => (i + 1) % ROLES.length);
    }, 2500);

    return () => clearInterval(cycle);
  }, []);

  const nameDisplay = useScramble("RAHUL", scrambleTrigger);

  return (
    <div id="hero" className="min-h-screen bg-[#050507] text-[#e8e4d9] font-mono overflow-hidden">

      {/* HERO */}
      <section className="px-6 md:px-12 pt-20 pb-16">

        {/* Role */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
          <span className="text-xs tracking-widest text-gray-500 uppercase">
            {ROLES[roleIdx]}
          </span>
        </div>

        {/* Name */}
        <h1 className={`font-black leading-none text-[clamp(60px,15vw,180px)] transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          {nameDisplay}
        </h1>

        {/* Outline */}
        <h2 className="font-black leading-none text-4xl  stroke-text mb-8">
          software developer & designer
        </h2>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-6">
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
            Every detail we craft carries clarity, intention,
            and quiet confidence. That’s how we design
            and build websites that work — and feel
            right. </p>

          <div className="flex gap-4">
            <button onClick={() => handleScroll('projects')} className="px-6 py-3 bg-lime-400 text-black rounded-full text-xs tracking-widest uppercase hover:shadow-lg hover:shadow-lime-400/40 transition">
              View Work ↗
            </button>

            <a href={resume} download className="px-6 py-3 border border-gray-700 rounded-full text-xs tracking-widest uppercase hover:bg-white/5 transition">
              Resume ↓
            </a>
          </div>
        </div>

      </section>

      {/* STATS */}
      <section className="flex border-t border-gray-800 md:flex-row text-center md:text-left md:justify-center md:gap-20 md:items-center">
        {[
          { n: "47+", label: "Projects" },
          { n: "99%", label: "Satisfaction" },
          { n: "1000", label: "github contributions" },
        ].map((s, i) => (
          <div key={i} className="p-10 border-r last:border-none border-gray-800">
            <div className="text-5xl font-black">{s.n}</div>
            <div className="text-xs tracking-widest text-gray-500 mt-2 uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-12 py-16">
        <h3 className="text-xs tracking-widest text-gray-500 uppercase mb-6">
          Selected Work
        </h3>

        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="flex justify-between items-center py-6 border-t border-gray-800 group hover:bg-white/5 transition"
          >
            <span className="text-gray-600 text-xs">{p.num}</span>

            <span className="flex-1 px-6 font-bold text-lg group-hover:tracking-widest transition">
              {p.title}
            </span>

            <span className="text-gray-500 text-xs">{p.tag}</span>
            <span className="text-gray-600 text-xs w-12 text-right">{p.year}</span>

            <span className="ml-4 w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full group-hover:border-lime-400 group-hover:text-lime-400 transition">
              ↗
            </span>
          </div>
        ))}

        <div className="border-b border-gray-800" />
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-12 pb-16 flex flex-wrap gap-3">
        {SKILLS.map((s) => (
          <span
            key={s}
            className="px-4 py-2 text-xs border border-gray-700 rounded-full uppercase tracking-widest text-gray-500 hover:text-lime-400 hover:border-lime-400 transition"
          >
            {s}
          </span>
        ))}
      </section>

    </div>
  );
}