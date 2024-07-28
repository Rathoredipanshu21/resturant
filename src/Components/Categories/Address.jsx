import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Address.css';

const Address = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItem = location.state?.cartItem || {};

  // Manage address form state
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log cart item and address details
    console.log("Cart Item:", cartItem);
    console.log("Address Details:", address);

    // Navigate to a preview order page
    navigate('/preview-order', { state: { cartItem, address } });
  };

  return (
    <div className="address">
      <h1>Shipping Address</h1>

      {/* Display cart item details */}
      <div className="cart-item-details">
        <img src={cartItem.img} alt={cartItem.name} />
        <h3>{cartItem.name}</h3>
        <p>{cartItem.description}</p>
        <h3>
          <b>₹{(cartItem.price * cartItem.quantity).toFixed(2)}</b>
        </h3>
        <div className="quantity">
          Quantity: <span>{cartItem.quantity}</span>
        </div>
      </div>

      {/* Address form */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={address.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={address.postalCode}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={address.country}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Address;
