import Dropdown from "@/Components/InputFields/Dropdown";
import Filters from "./Filters";
import "./Products.css";
import { ICONS } from "../../assets/Assets";
import Card from "../Card/Card";
import { useState } from "react";

const Products = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <section className="w-100">
            <div className="d-flex align-items-start justify-content-start gap-3 position-relative">
                <div id="filterDiv">
                    <Filters />
                </div>

                {isFilterOpen &&
                    <>
                        <div className={`slidingDiv ${isFilterOpen ? 'show' : ''}`}>
                            <Filters />
                        </div>
                    </>
                }

                <div className="d-flex flex-column w-100" style={{ gap: "10px" }}>
                    <div className="d-flex align-items-center justify-content-between" id="products_flex">
                        <h4 id="current-product">Chairs</h4>
                        <div
                            className="d-none align-items-center gap-1"
                            id="filter-btn"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <span>Filters</span>
                            <img src={ICONS.sortIcon} alt="sort" />
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <div className="d-flex align-items-center gap-1" id="sort-by">
                                <img src={ICONS.sortBy} alt="sort" />
                                <span>Sort By</span>
                            </div>
                            <Dropdown />
                        </div>
                    </div>
                    <div className="products-grid w-100 justify-content-evenly">
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
    );
};

export default Products;
