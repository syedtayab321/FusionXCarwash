import React, { useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import {  FaShoppingCart } from 'react-icons/fa';

const FavoritesScreen = ({ onAddToCart }) => {
  const [favorites] = useState([
    { id: 1, name: 'Service 1', price: 20 },
    { id: 2, name: 'Service 2', price: 30 },
    { id: 3, name: 'Service 3', price: 40 },
  ]);

  return (
    <div className="container py-5">
      <h2>Your Favorites</h2>
      <Row>
        {favorites.map((service) => (
          <Col md={4} key={service.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>${service.price}</Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => onAddToCart(service)}
                  className="w-100"
                >
                  <FaShoppingCart /> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FavoritesScreen;
