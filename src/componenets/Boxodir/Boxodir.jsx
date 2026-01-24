import React from 'react';
import './Boxodir.css';
import logo from '/images/logo.png';
import { FaFacebookF, FaInstagram, FaPinterestP, FaUser } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Boxodir() {
  const navLinks = [
    { id: 1, title: "Home", dropdown: true },
    { id: 2, title: "Features", dropdown: true },
    { id: 3, title: "Pages", dropdown: true },
    { id: 4, title: "Blogs", dropdown: true },
    { id: 5, title: "Contact", dropdown: false },
  ];

  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="container">
            <div className="top-left">
              <span>📍 Los Angeles, CA, USA</span>
              <span className="separator">|</span>
              <span>✉️ tourex@gmail.com</span>
            </div>
            <div className="top-right">
              <span>Follow Us:</span>
              <div className="social-icons">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
                <FaPinterestP />
              </div>
            </div>
          </div>
        </div>

        <nav className="main-nav">
          <div className="container nav-container">
            <div className="logo">
              <div className="logo-text">
                <img src={logo} alt="Tourex Logo" />
              </div>
            </div>

            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.title} {link.dropdown && <span className="arrow">v</span>}
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <div className="call-info">
                <div className="phone-icon">📞</div>
                <div>
                  <p className="call-label">Call Us:</p>
                  <p className="phone-number">123-343-4444</p>
                </div>
              </div>
              <button className="login-btn">
                <FaUser /> Login
              </button>
              <div className="menu-burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Discover The World!</h1>
          <h2>Find Your Destination Today!</h2>

          <div className="search-box">
            <div className="search-inputs">
              {[
                { label: "Destinations:", placeholder: "Where are you going...", icon: "📍" },
                { label: "Check In:", placeholder: "12.00", icon: "📅" },
                { label: "Check Out:", placeholder: "12.10", icon: "📅" },
                { label: "Guest:", placeholder: "+ Add Guests", icon: "👤" }
              ].map((item, index) => (
                <div key={index} className="input-group">
                  <label>{item.label}</label>
                  <div className="input-wrapper">
                    <input type="text" placeholder={item.placeholder} />
                    <span className="input-icon">{item.icon}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="search-btn">
              SEARCH 🔍
            </button>
          </div>
        </div>
      </section>
    </>

  );
}

export default Boxodir;
