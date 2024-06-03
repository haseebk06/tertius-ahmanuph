import "./home.css";
import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { Expo, gsap } from "gsap";
import cdCover from "../../../assets/img/cd-cover.jpg";
import cd from "../../../assets/img/cd.jpg";
import albumOne from "../../../assets/img/album_1.jpg";
import albumTwo from "../../../assets/img/album_2.jpg";
import albumThree from "../../../assets/img/album_3.jpg";

const products = [
  {
    id: "3am-on-31st",
    title: "3am on 31st",
    price: "$110.00",
    description: `Album Description.`,
    image: albumOne,
  },
  {
    id: "get-this-way",
    title: "Get This Way",
    price: "$110.00",
    description: `Album Description..`,
    image: albumTwo,
  },
  {
    id: "homes",
    title: "Homes",
    price: "$110.00",
    description: `Album Description..`,
    image: albumThree,
  },
];

const Home = () => {
  let albums = useRef(null);
  let hero = useRef(null);
  let herotxt = useRef(null);
  let spanTxt = useRef(null);

  const [activeTab, setActiveTab] = useState("story");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useGSAP(() => {
    gsap.to(hero.current, {
      scale: 1,
      rotate: 0.001,
      ease: Expo.easeInOut,
      duration: 1.75
    });

    gsap.from(herotxt.current, {
      yPercent: 130,
      delay: 1,
      duration: 1,
    });

    gsap.from(spanTxt.current, {
      yPercent: 130,
      delay: 1,
      duration: 0.5,
    });
  }, []);

  return (
    <>
      <main id="home">
        <section ref={hero} id="hero-section" className="banner">
          <div className="hero-txt-container">
            <h1 ref={herotxt}>Tertius AhmaNuph</h1>
          </div>
          <div className="span-txt">
            <h2 ref={spanTxt}>
              <span>New</span>
              <span>Album</span>
              <span>Out</span>
              <span>Now</span>
            </h2>
          </div>
        </section>

        <section id="albums">

          <div className="pt-5">

            <h2 className="text-center" ref={albums}>
              Albums
            </h2>

            <p className="text-center">
              Single and all music albums released between year and year!
            </p>

            <Container fluid>
              <Row>
                <Col xs="12" sm="12" md="6" xl="6">
                  <div className="wvc-column-container wvc-column-bg-default wvc-column-bg-effect-none wvc-font-inherit wvc-column-font-inherit wvc-column-style-none wvc-border-color-none wvc-background-color-default">
                    <div className="wvc-column-inner">
                      <div className="wvc-column-wrapper wpb_wrapper">
                        <div className="wvc-album-disc wvc-album-disc-align-left wvc-album-disc-cd wvc-album-disc-worn-border-yes wvc-album-disc-rotate-hover-stop wvc-element wvc-album-disc-has-link">
                          <span className="wvc-album-disc-link-mask internal-link"></span>
                          <div className="wvc-album-disc-cover-container">
                            <div
                              className="wvc-album-disc-disc-container wow wvc-album-disc-reveal animated"
                              style={{
                                transitionDelay: "0.4s;",
                                visibility: "visible;",
                              }}
                            >
                              <div
                                className="wvc-album-disc-disc-inner"
                                style={{ animationDuration: "3.5s;" }}
                              >
                                <img
                                  decoding="async"
                                  className="wvc-album-disc-disc-img"
                                  src={cd}
                                  width="375"
                                  height="375"
                                  alt="image"
                                  loading="lazy"
                                />
                                <div className="wvc-album-disc-disc-text" />
                              </div>
                              <div className="wvc-album-disc-disc-hole"></div>
                            </div>
                          </div>
                          <div className="wvc-album-disc-cover-inner">
                            <img
                              decoding="async"
                              className="wvc-album-disc-cover-img"
                              src={cdCover}
                              width="375"
                              height="375"
                              alt="cd-cover"
                              title="cd-cover"
                              loading="lazy"
                            />
                            <div className="wvc-album-disc-cover-border"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wvc-text-block wvc-clearfix wvc-element wvc-mobile-text-align- wvc-wow fadeIn"
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
                    <ul className="d-flex flex-wrap align-items-center">
                      <li
                        className={`story ${
                          activeTab === "story" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("story")}
                      >
                        The Story
                      </li>
                      <li
                        className={`concept ${
                          activeTab === "concept" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("concept")}
                      >
                        The Concept
                      </li>
                      <li
                        className={`sound ${
                          activeTab === "sound" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("sound")}
                      >
                        The Sound
                      </li>
                    </ul>

                    <p className={activeTab === "story" ? "" : "d-none"}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus autem esse porro ipsa odit cum, maxime nisi itaque
                      eius sit magni magnam quis molestias cumque, dignissimos
                      quos qui aliquid blanditiis.
                    </p>

                    <p className={activeTab === "concept" ? "" : "d-none"}>
                      blanditiis ipsum dolor sit amet consectetur adipisicing
                      elit. Ducimus autem esse porro ipsa odit cum, maxime nisi
                      itaque eius sit magni magnam quis molestias cumque,
                      dignissimos quos qui aliquid blanditiis.
                    </p>

                    <p className={activeTab === "sound" ? "" : "d-none"}>
                      ipsum Lorem dolor sit amet consectetur adipisicing elit.
                      Ducimus autem esse porro ipsa odit cum, maxime nisi itaque
                      eius sit magni magnam quis molestias cumque, dignissimos
                      quos qui aliquid blanditiis.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
            
            <div className="d-flex align-items-center justify-content-center albums-img position-relative">

            {products.map((product) => (

              <figure>
                <img src={product.image} alt="album one" />
                <figcaption>
                  <NavLink to={`/products/${product.id}`}>
                    {product.title}
                  </NavLink>
                </figcaption>
              </figure>

            ))}

            </div>
          </div>

        </section>
      </main>
    </>
  );
};

export default Home;
