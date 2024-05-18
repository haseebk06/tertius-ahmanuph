import "./header.css";
import logo from "../../logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = ({ toggleCart, cartQuantity }) => {

  const [isHeader, setIsHeader] = useState(false);

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <header
        id="main-menu"
        className="d-flex align-items-center justify-content-between"
      >
        <nav>
          <ul className="d-flex align-items-center">
            <li>
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/about`}>About</NavLink>
            </li>
            <li>
              <a href={'#albums'}>Albums</a>
            </li>
            <li>
              <NavLink to={`/gallery`}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to={`/contact`}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={`/shop-all`}>Shop All</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <NavLink to={`/`}>
            <img src={logo} id="logo" alt="logo" />
          </NavLink>
        </div>
        <button className="d-block" onClick={toggleCart}>
          Cart ( {totalQuantity} )
        </button>
      </header>

      <header id="mob-menu">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <NavLink to={`/`}>
              <img src={logo} id="logo" alt="logo" width={150} />
            </NavLink>
          </div>
          <button className="hamburger" onClick={() => setIsHeader(!isHeader)}>|||</button>
        </div>
      </header>
      <nav id="mob-main" className={`${isHeader ? 'left-0' : 'left-full'}`}>
        <ul className="d-flex flex-column align-items-left">
          <li>
            <NavLink to={`/albums`}>Albums</NavLink>
          </li>
          <li>
            <NavLink to={`about`}>About</NavLink>
          </li>
          <li>
            <NavLink to={`/projects`}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={`/shop-all`}>Shop All</NavLink>
          </li>
        </ul>
        <button className="d-block" onClick={() => {
          toggleCart();
          setIsHeader(!isHeader);
        }}>
          Cart ( {totalQuantity} )
        </button>
      </nav>
    </>
  );
};

export default Header;
