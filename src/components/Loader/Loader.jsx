import "./loader.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import loaderImg from "../../assets/img/loader.jpeg";

const Loader = () => {
  const loaderContainer = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    const runAnimation = () => {
      tl.to(loaderContainer.current, {
        yPercent: -110,
        rotate: 0.001,
        ease: Expo.easeInOut,
        duration: 1.75,
      });
    };

    if (document.readyState === "complete") {
      runAnimation();
    } else {
      window.addEventListener("load", runAnimation);
    }

    return () => {
      window.removeEventListener("load", runAnimation);
      tl.kill();
    };
  }, []);

  return (
    <div className="loader-wrapper" ref={loaderContainer}>
      <img src={loaderImg} alt="image" />
    </div>
  );
};

export default Loader;
