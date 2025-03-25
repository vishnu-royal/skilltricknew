// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CookiesPolicy from "./Pages/CookiesPolicy";
import TermsOfUse from "./Pages/TermsOfUse";



function App() {
  return (
    <>

    
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/CookiesPolicy" element={<CookiesPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />


      </Routes>
      <Footer />

      


    </>
  );
}

export default App;
