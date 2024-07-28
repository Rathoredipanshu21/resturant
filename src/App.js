import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MainCategories from './Components/Categories/MainCategories';
import Footer from './Components/Footer/Footer';
import MainService from './Components/Services/MainService';
import Pureveg from './Components/PureVeg/Pureveg';
import NonVeg from './Components/NonVeg/NonVeg';
import Hero from './Components/Categories/Hero';
import DishList from './Components/Categories/DishList';
import Cart from './Components/Categories/Cart';
import Address from './Components/Categories/Address';
import PreviewOrder from './Components/Categories/PreviewOrder';
import OrderConfirmation from './Components/Categories/OrderConfirmation';

function App() {
  return (
    <Router>
      <Navbar />
    
      <Hero/>

      <Routes>
        <Route path="/" element={<MainCategories />} />
        <Route path="/service" element={<MainService />} />
        <Route path="/pureVeg" element={<Pureveg />} />
        <Route path="/NonVegMain" element={<NonVeg />} />

        <Route path="/" element={<DishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} /> 
        <Route path="/preview-order" element={<PreviewOrder />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
       
       

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
