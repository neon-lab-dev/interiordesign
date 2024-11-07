import { IMAGES, ICONS } from "../../assets/Assets"
import "./ProductImages.css"

const ProductImages = () => {
    return (
        <div className="product-container">
            <div className="card-badge">
                <img src={ICONS.heartWhite} alt="" />
            </div>
            <div className="d-flex flex-column align-items-start gap-2">
                <div className="product-image">
                    <img src={IMAGES.chair} alt="" />
                </div>
                <div className="product-image">
                    <img src={IMAGES.chair} alt="" />
                </div>
                <div className="product-image">
                    <img src={IMAGES.chair} alt="" />
                </div>
            </div>
            <div className="product-image-big">
                <img src={IMAGES.chair} alt="" />
            </div>
        </div>
    )
}

export default ProductImages
