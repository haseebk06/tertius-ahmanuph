import { Header, Shop, Footer, Products, Home, Cart } from "./components";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  
  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header toggleCart={() => setShowCart(!showCart)}/>
      <Cart showCart={showCart} closeCart={closeCart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop-all" element={<Shop />}></Route>
        <Route path="/products/:id" element={<Products />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
