import CurvedLoop from "./../components/CurvedLoop";

const Hero = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center flex-1 gap-8 w-full px-5">
      <h1 className="text-5xl text-center max-w-4xl px-10 leading-12">
        Hi, I'm Rahul 👋 <br />A MERN Stack & App Developer
      </h1>

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
      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />
    </div>
  );
};

export default Hero;
