import logo from '../assets/logo.png'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {

  const scrollToSection = (sectionId) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className='bg-[#050508] w-full text-white border-t border-gray-800'>
      
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-6 md:px-12 py-16'>
        
        {/* Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
          
          {/* Brand Section */}
          <div className='md:col-span-1'>
            <img className='invert h-20 mb-6' src={logo} alt="Logo" />
            <p className='text-gray-500 text-sm leading-relaxed'>
              Building digital experiences with code and creativity. Let's create something amazing together.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className='text-white font-semibold text-sm uppercase tracking-widest mb-6'>Navigation</h4>
            <ul className='space-y-3'>
              <li onClick={() => scrollToSection('hero')} className='text-gray-400 hover:text-white text-sm cursor-pointer transition duration-300'>Home</li>
              <li onClick={() => scrollToSection('projects')} className='text-gray-400 hover:text-white text-sm cursor-pointer transition duration-300'>Projects</li>
              <li onClick={() => scrollToSection('about')} className='text-gray-400 hover:text-white text-sm cursor-pointer transition duration-300'>About</li>
              <li onClick={() => scrollToSection('contact')} className='text-gray-400 hover:text-white text-sm cursor-pointer transition duration-300'>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-white font-semibold text-sm uppercase tracking-widest mb-6'>Services</h4>
            <ul className='space-y-3'>
              <li className='text-gray-400 hover:text-white text-sm cursor-pointer transition duration-300'>Web Development</li>
              <li className='text-gray-400 hover:text-white text-sm cursor-pointer transition duration-300'>UI/UX Design</li>
              <li className='text-gray-400 hover:text-white text-sm cursor-pointer transition duration-300'>Frontend Dev</li>
              <li className='text-gray-400 hover:text-white text-sm cursor-pointer transition duration-300'>Full Stack Dev</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className='text-white font-semibold text-sm uppercase tracking-widest mb-6'>Get In Touch</h4>
            
            {/* Email */}
            <div className='flex items-center gap-3 mb-6'>
              <FaEnvelope className='text-lime-400' size={16} />
              <a href='mailto:rahul251035@gmail.com' className='text-gray-400 hover:text-lime-400 text-sm transition duration-300'>
                rahul251035@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className='flex gap-4'>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' 
                className='w-10 h-10 rounded-full border border-gray-700 hover:border-lime-400 hover:text-lime-400 flex items-center justify-center transition duration-300'>
                <FaLinkedin size={16} />
              </a>
              <a href='https://github.com/legendcoder-rahul' target='_blank' rel='noopener noreferrer'
                className='w-10 h-10 rounded-full border border-gray-700 hover:border-lime-400 hover:text-lime-400 flex items-center justify-center transition duration-300'>
                <FaGithub size={16} />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'
                className='w-10 h-10 rounded-full border border-gray-700 hover:border-lime-400 hover:text-lime-400 flex items-center justify-center transition duration-300'>
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-500 text-sm'>
              © 2024 Rahul. All rights reserved.
            </p>
            <div className='flex gap-6'>
              <a href='#' className='text-gray-500 hover:text-white text-sm transition duration-300'>Privacy Policy</a>
              <a href='#' className='text-gray-500 hover:text-white text-sm transition duration-300'>Terms of Service</a>
            </div>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer