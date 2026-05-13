import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App