

const OrderCard = ({createdAt, _id, orderItems,orderStatus, totalPrice }) => {
    return (
        <div>
            <div className="order-card border-bottom border-gray">
                <div className="order-info d-flex items-center justify-between w-100">
                    <div className="d-flex flex-column gap-2">
                        <span>Date: <b>{createdAt}</b></span>
                        <span>Order ID: <b>{_id}</b></span>
                    </div>
                    <span>Order Status: <b>{orderStatus}</b></span>
                </div>
               {
                orderItems?.map((item, index) => 
                    <div key={index} className="order-details">
                    <div className="order-image-container">
                        <img src={item?.image} alt="Product" className="order-image" />
                    </div>
                    <div className="product-details d-flex flex-column justify-content-between w-100">
                        <div className="d-flex flex-column gap-3">
                            <span>Product: <span className="text-white">{item?.name}</span></span>
                            <span>Quantity: <span className="text-white">{item?.quantity}</span></span>
                            <span>Total Price: <span className="text-white">₹{totalPrice}</span></span>
                        </div>
                        <div className="w-100 d-flex align-items-center justify-content-end">
                            <span className="order-btn" style={{ backgroundColor: "#202020" }}>Cancel</span>
                        </div>
                    </div>
                </div>
                )
               }
            </div>
        </div>
    );
};

export default OrderCard;
