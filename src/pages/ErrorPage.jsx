import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Animate elements on page load
    const ctx = gsap.context(() => {
      gsap.from(".error-container", {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: "power3.out",
      });

      gsap.from(".error-number", {
        duration: 1.2,
        scale: 0,
        opacity: 0,
        delay: 0.3,
        ease: "elastic.out(1, 0.5)",
      });

      gsap.from(".error-content > *", {
        duration: 0.6,
        y: 20,
        opacity: 0,
        delay: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-red-600/30 to-transparent rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-600/30 to-transparent rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Main content */}
      <div className="error-container relative z-10 max-w-2xl mx-auto text-center space-y-8">
        {/* Large 404 Number */}
        <div className="error-number relative">
          <h1 className="text-9xl md:text-10xl font-black bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-red-500 to-pink-500 opacity-20 -z-10"></div>
        </div>

        {/* Error content */}
        <div className="error-content space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the digital void. Don't worry, I can help you find your way back home.
          </p>

          {/* Floating icons animation */}
          <div className="flex justify-center gap-8 py-8 opacity-50">
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0s" }}>
              🔍
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              🚀
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.4s" }}>
              ✨
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={() => navigate("/")}
            className="group relative px-8 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-500"></div>
            <div className="relative flex items-center justify-center gap-2 text-white">
              <span>Go Home</span>
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </button>

          <button
            onClick={() => window.history.back()}
            className="group relative px-8 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 border-2 border-blue-400/50 hover:border-blue-400"
          >
            <div className="absolute inset-0 bg-blue-400/10 group-hover:bg-blue-400/20 transition-colors"></div>
            <div className="relative flex items-center justify-center gap-2 text-blue-300 group-hover:text-blue-200">
              <span>Go Back</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Quick links */}
        <div className="pt-8 border-t border-gray-700/50">
          <p className="text-gray-400 text-sm mb-4">Quick Navigation</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white transition-all text-sm font-medium border border-gray-700/50 hover:border-gray-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
