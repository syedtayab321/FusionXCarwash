import React, { useState } from 'react';
import { ListGroup, Card} from 'react-bootstrap';
import TopBar from "../../Components/DashboardComponents/TopBar";

const OrdersScreen = () => {
  const [orders] = useState([
    { id: 1, name: 'Service 1', price: 20, status: 'order_placed' },
    { id: 2, name: 'Service 2', price: 30, status: 'order_confirmed' },
    { id: 3, name: 'Service 3', price: 40, status: 'order_delivered' },
    { id: 4, name: 'Service 4', price: 50, status: 'order_placed' },
    { id: 5, name: 'Service 5', price: 60, status: 'order_delivered' },
  ]);

  const getStatusOrders = (status) => {
    return orders.filter(order => order.status === status);
  };
    const username = localStorage.getItem('userEmail');
  return (
       <>
         <TopBar username={username} />
         <div className="container py-5">
      <h2>Your Orders</h2>

      {/* Order Placed */}
      <Card className="mb-4">
        <Card.Header>Order Placed</Card.Header>
        <ListGroup variant="flush">
          {getStatusOrders('order_placed').map((order) => (
            <ListGroup.Item key={order.id}>
              {order.name} - ${order.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>

      {/* Order Confirmed */}
      <Card className="mb-4">
        <Card.Header>Order Confirmed</Card.Header>
        <ListGroup variant="flush">
          {getStatusOrders('order_confirmed').map((order) => (
            <ListGroup.Item key={order.id}>
              {order.name} - ${order.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>

      {/* Order Delivered */}
      <Card>
        <Card.Header>Order Delivered</Card.Header>
        <ListGroup variant="flush">
          {getStatusOrders('order_delivered').map((order) => (
            <ListGroup.Item key={order.id}>
              {order.name} - ${order.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
       </>
  );
};

export default OrdersScreen;
