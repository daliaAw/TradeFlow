import React from 'react'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'

function CartPage({ cart, updateQuantity, quantity }) {
  return (
    <div>
            <ShoppingCart cartItems={cart} updateQuantity={updateQuantity} quantity={quantity}/>
  
    </div>
  )
}

export default CartPage