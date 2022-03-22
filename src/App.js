import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Technology from './components/OtherPages/Technology'
import FlightSchedule from './components/OtherPages/FlightSchedule'
import Guarantees from './components/OtherPages/Guarantees'
import About from './components/OtherPages/About'
import Contacts from './components/OtherPages/Contacts'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Flight_Schedule" element={<FlightSchedule />} />
        <Route path="/Guarantees" element={<Guarantees />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route></Route>
      </Routes>
    </>
  )
}
