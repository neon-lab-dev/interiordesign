import { useEffect, useState } from "react";
import bed from "../../assets/Images/bedsheet.png"

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Fetch products from localStorage
    const products = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(products);
  }, []);

  return (
    <div>
      <section className="pt-4">
        <h4 className="items fw-medium">Your Cart: {cartProducts.length} items</h4>
        <div className="w-100 d-flex justify-content-between gap-5 flex-lg-row flex-column">
          <div className="d-flex flex-md-row flex-column align-items-center gap-3 border border-secondary rounded-2 shadow shadow-md overflow-hidden p-2 flex-grow-1" style={{ height: "280px" }}>
            <div className="d-flex items-center justify-center bg-image p-1 rounded-2 ">
              <img src={bed} alt="" className="rounded-1" style={{ height: '250px' }} />
            </div>
            <div className="d-flex flex-column justify-content-between h-100 items-start">
              <div className="d-flex flex-column">
                <p className="text-lg fw-normal"><span className="fw-medium">Product :</span> English Willow Seasoned Bat</p>
                <span>- Ventue Sky Blue</span>
              </div>
              <div className="d-flex items-start flex-column gap-1">
                <span><b>Quantity: 1</b></span>
                <div className="d-flex items-center quantity-btns">
                  <button className="btn btn-transparent">-</button>
                  <button className="btn btn-transparent">1</button>
                  <button className="btn btn-transparent">+</button>
                </div>
              </div>
              <div className="d-flex items-center gap-2">
                <span className="text-muted">₹5000.00</span>
                <span className="price">₹3750.00</span>
                <span className="discount">25% off</span>
              </div>
              <button className="btn btn-transparent w-100">Remove</button>
            </div>
          </div>
          <div className="d-flex flex-column items-start border border-secondary rounded-2 shadow shadow-md overflow-hidden p-2" style={{ minWidth: '340px' }}>
            <h5 className="fw-light text-uppercase border-bottom pb-1">Price details</h5>
            <div className="d-flex flex-column items-start gap-2 border-bottom py-2">
              <div className="d-flex justify-content-between w-100">
                <span>Price (1 item)</span>
                <span className="price">₹3750.00</span>
              </div>

              <div className="d-flex justify-content-between w-100">
                <span>Discount</span>
                <span className="discount">- ₹1250.00</span>
              </div>
              <div className="d-flex justify-content-between w-100">
                <span>Delivery Charges</span>
                <span>Free</span>
              </div>
            </div>
            <div className="d-flex justify-content-between w-100 py-2 border-bottom">
              <span>Total Amount</span>
              <span className="price">₹3750.00</span>
            </div>
            <div className="d-flex flex-column align-items-start gap-2 pt-2">
              <div className="d-flex">
                <p>You will save <span className="discount d-inline">₹1250.00</span> on this order</p>
              </div>
              <button className="btn btn-lg-colored w-100 py-2">Place Order</button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Cart;
