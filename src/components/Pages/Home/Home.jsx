import "./home.css";
import { useRef, useEffect, useInsertionEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageOne from "../../../assets/img/image10.jpeg";
import { useInView } from "react-intersection-observer";
import { TweenMax, Power3, Power2, TimelineLite, gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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

    tl.to(imageReveal, 1.4, {
      width: "0%",
      ease: Power2.easeInOut,
      delay: 1,
    }, "Cool kids").from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });

    TweenMax.from(aboutMe, 0.8, {
      opacity: 0,
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
      0.15, "Cool kids"
    );
    console.log(aboutSec);
  }, []);

  return (
    <>
      <main id="home">
        <section id="hero-section">
          <h1>Tertius AhmaNuph</h1>
          <h2>
            <span>New</span>
            <span>Album</span>
            <span>Out</span>
            <span>Now</span>
          </h2>
        </section>

        <section id="about" className="py-5">
          <Container fluid>
            <Row>
              <Col
                xs="12"
                sm="4"
                md="4"
                xl="4"
                className="main-container"
              >
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
          <div className="py-5">
            <h2 className="text-center">New Album - Out Now</h2>
            <p className="text-center">
              Single and all music albums released between year and year!
            </p>
          </div>

          <Container fluid>
            <Row>
              <Col
                xs="6"
                sm="4"
                md="4"
                xl="4"
                className="d-flex position-relative">
              </Col>
              <Col xs="6" sm="8" md="8" xl="8">
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;
