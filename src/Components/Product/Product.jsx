// import BestSellers from "../BestSellers/BestSellers"
// import OftenPurchased from "../OftenPurchased/OftenPurchased"
// import ProductImages from "../ProductImages/ProductImages"
// import ProductInfo from "../ProductInfo/ProductInfo"
// import Tabs from "../Tabs/Tabs"

// const Product = () => {
//     return (
//         <>
//             <div className="product-section w-100 d-flex align-items-center py-3">
//                 <ProductImages />
//                 <ProductInfo />
//             </div>
//             <OftenPurchased />
//             <Tabs />
//             <BestSellers />
//         </>
//     )
// }

// export default Product

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BestSellers from "../BestSellers/BestSellers";
import OftenPurchased from "../OftenPurchased/OftenPurchased";
import ProductImages from "../ProductImages/ProductImages";
import ProductInfo from "../ProductInfo/ProductInfo";
import Tabs from "../Tabs/Tabs";

const Product = () => {
  const { id } = useParams(); // Get product ID from the route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://interior-design-backend-nine.vercel.app/api/v1/product/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data.product);
        console.log(data);
      } catch (err) {
        setError(err.message || "Unable to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="product-section w-100 d-flex align-items-center py-3">
        <ProductImages images={product.images} />
        <ProductInfo product={product} />
      </div>
      <OftenPurchased />
      <Tabs productId={id} />
      <BestSellers />
    </>
  );
};

export default Product;
