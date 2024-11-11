import React, { useState } from 'react';
import './../../assets/css/Navbar.css';
import {Link, useNavigate} from "react-router-dom";
import logo from './../../assets/images/home.jpg';
import SignupModal from "../../Pages/AuthPages/SignUpModel";
import LoginModal from './../../Pages/AuthPages/Login';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const [loginshow, setLoginShow] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);

  const handleGusetLogin = async () => {
        try {
      const userCredential = await signInAnonymously(auth);
      localStorage.setItem('userEmail', 'GuestUser');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
      console.error('Error logging in anonymously:', err);
    }
  };
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
              <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="custom-nav-link">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="custom-nav-link">Contact</Nav.Link>
              <Nav.Link as={Link} to="/faqs" className="custom-nav-link">Faqs</Nav.Link>
            </Nav>

            <div className="d-flex custom-btn-group">
              <Button variant="outline-secondary" onClick={handleLoginShow} className="custom-btn custom-btn-outline mx-2">Login</Button>
              <Button variant="primary" onClick={handleShow} className="custom-btn custom-btn-primary mx-2">Sign Up</Button>
              <Button variant="outline-secondary" onClick={handleGusetLogin} className="custom-btn mx-2">Continue as Guest</Button>
              {error && <p style={{ color: 'red' }}>Error: {error}</p>}
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
