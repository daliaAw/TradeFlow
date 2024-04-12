import React from 'react';
import { useState } from "react";
import './ProductDeets.css';

function ProductDeets({ item }) {
  const [quantity, setQuantity] = useState(item.minQuantity); // Initialize quantity state with item's available quantity
  const [errorMessage, setErrorMessage] = useState(''); // Initialize error message state

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1); // Increment quantity by 1
    setErrorMessage(''); // Clear error message when quantity is incremented
  };

  const decrementQuantity = () => {
    if (quantity > item.minQuantity) {
      setQuantity(prevQuantity => prevQuantity - 1); // Decrement quantity by 1 if it's greater than minQuantity
      setErrorMessage(''); // Clear error message when quantity is decremented
    } else {
      setErrorMessage(`You can't order less than the minimum quantity (${item.minQuantity})`);
    }
  };
  
  const addToCart = () => {
    // Add logic to add item to cart
    console.log(`Added ${quantity} ${item.title} to cart`);
  };

  const buyNow = () => {
    // Add logic to proceed to checkout with current quantity
    console.log(`Buy Now: ${quantity} ${item.title}`);
  };

  // Calculate the average rating as stars
  const averageRatingStars = () => {
    const averageRating = item.averageRating; // Assuming item.averageRating is the average rating value
    const filledStars = Math.round(averageRating); // Round the average rating to the nearest integer
    const emptyStars = 5 - filledStars; // Calculate the number of empty stars

    let stars = '';
    // Generate filled stars
    for (let i = 0; i < filledStars; i++) {
      stars += '★';
      
    }
    // Generate empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars += '☆';
    }

    return stars;
  };

  return (
    <div className="ProductDeets container">
      <div className="row">

        {/* First row */}
        <div className="row">
          <img className="col-md-4" src="https://picsum.photos/200/200" alt="Card image cap" />
          <div className='ProductDeets-title col-md-5'>
            <h2><span>Name: </span>{item.title}</h2>
            <p><span>Category:</span> {item.category}</p>
            {/* Display average rating stars */}
            <p><span>Average Rating:</span> {averageRatingStars()}</p>
          </div>
          <div className='info-card col-md-3'>
            <div className="d-flex justify-content-between align-items-start">
              <p className="m-0"><span>Retail Price: </span>${item.retailPrice}</p>
              <i className="fas fa-heart"></i>
            </div>
            <p><span>Wholesale Price:</span> ${item.wholesalePrice}</p>
            <p><span>Delivery:</span> {item.delivery}</p>

             {/* Quantity buttons */}
             <div className="quantity input-group mb-3">
              <div className="input-group-prepend">
                <button className="btn btn-outline-secondary quantity-btn" type="button" onClick={decrementQuantity}>
                  <i className="fas fa-minus"></i>
                </button>
              </div>
              <input type="text" className="form-control text-center quantity-input" value={quantity} readOnly />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary quantity-btn" type="button" onClick={incrementQuantity}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            {errorMessage && (
              <p className="text-danger">{errorMessage}</p>
            )}
            <button className="Add-cart btn" onClick={addToCart}>Add to Cart</button>
            <button className="Buy-now btn" onClick={buyNow}>Buy Now</button>
          </div>
        </div>

        {/* Second row */}
        <div className="Item-Details row">
            <h1>Product Details</h1>
            <p><span>Details: </span>{item.details}</p>
            <p><span>Quantity Available:</span> {item.qtyAvailable}</p>
            <p><span>Minimum Quantity:</span> {item.minQuantity}</p>
            <p><span>Retail Price:</span> ${item.retailPrice}</p>
            <p><span>Wholesale Price:</span> ${item.wholesalePrice}</p>
            <p><span>Delivery:</span> {item.delivery}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDeets;
