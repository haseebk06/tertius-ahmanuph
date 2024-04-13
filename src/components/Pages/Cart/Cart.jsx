import "./cart.css";
import front2Magnet from "../../../assets/products/front2_magnet.png";

const Cart = ({showCart, closeCart}) => {

  return (
    <>
      <div className={`cart-container ${showCart ? 'right-0' : 'right-full'}`} >
        <div className="grid">
          <div className="vh-100 d-flex flex-column">
            <div className="border-bottom h-18 border-dark d-flex align-items-center justify-content-between">
              <button className="antialiased" onClick={closeCart}>Close</button>
              <button className="antialiased">Cart (0)</button>
              <button className="antialiased d-none">Cart (0)</button>
              <button className="antialiased d-none text-neutral-300">
                Close
              </button>
            </div>
            <section className="overflow-y-scroll scrollbar-hidden antialiased">
              <ul className="d-flex flex-column">
                <li className="d-flex justify-content-between antialiased border-bottom border-dark">
                  <div className="w-50" style={{ marginRight: "1.5rem" }}>
                    <img
                      src={front2Magnet}
                      alt="cart image"
                      className="cart-img"
                    />
                  </div>
                  <div className="d-flex justify-content-between w-50">
                    <div className="grid gap-2">
                      <h3 className="whitespace-pre-wrap w-100">
                        <span className="whitespace-pre-wra">
                          SO FAR GONE MAGNETIC LETTER SET - RED
                        </span>
                        <div>$8.00</div>
                      </h3>
                      <div className="d-flex align-items-center" style={{marginTop:"-30px"}}>
                        <label className="sr-only">Quantity, 1</label>
                        <div
                          className="w-100 h-25 d-flex align-items-center border border-dark"
                          style={{ borderRadius: "9999px" }}
                        >
                          <form
                            action=""
                            style={{ width: "33.3333%", paddingLeft: "1rem" }}
                          >
                            <input
                              type="hidden"
                              name="cartAction"
                              value="Update_Cart"
                            />
                            <button
                              name="decrease-quantity"
                              className="btn-decrease antialiased d-flex align-items-center justify-content-center"
                              value={0}
                            >
                              <span>-</span>
                            </button>
                          </form>
                          <div className="h-100 antialiased d-flex align-items-center justify-content-center cart-value">
                            1
                          </div>
                          <form
                            action=""
                            className="d-flex align-items-center justify-content-end"
                            style={{ width: "33.3333%", paddingRight: "1rem" }}
                          >
                            <input
                              type="hidden"
                              name="cartAction"
                              value="Update_Cart"
                            />
                            <button
                              name="increase-quantity"
                              className="btn-increase antialiased d-flex align-items-center justify-content-center"
                              value={0}
                            >
                              <span>+</span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <section>
              <div className="d-flex align-items-center justify-content-between" style={{padding:"1.5rem"}}>
                <dt className="whitespace-pre-wrap antialiased">Subtotal</dt>
                <dd
                  data-test="subtotal"
                  className="whitespace-pre-wrap antialiased"
                >
                  <div>$118.00</div>
                </dd>
              </div>
              <div className="d-flex flex-column">
                <a
                  width="full"
                  href="https://checkout.drakerelated.com/cart/c/c1-1f1b271ed8150429bb028236417d8f29?key=aed660853cce3ca044c66a8a6d6e820c"
                  class="w-100 position-relative border-top border-dark text-start d-flex align-items-center justify-content-between antialiased btn-checkout"
                >
                  Checkout
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
