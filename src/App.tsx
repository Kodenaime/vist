import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App