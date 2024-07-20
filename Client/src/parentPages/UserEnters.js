import React from "react";
// import Header from "./components/Header/Header.jsx";
import Header from "../components/Header/Header"

import Footer from "../components/footer/Footer";
// import Home from "./components/navbarComponents/home/Home.jsx";
import Home from "../components/navbarComponents/home/Home"
// import AboutUs from "./components/navbarComponents/aboutUs/AboutUs.jsx";
import AboutUs from "../components/navbarComponents/aboutUs/AboutUs";
import Features from "../components/navbarComponents/features/Features";
import Testimonials from "../components/navbarComponents/Testimonials/Testimonials"


function  UserEnters() {
  return (
    <div>
      {/* for header */}
      <Header />
      {/* for first impression home page at home page */}
      <Home /> 
      {/* about us at home page */}
      <AboutUs />
      {/* our features at home page */}
      <Features />
      {/* <Testimonials /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
    
      <Footer />
    </div>
  );
}

export default UserEnters;
