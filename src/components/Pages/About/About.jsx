import "./style.css";
import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageOne from "../../../assets/img/image10.jpeg";
import { useGSAP } from "@gsap/react";
import { Expo, gsap } from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, CSSPlugin, CSSRulePlugin);

const About = () => {
  let aboutMe = useRef(null);
  let image = useRef(null);
  let content = useRef(null);
  let aboutSec = useRef(null);
  let bio = useRef(null);

  let imageReveal = CSSRulePlugin.getRule(".about-image:after");

  useGSAP(() => {
    SplitType.create(aboutMe.current);
    SplitType.create(bio.current.children[0], { types: "lines, words" });
    SplitType.create(bio.current.children[1], { types: "lines, words" });
    SplitType.create(bio.current.children[2], { types: "lines, words" });

    const tl = gsap.timeline();

    tl.set(".about-inner .line", {
      overflow: "hidden",
    });

    tl.set(".about-blob .char",{
        yPercent: 100,
      }
    );

    tl.set(".about-blob .line", {
        overflow: "hidden",
      }
    );

    tl.to(
      ".about-blob .char",
      {
        yPercent: 0,
        stagger: 0.05,
        duration: 0.5,
        delay: 0.5
      },
      "cool kids"
    );

    tl.to(
      imageReveal,
      {
        duration: 1.4,
        left: "100%",
        ease: Expo.easeInOut,
      },
      "cool kids"
    ).from(image.current, {
      scale: 1.6,
      ease: Expo.easeInOut,
      delay: -1.6,
      duration: 1.4,
    });

    tl.from(
      ".about-inner .word",
      {
        duration: 1.5,
        yPercent: 130,
        stagger: 0.01,
        ease: Expo.easeInOut,
      },
      "cool kids"
    );
  }, []);

  return (
    <>
      <section id="about" className="py-5" ref={aboutSec}>
        <Container fluid>
            <div className="about-blob-container">
              <h2 className="about-blob" ref={aboutMe}>
                About SHADERAH Dey-Al
              </h2>
            </div>
          <Row className="p-3">
            <Col xs="12" sm="12" md="12" lg="12" xl="6"
              className="about-text d-flex flex-column align-items-center"
              ref={content}>
              <div className="about-inner" ref={bio}>
                <p>
                  Modest, feminine, and reigning from the south side of
                  Savannah, Georgia, Shaderah Dey-Al is an upcoming local artist
                  whose sound puts a new light into today’s music scene. Her
                  unique voice and style ties together electro pop, hip hop, emo
                  rock, uk grime, and world music into one cohesive addictive
                  sound. Unafraid to dig deep into emotions when writing, she
                  gives herself the freedom to speak on topics that an everyday
                  listener can relate to and appreciate. Steaming from her
                  dedication to leaving a musical impact on the world, Shaderah
                  looks to be a household name in the likes of The Beatles,
                  Michael Jackson, Madonna, and Drake.
                </p>

                <p>
                  Born in Philadelphia, Pennsylvania, Shaderah was a military
                  brat before landing in Savannah at age five. Her biggest
                  inspiration for creating music came from her father’s karaoke
                  machine, which he and she used together, and from her love of
                  reading English literature in elementary school before
                  partaking in local after school programs during junior high;
                  which taught her how to enjoy writing and speaking poetry to
                  others. Her first experience with recording music came in high
                  school when she and a friend agreed to become a musical group,
                  from there they rec-orded on combined studio equipment that
                  included an old church microphone gifted, a gifted dell
                  computer, and a jail broken FL Studio Audio recording system;
                  unto which gave Shaderah the opportunity to develop more into
                  her own writing style. She also grew stronger in music
                  production from her love of music and playing other artists
                  whom her mother carried CDs of in the house; giving her
                  distant mentors to learn from and tap into musically. From
                  there on, after high school graduation, Shaderah began to
                  attend other local artists’ events to get her face out before
                  finally deciding to do professional studio recordings herself
                  and stepping into the Sa-vannah music scene; where her first
                  performance was at the local Pote Palooza event in Octo-ber of
                  2020. Since then Shaderah has become a known and respected
                  artist who has been able to perform at events such as The
                  Gentleman’s Podcast “Drunken Spelling Bee” and The Unity in
                  The Community “Cool Down Music Festival” in the city.
                </p>

                <p>
                  The hopes of Shaderah are to not only continue to grow
                  musically, but to also help bring to-gether the entertainment
                  industry of Savannah together so as the saying goes, “We all
                  Eat!” This dream is what she wants to see flourish and be
                  maintained for generations to come, even after she finds
                  herself out of the main performance spotlight. Shaderah Dey-Al
                  looks forward to all opportunities presented to her and
                  believes there’s a world full of them starting in her own
                  hometown. She looks forward to officially releasing her debut
                  project in the upcoming future and has so much appreciation
                  for all who has work with and supported her during her musical
                  journey.
                </p>
              </div>
            </Col>

            <Col xs="12" sm="12" md="12" lg="12" xl="6">
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
