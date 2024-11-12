import BestSellers from "../BestSellers/BestSellers"
import Card from "../Card/Card"
import "./Wishlist.css"

const Wishlist = () => {
    return (
        <div className="w-100 d-flex items-center flex-column justify-center ">
            <section className="w-100 d-flex items-center flex-column justify-content-center py-0 pt-5">
                <div className="home-sections-header d-flex align-items-center justify-content-start">
                    <h2>Your Wishlist -: 2 Items</h2>
                </div>
                <div className="wishlist-grid">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <BestSellers />
        </div>
    )
}

export default Wishlist
