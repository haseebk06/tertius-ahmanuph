import {
  Header,
  Shop,
  Footer,
  Products,
  Home,
  Cart,
  Loader,
  About,
  Gallery,
} from "./components";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Lenis from "lenis";
import Contact from "./components/Pages/Contact/Contact";

function App() {
  const [showCart, setShowCart] = useState(false);

  const closeCart = () => {
    setShowCart(false);
  };

  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Loader />
      <Header toggleCart={() => setShowCart(!showCart)} />
      <Cart showCart={showCart} closeCart={closeCart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop-all" element={<Shop />}></Route>
        <Route path="/products/:id" element={<Products />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
