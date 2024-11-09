import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import './../../assets/css/cart.css';
import TopBar from "../../Components/DashboardComponents/TopBar";

const dummyCartItems = [
  { id: 1, name: 'Mountain Bike', price: 499.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Helmet', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Bike Lock', price: 15.99, image: 'https://via.placeholder.com/150' },
];

const CartScreen = ({ cartItems = dummyCartItems, onRemoveFromCart, onConfirmOrder }) => {

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
   const username = localStorage.getItem('userEmail');
  return (
      <>
         <TopBar username={username} />
        <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          Your cart is empty. Add some items to your cart!
        </div>
      ) : (
        <div>
          <Row className='cartdata'>
            {cartItems.map((item) => (
              <Col sm={12} md={6} lg={4} key={item.id} className="mb-4">
                <Card className="shadow-lg">
                  <Row noGutters>
                    <Col md={4}>
                      <Card.Img variant="top" src={item.image} />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          ${item.price.toFixed(2)}
                        </Card.Text>
                        <Button
                          variant="outline-danger"
                          onClick={() => onRemoveFromCart(item)}
                          className="mt-2 w-100"
                        >
                          <FaTrashAlt /> Remove
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Cart Summary */}
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <h4>Total: ${calculateTotal()}</h4>
            <Button
              variant="success"
              onClick={onConfirmOrder}
              className="px-5 py-3"
            >
              Confirm Order
            </Button>
          </div>
        </div>
      )}
    </div>
      </>
  );
};

export default CartScreen;
