// import "./ProductInfo.css"

// const ProductInfo = () => {
//     return (
//         <div className="d-flex flex-column product-info">
//             <div className="product-name">
//                 Poise Study Chair with Net Back
//             </div>
//             <div className="d-flex align-items-center gap-3">
//                 <span className="product-price">₹414</span>
//                 <span className="product-muted">₹1,249</span>
//                 <span className="discount">66% off</span>
//             </div>
//             <div className="d-flex flex-column gap-2 sizeDiv">
//                 <span className="product-sub-title">
//                     Size
//                 </span>
//                 <div className="d-flex align-items-center gap-2 size-btn">
//                     <button className="btn btn-black">5</button>
//                     <button className="btn btn-black">6</button>
//                     <button className="btn btn-black">Short Handle</button>
//                     <button className="btn btn-black">Harrow</button>
//                 </div>
//             </div>
//             <div className="d-flex items-center gap-5 borderDiv" >
//                 <div className="d-flex flex-column quantityDiv">
//                     <div className="product-sub-title">
//                         Quantity
//                     </div>
//                     <div className="d-flex items-center gap-2 quantity">
//                         <span>-</span>
//                         <span>1</span>
//                         <span>+</span>
//                     </div>
//                 </div>
//                 <div className="d-flex flex-column gap-2 colorsDiv">
//                     <div className="product-sub-title">
//                         Colors
//                     </div>
//                     <div className="d-flex items-center gap-2 product-colors">
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </div>
//                 </div>

//             </div>
//             <div className="d-flex flex-column gap-3 w-100 product-info-btn">
//                 <button className="btn btn-lg-colored py-2">
//                     Buy Now
//                 </button>
//                 <button className="btn btn-base-transparent">
//                     Add to Cart
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default ProductInfo


import React from "react";
import { useState } from "react";
import "./ProductInfo.css";

const ProductInfo = ({ product }) => {
  const { 
    name, 
    sizes = [], 
    description, 
    ratings, 
    color, 
    Availablecolor, 
    basePrice, 
    discountedPercent,
    _id,
    images=[]
  } = product || {};

  // Calculate discounted price
  const discountedPrice = basePrice
    ? (basePrice - (basePrice * discountedPercent) / 100).toFixed(2)
    : null;


    console.log(product._id);
  // Example quantity logic
  const [quantity, setQuantity] = React.useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedProducts, setSelectedProducts] = useState({});

  const calculatePrice = (basePrice, discountedPercent) => {
    return basePrice - (basePrice * discountedPercent) / 100;
  };


  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setSelectedProducts({
      productId: _id,
      name: name,
      selectedSize: size.size,
      price: calculatePrice(size.basePrice, size.discountedPercent),
      image: images[0],
    });
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };


  const handleAddToCart = () => {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const isProductExist = cartProducts.find((product) => product.productId === _id);

    if(isProductExist){
      console.log("Product already exists in the cart");
      alert("Product already exists in the cart");
    }else{
      cartProducts.push(
        {
          productId: _id,
        name: name,
        size: selectedSize.size,
        basePrice: selectedSize.basePrice || 0,
        discountedPercent: selectedSize.discountedPercent || 0,

        image: images[0]?.url ,
        quantity : quantity
        }
      )
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

      console.log("Product added to the cart");
    }
  }

  return (
    <div className="d-flex flex-column product-info">
      {/* Product Name */}
      <div className="product-name">{name || "Product Name"}</div>

      {/* Price Section */}
      <div className="d-flex align-items-center gap-3">
        <span className="product-price">₹{calculatePrice(selectedSize.basePrice, selectedSize.discountedPercent)}</span>
        <span className="product-muted">₹{selectedSize.basePrice}</span>
        <span className="discount">{selectedSize.discountedPercent || 0}% off</span>
      </div>

      {/* Sizes Section */}
      <div className="d-flex flex-column gap-2 sizeDiv">
        <span className="product-sub-title">Size</span>
        <div className="d-flex align-items-center gap-2 size-btn">
          {sizes.length > 0 ? (
            sizes.map((item, index) => (
              <button key={index} className="btn btn-black"
              onClick={() => handleSizeClick(item)}

              >
                {item.size}
              </button>
            ))
          ) : (
            <span>No sizes available</span>
          )}
        </div>
      </div>

      {/* Quantity and Colors Section */}
      <div className="d-flex items-center gap-5 borderDiv">
        <div className="d-flex flex-column quantityDiv">
          <div className="product-sub-title">Quantity</div>
          <div className="d-flex items-center gap-2 quantity">
            <span onClick={() => handleQuantityChange("decrement")}>-</span>
            <span>{quantity}</span>
            <span onClick={() => handleQuantityChange("increment")}>+</span>
          </div>
        </div>
        <div className="d-flex flex-column gap-2 colorsDiv">
          <div className="product-sub-title">Colors</div>
          <div className="d-flex items-center gap-2 product-colors">
            <span>{Availablecolor || "Default Color"}</span>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="d-flex flex-column gap-3 w-100 product-info-btn">
        <button className="btn btn-lg-colored py-2">Buy Now</button>
        <button className="btn btn-base-transparent" 
        onClick={handleAddToCart}
        >Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductInfo;
