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
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../ProductCard";
import "./shop.css";

const products = [
  {
    id: "scorpion-hoodie-faded-green",
    title: "SCORPION HOODIE",
    price: "$110.00",
    image: [hoddieOne, hoddieTwo, hoddieThree],
  },
  {
    id: "nike-clb-hat-white",
    title: "NIKE CLB HAT WHITE",
    price: "$28.00",
    image: [hatWhiteOne, hatWhiteTwo, hatWhiteThree],
  },
  {
    id: "so-far-gone-magnet-set",
    title: "SO FAR GONE MAGNETIC LETTER SET",
    price: "$8.00",
    image: [front2Magnet, back2Magnet],
  },
  {
    id: "ovo-sound-crewneck",
    title: "OVO SOUND CREWNECK - BLACK",
    price: "$94.00",
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

const Shop = () => {
  return (
    <>
      <main id="shop">
        <h1>Shop All</h1>

        <Container fluid>
          <Row>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                productUrl={`/products/${product.id}`}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Shop;
