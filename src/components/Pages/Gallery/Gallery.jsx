import "./style.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
// import { Row, Col } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "../Fancybox.jsx";
import gallaryImgOne from "./images/image1.jpeg";
import gallaryImgTwo from "./images/image2.jpeg";
import gallaryImgThree from "./images/image3.jpeg";
import gallaryImgThirteen from "./images/image13.jpeg";
import gallaryImgTwelve from "./images/image12.jpeg";
import gallaryImgFour from "./images/image4.jpeg";
import gallaryImgFive from "./images/image5.jpeg";
import gallaryImgSix from "./images/image6.jpeg";
import gallaryImgSeven from "./images/image7.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const meet = useRef(null);
  const gal = useRef(null);
  const imgGal = useRef(null);

  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".img",
          scrub: true,
        },
      })
      .to(".img", {
        stagger: 0.2,
        y: -400,
        scrub: true,
      });

    const tlT = gsap.timeline();

    tlT.set(meet.current.children, {
      yPercent: 100,
      rotate: 0.001,
    });

    tlT.set(gal.current, {
      yPercent: 100,
      rotate: 0.001,
      opacity: 0,
    });

    tlT.set(imgGal.current, {
      yPercent: 100,
      rotate: 0.001,
      opacity: 0,
    });

    tlT.to(
      meet.current.children,
      {
        yPercent: 0,
        rotate: 0.001,
        stagger: 0.05,
        ease: Expo.easeOut,
        duration: 1.5,
        clearProps: "all",
        delay: 0.45,
      },
      "cool kids"
    );

    tlT.to(
      gal.current,
      {
        yPercent: 0,
        opacity: 1,
        rotate: 0.001,
        duration: 1.5,
        ease: Expo.easeOut,
        delay: 0.45,
      },
      "cool kids"
    );

    tlT.to(
      imgGal.current,
      {
        yPercent: 0,
        opacity: 1,
        rotate: 0.001,
        duration: 1.5,
        ease: Expo.easeOut,
        delay: 0.7,
      },
      "cool kids"
    );
  }, []);

  return (
    // <main id="gallery">
    //   <h2 className="text-center pt-5">Meet Shadera Dey-Al</h2>
    //   <p className="text-center pb-5">Gallery</p>

    //   <div class="mosaic-gallery">
    //     <Fancybox
    //       options={{
    //         Carousel: {
    //           infinite: false,
    //         },
    //       }}>
    //       <Row>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgOne} data-fancybox="gallery">
    //               <img src={gallaryImgOne} alt="image" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgSeven} data-fancybox="gallery">
    //               <img src={gallaryImgSeven} alt="image" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgFive} data-fancybox="gallery">
    //               <img src={gallaryImgFive} alt="image" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgSix} data-fancybox="gallery">
    //               <img src={gallaryImgSix} alt="image" height={1280} />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgFour} data-fancybox="gallery">
    //               <img src={gallaryImgFour} alt="image" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgTwelve} data-fancybox="gallery">
    //               <img src={gallaryImgTwelve} alt="image" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgTwo} data-fancybox="gallery">
    //               <img src={gallaryImgTwo} alt="image" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgThree} data-fancybox="gallery">
    //               <img src={gallaryImgThree} alt="image" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgThirteen} data-fancybox="gallery">
    //               <img src={gallaryImgThirteen} alt="image" />
    //             </a>
    //           </div>
    //         </Col>
    //       </Row>
    //     </Fancybox>
    //   </div>

    // </main>

    <main id="gallery">
      <h2 className="text-center pt-5">
        <div
          className="gal-txt-wrapper d-flex flex-wrap aling-items-center justify-content-center"
          ref={meet}
        >
          <div>M</div>
          <div>e</div>
          <div>e</div>
          <div>t</div>
          <div>&nbsp;</div>
          <div>S</div>
          <div>h</div>
          <div>a</div>
          <div>d</div>
          <div>e</div>
          <div>r</div>
          <div>a</div>
          <div>Dey-Al</div>
        </div>
      </h2>
      <p className="text-center pb-5" ref={gal}>
        Gallery
      </p>

      <section className="section">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </section>

      <section className="section" ref={imgGal}>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
      </section>
    </main>
  );
};

export default Gallery;
