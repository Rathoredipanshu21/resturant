import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="at-container">
        <div className="at-item">
          <section id="home">
         
            <h1 className="h-primary">Welcome to MyOnlineMeal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              earum assumenda dolores.
            </p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}
            <button className="btn">Order Now</button>
            
          </section>
        </div>
      </div>

     
    </div>
  );
};

export default Hero;
