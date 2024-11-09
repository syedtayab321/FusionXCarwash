import React, { useState } from 'react';
import './../../assets/css/Navbar.css';
import { Link } from "react-router-dom";
import logo from './../../assets/images/bike1.jpg';
import SignupModal from "../../Pages/AuthPages/SignUpModel";
import LoginModal from './../../Pages/AuthPages/Login';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const [loginshow, setLoginShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar">
        <Container>
          <Link className="custom-navbar-brand" to="/">
            <img src={logo} alt="Logo" className="custom-logo" />
          </Link>
          <Navbar.Toggle aria-controls="customNavbarNav" />
          <Navbar.Collapse id="customNavbarNav">
            <Nav className="mx-auto custom-nav">
              <Nav.Link as={Link} to="/services" className="custom-nav-link">Services</Nav.Link>
              <Nav.Link as={Link} to="/about" className="custom-nav-link">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="custom-nav-link">Contact</Nav.Link>
            </Nav>

            <div className="d-flex custom-btn-group">
              <Button variant="outline-secondary" onClick={handleLoginShow} className="custom-btn custom-btn-outline mx-2">Login</Button>
              <Button variant="primary" onClick={handleShow} className="custom-btn custom-btn-primary mx-2">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SignupModal show={show} handleClose={handleClose} />
      <LoginModal loginshow={loginshow} handleLoginClose={handleLoginClose} />
    </>
  );
};

export default NavbarComponent;
