import ChairPic from "../../assets/Images/chairpic.png";

const OrderCard = () => {
    return (
        <div>
            <div className="order-card border-bottom border-gray">
                <div className="order-info d-flex items-center justify-between w-100">
                    <div className="d-flex flex-column gap-2">
                        <span>Date: <b>24-01-2024</b></span>
                        <span>Order ID: <b>#2125465</b></span>
                    </div>
                    <span>Order Status: <b>Shipped</b></span>
                </div>
                <div className="order-details">
                    <div className="order-image-container">
                        <img src={ChairPic} alt="Product" className="order-image" />
                    </div>
                    <div className="product-details d-flex flex-column justify-content-between w-100">
                        <div className="d-flex flex-column gap-3">
                            <span>Product: <span className="text-white">Elite Series Kashmiri Willow Cricket Bat</span></span>
                            <span>Quantity: <span className="text-white">1</span></span>
                            <span>Total Price: <span className="text-white"> $149.99</span></span>
                        </div>
                        <div className="w-100 d-flex align-items-center justify-content-between">
                            <span className="order-btn dwn-btn">Download Invoice</span>
                            <span className="order-btn" style={{ backgroundColor: "#202020" }}>Cancel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
