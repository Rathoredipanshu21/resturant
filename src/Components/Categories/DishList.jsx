// src/components/DishList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import frontPagedata from '../../Components/Categories/frontPagedata';

const DishList = () => {
  const navigate = useNavigate();

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`, { state: { item } });
  };

  const handleAddToCart = (item, event) => {
    event.stopPropagation();  // Prevents click event propagation
    navigate('/cart', { state: { item } });
  };

  return (
    <div className='new-collection'>
      <hr />
      <div className="collection">
        {frontPagedata.map((item) => (
          <div
            key={item.id}
            className="product-item"
            onClick={() => handleProductClick(item)}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h3><b>₹{item.price.toFixed(2)}</b></h3>
            {item.oldPrice && <del>₹{item.oldPrice.toFixed(2)}</del>}
            <br />
            <button
              className='add-to-cart'
              onClick={(e) => handleAddToCart(item, e)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishList;
