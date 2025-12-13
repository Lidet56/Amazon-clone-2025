import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import "./Header.css";



function Header() {
  return (
  
    <header className="header">
  

      {/* LEFT SIDE */}
      <div className="left">

        {/* LOGO */}
        <a href="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
            className="logo"
          />
        </a>

        {/* DELIVER TO */}
        <div className="deliver">
          <SlLocationPin className="locationIcon" />

          <div className="deliverText">
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>

      </div>

      {/* SEARCH BAR */}
      <div className="search">
        <select className="searchCategory">
          <option>All</option>
        </select>

        <input
          type="text"
          placeholder="Search product"
          className="searchInput"
        />

        <button className="searchButton">
          <BsSearch />
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">

        {/* LANGUAGE */}
        <div className="language">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            className="flag"
            alt="flag"
          />
          <select className="langSelect">
            <option>EN</option>
          </select>
        </div>

        {/* ACCOUNT */}
        <a href="/" className="option">
          <p>Hello, Sign in</p>
          <span>Account & Lists</span>
        </a>

        {/* ORDERS */}
        <a href="/" className="option">
          <p>Returns</p>
          <span>& Orders</span>
        </a>
        

        {/* CART */}
        <a href="/" className="cart">
          <BiCart className="cartIcon" />
          <span className="cartCount">0</span>
        </a>

      </div>
     

    </header>
    
  );
  
}

export default Header;