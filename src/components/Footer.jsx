import { FaLinkedin, FaGithub, FaDribbble, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-950 border-t border-gray-800 py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4">PortFolio</h3>
            <p className="text-sm text-gray-400">
              Crafting exceptional digital experiences through design and engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">
              NAVIGATE
            </p>
            <ul className="space-y-3">
              {['Work', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">
              CONNECT
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rahul-kumar-6813ba28b/', label: 'LinkedIn' },
                { icon: FaGithub, href: 'https://github.com/legendcoder-rahul', label: 'GitHub' },
                { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
                { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">
              REACH OUT
            </p>
            <a
              href="mailto:hello@rahul.dev"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors break-all"
            >
              rahul251035@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              © {currentYear} PortFolio. ENGINEERED FOR THE EDGE AGE.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors group"
            >
              <span>BACK TO TOP</span>
              <svg
                className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7-7m0 0l-7 7m7-7v12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 