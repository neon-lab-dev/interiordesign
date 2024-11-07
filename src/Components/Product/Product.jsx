import BestSellers from "../BestSellers/BestSellers"
import OftenPurchased from "../OftenPurchased/OftenPurchased"
import ProductImages from "../ProductImages/ProductImages"
import ProductInfo from "../ProductInfo/ProductInfo"
import Tabs from "../Tabs/Tabs"

const Product = () => {
    return (
        <>
            <section className="d-flex flex-row justify-content-between align-items-center justify-between py-3 gap-3">
                <ProductImages />
                <ProductInfo />
            </section>
            <OftenPurchased />
            <Tabs />
            <BestSellers />
        </>
    )
}

export default Product
