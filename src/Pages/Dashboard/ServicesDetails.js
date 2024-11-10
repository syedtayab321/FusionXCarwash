import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Timestamp } from 'firebase/firestore';
import './../../assets/css/serviceDetals.css';
import TopBar from "../../Components/DashboardComponents/TopBar";
import { addToCart } from '../../BackendFunctions/AddToCart'; // Import the addToCart function

const ServiceDetailsPage = () => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedHours, setSelectedHours] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const username = localStorage.getItem('userEmail');
  const location = useLocation();
  const data = location.state?.data;

  useEffect(() => {
    if (data) {
      const formattedData = {
        ...data,
        createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(data.createdAt),
      };
      setService(formattedData);
      setTotalPrice(Number(formattedData.price)); // Ensure initial price is a number
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [data]);

  const handleIncreaseHours = () => {
    setSelectedHours((prev) => prev + 1);
    handlePriceUpdate(selectedHours + 1); // Pass updated hours
  };

  const handleDecreaseHours = () => {
    if (selectedHours > 1) {
      setSelectedHours((prev) => prev - 1);
      handlePriceUpdate(selectedHours - 1); // Pass updated hours
    }
  };

  const handleAddToCart = () => {
    const cartData = {
      ImageUrl: service?.ImageUrl,
      adminEmail: service?.adminEmail,
      adminId: service?.adminId,
      adminName: service?.adminName,
      adminPhoneNumber: service?.adminMobile,
      selectedHours: selectedHours,
      title: service?.title,
      totalPrice: totalPrice,
      userId: username,
      orderDate: Timestamp.now(),
    };

    addToCart(cartData)
      .then(() => alert("Added to cart!"))
      .catch((error) => console.error("Error adding to cart:", error));
  };

  const handlePriceUpdate = (hours) => {
    const updatedPrice = Number(service?.price) * hours;
    setTotalPrice(updatedPrice); // Ensure `updatedPrice` is always a number
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <TopBar username={username} />
      <Container className="mt-5">
        <h2 className="text-center mb-4" style={{ color: '#34495e', fontWeight: 'bold' }}>
          {service?.title}
        </h2>

        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={12} className="mb-4">
            <Card className="service-card shadow-lg">
              <Card.Img
                variant="top"
                src={service?.ImageUrl || 'https://via.placeholder.com/300'}
                alt={service?.title}
                className="service-card-img"
                style={{ maxWidth: '100%', maxHeight: '250px', objectFit: 'contain' }}
              />
            </Card>
          </Col>

          <Col lg={6} md={8} sm={12} className="mb-4">
            <Card className="service-card shadow-lg">
              <Card.Body>
                <Card.Title>{service?.title}</Card.Title>
                <Card.Text className="text-muted">
                  <small>{service?.createdAt?.toLocaleString()}</small>
                </Card.Text>
                <Card.Text>{service?.description}</Card.Text>
                <Card.Text>
                  <strong>Location:</strong> {service?.location}
                </Card.Text>
                <Card.Text>
                  <strong>Price per Hour:</strong> AED {service?.price}
                </Card.Text>
                <Card.Text>
                  <strong>Available Hours:</strong> {service?.hoursAvailable || service?.wash} hours
                </Card.Text>

                <Card.Text>
                  <strong>Rating:</strong>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} color={index < service?.rating ? '#f39c12' : '#ddd'} />
                  ))}
                </Card.Text>

                <Card.Text>
                  <strong>Service Provider:</strong> {service?.adminName}
                </Card.Text>
                <Card.Text>
                  <strong>Contact:</strong> {service?.adminMobile} |{' '}
                  <a href={`mailto:${service?.adminEmail}`}>{service?.adminEmail}</a>
                </Card.Text>

                <Card.Text>
                  <strong>Select Hours:</strong>
                  <Button variant="secondary" onClick={handleDecreaseHours} disabled={selectedHours <= 1}>
                    -
                  </Button>
                  <span className="mx-3">{selectedHours}</span>
                  {service?.hoursAvailable && service?.wash <= selectedHours ? null :
                    <Button variant="secondary" onClick={handleIncreaseHours}>
                      +
                    </Button>
                  }
                </Card.Text>

                <Card.Text>
                  <strong>Total Price:</strong> AED {Number(totalPrice).toFixed(2)}
                </Card.Text>

                <Button variant="primary" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceDetailsPage;
