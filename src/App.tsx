import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.jsx";
import Banner from "./Banner/Banner.jsx"
import Services from "./Services/Services.jsx"
import './App.css';
import CaseStudies from './CaseStudies/CaseStudies';
import Brands from './Brands/Brands';
import Footer from './Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Services/>
      <CaseStudies/>
      <Brands/>
      <Footer/>
    </div>
  );
}

export default App;
