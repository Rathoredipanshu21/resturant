import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png.jpg';
import menuIcon from '../Assets/menu.png';
import cancelIcon from '../Assets/x-mark.png';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position
      if (window.scrollY > 50) { // Adjust this value for when the navbar should change
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav id="navbar" className={isSticky ? 'sticky' : ''}>
      <div id="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      {isMobile ? (
        <>
          <div className="menu-toggle" onClick={toggleDrawer}>
            {isDrawerOpen ? (
              <img src={cancelIcon} alt="Close" />
            ) : (
              <img src={menuIcon} alt="Menu" />
            )}
          </div>

          <ul className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
            <li className="item">
              <a href="/">Home</a>
            </li>
            <li className="item">
              <a href="/service">Services</a>
            </li>
            <li className="item">
              <a href="/about">About Us</a>
            </li>
            <li className="item">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="close-icon" onClick={toggleDrawer}>
              <i className="material-icons">
                <img src={cancelIcon} alt="Close" />
              </i>
            </li>
          </ul>
        </>
      ) : (
        <ul className="navbar-list">
          <li className="item">
            <a href="/">Home</a>
          </li>
          <li className="item">
            <a href="/service">Services</a>
          </li>
          <li className="item">
            <a href="/about">About Us</a>
          </li>
          <li className="item">
            <a href="/contact">Contact Us</a>
          </li>
          <li className="item">
            <a href="/cart">Cart</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
