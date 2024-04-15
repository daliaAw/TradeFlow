import React, { useState } from "react";
import StarRating from "../StarRating";
import "./ProductReviews.css";
import WriteReviewForm from "../../components/WriteReviewForm/WriteReviewForm"; // Import the WriteReviewForm component

function ProductReviews({ item }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleWriteReview = () => {
    console.log("btn clicked");
    setShowReviewForm(true);
  };

  const handleSubmitReview = (reviewText) => {
    console.log("Submitted review:", reviewText);
    setReviewSubmitted(true);
    console.log("before showreview form");
    setShowReviewForm(false);
    console.log("after showreview form");
  };

  return (
    <div className="reviews container">
      <h2>Customer reviews</h2>
      <WriteReviewForm />
      {item.reviews.length > 0 ? (
        <ul>
          {item.reviews.map((review) => (
            <li key={review._id}>
              <span className="reviews-user-icon">
                <i className="fas fa-user-circle"></i>
              </span>
              {review.user}
              {/* <p>Rating: {review.rating}</p> */}
              <p>
                <StarRating rating={review.rating} />
              </p>
              <p className="mt-3">Comment: {review.comment}</p>
              {/* Display other review details as needed */}
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p>No reviews yet.</p>
        </>
      )}
    </div>
  );
}

export default ProductReviews;
