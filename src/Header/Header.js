import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="header-sec">
            <div className="brand">
            <h1>MealDb React</h1>
            </div>
            <nav className="navbar">
              <a href="/food">Foods</a>
              <a href="/restaurant">Restaurants</a>
              <a href="/service">Service</a>
              <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;