import "./style.css";import { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import CSSPlugin from "gsap/CSSPlugin";
import CSSRulePlugin from "gsap/CSSRulePlugin";
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

// gsap.registerPlugin(ScrollTrigger, CSSPlugin, CSSRulePlugin);

const Gallery = () => {
  return (
    <section id="gallery">
      <h2 className="text-center pt-5">Meet Shadera Dey-Al</h2>
      <p className="text-center pb-5">Gallery</p>
      <div class="mosaic-gallery">
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}>
          <Row>
            <Col xs="12" sm="12" md="6" lg="4" className="img-column">
              <div className="imageContainer">
                <a
                  href={gallaryImgOne}
                  data-fancybox="gallery"
                  className="imgOne"
                >
                  <img src={gallaryImgOne} alt="image" />
                </a>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="4" className="img-column">
              <div className="imageContainer">
                <a href={gallaryImgSeven} data-fancybox="gallery">
                  <img src={gallaryImgSeven} alt="image" />
                </a>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="4" className="img-column">
              <div className="imageContainer">
                <a href={gallaryImgFive} data-fancybox="gallery">
                  <img src={gallaryImgFive} alt="image" />
                </a>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="4" className="img-column">
              <div className="imageContainer">
                <a href={gallaryImgSix} data-fancybox="gallery">
                  <img src={gallaryImgSix} alt="image" height={1280} />
                </a>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="4" className="img-column">
              <div className="imageContainer">
                <a href={gallaryImgFour} data-fancybox="gallery">
                  <img src={gallaryImgFour} alt="image" />
                </a>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="4" className="img-column">
              <div className="imageContainer">
                <a href={gallaryImgTwelve} data-fancybox="gallery">
                  <img src={gallaryImgTwelve} alt="image" />
                </a>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="4" className="img-column">
              <div className="imageContainer">
                <a href={gallaryImgTwo} data-fancybox="gallery">
                  <img src={gallaryImgTwo} alt="image" />
                </a>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="4" className="img-column">
              <div className="imageContainer">
                <a href={gallaryImgThree} data-fancybox="gallery">
                  <img src={gallaryImgThree} alt="image" />
                </a>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="4" className="img-column">
              <div className="imageContainer">
                <a href={gallaryImgThirteen} data-fancybox="gallery">
                  <img src={gallaryImgThirteen} alt="image" />
                </a>
              </div>
            </Col>
          </Row>
        </Fancybox>
      </div>
    </section>
  );
};

export default Gallery;
