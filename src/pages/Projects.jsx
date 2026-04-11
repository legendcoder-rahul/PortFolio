import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IndoAI from '../assets/IndoAI.png'
import JobHunt from '../assets/JobHunt.png'
import Modify from '../assets/modifyDark.png'
import netflix from '../assets/netflix.avif'
import snitch from '../assets/Snitch.png'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'JobHunt',
    image: JobHunt,
    overview: 'A web application for job seekers to find and apply for jobs, build professional profiles, and generate AI-powered resumes.',
    technologies: 'React, Node.js, Express, MongoDB, GenAI',
    industry: 'HR Tech · SaaS',
    client: 'Personal Project',
    github: 'https://github.com/legendcoder-rahul/JobHunt',
    demo: 'https://job-hunt-seven-weld.vercel.app/',
  },
  {
    id: 2,
    title: 'IndoAI',
    image: IndoAI,
    overview: 'An Ai platform just like perplexity but focused on Indian content and languages.',
    technologies: 'React, Express, MongoDB, GSAP, Tailwind CSS, GenAI',
    industry: 'Creative · Personal',
    client: 'Self',
    github: 'https://github.com/legendcoder-rahul/Perplexity',
    demo: 'perplexity-seven-smoky.vercel.app',
  },
  {
    id: 3,
    title: 'Modify',
    image: Modify,
    overview: 'A mood detection and music recommendation app that analyzes user input to suggest personalized playlists and tracks.',
    technologies: 'Next.js, OpenAI API, Prisma, PostgreSQL',
    industry: 'Artificial Intelligence',
    client: 'Freelance',
    github: 'https://github.com/legendcoder-rahul/Modify',
    demo: 'https://modify-texn.onrender.com/',
  },
  {
    id: 4,
    title: 'Snitch',
    image: snitch,
    overview: 'A E-commerce platform for tech gadgets, offering a curated selection of products, user reviews, and seamless shopping experience.',
    technologies: 'React, WebRTC, Socket.io, Monaco Editor',
    industry: 'Developer Tools',
    client: 'Open Source',
    github: 'https://github.com/legendcoder-rahul/Snitch',
    demo: '#',
  },
  {
    id: 5,
    title: 'Netflix Clone',
    image: netflix,
    overview: 'A Netflix clone built with React, featuring a responsive design, dynamic content fetching from TMDB API, and user authentication.',
    technologies: 'React, WebRTC, Socket.io, Monaco Editor',
    industry: 'Developer Tools',
    client: 'Open Source',
    github: 'https://github.com/legendcoder-rahul/Netflix',
    demo: 'netflix-nu-two.vercel.app',
  },
]

/* ─── Reusable Row ─────────────────────────────────── */
const Row = ({ label, value, mobile }) => (
  <div className={`border-t border-[#1a1a1a] ${mobile ? 'py-3' : 'py-4'}`}>
    <div className="flex items-start gap-6">
      <span className={`text-[#444] shrink-0 mt-0.5 ${mobile ? 'text-xs w-24' : 'text-sm w-28'}`}>{label}</span>
      <span className={`text-[#9e9e9e] flex-1 leading-relaxed ${mobile ? 'text-xs' : 'text-sm'}`}>{value}</span>
    </div>
  </div>
)

