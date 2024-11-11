import React from 'react';
import './../../assets/css/MainServices.css';
import { useParams } from 'react-router-dom';
import carImage1 from './../../assets/carWash/image1.jpg';
import carImage2 from './../../assets/carWash/image2.jpg';
import carImag3 from './../../assets/carWash/image2.jpg';

import bikeImage1 from './../../assets/bikeWash/image1.jpg';
import bikeImage2 from './../../assets/bikeWash/images2.jpg';
import bikeImage3 from './../../assets/bikeWash/image3.jpg';

import HouseImage1 from './../../assets/houseCleaning/image1.jpg';
import HouseImage2 from './../../assets/houseCleaning/image2.webp';
import HouseImage3 from './../../assets/houseCleaning/image3.webp';
import NavbarComponent from "../Common/Navbar";
const serviceData = {
  'Car Wash': {
    Hourly: {
      description: 'Quick hourly car wash to keep your car shining.',
      price: 'AED 15 per hour',
      image: carImage1,
    },
    Weekly: {
      description: 'Weekly car wash service for ongoing care.',
      price: 'AED 50 per week',
      image: carImage2,
    },
    Monthly: {
      description: 'Comprehensive monthly wash for best value.',
      price: 'AED 150 per month',
      image: carImag3,
    },
    Yearly: {
      description: 'Yearly subscription for hassle-free car wash service.',
      price: 'AED 1500 per year',
      image: carImage1,
    },
  },
  'Bike Wash': {
    Hourly: {
      description: 'Quick hourly bike wash to keep your bike clean.',
      price: 'AED 10 per hour',
      image: bikeImage1,
    },
    Weekly: {
      description: 'Weekly bike wash service to maintain cleanliness.',
      price: 'AED 30 per week',
      image: bikeImage2,
    },
    Monthly: {
      description: 'Monthly bike wash for best value and care.',
      price: 'AED 100 per month',
      image: bikeImage3,
    },
    Yearly: {
      description: 'Yearly bike wash service for hassle-free maintenance.',
      price: 'AED 1000 per year',
      image: bikeImage2,
    },
  },
  'House Cleaning': {
    Hourly: {
      description: 'Hourly house cleaning service to keep your space fresh.',
      price: 'AED 50 per hour',
      image: HouseImage1,
    },
    Weekly: {
      description: 'Weekly house cleaning service for consistent freshness.',
      price: 'AED 200 per week',
      image: HouseImage2,
    },
    Monthly: {
      description: 'Monthly house cleaning for best value and convenience.',
      price: 'AED 700 per month',
      image: HouseImage3,
    },
    Yearly: {
      description: 'Yearly subscription for a spotless home all year round.',
      price: 'AED 8000 per year',
      image: HouseImage2,
    },
  },
};

const PlanDetails = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) return <p>Service not found</p>;

  return (
     <>
       <NavbarComponent/>
       <div className="plan-details">
      <h1 className="plan-title">{serviceId} Plans</h1>
      <div className="plans-container">
        {Object.entries(service).map(([planType, planDetails]) => (
          <div key={planType} className="plan-card">
            <h2 className="plan-type">{planType} Plan</h2>
            <div className="plan-image-container">
              <img src={planDetails.image} alt={`${serviceId} ${planType}`} className="plan-image"/>
            </div>
            <div className="plan-info">
              <p className="plan-description">{planDetails.description}</p>
              <p className="plan-price">{planDetails.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     </>
  );
};

export default PlanDetails;
