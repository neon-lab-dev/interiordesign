import Dropdown from "@/Components/InputFields/Dropdown"
import Filters from "./Filters"
import "./Products.css"
import { ICONS } from "../../assets/Assets"
import Card from "../Card/Card"

const Products = () => {
    return (
        <section className="w-100">
            <div className="d-flex align-items-start justify-content-start w-100 gap-3">
                <Filters />
                <div className="d-flex flex-column" style={{ gap: '10px' }}>
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <h4>Chairs</h4>
                        <div className="d-flex align-items-center gap-2">
                            <div className="d-flex align-items center gap-1">
                                <img src={ICONS.sortBy} alt="sort" />
                                <span>Sort By</span>
                            </div>
                            <Dropdown />
                        </div>
                    </div>
                    <div className="d-flex flex-wrap w-100 justify-content-between align-items-start gap-3">
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
                </div>
            </div>
        </section>
    )
}

export default Products
