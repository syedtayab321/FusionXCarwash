import React from "react";
import '../../assets/css/Home.css';
import image1 from './../../assets/images/image1.jpg';
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <>
      <div className="main-page">
      <section className="hero-section text-center text-white">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="display-4">Premium Car Wash Services</h1>
            <p className="lead">Quality, Convenience, and Trust</p>
            <Link to="/login" className="btn btn-primary btn-lg">Book Now</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section text-center py-5">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service-card p-4">
                <img src={image1} alt="Exterior Wash" className="service-img mb-3"/>
                <h3>Exterior Wash</h3>
                <p>Thorough exterior cleaning for a shiny, like-new look.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card p-4">
                <img src={image1} alt="Interior Cleaning" className="service-img mb-3"/>
                <h3>Interior Cleaning</h3>
                <p>Deep interior cleaning to keep your car fresh and neat.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card p-4">
                <img src={image1} alt="Full Package" className="service-img mb-3"/>
                <h3>Full Package</h3>
                <p>Complete cleaning for both the exterior and interior.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-light text-center py-5">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card p-4">
                <p>"Best car wash experience! My car looks brand new every time!"</p>
                <p><strong>- John Doe</strong></p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-4">
                <p>"Fantastic service, very professional and thorough."</p>
                <p><strong>- Jane Smith</strong></p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-4">
                <p>"Reliable and affordable. Highly recommend!"</p>
                <p><strong>- Alex Brown</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center text-white py-5">
        <div className="container">
          <h2>Ready for a Sparkling Clean Car?</h2>
          <p>Book your appointment with us today!</p>
          <Link to="/services" className="btn btn-outline-light btn-lg">Get Started</Link>
        </div>
      </section>
    </div>
    </>
  );
}
