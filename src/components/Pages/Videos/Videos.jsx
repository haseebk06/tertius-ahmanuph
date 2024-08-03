import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { gsap, Expo } from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Videos = () => {
  const ytText = useRef();

  useGSAP(() => {
    SplitType.create(ytText.current);

    gsap.set(".char", { yPercent: 100 });

    gsap.to(".char", {
      yPercent: 0,
      stagger: 0.05,
      duration: 1.7,
      ease: Expo.easeInOut,
    });

    const videoList = gsap.utils.toArray(".yt-videos");

    videoList.forEach((video) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: video,
        },
      });

      tl.to(video, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.5,
        delay: 1,
      });
    });
  }, []);

  return (
    <main id="youtube">
      <Container fluid>
        <Row>
          <h2 className="text-center pb-5" ref={ytText}>
            YouTube Videos
          </h2>
          <Col sm={12} md={12} lg={6}>
            <iframe
              className="yt-videos"
              src="https://www.youtube.com/embed/n-ENCH-e7PQ"
              title="Shaderah Dey-Al: Get This Way Silhouette"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <iframe
              className="yt-videos"
              src="https://www.youtube.com/embed/n-ENCH-e7PQ"
              title="Shaderah Dey-Al: Get This Way Silhouette"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Videos;
