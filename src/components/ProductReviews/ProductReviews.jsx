import React, { useState } from "react";
import StarRating from "../StarRating";
import "./ProductReviews.css";
import WriteReviewForm from "../../components/WriteReviewForm/WriteReviewForm"; // Import the WriteReviewForm component

function ProductReviews({ item }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleWriteReview = () => {
    setShowReviewForm(true);
  };

  const handleSubmitReview = (reviewText) => {
    // Perform any necessary actions with the review text (e.g., submit to backend)
    // For now, let's just log the review text
    console.log("Submitted review:", reviewText);
    // Update state to indicate that the review has been submitted
    setReviewSubmitted(true);
    // Hide the review form
    console.log("before showreview form");
    setShowReviewForm(false);
    console.log("after showreview form");
  };

  return (
    <div className="reviews container">
      <h2>Customer reviews</h2>
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
          <button className="write-review-btn" onClick={handleWriteReview}>
            Write a customer review
          </button>

          {!showReviewForm && !reviewSubmitted && (
            <WriteReviewForm onSubmit={handleSubmitReview} />
          )}
          {showReviewForm && !reviewSubmitted && (
            <WriteReviewForm onSubmit={handleSubmitReview} />
          )}
          {reviewSubmitted && <p>Thank you for your review!</p>}
        </>
      )}
    </div>
  );
}

export default ProductReviews;
