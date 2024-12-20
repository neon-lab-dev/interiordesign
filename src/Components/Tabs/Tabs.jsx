// import React, { useEffect, useState } from "react";
// import { ICONS } from "../../assets/Assets";
// import Testimonial from "../Testimonial/Testimonial";
// import "./Tabs.css";

// const Tabs = ({ productId }) => {
//     const [reviews, setReviews] = useState([]);
//     const [averageRating, setAverageRating] = useState(0);
//     const [reviewCount, setReviewCount] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchReviews = async () => {
//             try {
//                 const response = await fetch(
//                     `https://interior-design-backend-nine.vercel.app/api/v1/reviews?id=${productId}`
//                 );
//                 const data = await response.json();

//                 if (data.success) {
//                     setReviews(data.reviews);

//                     // Calculate average rating and total reviews
//                     const totalReviews = data.reviews.length;
//                     const totalRating = data.reviews.reduce((sum, review) => sum + review.rating, 0);
//                     setAverageRating((totalRating / totalReviews).toFixed(1));
//                     setReviewCount(totalReviews);
//                 } else {
//                     setError("Failed to fetch reviews.");
//                 }
//             } catch (err) {
//                 setError("An error occurred while fetching reviews.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchReviews();
//     }, [productId]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;
//     console.log(reviews)

//     return (
//         <section className="p-0">
//             <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
//                 <li className="nav-item" role="presentation">
//                     <button
//                         className="nav-link"
//                         id="key-specification-tab"
//                         data-bs-toggle="tab"
//                         data-bs-target="#key-specification-tab-pane"
//                         type="button"
//                         role="tab"
//                         aria-controls="key-specification-tab-pane"
//                         aria-selected="true"
//                     >
//                         Key Specifications
//                     </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                     <button
//                         className="nav-link"
//                         id="profile-tab"
//                         data-bs-toggle="tab"
//                         data-bs-target="#profile-tab-pane"
//                         type="button"
//                         role="tab"
//                         aria-controls="profile-tab-pane"
//                         aria-selected="false"
//                     >
//                         Specifications
//                     </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                     <button
//                         className="nav-link active"
//                         id="contact-tab"
//                         data-bs-toggle="tab"
//                         data-bs-target="#contact-tab-pane"
//                         type="button"
//                         role="tab"
//                         aria-controls="contact-tab-pane"
//                         aria-selected="false"
//                     >
//                         Customer Review
//                     </button>
//                 </li>
//             </ul>
//             <div className="tab-content" id="myTabContent">
//                 <div
//                     className="tab-pane fade"
//                     id="key-specification-tab-pane"
//                     role="tabpanel"
//                     aria-labelledby="key-specification-tab"
//                 >
//                     ...
//                 </div>
//                 <div
//                     className="tab-pane fade"
//                     id="profile-tab-pane"
//                     role="tabpanel"
//                     aria-labelledby="profile-tab"
//                 >
//                     ...
//                 </div>
//                 <div
//                     className="tab-pane fade show active"
//                     id="contact-tab-pane"
//                     role="tabpanel"
//                     aria-labelledby="contact-tab"
//                 >
//                     <div className="d-flex items-center justify-between gap-2 customersTabContent w-100">
//                         <div className="ratings d-flex flex-column gap-4">
//                             <div className="average-rating d-flex flex-column gap-1 align-items-start justify-content-between">
//                                 <div className="d-flex align-items-center gap-1">
//                                     <img src={ICONS.star} alt="Star Icon" />
//                                     <span>{averageRating}</span>
//                                 </div>
//                                 <div className="reviews-count">{reviewCount} Reviews</div>
//                             </div>
//                         </div>
//                         <div className="reviews-section">
//                             {reviews.length > 0 ? (
//                                 reviews.map((review) => (
//                                     <Testimonial key={review._id} review={review} />
//                                 ))
//                             ) : (
//                                 <p>No reviews yet.</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Tabs;


// import React, { useEffect, useState } from "react";
// import { ICONS } from "../../assets/Assets";
// import Testimonial from "../Testimonial/Testimonial";
// import "./Tabs.css";

