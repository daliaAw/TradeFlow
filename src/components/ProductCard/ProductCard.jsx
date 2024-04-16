// ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className='card m-2 p-2'>
      <h2>{product.title}</h2>
      <p>im the product Cart</p>
      {/* Add more product details as needed */}
    </div>
  );
}

export default ProductCard;
