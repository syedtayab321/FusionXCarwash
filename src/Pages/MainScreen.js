import React from "react";
import HomeScreen from "../Components/MainPage/HomeScreen";
import NavbarComponent from "../Components/Common/Navbar";
import Footer from "../Components/MainPage/footer";
import About from "../Components/MainPage/About";
import Faq from "../Components/MainPage/Faqs";

export default function MainScreen(){
    return(
      <>
          <NavbarComponent/>
          <HomeScreen/>
          <About/>
          <Faq/>
          <Footer/>
      </>
    );
}