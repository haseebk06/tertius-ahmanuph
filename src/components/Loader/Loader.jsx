import "./loader.css";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Power3 } from "gsap";

const Loader = () => {

  const [upward, setUpward] = useState(false);
  const intro = useRef(null);

  useGSAP(() => {
    const letters = intro.current.children;

    const tl = gsap.timeline();

    tl.from(letters, {
      y: 700,
      delay: 0.5,
      stagger: {
        amount: 0.5,
      },
      duration: 1,
      ease: "back.out",
    }).to(letters, {
      y: -700,
      stagger: {
        amount: 0.5,
        from: "end",
      },
      duration: 1,
      ease: "back.in",
      onUpdate: checkProgress,
    });

    const tl2 = gsap.timeline({ paused: true });

    tl2.to(intro.current, {
      yPercent: -100,
      dalay: 5,
    });

    function checkProgress() {
      if (tl.progress() >= 0.9) {
        tl2.play();
        setUpward(true);
      } else {
        setUpward(false);
      }
    }
  }, []);

  return (
    <div className={`loader-wrapper ${upward ? "upward" : ""}`} ref={intro}>
      <div className="h1">M</div>
      <div className="h1">e</div>
      <div className="h1">e</div>
      <div className="h1">t</div>
      <div className="h1">S</div>
      <div className="h1">a</div>
      <div className="h1">d</div>
      <div className="h1">h</div>
      <div className="h1">e</div>
      <div className="h1">e</div>
      <div className="h1">r</div>
      <div className="h1">a</div>
    </div>
  );
};

export default Loader;
