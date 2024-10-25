import { IMAGES, ICONS } from "@/assets/Assets"
const Card = () => {
    return (
        <div className="card rounded-3 overflow-hidden">
            <div className="card-image position-relative">
                <img src={IMAGES.chair1} alt="" />
            </div>
            <div className="card-body">
                <div className="card-overlay">
                    <img src={IMAGES.cardOverlay} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        Slimline 2 Door Steel Automatic with 4 legs...
                    </div>
                    <div className="d-flex align-items-center gap-1">
                        <span className="price">₹ 5,000.75</span>
                        <span className="text-muted">₹ 4,000.90</span>
                        <span className="badge">20% OFF</span>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2 z-1">
                    <button className="btn btn-secondary">
                        <img src={ICONS.share} alt="" />
                        <span>Inquire Now</span>
                    </button>
                    <button className="btn btn-tertiary">
                        <img src={ICONS.cartIconGrey} alt="" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
