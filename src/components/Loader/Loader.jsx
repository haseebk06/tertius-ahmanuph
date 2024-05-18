import "./loader.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Power3 } from "gsap";
import loaderImg from "../../assets/img/loader.png";

const Loader = () => {
  const loaderContainer = useRef(null);
  const loadingImg = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(loaderContainer.current, {
      yPercent: -100,
      duration: 1,
      delay: 1.5,
      ease: Power3.easeIn,
    });
  }, []);

  return (
    <div className="loader-wrapper" ref={loaderContainer}>
      <img src={loaderImg} alt="image" ref={loadingImg} style={{maxWidth: "100%"}}/>
    </div>
  );
};

export default Loader;
