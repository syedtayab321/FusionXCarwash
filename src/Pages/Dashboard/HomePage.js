import React from 'react';
import ServicePage from "../../Components/DashboardComponents/ServicePage";
import TopBar from "../../Components/DashboardComponents/TopBar";
const HomePage = () => {
    const authUser = localStorage.getItem('userEmail');
        return (
        <>
            <TopBar username={authUser} />
            <ServicePage/>
        </>
        );
};

export default HomePage;
