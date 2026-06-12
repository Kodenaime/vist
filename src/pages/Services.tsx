import React from 'react';
import ServiceDetails from '../components/services/ServiceDetails';
import ContactSection from '../components/services/ContactSection';

const Services: React.FC = () => {
  return (
    <main className="bg-white min-h-screen">
      <ServiceDetails />
      <ContactSection />
    </main>
  );
};

export default Services;