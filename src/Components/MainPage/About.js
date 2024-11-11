import React from 'react';
import './../../assets/css/about.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from './../../assets/images/bike1.jpg';
import image2 from './../../assets/images/image1.jpg';
import image3 from './../../assets/images/home.jpg';
const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-text">
          <h1>About Us</h1>
          <p>Dedicated to providing premium car, home, and bike cleaning services tailored to meet your needs.</p>
        </div>
      </section>

      {/* About Our Company Section */}
      <Container className="about-company">
        <Row>
          <Col md={6}>
            <img
              src={image1}
              alt="Car Wash Service"
              className="about-image"
            />
          </Col>
          <Col md={6} className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are a team of passionate professionals committed to delivering high-quality car wash, home cleaning, and bike cleaning services. With a focus on efficiency and customer satisfaction, we use advanced cleaning techniques to bring you the best results every time.
            </p>
            <Button variant="primary" className="about-btn">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* Our Services Section */}
      <Container className="our-services">
        <h2 className="section-title">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Car Cleaning</Card.Title>
                <Card.Text>
                  Comprehensive car wash services to keep your vehicle spotless, inside and out.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Home Cleaning</Card.Title>
                <Card.Text>
                  Professional home cleaning services to make your space shine.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Bike Cleaning</Card.Title>
                <Card.Text>
                  Specialized bike cleaning services to keep your ride in top condition.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
