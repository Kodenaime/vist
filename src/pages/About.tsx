import React from 'react'
import AboutStory from '../components/about/AboutStory';
import OdionDeepDive from '../components/about/OdionDeepDive';
import HowItWorks from '../components/about/HowItWorks';
import GetStarted from '../components/about/GetStarted';

const About:React.FC = () => {
  return (
    <div>
      <AboutStory />
      <OdionDeepDive />
      <HowItWorks />
      <GetStarted />
    </div>
  )
}

export default About;