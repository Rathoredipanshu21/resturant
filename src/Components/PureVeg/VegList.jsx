import React from 'react'
import './VegList.css'
import arrow from '../Assets/arrow.png'
import { useNavigate } from 'react-router-dom';

import Veglistdata from '../../Components/PureVeg/Veglistdata';

const VegList = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    navigate('/cart', { state: { item: item } });
  };
  return (

    <>
   
     <div className="scanner">
    <img src="https://justmyroots.com/a3b6cdf74966b8a33ce3eb882f05e9f1.gif" alt="" />

    </div>
    <hr />
    <div className='Trending'>
        <h1 id='topic-trending'>TRENDING DISHES</h1>
        <h4 id='topic-trending'><a href="/">view more</a>  <img src={arrow} alt="" /></h4>
    </div>

      
    <div className='new-collection'>
     
     <hr/>
     <div className="collection">
     {Veglistdata.map((item, i) => ( 
  <div key={i} className="product-item">
    <img src={item.img} alt={item.name} />
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <h3><b>₹{Number(item.price).toFixed(2)}</b></h3>
    <del>₹{Number(item.old_price).toFixed(2)}</del>
    <br/>
    <button className='add-to-cart' onClick={() => handleAddToCart(item)}>Add to Cart</button>
  </div>
))}
     </div>
   </div>

  
  
   
    </>
  )
}

export default VegList