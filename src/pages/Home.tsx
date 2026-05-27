import React from 'react'
import Hero from '../components/home/Hero'
import WhoItServes from '../components/home/WhoItServes'
import AboutVIST from '../components/home/AboutVIST'
import AboutStory from '../components/about/AboutStory';
import Services from '../components/home/Services'
import VISTIntro from '../components/home/VISTIntro'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutVIST />
      <AboutStory />
      <Services />
      <VISTIntro />      
      <WhoItServes />
    </div>
  )
}

export default Home;