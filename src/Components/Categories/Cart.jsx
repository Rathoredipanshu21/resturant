// src/components/Cart.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialItem = location.state?.item || {};

  // Manage the state of the cart item with quantity
  const [cartItem, setCartItem] = useState({
    ...initialItem,
    quantity: 1,
  });

  // Handle quantity increase
  const handleIncreaseQty = () => {
    setCartItem((prevItem) => ({
      ...prevItem,
      quantity: prevItem.quantity + 1,
    }));
  };

  // Handle quantity decrease
  const handleDecreaseQty = () => {
    setCartItem((prevItem) => ({
      ...prevItem,
      quantity: prevItem.quantity > 1 ? prevItem.quantity - 1 : 1,
    }));
  };

  // Calculate total price based on quantity
  const totalPrice = cartItem.price * cartItem.quantity;

  // Handle place order click
  const handlePlaceOrder = () => {
    navigate('/address', { state: { cartItem } });
  };

  return (
    <div className="cart">
      {cartItem && cartItem.name ? (
        <div className="cart-item">
          <img src={cartItem.img} alt={cartItem.name} />
          <h3>{cartItem.name}</h3>
          <p>{cartItem.description}</p>
          <h3>
            <b>₹{totalPrice.toFixed(2)}</b> {/* Display total price */}
          </h3>
          {cartItem.oldPrice && <del>₹{cartItem.oldPrice.toFixed(2)}</del>}
          <div className="quantity">
            <button onClick={handleDecreaseQty}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={handleIncreaseQty}>+</button>
          </div>
          <button className="place-order" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default Cart;
