// ViewProduct.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

// can delete it

function ViewProduct() {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <div className='container-fluid d-flex'>
      <div className='col-3'>Filter col</div>
      <div className='d-flex col-9'>
      {products.map(product => (
        <Link className='card' to={`/items/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
      </div>
    </div>
  );
}

export default ViewProduct;
