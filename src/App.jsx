import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestCard from './components/TestCard'
import NavigationBar from './components/NavBar'

function App() {

  return (
    <>
      <NavigationBar />
      <TestCard />
    </>
  )
}

export default App
