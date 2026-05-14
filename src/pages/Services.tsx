import React from 'react'
import ServiceDetails from '../components/services/ServiceDetails'
import CaseStudies from '../components/services/CaseStudies'
import ContactSection from '../components/services/ContactSection'

const Services: React.FC = () => {
  return (
    <div>
        <ServiceDetails />
        <CaseStudies />
        <ContactSection />
    </div>
  )
}

export default Services