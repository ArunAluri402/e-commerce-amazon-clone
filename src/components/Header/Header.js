import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <div className="header-wrapper">
      <img className="main-logo" src="./images/amazon.png" />
      <div className="search-bar-container">
        <input className="input-search" type="text" />
        <FaSearch className="search-icon" />
      </div>
      <div className="nav-elements">
        <div className="nav-content">
          <span>Hello, arun</span>
          <div className="content-text">Accounts &amp; Lists</div>
        </div>

        <div className="nav-content">
          <span>Returns</span>
          <div className="content-text">&amp; Orders</div>
        </div>

        <div className="nav-content">
          <FiShoppingCart className="cart-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
