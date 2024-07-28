import React, { useState } from 'react';
import './ContactUs.css'; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend, display confirmation message)
    console.log(formData);
  };

  return (
    <div className="get-in-touch-page">
      <div className="restaurant-info">
        <h2>Restaurant Information</h2>
        <p>123 Main Street</p>
        <p>City, State, ZIP</p>
        <p><FaPhone /> +1 123-456-7890</p>
        <p><FaEnvelope /> info@example.com</p>
        <p><FaMapMarkerAlt /> <a href="https://maps.google.com">View on Map</a></p>
      </div>
      <div className="form-container">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs ;
