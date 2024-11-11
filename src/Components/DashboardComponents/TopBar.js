import React from 'react';
import { Navbar, Nav, Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';
import { FaShoppingCart, FaHeart, FaBox } from 'react-icons/fa';

const TopBar = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="px-4">
      <Container fluid>
        <Navbar.Brand href="/dashboard">Service App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <span className="text-white me-3">Hello, {username}</span>
            <Button
              variant="outline-light"
              className="me-3 rounded-circle p-2"
              onClick={() => navigate('/orders')}
              title="Orders"
            >
              <FaBox size={20} />
            </Button>
            <Button
              variant="outline-light"
              className="me-3 rounded-circle p-2"
              onClick={() => navigate('/favorites')}
              title="Favorites"
            >
              <FaHeart size={20} />
            </Button>
            <Button
              variant="outline-light"
              className="me-3 rounded-circle p-2"
              title="Shopping Cart"
              onClick={() => navigate('/cart')}
            >
              <FaShoppingCart size={20} />
            </Button>

            {/* Dropdown for Account or Logout */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="rounded-pill">
                <span className="text-white">Account</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
