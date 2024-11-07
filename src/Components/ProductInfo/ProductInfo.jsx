import "./ProductInfo.css"

const ProductInfo = () => {
    return (
        <div className="d-flex flex-column gap-4">
            <div className="product-name">
                Poise Study Chair with Net Back
            </div>
            <div className="d-flex align-items-center gap-3">
                <span className="product-price">₹414</span>
                <span className="product-muted">₹1,249</span>
                <span className="discount">66% off</span>
            </div>
            <div className="d-flex flex-column gap-2">
                <span className="product-sub-title">
                    Size
                </span>
                <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-black">5</button>
                    <button className="btn btn-black">6</button>
                    <button className="btn btn-black">Short Handle</button>
                    <button className="btn btn-black">Harrow</button>
                </div>
            </div>
            <div className="d-flex items-center gap-5 borderDiv" >
                <div className="d-flex flex-column gap-3">
                    <div className="product-sub-title">
                        Quantity
                    </div>
                    <div className="d-flex items-center gap-2 quantity">
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                </div>
                <div className="d-flex flex-column gap-3">
                    <div className="product-sub-title">
                        Colors
                    </div>
                    <div className="d-flex items-center gap-2 product-colors">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
            <div className="d-flex flex-column gap-3 w-100">
                <button className="btn btn-lg-colored py-2">
                    Buy Now
                </button>
                <button className="btn btn-base-trasparent">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductInfo
