import React from "react";
import "./HeaderBottom.css";
import { HiMenu } from "react-icons/hi";

function HeaderBottom() {
  return (
    <div className="header-bottom-container">
      <div className="menu-container">
        <HiMenu className="menu-icon" />
        <span className="menutype">All</span>
      </div>
      <nav className="menu-bottom">
        <span className="menutype">Gift Cards</span>
        <span className="menutype">Buy Again</span>
        <span className="menutype">Amazon Pay</span>
        <span className="menutype">Browsing History</span>
        <span className="menutype">Baby</span>
        <span className="menutype">Kindle eBooks</span>
        <span className="menutype">Gift Ideas</span>
        <span className="menutype">arun's Amazon.in</span>
        <span className="menutype">Health, Household &amp; Personal Care</span>
        <span className="menutype">Pet Supplies</span>
        <span className="menutype">Grocery &amp; Groument Food</span>
      </nav>
    </div>
  );
}

export default HeaderBottom;
