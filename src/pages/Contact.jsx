import { useEffect, useId, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdLocationOn, MdSchedule } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const nameId = useId();
  const emailId = useId();
  const inquiryId = useId();
  const messageId = useId();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: 'general',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setFormData({ name: '', email: '', inquiry: 'general', message: '' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .from("[data-contact-heading]", {
          y: 36,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          "[data-contact-description]",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          "[data-contact-card]",
          {
            x: -26,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          "[data-contact-form]",
          {
            y: 34,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          "[data-contact-field]",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.45"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="w-full bg-[#0e1117] py-20 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Content */}
          <div className="space-y-12">
            <div data-contact-heading>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">
                READY TO EVOLVE?
              </p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Let's Get<br />
                <span className="text-blue-400">In Touch</span>
              </h2>
            </div>

            <p data-contact-description className="text-gray-400 text-base md:text-lg max-w-md">
              Currently accepting select commissions for high-end digital experiences. Step into the lab and let's craft something exceptional.
            </p>

            {/* Info Cards */}
            <div className="space-y-6">
              <div data-contact-card className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <MdLocationOn className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-semibold">
                    BASE
                  </p>
                  <p className="text-white font-semibold">India- New Delhi</p>
                </div>
              </div>

              <div data-contact-card className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                  <MdSchedule className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-semibold">
                    RESPONSE TIME
                  </p>
                  <p className="text-white font-semibold">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div data-contact-form className="bg-gradient-to-b from-gray-800/20 to-gray-900/20 rounded-2xl p-8 md:p-10 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div data-contact-field className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor={nameId} className="block text-xs uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                    Your Name
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor={emailId} className="block text-xs uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                    Email Address
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
              </div>

              <div data-contact-field>
                <label htmlFor={inquiryId} className="block text-xs uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                  Inquiry Type
                </label>
                <select
                  id={inquiryId}
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors appearance-none cursor-pointer"
                >
                  <option value="general">Select Inquiry Type</option>
                  <option value="project">Project Consultation</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div data-contact-field>
                <label htmlFor={messageId} className="block text-xs uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                  Project Details
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                data-contact-field
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-2"
              >
                <span>Initiate Transmission</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
