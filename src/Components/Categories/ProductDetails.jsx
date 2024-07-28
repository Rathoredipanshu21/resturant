// src/components/ProductDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} />
      <p>{item.description}</p>
      <h2>Price: ₹{item.price.toFixed(2)}</h2>
      {item.oldPrice && <del>₹{item.oldPrice.toFixed(2)}</del>}
      <button className='add-to-cart'>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
