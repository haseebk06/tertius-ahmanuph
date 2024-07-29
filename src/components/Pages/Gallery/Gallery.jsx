import "./style.css";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import gallaryImgZero from "./images/image0.jpeg";
import gallaryImgOne from "./images/image1.jpeg";
import gallaryImgTwo from "./images/image2.jpeg";
import gallaryImgThree from "./images/image3.jpeg";
import gallaryImgFour from "./images/image4.jpeg";
import gallaryImgFive from "./images/image5.jpeg";
import gallaryImgSix from "./images/image6.jpeg";
import gallaryImgSeven from "./images/image7.jpeg";
import gallaryImgEight from "./images/image8.jpeg";
import gallaryImgNine from "./images/image9.jpeg";
import gallaryImgNineA from "./images/image9-a.jpeg";
import gallaryImgTen from "./images/image10.jpeg";
import gallaryImgEleven from "./images/image11.jpeg";
import gallaryImgTwelve from "./images/image12.jpeg";
import gallaryImgThirteen from "./images/image13.jpeg";
import gallaryImgFourteen from "./images/image14.jpeg";
import gallaryImgFifteen from "./images/image15.jpeg";
import gallaryImgSixteen from "./images/image16.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const meet = useRef(null);
  const owner = useRef(null);
  const about = useRef(null);
  const galleryWrapper = useRef(null);

  useLayoutEffect(() => {
    const splitText = () => {
      SplitType.create(meet.current);
      SplitType.create(owner.current);
      gsap.set(".gallery-visual-item", { scale: 0 });
      gsap.set(".lines", { yPercent: 100 });
      gsap.set(".char", { yPercent: 100 });

      gsap.to(".gallery-info .char", {
        yPercent: 0,
        stagger: 0.05,
        duration: 1.7,
        ease: Expo.easeInOut,
      });

      gsap.to(".gallery-info .lines", {
        yPercent: 0,
        stagger: 0.05,
        duration: 1.7,
        ease: Expo.easeInOut,
      });
    };

    const setupAnimations = () => {
      const galleryListImg = gsap.utils.toArray(".gallery-visual-item");

      let scrollTween = gsap.to(galleryWrapper.current, {
        xPercent: -100,
        x: () => window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: galleryWrapper.current,
          start: "top 90px",
          end: () => "+=" + galleryWrapper.current.offsetWidth,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      galleryListImg.forEach((listImg) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: listImg,
            containerAnimation: scrollTween,
            toggleActions: "play none none reverse",
          },
        });

        tl.to(listImg, {
          scale: 1,
          duration: 1.5,
          ease: Expo.easeOut,
        });
      });
    };

    // Use requestAnimationFrame to ensure the component has fully rendered before running the setup
    requestAnimationFrame(() => {
      splitText();
      setupAnimations();
    });
  }, []);

  return (
    <main id="gallery">
      <section className="section gallery-hero">
        <div className="gallery-wrapper" ref={galleryWrapper}>
          <div className="gallery-intro">
            <div className="gallery-main-img">
              <img src={gallaryImgZero} alt="gallery img" className="c-img" />
            </div>

            <div className="gallery-info">
              <h3 ref={meet}>Meet</h3>
              <h2 ref={owner}>SHADERAH Dey-Al</h2>
              <p ref={about}>
                <div className="line-wrapper">
                  <div className="lines">
                    A pop and r&b artist with a fresh and creative approach to
                    making
                  </div>
                </div>

                <div className="line-wrapper">
                  <div className="lines">
                    music with a deeper meaning. Surface level artistry is a
                    thing of
                  </div>
                </div>

                <div className="line-wrapper">
                  <div className="lines">
                    the past when this artists masterpieces enter the
                    conversation. As
                  </div>
                </div>

                <div className="line-wrapper">
                  <div className="lines">
                    the founder of Tertius AhmaNuph, Shaderah is also well
                    versed in{" "}
                  </div>
                </div>

                <div className="line-wrapper">
                  <div className="lines">
                    both the artistic and creative side of music business, which
                    fuels{" "}
                  </div>
                </div>

                <div className="line-wrapper">
                  <div className="lines">
                    her passion to help as many other artist as possible.
                  </div>
                </div>
              </p>
            </div>
          </div>

          <div className="gallery-visuals-main-wrapper">
            <div className="gallery-visuals-wrapper">
              <div className="gallery-visuals-section">
                <div className="gallery-visual-list-wrapper">
                  <div className="gallery-visual-list">
                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgEight}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgNine}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgNineA}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgOne}
                          alt="gallery image"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgTwo}
                          alt="gallery image"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgThree}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgFour}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgFive}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgSix}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgSeven}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgTen}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgEleven}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgTwelve}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgThirteen}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgFourteen}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgFifteen}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>

                    <div className="gallery-visual-item">
                      <div className="gallery-img-wrapper">
                        <img
                          src={gallaryImgSixteen}
                          alt="gallery img"
                          className="gallery-visual-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
