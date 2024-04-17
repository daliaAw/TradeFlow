import React, { useState, useEffect } from "react";
import StarRating from "../StarRating";
import "./ProductReviews.css";
import WriteReviewForm from "../../components/WriteReviewForm/WriteReviewForm";
import { createReview } from "../../utilities/items-api";
// import { getUser } from "../../utilities/users-service";

function ProductReviews({ item, user }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/items");
        const data = await response.json();
        setReview(data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);

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
              {review.name}
              <p>
                <StarRating rating={review.rating} />
              </p>
              <p className="mt-3">{review.comment}</p>

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
                  user={user.user}
                />
              )}
              {reviewSubmitted && <p>Thank you for your review!</p>}
            </>
          ) : (
            <h6>Please Log In to Write a Review</h6>
          )}
        </>

      )}
    </div>
  );
}

export default ProductReviews;