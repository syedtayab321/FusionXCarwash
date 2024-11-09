import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const CartScreen = ({ cartItems, onRemoveFromCart, onConfirmOrder }) => {
  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <span>{item.name} - ${item.price}</span>
              <Button variant="outline-danger" onClick={() => onRemoveFromCart(item)}>
                <FaTrashAlt />
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {cartItems.length > 0 && (
        <Button variant="success" onClick={onConfirmOrder} className="mt-4 w-100">
          Confirm Order
        </Button>
      )}
    </div>
  );
};

export default CartScreen;
