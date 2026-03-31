import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import JobHuntImage from "../assets/jobHunt.png";
import ModifyImage from "../assets/modify.png";
import perplexityImage from "../assets/perplexity.jfif";
import netflixImage from "../assets/netflix.avif";
import jobHuntDarkImage from "../assets/jobHuntDark.png";
import modifyDarkImage from "../assets/modifyDark.png";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "JobHunt",
      description: "job search platform with AI-powered resume analysis and personalized job recommendations.",
      image: jobHuntDarkImage,
      technologies: ["React.JS", "Node.JS","Express.js", "MongoDB", "GenAI"],
      github: "https://github.com/legendcoder-rahul/JobHunt",
      live: "https://job-hunt-seven-weld.vercel.app/",
      featured: true,
      gridSize: "col-span-1 md:col-span-2 md:row-span-2",
    },

    {
      id: 2,
      title: "Modify",
      description: "modify is detect face expression and play song accounding to mood",
      image: modifyDarkImage,
      technologies: ["Web3", "mediaPipeline", "React", "Node.JS","Express.js", "MongoDB","GenAI"],
      github: "https://github.com/legendcoder-rahul/Modify",
      live: "https://modify-texn.onrender.com/",
      featured: true,
      gridSize: "col-span-1 md:col-span-2",
    },
    {
      id: 3,
      title: "Netflix Clone",
      description: "A Netflix clone built with React, featuring dynamic content and responsive design.",
      image: netflixImage,
      technologies: ["React", "Node.JS", "Express.js","mongodb","Redis","Redux"],
      github: "https://github.com/legendcoder-rahul/Netflix",
      live: "https://netflix-nu-two.vercel.app/login",
      featured: true,
      gridSize: "col-span-1",
    },
    {
      id: 4,
      title: "perplexity-style search engine",
      description: "perplexity-style search engine built with React, Node.JS, and GenAI, providing intelligent search results and a sleek user interface.",
      image: perplexityImage,
      technologies: ["React", "Node.JS", "Express.js","mongodb","Redis","Redux" ,"GenAI"],
      github: "https://github.com/legendcoder-rahul/Perplexity",
      live: "https://example.com",
      featured: false,
      gridSize: "col-span-1",
    },
  ]

  return (
    <div id="projects" className="w-full py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-4 font-semibold">
            SELECTED WORKS
          </p>
          <div className="flex justify-between items-end gap-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              Wall of<br /><span className="text-blue-400">Portfolio</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest hidden md:block">
              GALLERY VIEW 1-7
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden bg-gray-900 cursor-pointer ${project.gridSize}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-white/10 text-white border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all text-sm font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all text-sm font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>

              {/* Badge for featured */}
              {project.featured && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  FEATURED
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 md:mt-32">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a vision for a project?
          </h3>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-gray-100 transition-all"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
