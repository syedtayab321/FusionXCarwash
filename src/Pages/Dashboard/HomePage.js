import React from 'react';
import ServicePage from "../../Components/DashboardComponents/ServicePage";
const HomePage = () => {
     const data = localStorage.getItem('userEmail');
  if (data === null){
      return (
        <>
           <div className="home-page-container">
              <h1>Welcome to Fusion X car Wash</h1>
              <p>Welcome to our home page</p>
              <p>Please log in to access your dashboard</p>
           </div>
        </>
        );
  }else{
        return (
        <>
           <ServicePage/>
        </>
        );
  }
};

export default HomePage;
