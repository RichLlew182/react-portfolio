// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectGallery from './pages/ProjectGallery'
import Contact from './pages/Contact'


function App() {

  return (
    <>
      <Router basename="/">

        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectGallery />} />
        </Routes>

      </Router>
      <Footer />
    </>
  )
}

export default App
