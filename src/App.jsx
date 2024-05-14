// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import ProjectGallery from './components/ProjectGallery'
import Contact from './components/Contact'


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
