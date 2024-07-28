import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CorouselBox.css'; // Import your CSS file for styling
import { Carousel } from 'bootstrap';

const CorouselBox = () => {
  useEffect(() => {
    const carouselElement = document.getElementById('carouselExample');
    const carousel = new Carousel(carouselElement, {
      interval: 3000, 
    });

    return () => carousel.dispose(); 
  }, []);

  return (
    <div className="carousel-container">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://jmr-prod-01.s3.amazonaws.com/sourav%20ganguly%20favourite%20kolkata%20biryani%20web%20banner.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://jmr-prod-01.s3.amazonaws.com/shubho%20nabo%20barsho%20web%20banner.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://jmr-prod-01.s3.amazonaws.com/Haleem%20Web.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CorouselBox;