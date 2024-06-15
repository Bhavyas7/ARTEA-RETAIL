import React from 'react';
import Product from './Product';

const products = [
  { id: 1, name: 'Green Tea', price: 10, image: 'path_to_image' },
  { id: 2, name: 'Black Tea', price: 12, image: 'path_to_image' },
  { id: 3, name: 'Herbal Tea', price: 8, image: 'path_to_image' },
];

const ProductList = ({ addToCart }) => (
  <div className="product-list">
    {products.map(product => (
      <Product key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductList;
