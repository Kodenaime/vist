import React from 'react'
import OdionDeepDive from '../components/about/OdionDeepDive';
import HowItWorks from '../components/about/HowItWorks';
import GetStarted from '../components/about/GetStarted';
import KeyFeatures from '../components/home/KeyFeatures'

const About:React.FC = () => {
  return (
    <div>
      <OdionDeepDive />
      <KeyFeatures />
      <HowItWorks />
      <GetStarted />
    </div>
  )
}

export default About;