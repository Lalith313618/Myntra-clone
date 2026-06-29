import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../Assets/Logo.jpg";
import { Link } from "react-router-dom";

function Navbar({ cartCount, wishlistCount, searchQuery, setSearchQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {}
        <div className="navbar-logo">
          <span className="logo-text"><img src={logo} alt="Logo" width="50" /></span>
        </div>
        {}
        <nav className="navbar-links">
          <a href="#" className="nav-link">MEN</a>
          <a href="#" className="nav-link">WOMEN</a>
          <a href="#" className="nav-link">KIDS</a>
          <a href="#" className="nav-link">HOME & LIVING</a>
          <a href="#" className="nav-link">BEAUTY</a>
          <a href="#" className="nav-link nav-link--sale">STUDIO</a>
        </nav>
        {}
        <div className="navbar-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {}
        <div className="navbar-actions">
          <button className="action-btn">
            <span className="action-icon">👤</span>
            <span className="action-label">Profile</span>
          </button>
          <button className="action-btn">
            <span className="action-icon">❤️</span>
            <span className="action-label">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="action-badge">{wishlistCount}</span>
            )}
          </button>
          <Link to="/bag" className="action-btn">
       <span className="action-icon">🛍️</span>
       <span className="action-label"> Bag</span>
       {cartCount > 0 && (
       <span className="action-badge">{cartCount}</span>
      )}
      </Link>
        </div>

        {}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#" className="mobile-link">Men</a>
          <a href="#" className="mobile-link">Women</a>
          <a href="#" className="mobile-link">Kids</a>
          <a href="#" className="mobile-link">Home & Living</a>
          <a href="#" className="mobile-link">Beauty</a>
          <a href="#" className="mobile-link">Studio</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
