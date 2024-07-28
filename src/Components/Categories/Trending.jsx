import React from 'react'
import './Trending.css'
import arrow from '../Assets/arrow.png'

const Trending = () => {
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


    <div className='card-trending-main'>

    <div className="card-trending" >
  <img src="https://images.unsplash.com/photo-1642821373181-696a54913e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpeWFuaXxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h4 className="card-title" id='card-title-text' style={{textAlign:'center', padding:'15px'}}><b>Chicken Briyani</b></h4>
   <p>
   Delicious aromatic rice dish with chicken 
   </p>
   <h4><b>₹199.00</b></h4>
   <del>₹239.00</del>
    <a href="#" className="btn btn-primary" style={{margin:'2px auto'}}>Add to cart</a>
  </div>
    </div>

    <div className="card-trending" >
  <img src="https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11dHRvbiUyMGN1cnJ5fGVufDB8fDB8fHww" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h4 className="card-title" id='card-title-text' style={{textAlign:'center' , padding:'15px'}}><b>Mutton curry</b></h4>
   <p>
   "Delicious mutton curry for dinner tonight."
   </p>
   <h4><b>₹499.00</b></h4>
   <del>₹639.00</del>
    <a href="#" className="btn btn-primary" style={{margin:'2px auto'}}>Add to cart</a>
  </div>
    </div>

    <div className="card-trending" >
  <img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1dHRlciUyMGNoaWNrZW4lMjBkaXNofGVufDB8fDB8fHww" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h4 className="card-title" id='card-title-text' style={{textAlign:'center', padding:'15px'}}><b>Butter Chicken</b></h4>
   <p>
   "Savory, creamy, aromatic, classic Indian cuisine."
   </p>
   <h4><b>₹599.00</b></h4>
   <del>₹639.00</del>
    <a href="#" className="btn btn-primary" style={{margin:'2px auto'}}>Add to cart</a>
  </div>
    </div>

    <div className="card-trending" >
  <img src="https://images.unsplash.com/photo-1626508035297-0cd27c397d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaCUyMGN1cnJ5fGVufDB8fDB8fHww" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h4 className="card-title" id='card-title-text' style={{textAlign:'center', padding:'15px'}}><b>Fish Curry</b></h4>
   <p>
   "Exquisite fish curry, a culinary delight."
   </p>
   <h4><b>₹399.00</b></h4>
   <del>₹479.00</del>
    <a href="#" className="btn btn-primary" style={{margin:'2px auto'}}>Add to cart</a>
  </div>
    </div>


    </div>
   
    <div className='card-trending-main'>

    <div className="card-trending" >
  <img src="https://images.unsplash.com/photo-1690401769082-5f475f87fb22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFubmVyYnV0dGVybWFzYWxhfGVufDB8fDB8fHww" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h4 className="card-title" id='card-title-text' style={{textAlign:'center', padding:'15px'}}><b>Paneer Chilli</b></h4>
   <p>
   Delicious aromatic rice dish with chicken 
   </p>
   <h4><b>₹299.00</b></h4>
   <del>₹379.00</del>
    <a href="#" className="btn btn-primary" style={{margin:'2px auto'}}>Add to cart</a>
  </div>
    </div>

    <div className="card-trending" >
  <img src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h4 className="card-title" id='card-title-text' style={{textAlign:'center' , padding:'15px'}}><b>Dosa</b></h4>
   <p>
   "Delicious mutton curry for dinner tonight."
   </p>
   <h4><b>₹199.00</b></h4>
   <del>₹239.00</del>
    <a href="#" className="btn btn-primary" style={{margin:'2px auto'}}>Add to cart</a>
  </div>
    </div>

    <div className="card-trending" >
  <img src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fHww" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h4 className="card-title" id='card-title-text' style={{textAlign:'center', padding:'15px'}}><b>Tandoori Chicken</b></h4>
   <p>
   "Savory, creamy, aromatic, classic Indian cuisine."
   </p>
   <h4><b>₹349.00</b></h4>
   <del>₹439.00</del>
    <a href="#" className="btn btn-primary" style={{margin:'2px auto'}}>Add to cart</a>
  </div>
    </div>

    <div className="card-trending" >
  <img src="https://images.unsplash.com/photo-1569058242252-623df46b5025?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWdnJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h4 className="card-title" id='card-title-text' style={{textAlign:'center', padding:'15px'}}><b>Egg Curry</b></h4>
   <p>
   "Exquisite fish curry, a culinary delight."
   </p>
   <h4><b>₹99.00</b></h4>
   <del>₹129.00</del>
    <a href="#" className="btn btn-primary" style={{margin:'2px auto'}}>Add to cart</a>
  </div>
    </div>


    </div>

   
    </>
  )
}

export default Trending