// const Tabs = ({ productId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [averageRating, setAverageRating] = useState(0);
//   const [reviewCount, setReviewCount] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [rating, setRating] = useState(0); // For new review
//   const [comment, setComment] = useState(""); // For new review

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch(
//           `https://interior-design-backend-nine.vercel.app/api/v1/reviews?id=${productId}`
//         );
//         const data = await response.json();

//         if (data.success) {
//           setReviews(data.reviews);

//           // Calculate average rating and total reviews
//           const totalReviews = data.reviews.length;
//           const totalRating = data.reviews.reduce((sum, review) => sum + review.rating, 0);
//           setAverageRating((totalRating / totalReviews).toFixed(1));
//           setReviewCount(totalReviews);
//         } else {
//           setError("Failed to fetch reviews.");
//         }
//       } catch (err) {
//         setError("An error occurred while fetching reviews.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, [productId]);

//   const handleSubmitReview = async () => {
//     try {
//       const response = await fetch(
//         "https://interior-design-backend-nine.vercel.app/api/v1/review",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             rating,
//             comment,
//             productId,
//           }),
//         }
//       );

//       const data = await response.json();
//       if (data.success) {
//         alert("Review submitted successfully!");
//         setReviews((prev) => [...prev, data.review]); // Update reviews list
//         setRating(0);
//         setComment("");
//       } else {
//         alert("Failed to submit the review.");
//       }
//     } catch (error) {
//       alert("An error occurred while submitting your review.");
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <section className="p-0">
//       <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
//         <li className="nav-item" role="presentation">
//           <button
//             className="nav-link"
//             id="key-specification-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#key-specification-tab-pane"
//             type="button"
//             role="tab"
//             aria-controls="key-specification-tab-pane"
//             aria-selected="true"
//           >
//             Key Specifications
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button
//             className="nav-link"
//             id="profile-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#profile-tab-pane"
//             type="button"
//             role="tab"
//             aria-controls="profile-tab-pane"
//             aria-selected="false"
//           >
//             Specifications
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button
//             className="nav-link active"
//             id="contact-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#contact-tab-pane"
//             type="button"
//             role="tab"
//             aria-controls="contact-tab-pane"
//             aria-selected="false"
//           >
//             Customer Review
//           </button>
//         </li>
//       </ul>
//       <div className="tab-content" id="myTabContent">
//         <div
//           className="tab-pane fade"
//           id="key-specification-tab-pane"
//           role="tabpanel"
//           aria-labelledby="key-specification-tab"
//         >
//           ...
//         </div>
//         <div
//           className="tab-pane fade"
//           id="profile-tab-pane"
//           role="tabpanel"
//           aria-labelledby="profile-tab"
//         >
//           ...
//         </div>
//         <div
//           className="tab-pane fade show active"
//           id="contact-tab-pane"
//           role="tabpanel"
//           aria-labelledby="contact-tab"
//         >
//           <div className="d-flex items-center justify-between gap-2 customersTabContent w-100">
//             <div className="ratings d-flex flex-column gap-4">
//               <div className="average-rating d-flex flex-column gap-1 align-items-start justify-content-between">
//                 <div className="d-flex align-items-center gap-1">
//                   <img src={ICONS.star} alt="Star Icon" />
//                   <span>{averageRating}</span>
//                 </div>
//                 <div className="reviews-count">{reviewCount} Reviews</div>
//               </div>
//             </div>
//             <div className="reviews-section">
//               {reviews.length > 0 ? (
//                 reviews.map((review) => (
//                   <Testimonial key={review._id} review={review} />
//                 ))
//               ) : (
//                 <p>No reviews yet.</p>
//               )}

//               {/* Buttons for actions */}
//               <div className="d-flex gap-2 mt-3">
//                 <button
//                   className="btn btn-outline-primary"
//                   onClick={() => {
//                     alert("Redirecting to all reviews...");
//                   }}
//                 >
//                   View all reviews
//                 </button>
//                 <button
//                   className="btn btn-primary"
//                   data-bs-toggle="modal"
//                   data-bs-target="#writeReviewModal"
//                 >
//                   Write a review
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal for writing a review */}
//       <div
//         className="modal fade"
//         id="writeReviewModal"
//         tabIndex="-1"
//         aria-labelledby="writeReviewModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="writeReviewModalLabel">
//                 Write a Review
//               </h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="mb-3">
//                 <label htmlFor="rating" className="form-label">
//                   Rating
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="rating"
//                   value={rating}
//                   onChange={(e) => setRating(Number(e.target.value))}
//                   min="1"
//                   max="5"
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="comment" className="form-label">
//                   Comment
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="comment"
//                   rows="3"
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                 ></textarea>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={handleSubmitReview}
//               >
//                 Submit Review
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tabs;


