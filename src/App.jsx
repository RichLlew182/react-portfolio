// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ProjectGallery from './components/Project-Gallery'
import Contact from './components/Contact'


function App() {

  return (
    <>
      <Router basename="/">

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project-gallery" element={<ProjectGallery />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
