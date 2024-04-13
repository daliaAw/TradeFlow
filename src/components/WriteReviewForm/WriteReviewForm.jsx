import React, { useState } from "react";

const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (value) => {
    onRatingChange(value);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            {starValue <= (hoverRating || rating) ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

const WriteReviewForm = ({ createReview, setReviews, reviews }) => {
  // const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [newReview, setNewReview] = useState();

  const handleRatingChange = (evt) => {
    setRating(evt);
  };

  const handleDescriptionChange = (evt) => {
    // setDescription(evt.target.value);
    setNewReview({ ...newReview, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const review = await createReview(newReview);
      setNewReview({
        text: "",
      });
      setReviews([...reviews, review]);
    } catch (err) {
      console.log(err);
    }
    // You can do something with the description and rating here
    // console.log("Description:", description);
    console.log("Rating:", rating);
    // Reset form fields
    // setDescription("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          // value={description}
          onChange={handleDescriptionChange}
          placeholder="Write your review here..."
        />
      </div>
      <div>
        <label>Rating:</label>
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WriteReviewForm;
