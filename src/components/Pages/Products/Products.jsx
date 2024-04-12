import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import ProductCard from "../../ProductCard";
import arrowRight from "../../../assets/img/arrow-right-R5M4PHG7.svg";
import arrowLeft from "../../../assets/img/arrow-left-3PGR7TIV.svg";
import hoddieOne from "../../../assets/products/5801_final_230224.jpg";
import hoddieTwo from "../../../assets/products/5802_final_230224.jpg";
import hoddieThree from "../../../assets/products/5803_final_230224.jpg";
import hatWhiteOne from "../../../assets/products/hat-white1.jpg";
import hatWhiteTwo from "../../../assets/products/hat-white2.jpg";
import hatWhiteThree from "../../../assets/products/hat-white3.jpg";
import front2Magnet from "../../../assets/products/front2_magnet.png";
import back2Magnet from "../../../assets/products/back2_magnet.png";
import sweaterBlackFront from "../../../assets/products/2601_sweater_black_front_final_211221.jpg";
import sweaterBlackDetail from "../../../assets/products/2601_sweater_black_detail_final_211221.jpg";
import sweaterBlackBack from "../../../assets/products/2601_sweater_black_back_final_211221.jpg";
import moreLifeFront from "../../../assets/products/MORELIFE_WHITETEE_FRONT.png";
import moreLifeDetail from "../../../assets/products/MORELIFE_WHITETEE_DETAIL.png";
import moreLifeBack from "../../../assets/products/MORELIFE_WHITETEE_BACK.png";
import MORELIFE_REVENGE_TEE_BACK from "../../../assets/products/MORELIFE_REVENGE_TEE_BACK.png";
import MORELIFE_REVENGE_TEE_FRONT from "../../../assets/products/MORELIFE_REVENGE_TEE_FRONT.png";
import final_front from "../../../assets/products/5601_final_230227.jpg";
import final_detail from "../../../assets/products/5603_final_230227.jpg";
import final_back from "../../../assets/products/5602_final_230227.jpg";
import sweatpant_fornt from "../../../assets/products/5701_final_230227.jpg";
import sweatpant_detail from "../../../assets/products/5703_final_230227.jpg";
import sweatpant_back from "../../../assets/products/5702_final_230227.jpg";
import "./products.css";

const products = [
  {
    id: "scorpion-hoodie-faded-green",
    title: "SCORPION HOODIE",
    price: "$110.00",
    description: `Hooded cotton sweatshirt with kangaroo pocket. Embroidered Scorpion graphic on front chest.

    We recommend sizing down one size, please check size guide for exact product dimensions.`,
    image: [hoddieOne, hoddieTwo, hoddieThree],
  },
  {
    id: "nike-clb-hat-white",
    title: "NIKE CLB HAT WHITE",
    price: "$28.00",
    description: `6-Panel Legacy 91 Hat silhouette. Dri-Fit Bozz fabric. Embroidered swoosh on center front, "Kiss: graphic in semi- transparent ink on the bill, and "CLB" matte screen print sign-off on the back. Made in Vietnam.`,
    image: [hatWhiteOne, hatWhiteTwo, hatWhiteThree],
  },
  {
    id: "so-far-gone-magnet-set",
    title: "SO FAR GONE MAGNETIC LETTER SET",
    price: "$8.00",
    description: `43 Magnet letters/numbers made from the classic So Far Gone Font.`,
    image: [front2Magnet, back2Magnet],
  },
  {
    id: "ovo-sound-crewneck",
    title: "OVO SOUND CREWNECK - BLACK",
    price: "$94.00",
    description: `Premium black fleece crewneck sweatshirt with HD print OVO Sound logo on chest.`,
    image: [sweaterBlackFront, sweaterBlackDetail, sweaterBlackBack],
  },
  {
    id: "more-life-t-shirt-white",
    title: "MORE LIFE T-SHIRT - WHITE",
    description: `Short sleeve cotton t-shirt.
    Screen printed More Life graphic on front. 
    Screen printed 5 year graphic on upper back.`,
    price: "$45.00",
    image: [moreLifeFront, moreLifeDetail, moreLifeBack],
  },
  {
    id: "revenge-longsleeve-t-shirt",
    title: "REVENGE LONGSLEEVE T-SHIRT",
    description: `Cotton longsleeve t-shirt. Screen printed Revenge graphic on front. Screen printed Summer Sixteen graphic on back. Screen printed 5 Years graphic on left wrist.`,
    price: "$65.00",
    image: [MORELIFE_REVENGE_TEE_FRONT, MORELIFE_REVENGE_TEE_BACK],
  },
  {
    id: "views-hoodie-faded-brick",
    title: "VIEWS HOODIE",
    description: `Hooded cotton sweatshirt with kangaroo pocket. Embroidered Views graphic on front chest.

    We recommend sizing down one size, please check size guide for exact product dimensions.`,
    price: "$110.00",
    image: [final_front, final_detail, final_back],
  },
  {
    id: "views-sweatpant-faded-brick",
    title: "VIEWS SWEATPANT",
    description: `Premium faded brick fleece sweatpant with embroidered Views graphic above back right pocket.`,
    price: "$100.00",
    image: [sweatpant_fornt, sweatpant_detail, sweatpant_back],
  },
];

const Products = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const relatedProducts = products.filter((item) => item.id !== id);

  const [cursorStyle, setCursorStyle] = useState("pointer");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const imageRect = imageRef.current.getBoundingClientRect();
    const imageWidth = imageRect.width;
    const mouseX = e.clientX - imageRect.left;

    if (mouseX < imageWidth / 4) {
      setCursorStyle(`url(${arrowLeft}) 15 8, e-resize`);
    } else if (mouseX > (3 * imageWidth) / 4) {
      setCursorStyle(`url(${arrowRight}) 15 8, e-resize`);
    } else {
      setCursorStyle("pointer");
    }
  };

  const handleMouseLeave = () => {
    setCursorStyle("pointer");
  };

  const handleImageClick = () => {
    if (cursorStyle !== "pointer") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product.image.length
      );
    }
  };

  return (
    <>
      <Container fluid className="product-detail">
        <Row>
          <Col>
            <figure>
              <img
                src={product.image[currentImageIndex]}
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleImageClick}
                style={{ cursor: cursorStyle }}
                className="product-img"
                alt="product image"
              />
            </figure>
          </Col>
          <Col>
            <section className="d-flex flex-column justify-content-between h-100">
              <div className="head">
                <h1 className="product-title">{product.title}</h1>
                <h2 className="product-price">{product.price}</h2>
              </div>
              <div className="foot">
                <p className="porduct-descripion w-50">{product.description}</p>
                <button className="size-guide">Size Guide</button>

                <div id="Size" className="position-relative">
                  <button type="button" className="btn-size text-center w-100">
                    Size:S
                  </button>
                  <button
                    type="button"
                    className="btn-add-to-cart text-center w-100"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </section>
          </Col>
          <h2 className="text-center related-products">Related Products</h2>

          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              productUrl={`/products/${relatedProduct.id}`}
              title={relatedProduct.title}
              price={relatedProduct.price}
              image={relatedProduct.image}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
