import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './ShoppingCart.css';
import axios from 'axios'; 
import { removeCartItem } from "../../utilities/orders-api"


function ShoppingCart({ cartItems, setCartItems,  updateQuantity,handleRemove,  retailPrice}) {
  console.log('cartItems:', cartItems); 


  // const handleQuantityChange = (itemId, newQuantity, increment) => {
  //   const updatedQuantity = Math.max(0, newQuantity + increment);
  //   updateQuantity(itemId, updatedQuantity);
  // };
  const fetchCartItems = async () => {
    try {
      const response = await axios.get('/api/cart');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      // Optionally, set cartItems to an empty array or handle the error state
    }
  };
  function updateQuantity(){}

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`/api/cart/remove/${itemId}`);
        await fetchCartItems();
    } catch (error) {
      // Log specific error message returned by Axios
      console.error('Error deleting item from cart:', error.message);
      // Optionally, display an error message to the user
  
      // Print the current state of cartItems (optional, for debugging)
      console.error('Current cart items:', cartItems);
    }
  };
  
  useEffect(() => {
    fetchCartItems();
  }, []);

  console.log('cartItems', cartItems)
  
  return (
  <>
        <h1 className='p-5'>Shopping Cart</h1>
        <div className='shoppingCart shopping-cart-container mx-auto'>
      <ul>
        {cartItems && cartItems.lineItems?.length > 0 ? (
          cartItems.lineItems?.map((item, index) => (
           
            <div className='shoppingCart-card'>
            <div className='row'>
              <div className='col'>
                <img className='shoppingCart-img' src="https://picsum.photos/200/200" alt="Product" />
              </div>
              <div className='col shoppingCart-details'>
                <p><strong>Product:</strong> {item.title}</p>
                <div className="quantity-control">
                <p><strong>Quantity:</strong> {item.minQuantity}</p>
                <div className="quantity-buttons">
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity, -1)}>-</button>
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity, 1)}>+</button>
                </div>
              </div>
                <p><strong>Retail Price:</strong> ${item.retailPrice}</p>
                <p><strong>Wholesale Price:</strong> ${item.wholesalePrice}</p>
                <p><strong>Delivery:</strong> {item.delivery}</p>
                <button className="shoppingCart-btn " onClick={() => handleDelete(item._id)}>Remove</button>
              </div>
            </div>
            <div className='shoppingCart-total'>
              <p><strong>Total:</strong> {item.orderTotal}</p>
            </div>
          </div>
          
          ))
        ) : (
          <li>No items in the cart</li>
        )}
      </ul>
      <button className="checkout-btn">Proceed to checkout</button>
    </div>
  
  </>
 
  );
}

export default ShoppingCart;



 {/* {item.title} - ${item.wholesalePrice} - Qty: {item.qty} - Total: ${item.retailPrice * item.quantity} */}
        
            