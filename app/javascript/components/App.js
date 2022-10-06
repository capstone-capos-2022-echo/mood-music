import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import MoodIndex from './pages/MoodIndex'

const App = (props) => {
  return (
    <BrowserRouter>
      <Navigation {...props}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moods" element={<MoodIndex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
