import "./header.css";
import logo from "../../logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Header = ({ toggleCart, toggleAlbums }) => {
  const [isHeader, setIsHeader] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { pathname } = useLocation();
  const mobMainRef = useRef(null);

  const updateCartQuantity = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const total = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(total);
  };

  useEffect(() => {
    updateCartQuantity();

    const handleStorageChange = () => {
      updateCartQuantity();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobMainRef.current &&
        !mobMainRef.current.contains(event.target) &&
        !event.target.closest(".hamburger")
      ) {
        setIsHeader(false);
      }
    }

    if (isHeader) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHeader]);

  useEffect(() => {
    // Close the sidebar when the user navigates to a new page
    setIsHeader(false);
  }, [pathname]);

  const handleHamburgerClick = () => {
    setIsHeader((prev) => !prev);
  };

  return (
    <>
      <header
        id="main-menu"
        className={`d-flex align-items-center justify-content-between ${
          pathname === "/room" ? "room__header" : ""
        }`}
      >
        <nav>
          <ul className="d-flex align-items-center">
            <li>
              <NavLink to={`/room`}>
                <img src={logo} id="logo" alt="logo" />
              </NavLink>
            </li>
            <li>
              <NavLink to={`/home`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/about`}>About</NavLink>
            </li>
            <li>
              <button onClick={toggleAlbums}>Albums</button>
            </li>
            <li>
              <NavLink to={`/gallery`}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to={`/youtube`}>YouTube</NavLink>
            </li>
            <li>
              <NavLink to={`/contact`}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={`/shop-all`}>Shop All</NavLink>
            </li>
          </ul>
        </nav>
        <button
          className={`${
            pathname === "/shop-all" || /products\/.*$/.test(pathname)
              ? "d-block"
              : "d-none"
          }`}
          onClick={toggleCart}
        >
          Cart ( {totalQuantity} )
        </button>
      </header>

      <header id="mob-menu">
        <div
          className={`d-flex align-items-center justify-content-between ${
            pathname === "/room" ? "room__header" : ""
          }`}
        >
          <div>
            <NavLink to={`/room`}>
              <img src={logo} id="logo" alt="logo" width={150} />
            </NavLink>
          </div>
          <button className="hamburger" onClick={handleHamburgerClick}>
            |||
          </button>
        </div>
      </header>
      <nav
        ref={mobMainRef}
        id="mob-main"
        className={`${isHeader ? "left-0" : "left-full"} ${
          pathname === "/room" ? "transparent" : ""
        }`}
      >
        <ul className="d-flex flex-column align-items-left">
          <li>
            <NavLink to={`/home`}>Home</NavLink>
          </li>
          <li>
            <div onClick={toggleAlbums}>Albums</div>
          </li>
          <li>
            <NavLink to={`/about`}>About</NavLink>
          </li>
          <li>
            <NavLink to={`/gallery`}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to={`/youtube`}>YouTbe</NavLink>
          </li>
          <li>
            <NavLink to={`/contact`}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={`/shop-all`}>Shop All</NavLink>
          </li>
          <li>
            <div
              className="d-block"
              onClick={() => {
                toggleCart();
                setIsHeader(false);
              }}
            >
              Cart ( {totalQuantity} )
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
