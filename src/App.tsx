import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Sectors from './pages/Sectors'
import ScrollToTopAndRefresh from './layout/ScrollToTopAndRefresh'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTopAndRefresh />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App