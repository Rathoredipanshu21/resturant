import React from 'react';
import './Deal.css';

const Deal = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center', padding: '20px', fontFamily: 'Bree Serif' }}>Top Deal of the Day</h2>

      <div className='offer-box'>
        <div className="box">
          <img src="https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyaWVzfGVufDB8fDB8fHww" alt="" />
          <div className="content">
            <b id='pop-up'>50% OFF</b>
            <br />
            <b id='pop-up2'>Order Now</b>
          </div>
          <div className="content-box">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi animi vel excepturi repellendus iusto placeat dolorum perspiciatis exercitationem facilis culpa natus, ratione fugit officiis tempore blanditiis? Fugiat laboriosam ab reprehenderit.
          </div>
        </div>
        <div className="box">
          <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <div className="content">
            <b id='pop-up'>50% OFF</b>
            <br />
            <b id='pop-up2'>Order Now</b>
          </div>
          <div className="content-box">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi animi vel excepturi repellendus iusto placeat dolorum perspiciatis exercitationem facilis culpa natus, ratione fugit officiis tempore blanditiis? Fugiat laboriosam ab reprehenderit.
          </div>
        </div>
        <div className="box">
          <img src="https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tb3N8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="content">
            <b id='pop-up'>50% OFF</b>
            <br />
            <b id='pop-up2'>Order Now</b>
          </div>
          <div className="content-box">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi animi vel excepturi repellendus iusto placeat dolorum perspiciatis exercitationem facilis culpa natus, ratione fugit officiis tempore blanditiis? Fugiat laboriosam ab reprehenderit.
          </div>
        </div>
        <div className="box">
          <img src="https://plus.unsplash.com/premium_photo-1664391929657-f901ee7f1414?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fHww" alt="" />
          <div className="content">
            <b id='pop-up'>50% OFF</b>
            <br />
            <b id='pop-up2'>Order Now</b>
          </div>
          <div className="content-box">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi animi vel excepturi repellendus iusto placeat dolorum perspiciatis exercitationem facilis culpa natus, ratione fugit officiis tempore blanditiis? Fugiat laboriosam ab reprehenderit.
          </div>
        </div>
      </div>
    </>
  );
};

export default Deal;
