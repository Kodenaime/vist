import React from 'react'
import Hero from '../components/home/Hero'
import WhoItServes from '../components/home/WhoItServes'
import AboutVIST from '../components/home/AboutVIST'
import VISTIntro from '../components/home/VISTIntro'
import ServicesPillars from '../components/home/ServicesPillars';
import ProductsBento from '../components/home/ProductsBento';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutVIST />
      <ServicesPillars />
      <ProductsBento />
      <VISTIntro />      
      <WhoItServes />
    </div>
  )
}

export default Home;