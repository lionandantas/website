import React, { useState } from "react";
import Sidebar from "../components/Siderbar";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjTree } from "../components/InfoSection/Data";
import Services from '../components/Services';
import Footer from '../components/Footer';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjTree} />
      <Services/>
     <Footer/>

      
    </>
  );
};

export default Home;
