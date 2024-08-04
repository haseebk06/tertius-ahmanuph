import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { gsap, Expo } from "gsap";
import { useRef, useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

gsap.registerPlugin(ScrollTrigger);

const Videos = () => {
  const ytText = useRef();

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "AIzaSyAJ9Y9-LqrTMvh6LZD4TBRL-Mpk_RJHBsc";
  const CHANNEL_ID = "UC6-7QqFThvSDqr9QV3LwRfA";
  const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10&type=video`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching videos:", error));
    setIsLoading(false);
  }, []);

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
          markers: true,
        },
      });

      tl.from(video, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        delay: 1,
      });
    });
  }, []);

  return (
    <main id="youtube">
      <Container fluid>
        <Row>
          <h2 className="text-center pb-5" ref={ytText}>
            The Album Dive
          </h2>
          {videos.map((video) => (
            <Col sm={12} md={12} lg={6} key={video.id.videoId}>
              <div className="yt-videos-wrapper">
                <iframe
                  className="yt-videos"
                  src={`https://www.youtube.com/embed/${
                    video.id.videoId || <Skeleton count={10} />
                  }`}
                  frameBorder="0"
                  allowFullScreen
                  title={video.snippet.title || <Skeleton />}
                ></iframe>
                <h3 className="yt-title">
                  {video.snippet.title || <Skeleton />}
                </h3>
                <p className="yt-description">
                  {video.snippet.description || <Skeleton />}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Videos;
