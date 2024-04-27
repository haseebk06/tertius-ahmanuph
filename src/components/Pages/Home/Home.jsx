import "./home.css";
import { useRef, useEffect, useState, useInsertionEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import imageOne from "../../../assets/img/image10.jpeg";
import { useInView } from "react-intersection-observer";
import { TweenMax, Power3, Power2, TimelineLite, gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cdCover from "../../../assets/img/cd-cover.jpg";
import cd from "../../../assets/img/cd.jpg";
import albumOne from "../../../assets/img/album_1.jpg";
import albumTwo from "../../../assets/img/album_2.jpg";
import albumThree from "../../../assets/img/album_3.jpg";
import albumFour from "../../../assets/img/album_4.jpg";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "../Fancybox.jsx";
import gallaryImgOne from "../../../assets/img/image1.jpeg";
import gallaryImgTwo from "../../../assets/img/image6.jpeg";
import gallaryImgThree from "../../../assets/img/image7.jpeg";
import gallaryImgFour from "../../../assets/img/image8.jpeg";
import gallaryImgFive from "../../../assets/img/image9.jpeg";
import fb from "../../../assets/img/facebook-2.svg";
import insta from "../../../assets/img/instagram.svg";
import x from "../../../assets/img/twitter-x.svg";
import tube from "../../../assets/img/youtube.svg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  let aboutMe = useRef(null);
  let image = useRef(null);
  let content = useRef(null);
  let aboutSec = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".about-image:after");

  useEffect(() => {
    const headLineFirst = content.children[0].children[0];
    const headLineSecond = headLineFirst.nextSibling;
    const headLineThird = headLineSecond.nextSibling;
    const headLineFourth = headLineThird.nextSibling;
    const headLineFifth = headLineFourth.nextSibling;
    const headLineSixth = headLineFifth.nextSibling;

    const tl = new TimelineLite();

    tl.to(
      imageReveal,
      1.4,
      {
        width: "0%",
        ease: Power2.easeInOut,
        delay: 1,
      },
      "Cool kids"
    ).from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });

    TweenMax.from(aboutMe, 0.8, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
      delay: 2,
    });

    tl.staggerFrom(
      [
        headLineFirst.children,
        headLineSecond.children,
        headLineThird.children,
        headLineFourth.children,
        headLineFifth.children,
        headLineSixth.children,
      ],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Cool kids"
    );

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main id="home">
        <section
          id="hero-section"
          className="banner"
          style={{ backgroundSize: scrollPosition > 150 ? "150%" : "180%" }}
        >
          <h1
            style={{
              opacity: scrollPosition > 150 ? 0 : 1,
              transform:
                scrollPosition > 150
                  ? "translate(0, -50px) scale(0.9)"
                  : "none",
            }}
          >
            Tertius AhmaNuph
          </h1>
          <h2
            style={{
              opacity: scrollPosition > 150 ? 0 : 1,
              transform:
                scrollPosition > 150
                  ? "translate(0, -50px) scale(0.8)"
                  : "none",
            }}
          >
            <span>New</span>
            <span>Album</span>
            <span>Out</span>
            <span>Now</span>
          </h2>
        </section>

        <section id="about" className="py-5" ref={(el) => (aboutSec = el)}>
          <Container fluid>
            <Row>
              <Col xs="12" sm="4" md="4" xl="4" className="main-container">
                <figure className="about-image">
                  <img
                    src={imageOne}
                    alt="Shadera's about image"
                    ref={(el) => (image = el)}
                  />
                </figure>
              </Col>
              <Col
                xs="12"
                sm="8"
                md="8"
                xl="8"
                className="about-text"
                ref={(el) => (content = el)}
              >
                <p className="about-inner">
                  <div className="content-line">
                    <div className="content-line-inner">
                      A pop and r&b artist with a fresh and creative approach to
                      making
                    </div>
                  </div>
                  <div className="content-line">
                    <div className="content-line-inner">
                      music with a deeper meaning. Surface level artistry is a
                      thing
                    </div>
                  </div>
                  <div className="content-line">
                    <div className="content-line-inner">
                      of the past when this artists masterpieces enter the
                      conversation.
                    </div>
                  </div>
                  <div className="content-line">
                    <div className="content-line-inner">
                      As the founder of Third Dim9nsion, Shadera is lso well
                      versed
                    </div>
                  </div>
                  <div className="content-line">
                    <div className="content-line-inner">
                      in both the artistic and creative side of music business,
                    </div>
                  </div>
                  <div className="content-line">
                    <div className="content-line-inner">
                      which fuels her passion to help as many other artist as
                      possible.
                    </div>
                  </div>
                </p>
                <h2
                  className="about-blob"
                  ref={(el) => {
                    aboutMe = el;
                  }}
                >
                  About Me
                </h2>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="albums">
          <div className="pt-5">
            <h2 className="text-center">Albums</h2>
            <p className="text-center">
              Single and all music albums released between year and year!
            </p>
            <Container fluid>
              <Row>
                <Col xs="12" sm="12" md="6" xl="6">
                  <div class="wvc-column-container wvc-column-bg-default wvc-column-bg-effect-none wvc-font-inherit wvc-column-font-inherit wvc-column-style-none wvc-border-color-none wvc-background-color-default">
                    <div class="wvc-column-inner">
                      <div class="wvc-column-wrapper wpb_wrapper">
                        <div class="wvc-album-disc wvc-album-disc-align-left wvc-album-disc-cd wvc-album-disc-worn-border-yes wvc-album-disc-rotate-hover-stop wvc-element wvc-album-disc-has-link">
                          <a
                            class="wvc-album-disc-link-mask internal-link"
                            href="#"
                            title=""
                          ></a>
                          <div class="wvc-album-disc-cover-container">
                            <div
                              class="wvc-album-disc-disc-container wow wvc-album-disc-reveal animated"
                              style={{
                                transitionDelay: "0.4s;",
                                visibility: "visible;",
                              }}
                            >
                              <div
                                class="wvc-album-disc-disc-inner"
                                style={{ animationDuration: "3.5s;" }}
                              >
                                <img
                                  decoding="async"
                                  class="wvc-album-disc-disc-img"
                                  src={cd}
                                  width="375"
                                  height="375"
                                  alt="photo-1462332420958-a05d1e002413"
                                  title="photo-1462332420958-a05d1e002413"
                                  loading="lazy"
                                />
                                <div class="wvc-album-disc-disc-text" />
                              </div>
                              <div class="wvc-album-disc-disc-hole"></div>
                            </div>
                          </div>
                          <div class="wvc-album-disc-cover-inner">
                            <img
                              decoding="async"
                              class="wvc-album-disc-cover-img"
                              src={cdCover}
                              width="375"
                              height="375"
                              alt="cd-cover"
                              title="cd-cover"
                              loading="lazy"
                            />
                            <div class="wvc-album-disc-cover-border"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="wvc-text-block wvc-clearfix wvc-element wvc-mobile-text-align- wvc-wow fadeIn"
                        style={{
                          animationDelay: "0.2s;",
                          visibility: "visible;",
                          animationName: "fadeIn",
                        }}
                      ></div>
                    </div>
                  </div>
                </Col>
                <Col xs="12" sm="12" md="6" xl="6" style={{ margin: "auto" }}>
                  <div className="head">
                    <ul className="d-flex align-items-center">
                      <li className="story active">The Story</li>
                      <li className="concept">The Concept</li>
                      <li className="sound">The Sound</li>
                    </ul>

                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus autem esse porro ipsa odit cum, maxime nisi itaque
                      eius sit magni magnam quis molestias cumque, dignissimos
                      quos qui aliquid blanditiis.
                    </p>

                    <p className="d-none">
                      blanditiis ipsum dolor sit amet consectetur adipisicing
                      elit. Ducimus autem esse porro ipsa odit cum, maxime nisi
                      itaque eius sit magni magnam quis molestias cumque,
                      dignissimos quos qui aliquid blanditiis.
                    </p>

                    <p className="d-none">
                      ipsum Lorem dolor sit amet consectetur adipisicing elit.
                      Ducimus autem esse porro ipsa odit cum, maxime nisi itaque
                      eius sit magni magnam quis molestias cumque, dignissimos
                      quos qui aliquid blanditiis.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
            <div class="d-flex align-items-end albums-img position-relative">
              <figure>
                <img src={albumOne} alt="album one" />
                <figcaption>
                  <a
                    href="https://preview.wolfthemes.live/loud/release/bad-a-album/"
                    target="_blank"
                  >
                    bad a** album
                  </a>
                </figcaption>
              </figure>
              <figure>
                <img src={albumTwo} alt="album two" />
                <figcaption>
                  <a
                    href="https://preview.wolfthemes.live/loud/release/concept-of-darkness/"
                    target="_blank"
                  >
                    concept of darkness
                  </a>
                </figcaption>
              </figure>
              <figure>
                <img src={albumThree} alt="album three" />
                <figcaption>
                  <a
                    href="https://preview.wolfthemes.live/loud/release/song-name-album/"
                    target="_blank"
                  >
                    song name from the album
                  </a>
                </figcaption>
              </figure>
              <figure>
                <img src={albumFour} alt="album four" />
                <figcaption>
                  <a
                    href="https://preview.wolfthemes.live/loud/release/witches-of-wind/"
                    target="_blank"
                  >
                    witches of wind
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="gallery">
          <h2 className="text-center pt-5">Meet Sadheera</h2>
          <p className="text-center pb-5">Gallery</p>
          <div class="mosaic-gallery">
            <Fancybox options={{ Carousel: { infinite: false } }}>
              <div class="mosaic-row">
                <a data-fancybox="gallery" href={gallaryImgThree}>
                  <img
                    src={gallaryImgThree}
                    alt="Image 4"
                    class="mosaic-item"
                  />
                </a>
                <a data-fancybox="gallery" href={gallaryImgTwo}>
                  <img src={gallaryImgTwo} alt="Image 5" class="mosaic-item" />
                </a>
                <a data-fancybox="gallery" href={gallaryImgFive}>
                  <img
                    src={gallaryImgFive}
                    alt="Image 1"
                    class="mosaic-item"
                    style={{ width: "104.9rem" }}
                  />
                </a>
              </div>
              <div class="mosaic-row two">
                <a data-fancybox="gallery" href={gallaryImgOne}>
                  <img src={gallaryImgOne} alt="Image 6" class="mosaic-item" />
                </a>
                <a data-fancybox="gallery" id="imgFour" href={gallaryImgFour}>
                  {/* <img src={gallaryImgFour} alt="Image 2" class="mosaic-item" /> */}
                </a>
                <a data-fancybox="gallery" id="imgOne" href={imageOne}>
                  {/* <img src={imageOne} alt="Image 3" class="mosaic-item" /> */}
                </a>
              </div>
            </Fancybox>
          </div>
        </section>

        <section id="contact">
          <Container fluid>
            <Row>
              <Col xs="12" sm="12" md="6" xl="6">
                <h2 className="text-left">SEND SADHEERA AN E-MAIL</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <br />
                <br />
                <address>7532 Walnutwood Ave.</address> <br />
                <a href="mailto:email@bandname.com">email@bandname.com</a>{" "}
                <br />
                <a href="tel:+88 (0) 101 0000">+88 (0) 101 0000</a> <br />
                <ul className="d-flex align-items-center justify-content-start mt-5">
                  <li>
                    <a href="" target="_blank">
                      <img src={fb} alt="icon" width={30} />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <img src={insta} alt="icon" width={30} />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <img src={x} alt="icon" width={30} />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <img src={tube} alt="icon" width={30} />
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs="12" sm="12" md="6" xl="6" style={{ margin: "auto" }}>
                <form action="" method="get">
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </Col>
                    <Col md="12">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                    </Col>
                    <Col md="12">
                      <div className="mb-3">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          className="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;
