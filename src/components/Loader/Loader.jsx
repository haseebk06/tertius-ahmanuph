import "./loader.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import loaderImg from "../../assets/img/loader.png";

const Loader = () => {
  const loaderContainer = useRef(null);
  const loadingImg = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(loaderContainer.current, {
      yPercent: -100,
      rotate: 0.001,
      ease: Expo.easeInOut,
      duration: 1.75,
    });
  }, []);

  return (
    <div className="loader-wrapper" ref={loaderContainer}>
      <img
        src={loaderImg}
        alt="image"
        ref={loadingImg}
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
};

export default Loader;
