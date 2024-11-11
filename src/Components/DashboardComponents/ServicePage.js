import React, { useEffect, useState } from 'react';
import { fetchServices } from '../../BackendFunctions/FetchServices';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import TopBar from '../../Components/DashboardComponents/TopBar';
import '../../assets/css/servicecard.css';

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('User');

  const navigate = useNavigate();

  useEffect(() => {
    const loadServices = async () => {
      try {
        const fetchedServices = await fetchServices();
        setServices(fetchedServices);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const handleCardClick = (serviceId) => {
    navigate('/subCategories', { state: { serviceId } });
  };

  return (
    <>
      <Container className="mt-4">
        <h2 className="text-center mb-4" style={{ color: '#34495e', fontWeight: 'bold' }}>Our Services</h2>
        <Row>
          {services.map((service) => (
            <Col md={4} key={service.id} className="mb-4">
              <Card
                className="service-card shadow-sm"
                onClick={() => handleCardClick(service.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-image-container">
                  <Card.Img variant="top" src={service.ImageUrl} alt={service.id} className="service-card-img" />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="service-title">{service.id}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ServicePage;
