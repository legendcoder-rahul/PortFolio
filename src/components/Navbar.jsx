import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-black tracking-wider text-white">
              <p>PortFolio</p>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@rahul.dev"
              className="hidden md:flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              title="Send email"
            >
              <MdEmail className="w-5 h-5" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-950 border-t border-gray-800 p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 uppercase tracking-widest text-sm font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@rahul.dev"
              onClick={closeMenu}
              className="block w-full px-4 py-3 mt-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 text-center uppercase tracking-widest text-sm"
            >
              Say Hello
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
