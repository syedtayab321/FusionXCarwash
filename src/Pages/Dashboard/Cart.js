import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import TopBar from "../../Components/DashboardComponents/TopBar";
import { fetchCartItems, removeFromCart } from '../../BackendFunctions/cartUtils';

const CartScreen = ({ onConfirmOrder }) => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem('userEmail');
  const username = localStorage.getItem('userEmail');

  const loadCartItems = async () => {
    const items = await fetchCartItems(userId);
    setCartItems(items);
  };

  useEffect(() => {
    loadCartItems();
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.totalPrice || 0), 0).toFixed(2);
  };

  const handleRemoveFromCart = async (item) => {
    await removeFromCart(item.id);
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  };

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
                  <Card className="shadow-lg cart-item-card h-100">
                    <Row noGutters>
                      <Col md={4} className="card-image-wrapper">
                        <Card.Img variant="top" src={item.ImageUrl} className="card-image" />
                      </Col>
                      <Col md={8}>
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="text-primary">{item.title}</Card.Title>
                          <Card.Text className="text-success font-weight-bold">
                            AED {item.totalPrice ? item.totalPrice.toFixed(2) : '0.00'}
                          </Card.Text>

                          {/* Admin Details */}
                          <div className="admin-details mt-2 text-muted">
                            <p><strong>Admin Email:</strong> {item.adminEmail}</p>
                            <p><strong>Admin Phone:</strong> {item.adminPhoneNumber}</p>
                            <p><strong>Admin Name:</strong> {item.adminName}</p>
                          </div>

                          <Button
                            variant="outline-danger"
                            onClick={() => handleRemoveFromCart(item)}
                            className="mt-auto w-100 remove-button"
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
            <div className="mt-4 d-flex justify-content-between align-items-center summary-section p-3 shadow-lg">
              <h4 className="text-dark">Total: <span className="text-success">AED {calculateTotal()}</span></h4>
              <Button
                variant="success"
                onClick={onConfirmOrder}
                className="px-5 py-3 confirm-order-button"
              >
                Confirm Order
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Additional CSS for Styling */}
      <style jsx>{`
        .cart-item-card {
          transition: transform 0.3s ease;
        }
        .cart-item-card:hover {
          transform: scale(1.02);
        }
        .card-image-wrapper {
          overflow: hidden;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
        .card-image {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
        .remove-button {
          color: #e63946;
          font-weight: bold;
          border-color: #e63946;
          transition: background 0.3s ease;
        }
        .remove-button:hover {
          background-color: #e63946;
          color: #fff;
        }
        .summary-section {
          background: #f1f1f1;
          border-radius: 8px;
        }
        .confirm-order-button {
          font-size: 1.1rem;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default CartScreen;
