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
  const detailRefs = useRef([])

  useEffect(() => {
    if (window.innerWidth < 768) return

    const ctx = gsap.context(() => {
      // Entry animation
      gsap.fromTo('.desk-left', { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
      gsap.fromTo('.desk-right', { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })

      projects.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: titleRefs.current[i],
          start: 'top 56%',
          end: 'bottom 44%',
          onEnter: () => activate(i),
          onEnterBack: () => activate(i),
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const activate = (index) => {
    titleRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.to(el, { color: i === index ? '#fff' : '#222', duration: 0.35, ease: 'power2.out' })
    })
    detailRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.to(el, {
        opacity: i === index ? 1 : 0,
        y: i === index ? 0 : 14,
        duration: i === index ? 0.5 : 0.25,
        ease: i === index ? 'power3.out' : 'power2.in',
        pointerEvents: i === index ? 'auto' : 'none',
      })
    })
  }

  return (
    <div id="projects" ref={containerRef} className="bg-[#0a0a0a] text-white w-full min-h-screen">

      {/* ══ DESKTOP ══ */}
      <div className="hidden md:flex w-full min-h-screen">

        {/* Left sticky panel */}
        <div className="desk-left sticky top-0 h-screen w-[44%] p-10 overflow-hidden">
          <div className="relative w-full h-full">
            {projects.map((project, i) => (
              <div
                key={project.id}
                ref={(el) => (detailRefs.current[i] = el)}
                className="absolute inset-0 flex flex-col"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  transform: `translateY(${i === 0 ? 0 : 14}px)`,
                  pointerEvents: i === 0 ? 'auto' : 'none',
                }}
              >
                {/* Image — fixed height */}
                <div className="w-full h-full rounded-sm overflow-hidden" style={{ height: '280px', flexShrink: 0 }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Meta rows */}
                <div className="mt-4">
                  <Row label="Overview" value={project.overview} />
                  <Row label="Technologies" value={project.technologies} />
                  <Row label="Industry" value={project.industry} />
                  <Row label="Client" value={project.client} />
                  <div className="flex gap-6 pt-4 border-t border-[#1f1f1f]">
                    <a href={project.github} className="text-[#555] hover:text-white text-xs tracking-widest uppercase transition-colors">Github ↗</a>
                    <a href={project.demo} className="text-[#555] hover:text-white text-xs tracking-widest uppercase transition-colors">Live Demo ↗</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right scrolling titles */}
        <div className="desk-right w-[56%] flex flex-col pt-[28vh] pb-[45vh] pl-10 pr-10">
          <span className="text-[#2a2a2a] text-[10px] tracking-[0.4em] uppercase mb-14">2025</span>
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (titleRefs.current[i] = el)}
              className="mb-3 group cursor-default"
              style={{ color: i === 0 ? '#ffffff' : '#222' }}
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
      <div className="flex md:hidden flex-col w-full pt-10">
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