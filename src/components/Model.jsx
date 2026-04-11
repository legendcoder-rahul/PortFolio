import { useEffect, useRef } from "react";

const imageModules = import.meta.glob("../assets/images/CYBERFICTION-IMAGES/male*.png", {
  eager: true,
  import: "default",
});

const imagePaths = Object.keys(imageModules).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true })
);

const Model = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // 🔹 Image Sequence
    const frameCount = imagePaths.length;
    const images = [];
    const imageSeq = { frame: 0 };
    let targetFrame = 0;
    let currentFrameFloat = 0;
    let rafId = null;
    let touchStartY = 0;

    const files = (index) => {
      return imageModules[imagePaths[index]];
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.onload = () => {
        if (i === 0) render();
      };
      img.src = files(i);
      images.push(img);
    }

    // 🔹 Canvas Setup
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let currentFrame = -1;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    setCanvasSize();

    const resizeHandler = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", resizeHandler);

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const isAnimationComplete = () => {
      return rafId === null && currentFrameFloat >= frameCount - 1.5;
    };

    const isSectionPinned = () => {
      const section = sectionRef.current;
      if (!section) return false;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom > window.innerHeight * 0.3;
      
      return isInView && !isAnimationComplete();
    };

    let wheelThrottle = 0;
    const throttleLock = false;

    const stepFrames = (deltaY) => {
      if (frameCount === 0) return;

      targetFrame = clamp(targetFrame + deltaY * 0.12, 0, frameCount - 1);

      if (rafId === null) {
        rafId = requestAnimationFrame(animateFrames);
      }
    };

    const animateFrames = () => {
      const diff = targetFrame - currentFrameFloat;
      currentFrameFloat += diff * 0.25;
      imageSeq.frame = Math.round(currentFrameFloat);

      if (imageSeq.frame !== currentFrame) {
        currentFrame = imageSeq.frame;
        render();
      }

      if (Math.abs(diff) > 0.3) {
        rafId = requestAnimationFrame(animateFrames);
      } else {
        currentFrameFloat = targetFrame;
        imageSeq.frame = targetFrame;

        if (imageSeq.frame !== currentFrame) {
          currentFrame = imageSeq.frame;
          render();
        }

        rafId = null;
      }
    };

    function render() {
      const currentImage = images[imageSeq.frame];
      if (!currentImage || !currentImage.width) return;

      scaleImage(currentImage, context);
    }

    function scaleImage(img, ctx) {
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);

      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }

    const onWheel = (event) => {
      if (!isSectionPinned()) return;

      const movingDown = event.deltaY > 0;
      const movingUp = event.deltaY < 0;
      const isForwardLocked = movingDown && targetFrame < frameCount - 1;
      const isBackwardScrub = movingUp && targetFrame > 0;

      if (!isForwardLocked && !isBackwardScrub) return;

      event.preventDefault();
      stepFrames(event.deltaY);
    };

    const onTouchStart = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const onTouchMove = (event) => {
      if (!isSectionPinned()) return;

      const currentY = event.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      const movingDown = deltaY > 0;
      const movingUp = deltaY < 0;
      const isForwardLocked = movingDown && targetFrame < frameCount - 1;
      const isBackwardScrub = movingUp && targetFrame > 0;

      if (!isForwardLocked && !isBackwardScrub) return;

      event.preventDefault();
      stepFrames(deltaY);
      touchStartY = currentY;
    };

    render();
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-[#050507]">
      <div className="h-full w-full">
        <canvas className="block h-full w-full" ref={canvasRef} />
      </div>
    </section>
  );
};

export default Model;