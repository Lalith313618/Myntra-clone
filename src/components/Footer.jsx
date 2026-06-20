import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {}
        <div className="footer-col">
          <h4 className="footer-heading">ONLINE SHOPPING</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Men</a></li>
            <li><a href="#" className="footer-link">Women</a></li>
            <li><a href="#" className="footer-link">Kids</a></li>
            <li><a href="#" className="footer-link">Home & Living</a></li>
            <li><a href="#" className="footer-link">Beauty</a></li>
          </ul>
        </div>

        {}
        <div className="footer-col">
          <h4 className="footer-heading">CUSTOMER POLICIES</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Contact Us</a></li>
            <li><a href="#" className="footer-link">FAQ</a></li>
            <li><a href="#" className="footer-link">T&C</a></li>
            <li><a href="#" className="footer-link">Terms Of Use</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>

        {}
        <div className="footer-col">
          <h4 className="footer-heading">EXPERIENCE MYNTRA APP</h4>
          <div className="footer-apps">
            <div className="app-badge">📱 Google Play</div>
            <div className="app-badge">🍎 App Store</div>
          </div>

          <h4 className="footer-heading footer-heading--mt">KEEP IN TOUCH</h4>
          <div className="footer-socials">
            <a href="#" className="social-btn">📘 Facebook</a>
            <a href="#" className="social-btn">🐦 Twitter</a>
            <a href="#" className="social-btn">📸 Instagram</a>
          </div>
        </div>

        {}
        <div className="footer-col">
          <h4 className="footer-heading">MYNTRA ORIGINALS</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Roadster</a></li>
            <li><a href="#" className="footer-link">HRX by Hrithik Roshan</a></li>
            <li><a href="#" className="footer-link">All About You</a></li>
            <li><a href="#" className="footer-link">Anouk</a></li>
          </ul>
        </div>
      </div>

      {}
      <div className="footer-bottom">
        <p className="footer-copy">
          © 2026 <strong>Myntra</strong> Clone — Built with React for learning purposes.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
