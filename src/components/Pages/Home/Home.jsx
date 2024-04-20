import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import sliderOne from "../../../assets/img/quinten-de-graaf-317389.jpg";
import imageOne from "../../../assets/img/image1.jpeg";
import albumImg from "../../../assets/img/album.jpg";
import discImg from "../../../assets/img/disc.png";

const Home = () => {
  return (
    <>
      <main id="home">
        <section id="hero-section">
          <figure>
            <img src={sliderOne} alt="image" style={{ width: "100%" }} />
          </figure>
        </section>

        <section id="about">
          <Container fluid>
            <Row>
              <Col xs="6" sm="4" md="4" xl="4">
                <figure className="about-image">
                  <img src={imageOne} alt="Shadera's about image" />
                </figure>
              </Col>
              <Col xs="6" sm="8" md="8" xl="8" className="about-text">
                <p>
                  A pop and r&b artist with a fresh and creative approach to
                  making music with a deeper meaning. Surface level artistry is
                  a thing of the past when this artists masterpieces enter the
                  conversation. As the founder of Third Dim9nsion, Shadera is
                  also well versed in both the artistic and creative side of
                  music business, which fuels her passion to help as many other
                  artist as possible.
                </p>
                <h2 className="about-blob">About Me</h2>
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
                className="d-flex position-relative"
              >
                <img className="album-img" src={albumImg} alt="album image" />
                <img className="album-disc" src={discImg} alt="disc image" />
              </Col>
              <Col xs="6" sm="8" md="8" xl="8">
                <ol class="wvc-album-tracklist-list">
                  <li
                    class="wvc-album-tracklist-item wvc-album-tracklist-item-active"
                    itemprop="track"
                    itemscope=""
                    itemtype="http://schema.org/MusicRecording"
                  >
                    <span class="wvc-ati-table">
                      <span class="wvc-ati-cell wvc-ati-title-cell">
                        <span class="wvc-ati-title">Massive Metal Warior</span>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-duration-cell">
                        1:37
                      </span>
                      <span class="wvc-ati-cell wvc-ati-audio-cell">
                        <a href="#" class="wvc-ati-play-button">
                          <i class="wvc-ati-icon wvc-ati-play"></i>
                          <i class="wvc-ati-icon wvc-ati-pause"></i>
                        </a>
                        <audio
                          class="wvc-ati-audio"
                          id="wvc-ati-audio-10730"
                          src="https://preview.wolfthemes.live/app/uploads/sites/3/2017/10/15285490_massive-metal-warrior_by_mdgsoundstudio_preview.mp3"
                        ></audio>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-video-cell"></span>
                      <span class="wvc-ati-cell wvc-ati-action-cell">
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-itunes"></i>
                        </a>
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-amazon"></i>
                        </a>
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-googleplay"></i>
                        </a>
                        <a
                          href="https://preview.wolfthemes.live/loud/?add-to-cart=93"
                          rel="nofollow"
                          data-quantity="1"
                          data-product_id="93"
                          class="wvc-ati-link wvc-ati-add-to-cart-button product_type_simple add_to_cart_button ajax_add_to_cart"
                        >
                          <span
                            class="wvc-ati-add-to-cart-button-title"
                            title=""
                          ></span>
                          <i class="wvc-ati-icon wvc-ati-add-to-cart"></i>
                        </a>
                      </span>
                    </span>
                  </li>
                  <li
                    class="wvc-album-tracklist-item"
                    itemprop="track"
                    itemscope=""
                    itemtype="http://schema.org/MusicRecording"
                  >
                    <span class="wvc-ati-table">
                      <span class="wvc-ati-cell wvc-ati-title-cell">
                        <span class="wvc-ati-title">Sabretooth</span>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-duration-cell">
                        1:48
                      </span>
                      <span class="wvc-ati-cell wvc-ati-audio-cell">
                        <a href="#" class="wvc-ati-play-button">
                          <i class="wvc-ati-icon wvc-ati-play"></i>
                          <i class="wvc-ati-icon wvc-ati-pause"></i>
                        </a>
                        <audio
                          class="wvc-ati-audio"
                          id="wvc-ati-audio-25068"
                          src="https://preview.wolfthemes.live/app/uploads/sites/3/2017/10/12177826_sabretooth_by_mdgsoundstudio_preview.mp3"
                        ></audio>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-video-cell">
                        <a
                          class="wvc-video-opener wvc-ati-link"
                          title=""
                          href="https://vimeo.com/160730254"
                        >
                          <i class="wvc-ati-icon wvc-ati-video"></i>
                        </a>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-action-cell">
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-itunes"></i>
                        </a>
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-amazon"></i>
                        </a>
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-googleplay"></i>
                        </a>
                        <a
                          href="https://preview.wolfthemes.live/loud/?add-to-cart=93"
                          rel="nofollow"
                          data-quantity="1"
                          data-product_id="93"
                          class="wvc-ati-link wvc-ati-add-to-cart-button product_type_simple add_to_cart_button ajax_add_to_cart"
                        >
                          <span
                            class="wvc-ati-add-to-cart-button-title"
                            title=""
                          ></span>
                          <i class="wvc-ati-icon wvc-ati-add-to-cart"></i>
                        </a>
                      </span>
                    </span>
                  </li>
                  <li
                    class="wvc-album-tracklist-item"
                    itemprop="track"
                    itemscope=""
                    itemtype="http://schema.org/MusicRecording"
                  >
                    <span class="wvc-ati-table">
                      <span class="wvc-ati-cell wvc-ati-title-cell">
                        <span class="wvc-ati-title">Bomb Track</span>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-duration-cell">
                        3:04
                      </span>
                      <span class="wvc-ati-cell wvc-ati-audio-cell">
                        <a href="#" class="wvc-ati-play-button">
                          <i class="wvc-ati-icon wvc-ati-play"></i>
                          <i class="wvc-ati-icon wvc-ati-pause"></i>
                        </a>
                        <audio
                          class="wvc-ati-audio"
                          id="wvc-ati-audio-16580"
                          src="https://preview.wolfthemes.live/app/uploads/sites/3/2017/10/9412069_bombtrack_by_mdgsoundstudio_preview.mp3"
                        ></audio>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-video-cell"></span>
                      <span class="wvc-ati-cell wvc-ati-action-cell">
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="https://preview.wolfthemes.live/app/uploads/sites/3/2017/10/9412069_bombtrack_by_mdgsoundstudio_preview.mp3"
                          download=""
                        >
                          <i class="wvc-ati-icon wvc-ati-download"></i>
                        </a>
                      </span>
                    </span>
                  </li>
                  <li
                    class="wvc-album-tracklist-item"
                    itemprop="track"
                    itemscope=""
                    itemtype="http://schema.org/MusicRecording"
                  >
                    <span class="wvc-ati-table">
                      <span class="wvc-ati-cell wvc-ati-title-cell">
                        <span class="wvc-ati-title">Massive Metal Warior</span>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-duration-cell">
                        1:37
                      </span>
                      <span class="wvc-ati-cell wvc-ati-audio-cell">
                        <a href="#" class="wvc-ati-play-button">
                          <i class="wvc-ati-icon wvc-ati-play"></i>
                          <i class="wvc-ati-icon wvc-ati-pause"></i>
                        </a>
                        <audio
                          class="wvc-ati-audio"
                          id="wvc-ati-audio-44980"
                          src="https://preview.wolfthemes.live/app/uploads/sites/3/2017/10/15285490_massive-metal-warrior_by_mdgsoundstudio_preview.mp3"
                        ></audio>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-video-cell"></span>
                      <span class="wvc-ati-cell wvc-ati-action-cell">
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-itunes"></i>
                        </a>
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-amazon"></i>
                        </a>
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-googleplay"></i>
                        </a>
                        <a
                          href="https://preview.wolfthemes.live/loud/?add-to-cart=93"
                          rel="nofollow"
                          data-quantity="1"
                          data-product_id="93"
                          class="wvc-ati-link wvc-ati-add-to-cart-button product_type_simple add_to_cart_button ajax_add_to_cart"
                        >
                          <span
                            class="wvc-ati-add-to-cart-button-title"
                            title=""
                          ></span>
                          <i class="wvc-ati-icon wvc-ati-add-to-cart"></i>
                        </a>
                      </span>
                    </span>
                  </li>
                  <li
                    class="wvc-album-tracklist-item"
                    itemprop="track"
                    itemscope=""
                    itemtype="http://schema.org/MusicRecording"
                  >
                    <span class="wvc-ati-table">
                      <span class="wvc-ati-cell wvc-ati-title-cell">
                        <span class="wvc-ati-title">Sabretooth</span>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-duration-cell">
                        1:48
                      </span>
                      <span class="wvc-ati-cell wvc-ati-audio-cell">
                        <a href="#" class="wvc-ati-play-button">
                          <i class="wvc-ati-icon wvc-ati-play"></i>
                          <i class="wvc-ati-icon wvc-ati-pause"></i>
                        </a>
                        <audio
                          class="wvc-ati-audio"
                          id="wvc-ati-audio-3647"
                          src="https://preview.wolfthemes.live/app/uploads/sites/3/2017/10/12177826_sabretooth_by_mdgsoundstudio_preview.mp3"
                        ></audio>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-video-cell"></span>
                      <span class="wvc-ati-cell wvc-ati-action-cell">
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-itunes"></i>
                        </a>
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-amazon"></i>
                        </a>
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-googleplay"></i>
                        </a>
                        <a
                          href="https://preview.wolfthemes.live/loud/?add-to-cart=93"
                          rel="nofollow"
                          data-quantity="1"
                          data-product_id="93"
                          class="wvc-ati-link wvc-ati-add-to-cart-button product_type_simple add_to_cart_button ajax_add_to_cart"
                        >
                          <span
                            class="wvc-ati-add-to-cart-button-title"
                            title=""
                          ></span>
                          <i class="wvc-ati-icon wvc-ati-add-to-cart"></i>
                        </a>
                      </span>
                    </span>
                  </li>
                  <li
                    class="wvc-album-tracklist-item"
                    itemprop="track"
                    itemscope=""
                    itemtype="http://schema.org/MusicRecording"
                  >
                    <span class="wvc-ati-table">
                      <span class="wvc-ati-cell wvc-ati-title-cell">
                        <span class="wvc-ati-title">Bomb Track</span>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-duration-cell">
                        3:04
                      </span>
                      <span class="wvc-ati-cell wvc-ati-audio-cell">
                        <a href="#" class="wvc-ati-play-button">
                          <i class="wvc-ati-icon wvc-ati-play"></i>
                          <i class="wvc-ati-icon wvc-ati-pause"></i>
                        </a>
                        <audio
                          class="wvc-ati-audio"
                          id="wvc-ati-audio-59926"
                          src="https://preview.wolfthemes.live/app/uploads/sites/3/2017/10/9412069_bombtrack_by_mdgsoundstudio_preview.mp3"
                        ></audio>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-video-cell"></span>
                      <span class="wvc-ati-cell wvc-ati-action-cell">
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="https://preview.wolfthemes.live/app/uploads/sites/3/2017/10/9412069_bombtrack_by_mdgsoundstudio_preview.mp3"
                          download=""
                        >
                          <i class="wvc-ati-icon wvc-ati-download"></i>
                        </a>
                      </span>
                    </span>
                  </li>
                  <li
                    class="wvc-album-tracklist-item"
                    itemprop="track"
                    itemscope=""
                    itemtype="http://schema.org/MusicRecording"
                  >
                    <span class="wvc-ati-table">
                      <span class="wvc-ati-cell wvc-ati-title-cell">
                        <span class="wvc-ati-title">Massive Metal Warior</span>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-duration-cell">
                        1:37
                      </span>
                      <span class="wvc-ati-cell wvc-ati-audio-cell">
                        <a href="#" class="wvc-ati-play-button">
                          <i class="wvc-ati-icon wvc-ati-play"></i>
                          <i class="wvc-ati-icon wvc-ati-pause"></i>
                        </a>
                        <audio
                          class="wvc-ati-audio"
                          id="wvc-ati-audio-3977"
                          src="https://preview.wolfthemes.live/app/uploads/sites/3/2017/10/15285490_massive-metal-warrior_by_mdgsoundstudio_preview.mp3"
                        ></audio>
                      </span>
                      <span class="wvc-ati-cell wvc-ati-video-cell"></span>
                      <span class="wvc-ati-cell wvc-ati-action-cell">
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-itunes"></i>
                        </a>
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-amazon"></i>
                        </a>
                        <a
                          class="wvc-ati-link"
                          title=""
                          href="#"
                          target="_blank"
                        >
                          <i class="wvc-ati-icon wvc-ati-googleplay"></i>
                        </a>
                        <a
                          href="https://preview.wolfthemes.live/loud/?add-to-cart=93"
                          rel="nofollow"
                          data-quantity="1"
                          data-product_id="93"
                          class="wvc-ati-link wvc-ati-add-to-cart-button product_type_simple add_to_cart_button ajax_add_to_cart"
                        >
                          <span
                            class="wvc-ati-add-to-cart-button-title"
                            title=""
                          ></span>
                          <i class="wvc-ati-icon wvc-ati-add-to-cart"></i>
                        </a>
                      </span>
                    </span>
                  </li>
                </ol>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;
