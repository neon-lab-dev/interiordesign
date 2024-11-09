import { ICONS, IMAGES } from "../../assets/Assets"
import "./OftenPurchased.css"

const OftenPurchased = () => {
    return (
        <section className="often-purchased d-flex flex-column align-items-center justify-content-between">
            <div className="w-100 text-left section-title">Often Purchased</div>
            <div className="w-100 d-flex align-items-center justify-content-between often-purchased-div">
                <div className="d-flex align-items-center gap-3 oftenPurchasedItems">
                    <div className="d-flex flex-column  gap-2 oftenPurchasedProductCard">
                        <div className="p-4 product-image" style={{ background: "#343539" }}>
                            <img src={IMAGES.chair} alt="" />
                        </div>
                        <span className="card-title">Slimline 2 Door Steel Automatic</span>
                        <div className="d-flex align-items-center gap-1 z-2 item-overview">
                            <div className="d-flex align-items-center justify-content-between gap-1 ">
                                <span className="price">₹ 5,000.75</span>
                                <span className="text-muted">₹ 4,000.90</span>
                            </div>
                            <span className="badge">20% OFF</span>
                        </div>
                        <div className="d-flex items-center gap-2 color-div">
                            <span>Colors:</span>
                            <div className="product-colors product-colors-small d-flex items-center gap-1">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="plus">
                        <img src={ICONS.add} alt="" />
                    </div>
                    <div className="d-flex flex-column gap-2 oftenPurchasedProductCard">
                        <div className="p-4 product-image" style={{ background: "#343539" }}>
                            <img src={IMAGES.chair} alt="" />
                        </div>
                        <span className="card-title">Slimline 2 Door Steel Automatic </span>
                        <div className="d-flex align-items-center gap-1 z-2 item-overview">
                            <div className="d-flex align-items-center justify-content-between gap-1 ">
                                <span className="price">₹ 5,000.75</span>
                                <span className="text-muted">₹ 4,000.90</span>
                            </div>
                            <span className="badge">20% OFF</span>
                        </div>
                        <div className="d-flex items-center gap-2 color-div">
                            <span>Colors:</span>
                            <div className="product-colors product-colors-small d-flex items-center gap-1">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="plus">
                        <img src={ICONS.add} alt="" />
                    </div>
                    <div className="d-flex flex-column gap-2 oftenPurchasedProductCard">
                        <div className="p-4 product-image" style={{ background: "#343539" }}>
                            <img src={IMAGES.chair} alt="" />
                        </div>
                        <span className="card-title">Slimline 2 Door Steel Automatic </span>
                        <div className="d-flex align-items-center gap-1 z-2 item-overview">
                            <div className="d-flex align-items-center justify-content-between gap-1 ">
                                <span className="price">₹ 5,000.75</span>
                                <span className="text-muted">₹ 4,000.90</span>
                            </div>
                            <span className="badge">20% OFF</span>
                        </div>
                        <div className="d-flex items-center gap-2 color-div">
                            <span>Colors:</span>
                            <div className="product-colors product-colors-small d-flex items-center gap-1">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center h-100 gap-4 flex-grow-1 p-4 totalPriceDiv">
                    <span className="totalPrice">Total Price: <span className="product-price">₹1242</span></span>
                    <button className="btn w-100">Add to Cart</button>
                </div>
            </div>
        </section>
    )
}

export default OftenPurchased