import React, { useEffect, useState } from "react";
import { ICONS } from "../../assets/Assets";
import "./Tabs.css";

const Tabs = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0); // For new review
  const [comment, setComment] = useState(""); // For new review

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://interior-design-backend-nine.vercel.app/api/v1/reviews?id=${productId}`
        );
        const data = await response.json();

        if (data.success) {
          setReviews(data.reviews);

          // Calculate average rating and total reviews
          const totalReviews = data.reviews.length;
          const totalRating = data.reviews.reduce((sum, review) => sum + review.rating, 0);
          setAverageRating((totalRating / totalReviews).toFixed(1));
          setReviewCount(totalReviews);
        } else {
          setError("Failed to fetch reviews.");
        }
      } catch (err) {
        setError("An error occurred while fetching reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  const handleSubmitReview = async () => {
    try {
      const response = await fetch(
        "https://interior-design-backend-nine.vercel.app/api/v1/review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating,
            comment,
            productId,
          }),
        }
      );

      const data = await response.json();
      if (data.success) {
        alert("Review submitted successfully!");
        setReviews((prev) => [...prev, data.review]); // Update reviews list
        setRating(0);
        setComment("");
      } else {
        alert("Failed to submit the review.");
      }
    } catch (error) {
      alert("An error occurred while submitting your review.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="p-0">
      <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="key-specification-tab"
            data-bs-toggle="tab"
            data-bs-target="#key-specification-tab-pane"
            type="button"
            role="tab"
            aria-controls="key-specification-tab-pane"
            aria-selected="true"
          >
            Key Specifications
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Specifications
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Customer Review
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade"
          id="key-specification-tab-pane"
          role="tabpanel"
          aria-labelledby="key-specification-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade show active"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="d-flex items-center justify-between gap-2 customersTabContent w-100">
            <div className="ratings d-flex flex-column gap-4">
              <div className="average-rating d-flex flex-column gap-1 align-items-start justify-content-between">
                <div className="d-flex align-items-center gap-1">
                  <img src={ICONS.star} alt="Star Icon" />
                  <span>{averageRating}</span>
                </div>
                <div className="reviews-count">{reviewCount} Reviews</div>
              </div>
            </div>
            <div className="reviews-section">
              {reviews.map((review) => (
                <div key={review._id} className="d-flex flex-column gap-2 testimonial h-fit">
                  <div className="d-flex align-items-center gap-1">
                    <img src={ICONS.star} alt="" style={{ width: "24px", height: "24px" }} />
                    <span style={{ lineHeight: "0px" }}>{review.rating}</span>
                    <span className="author">{review.name}</span>
                  </div>
                  <div className="d-flex align-items-center gap-3 time">
                    <span></span>
                    <span></span>
                  </div>
                  <div className="testimonial-description">
                    {review.comment}
                  </div>
                  <div className="d-flex gap-1 align-items-center feedback">
                    <div className="like-container">
                      <img src={ICONS.like} alt="like icon" />
                    </div>
                    <span>Was Helpful</span>
                  </div>
                </div>
              ))}

              {/* Button to write a new review */}
              <div className="d-flex gap-2 mt-3">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#writeReviewModal"
                >
                  Write a review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for writing a review */}
      <div
        className="modal fade"
        id="writeReviewModal"
        tabIndex="-1"
        aria-labelledby="writeReviewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="writeReviewModalLabel">
                Write a Review
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  min="1"
                  max="5"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmitReview}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
