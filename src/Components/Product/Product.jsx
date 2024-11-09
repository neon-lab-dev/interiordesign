import BestSellers from "../BestSellers/BestSellers"
import OftenPurchased from "../OftenPurchased/OftenPurchased"
import ProductImages from "../ProductImages/ProductImages"
import ProductInfo from "../ProductInfo/ProductInfo"
import Tabs from "../Tabs/Tabs"

const Product = () => {
    return (
        <>
            <div className="product-section w-100 d-flex align-items-center py-3">
                <ProductImages />
                <ProductInfo />
            </div>
            <OftenPurchased />
            <Tabs />
            <BestSellers />
        </>
    )
}

export default Product
