import React, {useState} from 'react';
import './../../assets/css/Navbar.css';
import {Link} from "react-router-dom";
import logo from './../../assets/images/bike1.jpg'
import SignupModal from "../../Pages/AuthPages/SignUpModel";
const Navbar = () => {
const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <nav className="custom-navbar navbar navbar-expand-lg">
      <div className="container">
        <Link className="custom-navbar-brand" to="/">
          <img src={logo} alt="Logo" className="custom-logo" />
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#customNavbarNav"
          aria-controls="customNavbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="customNavbarNav">
          <ul className="navbar-nav custom-nav mx-auto">
            <li className="nav-item custom-nav-item">
              <Link className="nav-link custom-nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item custom-nav-item">
              <Link className="nav-link custom-nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item custom-nav-item">
              <Link className="nav-link custom-nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Login & Signup Buttons */}
          <div className="d-flex custom-btn-group">
            <Link to="/login" className="custom-btn custom-btn-outline mx-2">Login</Link>
            <button  onClick={handleShow} className="custom-btn custom-btn-primary mx-2">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
      <SignupModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
