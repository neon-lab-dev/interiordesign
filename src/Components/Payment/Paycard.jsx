import React from "react";
import { IMAGES } from "../../assets/Assets";
import "./Payment.css";

const Paycard = () => {
  return (
    <div className="card-cart-p">
      <div className="card-image-cont-p">
        <img src={IMAGES.blue_chair} alt="chair" className="card-image" />
      </div>
      <div className="card-details-p">
        <p className="title-p">Poise Study Chair with Net Black</p>
        <p className="delivery"> Delivered by 28-01-2024</p>

        <div className='price-details-p'>
          <p className='price1-p'>₹414</p>
          <p className='price2-p'>₹1,249</p>
          <p className='offer-p'>66% off</p>            
        </div>
        <div className="container1">
          <div className="quan-col-cont">
            <div>
              <p className="quantity">Quantity</p>
              <div className="quantity-box">
                <button className="quantity-b1">-</button>
                <p className="number">1</p>
                <button className="quantity-b2">+</button>
              </div>
            </div>

            <div className="color">
              <p>Color</p>
              <div className="color-box">
                <div className="color1"></div>
                <div className="color2"></div>
                <div className="color3"></div>
                <div className="color4"></div>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="total-price">
              <p className="title2">Total Price-:</p>
              <p className="title3">₹414</p>
            </div>
            <div className="discount">
              <p className="title2">Discount-:</p>
              <p className="title3">₹00.00</p>
            </div>
            <div className="delivery-charge">
              <p className="title2">Delivery Charge-:</p>
              <p className="title3">₹414</p>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="code">code-:abd14264255155</button>
          <button className="apply">Apply</button>
        </div>
        <div>
          <button className="proceed">Proceed to pay</button>
          <button className="buy-now-p">Buy Now</button>

        </div>
      </div>
    </div>
  );
};

export default Paycard;
