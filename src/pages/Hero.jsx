import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


const Hero = () => {


  const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];


const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];
  return (
    <div className="text-white h-screen flex flex-col justify-center items-center md:h-screen flex-1 gap-8 w-full px-5">
      <div className="flex justify-center items-center">
      <h1 className="text-5xl md:leading-22 md:h-fit md:w-full text-center max-w-4xl px-10 leading-12 md:text-7xl ">
        Hi, I'm Rahul 👋 <br />A MERN Stack & App Developer
      </h1>
      </div>

      <p className="text-center max-w-2xl px-5 text-xl ">
        I build fast, responsive, and scalable web & mobile applications using
        MongoDB, Express, React, Node.js, and modern UI frameworks.
      </p>

      <div>
        <a href="./" download>
          <div class="button">
            <div class="button-wrapper">
              <div class="text">Download</div>
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
     <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#837d7d1f"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default Hero;
