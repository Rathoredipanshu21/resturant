import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import './PreviewOrder.css'

const PreviewOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItem, address } = location.state || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [isCelebrationVisible, setIsCelebrationVisible] = useState(false);
  const [isCaptchaCorrect, setIsCaptchaCorrect] = useState(false);
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState(0);

  useEffect(() => {
    // Generate captcha only once when the component mounts
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaNum1(num1);
    setCaptchaNum2(num2);
    setCaptchaAnswer(num1 + num2);
  }, []);

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_PYHaLDDqKzcd6G', // Razorpay API key
      amount: cartItem.price * cartItem.quantity * 100, // Amount in paise
      currency: 'INR',
      name: 'Your Store',
      description: 'Test Transaction',
      handler: function (response) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        setIsCelebrationVisible(true);
        setTimeout(() => navigate('/order-confirmation'), 3000);
      },
      prefill: {
        name: address.name,
        email: 'customer@example.com', // Sample email
        contact: '9999999999', // Sample phone number
      },
      notes: {
        address: address.street,
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleCOD = () => {
    setIsModalOpen(true);
  };

  const handleCaptchaSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captchaInput) === captchaAnswer) {
      setIsCaptchaCorrect(true);
    } else {
      alert('Captcha is incorrect. Please try again.');
    }
  };

  const handleOrderConfirmation = () => {
    setIsCelebrationVisible(true);
    setIsModalOpen(false);
    setTimeout(() => navigate('/order-confirmation'), 3000);
  };

  return (
    <div className="preview-order">
      {isCelebrationVisible && <Confetti />}
      <h1>Order Preview</h1>

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

      {/* Display address details */}
      <div className="address-details">
        <h2>Shipping Address</h2>
        <p>{address.name}</p>
        <p>{address.street}</p>
        <p>{address.city}, {address.state}</p>
        <p>{address.postalCode}, {address.country}</p>
      </div>

      {/* Payment buttons */}
      <button className="payment-button" onClick={handlePayment}>
        Make Online Payment
      </button>
      <button className="cod-button" onClick={handleCOD}>
        Cash on Delivery
      </button>

      {/* COD Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Captcha Verification</h2>
            <form onSubmit={handleCaptchaSubmit}>
              <p>
                Please solve the following captcha to confirm your order:
              </p>
              <p>
                {captchaNum1} + {captchaNum2} = ?
              </p>
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>
            {isCaptchaCorrect && (
              <button className="confirm-order-button" onClick={handleOrderConfirmation}>
                Confirm Order
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewOrder;
