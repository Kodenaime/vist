import React from 'react'
import Hero from '../components/home/Hero'
import WhoItServes from '../components/home/WhoItServes'
import AboutVIST from '../components/home/AboutVIST'
import OdionIntro from '../components/home/OdionIntro'
import KeyFeatures from '../components/home/KeyFeatures'
import Services from '../components/home/Services'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutVIST />
      <Services />
      <OdionIntro />
      <KeyFeatures />
      <WhoItServes />
    </div>
  )
}

export default Home;