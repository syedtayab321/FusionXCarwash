import React, { useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './../../assets/css/fav.css';
import TopBar from "../../Components/DashboardComponents/TopBar";

const FavoritesScreen = ({ onAddToCart }) => {
  const [favorites] = useState([
    { id: 1, name: 'Service 1', price: 20 },
    { id: 2, name: 'Service 2', price: 30 },
    { id: 3, name: 'Service 3', price: 40 },
  ]);
  const username = localStorage.getItem('userEmail');
  return (
    <>
        <TopBar username={username} />
    <div className="container py-5">
      <h2 className="mb-4 text-center">Your Favorites</h2>
      <Row>
        {favorites.map((service) => (
          <Col md={4} sm={6} xs={12} key={service.id} className="mb-4">
            <Card className="fav-card shadow-lg">
              <Card.Body>
                <Card.Title className="fav-title">{service.name}</Card.Title>
                <Card.Text className="fav-price">${service.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => onAddToCart(service)}
                  className="add-to-cart-btn w-100"
                >
                  <FaShoppingCart /> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </>
  );
};

export default FavoritesScreen;
