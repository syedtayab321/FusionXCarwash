import React from "react";
import HomeScreen from "../Components/MainPage/HomeScreen";
import NavbarComponent from "../Components/Common/Navbar";

export default function MainScreen(){
    return(
      <>
          <NavbarComponent/>
          <HomeScreen/>
      </>
    );
}