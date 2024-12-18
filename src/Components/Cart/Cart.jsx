import { useEffect, useState } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(products);
  }, []);

  // Save cartProducts back to localStorage whenever it changes
  const updateLocalStorage = (updatedProducts) => {
    setCartProducts(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
  };

  // Function to handle quantity increase
  const handleIncreaseQuantity = (index) => {
    const updatedProducts = [...cartProducts];
    updatedProducts[index].quantity += 1;
    updateLocalStorage(updatedProducts);
  };

  // Function to handle quantity decrease
  const handleDecreaseQuantity = (index) => {
    const updatedProducts = [...cartProducts];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      updateLocalStorage(updatedProducts);
    }
  };

  // Function to handle product removal
  const handleRemoveProduct = (index) => {
    const updatedProducts = cartProducts.filter((_, i) => i !== index);
    updateLocalStorage(updatedProducts);
    window.dispatchEvent(new Event("cartUpdate"));

  };

  return (
    <div>
      <section className="pt-4 flex-grow-1" style={{ minHeight: '70vh' }}>
        <h4 className="items fw-medium">
          Your Cart: {cartProducts.length} {cartProducts.length === 1 ? "item" : "items"}
        </h4>

        {cartProducts.length !== 0 ? (
          <div className="w-100 d-flex justify-content-between gap-5 flex-lg-row flex-column">
            {/* Product List */}
            <div className="flex-grow-1">
              {cartProducts.map((product, index) => (
                <div
                  key={index}
                  className="d-flex flex-md-row flex-column align-items-center gap-3 border border-secondary rounded-2 shadow shadow-md overflow-hidden p-2 mb-3"
                  style={{ height: "280px" }}
                >
                  {/* Product Image */}
                  <div className="d-flex items-center justify-center bg-image p-1 rounded-2">
                    <img src={product.image} alt={product.name} className="rounded-1" style={{ height: "250px" }} />
                  </div>

                  {/* Product Details */}
                  <div className="d-flex flex-column justify-content-between h-100 items-start">
                    <div className="d-flex flex-column">
                      <p className="text-lg fw-normal">
                        <span className="fw-medium">Product :</span> {product.name || "Product Name"}
                      </p>
                      <span>- {product.description || "Description"}</span>
                    </div>

                    {/* Quantity Control */}
                    <div className="d-flex items-start flex-column gap-1">
                      <span>
                        <b>Quantity: {product.quantity}</b>
                      </span>
                      <div className="d-flex items-center quantity-btns">
                        <button
                          className="btn btn-transparent"
                          onClick={() => handleDecreaseQuantity(index)}
                        >
                          -
                        </button>
                        <button className="btn btn-transparent">{product.quantity}</button>
                        <button
                          className="btn btn-transparent"
                          onClick={() => handleIncreaseQuantity(index)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="d-flex items-center gap-2">
                      <span className="text-muted">₹{product.basePrice}</span>
                      <span className="price">
                        ₹
                        {(
                          product.basePrice -
                          product.basePrice * (product.discountedPercent / 100)
                        ).toFixed(2)}
                      </span>
                      <span className="discount">{product.discountedPercent}% off</span>
                    </div>

                    {/* Remove Button */}
                    <button
                      className="btn btn-transparent w-100"
                      style={{ maxWidth: '300px' }}
                      onClick={() => handleRemoveProduct(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Details */}
            <div
              className="d-flex flex-column items-start border border-secondary rounded-2 shadow shadow-md overflow-hidden p-2"
              style={{ minWidth: "340px", height: "fit-content" }}
            >
              <h5 className="fw-light text-uppercase border-bottom pb-1">Price details</h5>

              {/* Total Calculation */}
              <div className="d-flex flex-column items-start gap-2 border-bottom py-2">
                <div className="d-flex justify-content-between w-100">
                  <span>Price ({cartProducts.length} items)</span>
                  <span className="price">
                    ₹
                    {cartProducts
                      .reduce((total, product) => total + product.basePrice * product.quantity, 0)
                      .toFixed(2)}
                  </span>
                </div>

                <div className="d-flex justify-content-between w-100">
                  <span>Discount</span>
                  <span className="discount">
                    - ₹
                    {cartProducts
                      .reduce(
                        (total, product) =>
                          total +
                          (product.basePrice * (product.discountedPercent / 100)) * product.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>

                <div className="d-flex justify-content-between w-100">
                  <span>Delivery Charges</span>
                  <span>Free</span>
                </div>
              </div>

              {/* Final Total */}
              <div className="d-flex justify-content-between w-100 py-2 border-bottom">
                <span>Total Amount</span>
                <span className="price">
                  ₹
                  {cartProducts
                    .reduce(
                      (total, product) =>
                        total +
                        (product.basePrice -
                          product.basePrice * (product.discountedPercent / 100)) *
                        product.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>

              <div className="d-flex flex-column align-items-start gap-2 pt-2">
                <div className="d-flex">
                  <p>
                    You will save{" "}
                    <span className="discount d-inline">
                      ₹
                      {cartProducts
                        .reduce(
                          (total, product) =>
                            total +
                            (product.basePrice * (product.discountedPercent / 100)) *
                            product.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>{" "}
                    on this order
                  </p>
                </div>
                <button className="btn btn-lg-colored w-100 py-2">Place Order</button>
              </div>
            </div>
          </div>
        ) : (
          <p>Your cart is empty!</p>
        )}
      </section>
    </div>
  );
};

export default Cart;
