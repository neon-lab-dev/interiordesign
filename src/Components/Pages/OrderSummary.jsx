import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import user from "../../assets/Icons/user.svg";

const OrderSummary = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [userData, setUserData] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(products);

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://interior-design-backend-nine.vercel.app/api/v1/me",
          { withCredentials: true }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  console.log(cartProducts);
  console.log(userData);

  return (
    <section className="d-flex flex-column gap-5">
      {userData && (
        <>
          <div className="d-flex p-2 gap-3 flex-column align-items-start shadow shadow-sm border-custom-light rounded-3">
            <h4>Logged in as</h4>
            <div className="d-flex align-items-center gap-2">
              <img
                src={user}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <h6 className="m-0">{userData.user.full_name}</h6>
            </div>
            <div className="d-flex flex-column ">
              <p className="m-0">
                {" "}
                <span className="fw-bold">Email:</span> {userData.user.email}
              </p>
              <p className="m-0">
                {" "}
                <span className="fw-bold">Phone:</span> {userData.user.phoneNo}
              </p>
            </div>
          </div>
          <div className="d-flex p-2 gap-3 flex-column align-items-start shadow shadow-sm border-custom-light rounded-3">
            <h4>Shipping Address</h4>
            <div className="d-flex flex-column ">
              <p className="m-0">
                <span className="fw-bold">Address: </span>
                {userData && userData.user.primaryaddress
                  ? `${userData.user.primaryaddress.address}, ${userData.user.primaryaddress.landmark}, ${userData.user.primaryaddress.city} - ${userData.user.primaryaddress.pin_code},  ${userData.user.primaryaddress.state}`
                  : "Address not available"}
              </p>
            </div>
            <button className="btn btn-primary py-2">Edit Address</button>
          </div>
        </>
      )}

      {/* Order Summary */}
      {cartProducts.length !== 0 ? (
        <div className="d-flex flex-column w-100 gap-1 shadow shadow-sm border-custom-light rounded-3 p-2 position-relative">
          <div className="w-100 d-flex align-items-center justify-content-between">
            <h4 className="mb-0">Order Summary</h4>
            <Link to={"/cart#"} className="">
              Edit
            </Link>
          </div>
          <div className="w-100 d-flex justify-content-between gap-5 flex-lg-row flex-column ">
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
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-1"
                      style={{ height: "250px" }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="d-flex flex-column justify-content-between h-100 items-start">
                    <div className="d-flex flex-column">
                      <p className="text-lg fw-normal">
                        <span className="fw-medium">Product :</span>{" "}
                        {product.name || "Product Name"}
                      </p>
                    </div>
                    {/* Pricing */}
                    <d-flex className="flex-column gap-2">
                      <p className="text-danger">Special Price</p>
                      <div className="d-flex items-center gap-2">
                        <span className="text-muted">₹{product.basePrice}</span>
                        <span className="price">
                          ₹
                          {(
                            product.basePrice -
                            product.basePrice *
                              (product.discountedPercent / 100)
                          ).toFixed(2)}
                        </span>
                        <span className="discount">
                          {product.discountedPercent}% off
                        </span>
                      </div>
                    </d-flex>

                    <div className="d-flex align-items-center gap-3 quantity-control">
                      {/* Quantity Control */}
                      <div className="d-flex items-start flex-column gap-1 pe-2 border-end h-100 justify-content-between">
                        <span>
                          <b>Quantity</b>
                        </span>
                        <div className="d-flex items-center">
                          <button className="btn btn-transparent">
                            {product.quantity}
                          </button>
                        </div>
                      </div>
                      {/* Quantity Control */}
                      <div className="d-flex items-start flex-column gap-1 pe-2 border-end h-100 justify-content-between ">
                        <span>
                          <b>Size</b>
                        </span>
                        <div className="d-flex items-center">
                          <button className="btn btn-black active">
                            {product.size}
                          </button>
                        </div>
                      </div>
                      {/* Quantity Control */}
                      <div className="d-flex items-start flex-column gap-1  h-100 justify-content-between">
                        <span>
                          <b>Color</b>
                        </span>
                        <div className="d-flex items-center">
                          <button className="btn btn-transparent">
                            {product.color}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Details */}
            <div
              className="d-flex flex-column items-start border border-secondary rounded-2 shadow shadow-md overflow-hidden p-2 position-sticky"
              style={{ minWidth: "340px", height: "fit-content", top: "20px" }}
            >
              <h5 className="fw-light text-uppercase border-bottom pb-1">
                Price details
              </h5>

              {/* Total Calculation */}
              <div className="d-flex flex-column items-start gap-2 border-bottom py-2">
                <div className="d-flex justify-content-between w-100">
                  <span>Price ({cartProducts.length} items)</span>
                  <span className="price">
                    ₹
                    {cartProducts
                      .reduce(
                        (total, product) =>
                          total + product.basePrice * product.quantity,
                        0
                      )
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
                          product.basePrice *
                            (product.discountedPercent / 100) *
                            product.quantity,
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
                          product.basePrice *
                            (product.discountedPercent / 100)) *
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
                            product.basePrice *
                              (product.discountedPercent / 100) *
                              product.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>{" "}
                    on this order
                  </p>
                </div>
                <button className="btn btn-lg-colored w-100 py-2">
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </section>
  );
};

export default OrderSummary;
