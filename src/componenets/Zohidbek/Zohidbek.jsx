import React from 'react'
import "./Zohidbek.css"
import logo from "/images/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function Zohidbek() {
  return (
    <>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-col logo-col">
            <div class="logo">
              <img className='logo' src={logo} alt="" />
            </div>

            <p className='info'>
              It Is A Long Established Fact That A Reader Will Be Distracted By
              The Readable Content Of A Page When Looking At Its Layout The Point
              Of Using Lorem Varius Sit Amet Ipsum.
            </p>

            <div class="subscribe">
              <input className='input' type="email" placeholder="Enter your mail" />
              <button className='subscribeBtn'>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div class="socials">
              <a className='+746
              
              ' href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter />
              </a>
              <a href="#"><FaInstagram />
              </a><a href="#"><FaLinkedinIn />
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Utility Pages</h4>
            <ul>
              <li><a href="#">Team</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Cart</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Faq</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Information</h4>

            <div class="info-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>Los Angeles, CA, USA</span>
            </div>

            <div class="info-item">
              <i class="fa-solid fa-phone"></i>
              <span>123-343-4444</span>
            </div>

            <div class="info-item">
              <i class="fa-solid fa-clock"></i>
              <span>Mon - Sat: 8 Am - 5 Pm, Sunday: CLOSED</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          Copyright 2025, Tourex All Rights Reserved.
        </div>
      </footer>
    </>
  )
}

export default Zohidbek