/* ─── Mobile Accordion Item ────────────────────────── */
const MobileItem = ({ project }) => {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    if (!bodyRef.current || !innerRef.current) return
    if (open) {
      gsap.to(bodyRef.current, { height: innerRef.current.offsetHeight, duration: 0.5, ease: 'power3.out' })
      gsap.to(innerRef.current, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: 'power2.out' })
    } else {
      gsap.to(bodyRef.current, { height: 0, duration: 0.4, ease: 'power3.in' })
      gsap.to(innerRef.current, { opacity: 0, y: 8, duration: 0.2 })
    }
  }, [open])

  return (
    <div className="border-t border-[#1f1f1f] px-8">
      <button
        onClick={() => setOpen(p => !p)}
        className="w-full flex items-center justify-between py-5 px-5 text-left"
      >
        <span
          className="font-black leading-none tracking-tighter transition-colors duration-300"
          style={{
            fontSize: 'clamp(2rem, 9vw, 2.8rem)',
            color: open ? '#ffffff' : '#2e2e2e',
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
          }}
        >
          {project.title}
        </span>
        <span
          className="text-2xl font-thin ml-4 shrink-0 transition-all duration-300"
          style={{
            color: open ? '#fff' : '#333',
            display: 'inline-block',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      <div ref={bodyRef} style={{ height: 0, overflow: 'hidden' }}>
        <div ref={innerRef} style={{ opacity: 0, transform: 'translateY(8px)' }} className="px-5 pb-8">
          <div className="w-full h-52 overflow-hidden rounded-sm mb-5">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <Row label="Overview" value={project.overview} mobile />
          <Row label="Technologies" value={project.technologies} mobile />
          <Row label="Industry" value={project.industry} mobile />
          <Row label="Client" value={project.client} mobile />
          <div className="flex gap-6 mt-4 pt-4 border-t border-[#1f1f1f]">
            <a href={project.github} className="text-[#555] hover:text-white text-[10px] tracking-widest uppercase transition-colors">Github ↗</a>
            <a href={project.demo} className="text-[#555] hover:text-white text-[10px] tracking-widest uppercase transition-colors">Live Demo ↗</a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main ─────────────────────────────────────────── */
const Projects = () => {
  const containerRef = useRef(null)
  const titleRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.innerWidth < 1024) return

    const ctx = gsap.context(() => {
      // Entry animation
      gsap.fromTo('.desk-left', { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
      gsap.fromTo('.desk-right', { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })

      projects.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: titleRefs.current[i],
          start: 'top 56%',
          end: 'bottom 44%',
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id="projects" ref={containerRef} className="bg-[#0a0a0a] mt-20 text-white w-full min-h-screen">

      {/* ══ DESKTOP ══ */}
      <div className="hidden lg:flex w-full min-h-screen gap-4 xl:gap-8 px-3 lg:px-6 xl:px-10">

        {/* Left sticky panel */}
        <div className="desk-left sticky top-0 h-screen w-[52%] py-8 px-4 lg:px-6 xl:px-8 overflow-hidden">
          <div className="relative w-full h-full">
            <div
              key={projects[activeIndex].id}
              className="absolute inset-0 flex flex-col transition-opacity duration-300"
            >
              <div className="w-full rounded-sm overflow-hidden h-[300px] xl:h-[340px]" style={{ flexShrink: 0 }}>
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full md:h-full md:flex md:justify-between object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="mt-4">
                <Row label="Overview" value={projects[activeIndex].overview} />
                <Row label="Technologies" value={projects[activeIndex].technologies} />
                <Row label="Industry" value={projects[activeIndex].industry} />
                <Row label="Client" value={projects[activeIndex].client} />
                <div className="flex gap-6 pt-4 border-t border-[#1f1f1f]">
                  <a href={projects[activeIndex].github} className="text-[#555] hover:text-white text-xs tracking-widest uppercase transition-colors">Github ↗</a>
                  <a href={projects[activeIndex].demo} className="text-[#555] hover:text-white text-xs tracking-widest uppercase transition-colors">Live Demo ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right scrolling titles */}
        <div className="desk-right w-[48%] flex flex-col pt-[24vh] pb-[36vh] px-2 lg:px-4 xl:px-8">
          <span className="text-[#2a2a2a] text-[10px] tracking-[0.4em] uppercase mb-14">2025</span>
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (titleRefs.current[i] = el)}
              className={`mb-3 group cursor-default transition-colors duration-300 ${i === activeIndex ? 'text-white' : 'text-[#222]'}`}
            >
              <h2
                className="font-black leading-none tracking-tighter transition-transform duration-300 ease-out group-hover:translate-x-2"
                style={{
                  fontSize: 'clamp(3.2rem, 5.2vw, 6rem)',
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                }}
              >
                {project.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* ══ MOBILE ══ */}
      <div className="flex lg:hidden flex-col w-full pt-10">
        <div className="px-5 mb-4">
          <span className="text-[#2a2a2a] text-[10px] tracking-[0.4em] uppercase">2025 — Projects</span>
        </div>
        {projects.map((project) => (
          <MobileItem key={project.id} project={project} />
        ))}
        <div className="border-t border-[#1f1f1f]" />
      </div>

    </div>
  )
}

export default Projects