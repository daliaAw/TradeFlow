import React from 'react';

const StarAvg = ({ averageRating }) => {
  // Convert the average rating to a number of filled stars
  const filledStars = Math.round(averageRating);
  // Convert the remaining empty stars
  const emptyStars = 5 - filledStars;

  // Create an array to hold the filled stars
  const filledStarsArray = Array(filledStars).fill('★');
  // Create an array to hold the empty stars
  const emptyStarsArray = Array(emptyStars).fill('☆');

  // Concatenate both arrays to display all stars
  const allStars = [...filledStarsArray, ...emptyStarsArray];

  return (
    <div>
      <p>Average Rating: {allStars.join('')}</p>
    </div>
  );
};

export default StarAvg;