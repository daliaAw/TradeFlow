import React, { useState } from 'react';
import '../ProductReviews/ProductReviews.css'
const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = value => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = value => {
    onRatingChange(value);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            {starValue <= (hoverRating || rating) ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

const WriteReviewForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted

  const handleRatingChange = value => {
    setRating(value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Pass the review data to the parent component for further processing
    onSubmit({ description, rating });
    // Reset form fields
    setDescription('');
    setRating(0);
    // Update state to indicate that the form has been submitted
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <p>Thank you for your review!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea className='write-review-description'
              id="description"
              value={description}
              required
              onChange={handleDescriptionChange}
              placeholder="Write your review here..."
            />
          </div>
          <div className='ml-4'>
            <label>Rating:</label>
            <StarRating rating={rating} onRatingChange={handleRatingChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default WriteReviewForm;
