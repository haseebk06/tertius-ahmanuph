import "./home.css";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import { Power3, gsap } from "gsap";
import cdCover from "../../../assets/img/cd-cover.jpg";
import cd from "../../../assets/img/cd.jpg";
import albumOne from "../../../assets/img/album_1.jpg";
import albumTwo from "../../../assets/img/album_2.jpg";
import albumThree from "../../../assets/img/album_3.jpg";
import albumFour from "../../../assets/img/album_4.jpg";

const Home = () => {
  let albums = useRef(null);
  let hero = useRef(null);

  useEffect(() => {
    // Ensure elements are not null before running the animation
    if (hero.current) {
      gsap.to(hero.current, {
        scale: 1,
        delay: 2,
        ease: Power3.easeInOut,
      });

      // Ensuring the children exist
      if (hero.current.children.length > 0) {
        gsap.to(hero.current.children, {
          scale: 1,
          delay: 2,
          ease: Power3.easeInOut,
        });
      }
    }
  }, []);

  return (
    <>
      <main id="home">
        <section ref={hero} id="hero-section" className="banner">
          <h1>Tertius AhmaNuph</h1>
          <h2>
            <span>New</span>
            <span>Album</span>
            <span>Out</span>
            <span>Now</span>
          </h2>
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
            <div class="d-flex align-items-center justify-content-center albums-img position-relative">
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
      </main>
    </>
  );
};

export default Home;
