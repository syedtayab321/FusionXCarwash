import React from 'react';
import './../../assets/css/footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container py-5">
        <div className="row">

          {/* About Us */}
          <div className="col-md-3">
            <h5 className="footer-heading">About Us</h5>
            <p className="footer-text">Providing top-notch car wash, bike cleaning, and home cleaning services with a focus on quality and convenience.</p>
            <div className="social-icons">
              <Link to="#" className="social-link"><FaFacebookF /></Link>
              <Link to="#" className="social-link"><FaTwitter /></Link>
              <Link to="#" className="social-link"><FaInstagram /></Link>
            </div>
          </div>

          {/* Services */}
          <div className="col-md-3">
            <h5 className="footer-heading">Our Services</h5>
            <ul className="footer-links">
              <li><Link to="#car-wash" className="footer-link">Car Wash</Link></li>
              <li><Link to="#bike-cleaning" className="footer-link">Bike Cleaning</Link></li>
              <li><Link to="#home-cleaning" className="footer-link">Home Cleaning</Link></li>
              <li><Link to="#deep-cleaning" className="footer-link">Deep Cleaning</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/faqs" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-3">
            <h5 className="footer-heading">Contact Us</h5>
            <p className="footer-text"><FaPhoneAlt /> +1 234 567 890</p>
            <p className="footer-text"><FaEnvelope /> info@cleaningservices.com</p>
            <p className="footer-text"><FaMapMarkerAlt /> 123 Clean Street, Sparkling City</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom text-center py-3">
        <p className="mb-0">© 2024 Fusion X CarWash. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
