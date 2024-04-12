import arrowRight from "../../assets/img/arrow-right-R5M4PHG7.svg";
import arrowLeft from "../../assets/img/arrow-left-3PGR7TIV.svg";
import React, { useState, useRef } from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./product-card.css";

const ProductCard = ({ image, title, price, productUrl }) => {
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
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
    }
  };

  return (
    <Col xs={12} s={6} md={4} lg={3} xl={3}>
      <div className="product-card">
        {cursorStyle === "pointer" ? (
          <NavLink to={productUrl}>
            <figure>
              <img
                src={image[currentImageIndex]}
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleImageClick}
                style={{ cursor: cursorStyle }}
                className="product-img"
                alt="product image"
              />
            </figure>
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="product-title">{title}</h2>
              <button>
                <span className="plus-icon m-0 p-0 block">+</span>
              </button>
            </div>
          </NavLink>
        ) : (
          <div>
            <figure>
              <img
                src={image[currentImageIndex]}
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleImageClick}
                style={{ cursor: cursorStyle }}
                className="product-img"
                alt="product image"
              />
            </figure>
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="product-title">{title}</h2>
              <button>
                <span className="plus-icon m-0 p-0 block">+</span>
              </button>
            </div>
          </div>
        )}
        <h3 className="product-price sizes">
          <p>{price}</p>
        </h3>
      </div>
    </Col>
  );
};

export default ProductCard;
