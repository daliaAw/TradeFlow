import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart'; 
import { Link } from 'react-router-dom';
import './ProductDeets.css';
import axios from 'axios';
import AuthService from '../../utilities/authService'; // Update the path as per your project structure
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import { useHistory } from 'react-router-dom';

function ProductDeets({ item }) {
  
  const [quantity, setQuantity] = useState(item.minQuantity); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const { addItem } = useCart(); 
  const [addedToCart, setAddedToCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await AuthService.getCurrentUser();
        console.log('Current User:', currentUser); // Log the currentUser object
        setUser(currentUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
  
    fetchUser();
  }, []);
  
  
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1); 
    setErrorMessage(''); 
  };

  const decrementQuantity = () => {
    if (quantity > item.minQuantity) {
      setQuantity(prevQuantity => prevQuantity - 1); 
      setErrorMessage(''); 
    } else {
      setErrorMessage(`You can't order less than the minimum quantity (${item.minQuantity})`);
    }
  };

  const handleClick = (item) => {
    console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true); // Show warning
      return;
    }
    setCart([...cart, item]); // Add item to cart
  };

  const addToCart = async () => {
    try {
      const token = getToken(); // Get JWT token
      if (!token) {
        // Handle case when user is not logged in
        // For example, redirect to login page or display a message
        navigate('/login'); // Redirect to login page
        return;
      }
  
      // If user is logged in, proceed with adding to cart logic
      const userId = JSON.parse(atob(token.split(".")[1])).user._id; // Extract userId from token
  
      // Check if item is already in cart
      let isPresent = false;
      // cart.forEach((product) => {
      //   if (item.id === product.id) {
      //     isPresent = true;
      //   }
      // });
  
      if (isPresent) {
        setWarning(true); // Show warning
        return;
      }

    // If item is not in cart, add it
    const response = await axios.post('/api/cart/add', { itemId: item._id, userId });
    console.log('Item added to cart:', response.data);
    // window.location.href = '/ShoppingCart/add';

    // Update the cart state
    const updatedCart = [...cart, item];
    setCart(updatedCart);

    setAddedToCart(true);
  } catch (error) {
    console.error('Error adding item to cart:', error.response ? error.response.data : error.message);
    setErrorMessage('Failed to add item to cart. Please try again later.');
  }
};

const updateQuantity = (itemId, newQuantity) => {
  const updatedCart = cart.map((item) => {
    if (item.id === itemId) {
      return { ...item, quantity: newQuantity };
    }
    return item;
  });
  setCart(updatedCart);
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
            {addedToCart && <p>Item added to cart!</p>}
            <button className="Buy-now btn" onClick={buyNow}>Buy Now</button>
            <button onClick={() => handleClick(item)}>CartX</button>
          </div>
        </div>

        {/* Second row */}
        <div className="Item-Details row">
          <h1>Product Details</h1>
          <p><span>Details: </span>{item.description}</p>
          <p><span>Quantity Available:</span> {item.qtyAvailable}</p>
          <p><span>Minimum Quantity:</span> {item.minQuantity}</p>
          <p><span>Retail Price:</span> ${item.retailPrice}</p>
          <p><span>Wholesale Price:</span> ${item.wholesalePrice}</p>
          <p><span>Delivery:</span> {item.delivery}</p>
        </div>
        <ShoppingCart cartItems={cart} updateQuantity={updateQuantity} quantity={quantity}/>

      </div>
    </div>
  );
}

export default ProductDeets;
