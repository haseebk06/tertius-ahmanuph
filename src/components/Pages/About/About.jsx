import "./style.css";
import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageOne from "../../../assets/img/image10.jpeg";
import { useGSAP } from "@gsap/react";
import { Power2, gsap } from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, CSSPlugin, CSSRulePlugin);

const About = () => {
  let aboutMe = useRef(null);
  let image = useRef(null);
  let content = useRef(null);
  let aboutSec = useRef(null);

  let imageReveal = CSSRulePlugin.getRule(".about-image:after");

  useGSAP(() => {
    const headLineFirst = content.current.children[1].children[0];
    const headLineSecond = headLineFirst.nextSibling;
    const headLineThird = headLineSecond.nextSibling;
    const headLineFourth = headLineThird.nextSibling;
    const headLineFifth = headLineFourth.nextSibling;
    const headLineSixth = headLineFifth.nextSibling;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSec.current,
        start: "top center",
      },
    });

    const txtTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSec.current,
      },
    });

    tl.to(imageReveal, {
      duration: 1.4,
      left: "100%",
      ease: Power2.easeInOut,
    }).from(image.current, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.6,
      duration: 1.4,
    });

    txtTl.from(
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
        opacity: 0,
        y: 44,
        stagger: 0.1,
        ease: Power2.easeInOut,
        delay: 0.5,
      },
      0.15
    );

    gsap.to(aboutMe.current, {
      scrollTrigger: {
        trigger: aboutMe.current,
      },
      y: -50,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <section id="about" className="py-5" ref={aboutSec}>
        <Container fluid>
          <Row>
            <Col
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="8"
              className="about-text d-flex flex-column align-items-center"
              ref={content}
            >
              <h2 className="about-blob" ref={aboutMe}>
                About Me
              </h2>
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
            </Col>

            <Col
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="4"
              className="main-container"
            >
              <div className="about-image">
                <img
                  src={imageOne}
                  alt="Shadera's about image"
                  ref={image}
                  style={{ width: "100%" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
