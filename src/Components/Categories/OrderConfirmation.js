import React, { useEffect } from 'react';
import confetti from 'canvas-confetti'; // Import the canvas-confetti package
import './OrderCon.css';

const OrderConfirmation = () => {
  useEffect(() => {
    // Launch a confetti burst
    const duration = 2 * 1000; // Duration for the confetti effect
    const end = Date.now() + duration;

    // Function to create a random confetti burst
    const confettiBurst = () => {
      // Use random values to simulate a more realistic confetti burst
      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 90,
        origin: {
          x: Math.random(),
          // Adjust for full screen coverage
          y: Math.random() - 0.2
        }
      });

      // Keep firing confetti bursts until the specified duration
      if (Date.now() < end) {
        requestAnimationFrame(confettiBurst);
      }
    };

    // Call the confetti burst function
    confettiBurst();

    // Clean up the confetti effect on component unmount
    return () => confetti.reset();
  }, []);

  return (
    <div className="order-confirmation">
        
      <h1>Order Confirmed!</h1>
      <p>Your order has been placed successfully. Thank you for shopping with us!</p>
    </div>
  );
};

export default OrderConfirmation;
