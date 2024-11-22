import React from "react";
import "./ShopSignature.css";
import { ICONS, IMAGES } from "../../../assets/Assets";

const ShopSignature = () => {
  const bedsheet = [
    {
      img: IMAGES.bedsheet,
      heading: "Bedsheets",
      desc: "Experience luxurious comfort with our premium bedsheets, crafted for quality and style.",
    },
    {
      img: IMAGES.bedsheet,
      heading: "Bedsheet(Category)",
      desc: "Our collection of chairs blends comfort and style, perfect for any space.",
    },
    {
      img: IMAGES.bedsheet,
      heading: "Bedsheet(Category)",
      desc: "Designed with elegance and functionality, our tables enhance your living area.",
    },
  ];
  return (
    <section className="w-100 shopsignature-container">
      <div className="shops-header">
        <p className="subHeading">OUR PRODUCTS</p>
        <h3 className="heading">Shop Our Signature Design Products</h3>
      </div>
      <div className="shops-content">
        {bedsheet.map((item, index) => (
          <div className="bedsheetcard-container" key={index}>
            <div className="bedsheet-image-cont">
              <img src={item.img} alt="bedsheet" />
              <div className="shopnow-btn">
                <p>Shop now</p>
                <div className="shopnow-btn-arrow">
                  <img src={ICONS.ArrowRightUp} alt="arrow" />
                </div>
              </div>
            </div>

            <div className="bedsheet-desc">
              <h4>{item.heading}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopSignature;
