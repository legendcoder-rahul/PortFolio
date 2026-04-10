import { useRef, useState } from 'react'
import logo from '../assets/logo.png'
import { RiMenu3Fill } from "react-icons/ri";
import { gsap } from "gsap";
import { IoCloseSharp } from 'react-icons/io5';

const handleScroll = (targetId) => {
  const elem = document.getElementById(targetId);
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => {

  const menuRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    if (!isOpen) {
      // open animation
      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.8,
        ease: "power3.out"
      })
    } else {
      // close animation
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.8,
        ease: "power3.in"
      })
    }
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-[#050508] w-full h-20 flex items-center justify-center pt-4'>

      <div className="bg-black flex justify-between items-center w-[90%] h-16 mx-auto rounded-2xl px-4">

        <img className='invert h-18' src={logo} alt="Logo" />

        <button
          onClick={toggleMenu}
          className='bg-white text-black h-10 w-20 mx-4 rounded-2xl flex items-center justify-center md:hidden'>
          <RiMenu3Fill className='text-2xl' />
        </button>

        <ul className='hidden md:flex gap-10 text-xl'>
          <li onClick={() => handleScroll('projects')} className='cursor-pointer hover:text-gray-400 transition'>Project</li>
          <li onClick={() => handleScroll('about')} className='cursor-pointer hover:text-gray-400 transition'>About</li>
          <li onClick={() => handleScroll('contact')} className='cursor-pointer hover:text-gray-400 transition'>Contact</li>
        </ul>
        <button className='hidden md:block bg-white text-black h-10 w-24 mx-4 rounded-2xl flex items-center justify-center text-[16px]'>
          Let's Talk
        </button>
      </div>


      <div
        ref={menuRef}
        className='fixed top-0 left-0 w-full h-screen bg-black text-white translate-x-full z-50'>

        <IoCloseSharp onClick={toggleMenu} className='absolute top-10 right-10 text-4xl cursor-pointer' />
        <ul className='flex flex-col items-center justify-center h-full gap-10 text-5xl'>
    
          <li onClick={() => { handleScroll('projects'); toggleMenu(); }} className='cursor-pointer hover:text-gray-400 transition'>Project</li>
          <li onClick={() => { handleScroll('about'); toggleMenu(); }} className='cursor-pointer hover:text-gray-400 transition'>About</li>
          <li onClick={() => { handleScroll('contact'); toggleMenu(); }} className='cursor-pointer hover:text-gray-400 transition'>Contact</li>
          <li className='cursor-pointer hover:text-gray-400 transition'>Let's Talk</li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar