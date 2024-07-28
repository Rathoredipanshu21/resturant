import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NonVeg.css';
import data from '../../data'; 

const NonVeg = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    navigate('/cart', { state: { item: item } });
  };

  return (
    <>  
  

    <div class="at-container">
        <div class="at-item">
          <section id="home">
            <h1 class="h-primary">Welcome to MyOnlineMeal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              earum assumenda dolores.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <button class="btn">Order Now</button>
                
          </section>
        </div>
      </div>

      <div className='new-collection'>
     
     <hr/>
     <div className="collection">
       {data.map((item, i) => ( 
         <div key={i} className="product-item">
           <img src={item.img} alt={item.name} />
           <h3>{item.name}</h3>
           <p>{item.description}</p>
           <h3><b>₹{item.price.toFixed()}</b></h3>
<del>₹{item.oldPrice.toFixed(2)}</del>

           <br/>
           <button className='add-to-cart' onClick={() => handleAddToCart(item)}>Add to Cart</button>
         </div>
       ))}
     </div>
   </div>
    </>

  );
};

export default NonVeg;
