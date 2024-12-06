// import { IMAGES, ICONS } from "../../assets/Assets"
// import "./ProductImages.css"

// const ProductImages = () => {
//     return (
//         <div className="product-container">
//             <div className="card-badge">
//                 <img src={ICONS.heartWhite} alt="" />
//             </div>
//             <div className="d-flex flex-column align-items-start gap-2 product-flex">
//                 <div className="product-image">
//                     <img src={IMAGES.chair} alt="" />
//                 </div>
//                 <div className="product-image">
//                     <img src={IMAGES.chair} alt="" />
//                 </div>
//                 <div className="product-image">
//                     <img src={IMAGES.chair} alt="" />
//                 </div>
//             </div>
//             <div className="product-image-big">
//                 <img src={IMAGES.chair} alt="" />
//             </div>
//         </div>
//     )
// }

// export default ProductImages

import { IMAGES, ICONS } from "../../assets/Assets"
import "./ProductImages.css"
const ProductImages = ({ images = [] }) => {

    console.log(images);
    return (
      <div className="product-container">
        <div className="card-badge">
          <img src={ICONS.heartWhite} alt="" />
        </div>
        <div className="d-flex flex-column align-items-start gap-2 product-flex">
          {images.map((img, idx) => (
            <div key={idx} className="product-image">
              <img src={img.url} alt={`Product image ${idx + 1}`} />
            </div>
          ))}
        </div>
        {images[0] && (
          <div className="product-image-big">
            <img src={images[0].url} alt="Main Product" />
          </div>
        )}
      </div>
    );
  };
  
  export default ProductImages;
  