import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useRef } from 'react';
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const Videos = () => {

    const ytHead = useRef(null);
    useGSAP(() => {

        SplitType.create(ytHead.current);

        gsap.set(".yt-header-txt .char", {
            yPercent: 100
        })

        gsap.to(".yt-header-txt .char", {
            yPercent: 0,
            stagger: 0.05,
            duration: 1.7,
            ease: Expo.easeInOut,
        });

        const vedios = gsap.utils.toArray(".vedio-wrapper");

        vedios.forEach((vedio) => {
            gsap.from(vedio, {
                scrollTrigger: {
                    trigger: vedio
                },
                stagger: 0.05,
                duration: 1.4,
                opacity: 0,
                y: 100,
            })
        })


    }, [])


    return (
        <main id='youtube-vedios'>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <h2 className='yt-header-txt' ref={ytHead}>
                            Vedio Songs
                        </h2>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div className="vedio-wrapperp">
                            <iframe className='yt-vedios' src="https://www.youtube.com/embed/n-ENCH-e7PQ" title="Shaderah Dey-Al: Get This Way Silhouette" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div className="vedio-wrapper">
                            <iframe className='yt-vedios' src="https://www.youtube.com/embed/n-ENCH-e7PQ" title="Shaderah Dey-Al: Get This Way Silhouette" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Videos