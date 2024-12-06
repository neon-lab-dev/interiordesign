import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Products.css";
import Dropdown from "@/Components/InputFields/Dropdown";
import Filters from "./Filters";
import { ICONS } from "../../assets/Assets";
import { Link } from "react-router-dom";

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://interior-design-backend-nine.vercel.app/api/v1/products"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error("Error fetching products:", err.message);
      setError("Unable to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="w-100">
      <div className="d-flex align-items-start justify-content-start gap-3 position-relative">
        <div id="filterDiv">
          <Filters />
        </div>

        {isFilterOpen && (
          <div className={`slidingDiv ${isFilterOpen ? "show" : ""}`}>
            <Filters />
          </div>
        )}

        <div className="d-flex flex-column w-100" style={{ gap: "10px" }}>
          <div
            className="d-flex align-items-center justify-content-between"
            id="products_flex"
          >
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
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="products-grid w-100 justify-content-evenly">
              {products
                .filter((product) => product) // Remove any undefined or null entries
                .map((product) => (
                  <Card key={product._id} product={product} />
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
