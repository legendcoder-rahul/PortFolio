import { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function MenuButton() {
  const top = useRef(null);
  const bottom = useRef(null);
  const tl = useRef(null);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(top.current, {
        y: 6,
        rotate: 45,
        duration: 0.35,
        ease: "back.out(1.7)",
      })
      .to(
        bottom.current,
        {
          y: -6,
          rotate: -45,
          duration: 0.35,
          ease: "back.out(1.7)",
        },
        0
      );
  }, []);

  const toggle = () => {
    if (!open) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
    setOpen(!open);
  };

  return (
  <button
    onClick={toggle}
    className="w-12 h-12 flex items-center justify-center"
  >
    <div className="relative w-8 h-8">
      <span
        ref={top}
        className="absolute top-2 left-0 w-full h-[2px] bg-white"
      />
      <span
        ref={bottom}
        className="absolute bottom-2 left-0 w-full h-[2px] bg-white"
      />
    </div>
  </button>
);

}
