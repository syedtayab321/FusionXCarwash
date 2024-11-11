import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './../../assets/css/faqs.css';

const Faq = () => {
  return (
    <Container className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-subtitle">Find answers to our most common questions about our car wash, home cleaning, and bike cleaning services.</p>

      <Accordion defaultActiveKey="0" className="faq-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What types of services do you offer?</Accordion.Header>
          <Accordion.Body>
            We offer a variety of services including car washing, home cleaning, and bike cleaning. Our services are designed to provide thorough and professional cleaning solutions tailored to your needs.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Do I need to book an appointment in advance?</Accordion.Header>
          <Accordion.Body>
            Yes, we recommend booking an appointment to ensure availability, especially during peak hours. You can book easily through our website or by calling our customer service team.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>What cleaning products do you use?</Accordion.Header>
          <Accordion.Body>
            We use eco-friendly, high-quality cleaning products that are safe for both your vehicle and the environment. Our team is trained to use products that provide effective cleaning without causing damage.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>How long does a car wash take?</Accordion.Header>
          <Accordion.Body>
            A standard car wash typically takes around 30-45 minutes, depending on the service package you choose. Our team is committed to providing a quick, efficient, and thorough cleaning experience.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Can I trust your team with my belongings?</Accordion.Header>
          <Accordion.Body>
            Absolutely. Our staff is trained, professional, and trustworthy. We take great care with all personal items and ensure that they are handled with respect and responsibility.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Do you offer any discounts or membership packages?</Accordion.Header>
          <Accordion.Body>
            Yes, we offer various discounts and membership packages. Our membership plans provide regular customers with exclusive benefits and savings. Contact us to learn more about our ongoing offers.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;
