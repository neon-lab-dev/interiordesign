import "./ShopSignature.css";
import { ICONS, IMAGES } from "../../../assets/Assets";
import { Link } from "react-router-dom";

const ShopSignature = () => {
  const bedsheet = [
    {
      img: IMAGES.bed,
      heading: "300 TC Bedsheets",
      desc: "Light, breathable, and perfect for everyday comfort.",
    },
    {
      img: IMAGES.bedsheet,
      heading: "400 TC Bedsheets",
      desc: "Smooth, soft, and a touch of luxury for restful nights.",
    },
    {
      img: IMAGES.bedsheet,
      heading: "600 TC Bedsheets",
      desc: "Luxuriously silky and durable for an indulgent sleep experience.",
    },
  ];
  return (
    <section className="w-100 shopsignature-container">
      <div className="shops-header">
        <p className="subHeading">OUR PRODUCTS</p>
        <h3 className="heading text-center">Shop Our Signature Design Products</h3>
      </div>
      <div className="shops-content">
        {bedsheet.map((item, index) => (
          <div className="bedsheetcard-container" key={index}>
            <div className="bedsheet-image-cont">
              <img src={item.img} alt="bedsheet" />
              <Link to={"/bedsheets"} className="shopnow-btn">
                <p>Shop now</p>
                <div className="shopnow-btn-arrow">
                  <img src={ICONS.ArrowRightUp} alt="arrow" />
                </div>
              </Link>
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
