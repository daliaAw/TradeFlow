import React from 'react';
import { useParams } from 'react-router-dom';
import './ShoppingCart.css';

function ShoppingCart({ cartItems, updateQuantity, handleRemove,  retailPrice}) {
  console.log('cartItems:', cartItems); 
  
  // const handleQuantityChange = (itemId, newQuantity, increment) => {
  //   const updatedQuantity = Math.max(0, newQuantity + increment);
  //   updateQuantity(itemId, updatedQuantity);
  // };

  console.log('cartItems', cartItems)
  return (
  <>
        <h1 className='p-3'>Shopping Cart</h1>
        <div className='shoppingCart container'>
      <ul>
        {cartItems && cartItems.lineItems?.length > 0 ? (
          cartItems.lineItems?.map((item, index) => (
           
        <div className='shoppingCart-card'>
        <div className='row'>
            <div className=''>
                <img className='shoppingCart-img' src="https://picsum.photos/200/200" alt="Product" />
            </div>
            <div className='shoppingCart-info'>
                <p><span>Product:</span> {item.item.title}</p>
                <p><span>Quantity Available:</span> {item.qty}</p>
                <p><span>Retail Price:</span> ${item.retailPrice}</p>
                <p><span>Wholesale Price:</span> ${item.wholesalePrice}</p>
                <p><span>Delivery:</span> {item.delivery}</p>
                <button onClick={handleRemove} className="btn btn-danger">Remove from Cart</button>
            </div>
        </div>
        </div>
          ))
        ) : (
          <li>No items in the cart</li>
        )}
      </ul>
    </div>
  
  </>
 
  );
}

export default ShoppingCart;



 {/* {item.title} - ${item.wholesalePrice} - Qty: {item.qty} - Total: ${item.retailPrice * item.quantity} */}
              {/* <button onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>+</button>
              <button type="button" onClick={() => handleRemove(item.id)}>Remove</button> */}
            