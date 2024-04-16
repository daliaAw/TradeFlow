import React, { useState, useEffect } from "react";
import StarRating from "../StarRating";
import "./ProductReviews.css";
import WriteReviewForm from "../../components/WriteReviewForm/WriteReviewForm";
import { createReview } from "../../utilities/items-api";

function ProductReviews({ item, user }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviews, setReviews] = useState([]);

  const handleWriteReview = () => {
    setShowReviewForm(true);
  };

  const handleSubmitReview = (reviewText) => {
    console.log("Submitted review:", reviewText);
    console.log("User: ", user);
    setReviewSubmitted(true);
    setShowReviewForm(false);
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
              {/* {review.user.name} */}
              <p>
                <StarRating rating={review.rating} />
              </p>
              <p className="mt-3">Comment: {review.comment}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p>No reviews yet.</p>

          {user.user ? (
            <>
              <p>User: {user.user.name}</p>
              {!showReviewForm && !reviewSubmitted && (
                <button
                  className="write-review-btn"
                  onClick={handleWriteReview}
                >
                  Write a customer review
                </button>
              )}
              {showReviewForm && !reviewSubmitted && (
                <WriteReviewForm
                  onSubmit={() => handleSubmitReview(item._id)}
                  createReview={createReview}
                  item={item}
                />
              )}
              {reviewSubmitted && <p>Thank you for your review!</p>}
            </>
          ) : (
            <p>Not Logged In</p>
          )}
        </>
      )}
    </div>
  );
}

export default ProductReviews;
