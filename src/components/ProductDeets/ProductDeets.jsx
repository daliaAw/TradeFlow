import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProductDeets.css';
import axios from 'axios';
import AuthService from '../../utilities/authService'; // Update the path as per your project structure
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import * as ordersAPI from '../../utilities/orders-api';
import * as itemsAPI from '../../utilities/items-api';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../utilities/users-service'; 

function ProductDeets({ item, cart, setCart }) {
  const navigate = useNavigate(); // Initialize the navigate function

  const [quantity, setQuantity] = useState(item.minQuantity); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const [addedToCart, setAddedToCart] = useState(false);
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
  
   // Load cart from local storage on component mount
   useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const updateLocalStorageCart = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  
  
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

  const addToCart = async (itemId) => {

    try {
      const token = getToken(); 
      if (!token) {
        console.log('have to login')
        return;
      }
      const userId = JSON.parse(atob(token.split(".")[1])).user._id; // Extract userId from token
      
      let isPresent = false;
  
      if (isPresent) {
        setWarning(true); // Show warning
        return;
      }

    const updatedCart = await ordersAPI.addItemToCart(itemId);
    

    console.log('added');

    setCart(updatedCart)
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

  const handleRemove = (itemId) => {
    // Filter out the item with itemId from the cart
    const updatedCart = cart.filter((product) => product.id !== itemId);
    console.log('reomve btn')
    setCart(updatedCart);
};

  return (
    <div className="ProductDeets container">
      <div className="row">
        {/* First row */} 
        <div className="first-row row">
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
            <button className="Add-cart btn" onClick={ ()=> addToCart(item._id)}>Add to Cart</button>
            {/* <button className="Buy-now btn" onClick={() =>handleAddToOrder(item._id)}>Add Product</button> */}
            <button className="Buy-now btn" onClick={buyNow}>Buy Now</button>
            {/* <button onClick={() => handleClick(item)}>CartX</button>
            <button onClick={handleAddToCart}>Add to shopping</button> */}
            {addedToCart && <p>Item added to cart!</p>}

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
        {/* <ShoppingCart cartItems={cart} updateQuantity={updateQuantity} quantity={quantity} handleRemove={handleRemove}/> */}
      </div>
    </div>
  );
}

export default ProductDeets;
