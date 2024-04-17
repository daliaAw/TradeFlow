import React from 'react';

function ShoppingCart({ cartItems, updateQuantity }) {
  const handleQuantityChange = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.retailPrice} - Qty: {item.minQuantity} - Total: ${item.retailPrice * item.quantity}
              <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
            </li>
          ))
        ) : (
          <li>No items in the cart</li>
        )}
      </ul>
    </div>
  );
}

export default ShoppingCart;
