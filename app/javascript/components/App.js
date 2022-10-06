import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import MoodIndex from './pages/MoodIndex'

const App = (props) => {

  const [song, setSong] = useState([])

  useEffect(() => {
    readSong()
  }, [])

  const readSong = () => {
    fetch("http://localhost:3000/songs")
    .then(response => response.json())
    .then(payload => setSong(payload))
    .catch(error => console.log(error))
  }

  const createSong = (song) => {
    fetch("http://localhost:3000/songs", {
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => readSong())
    .catch(error => console.log("Song create error:", error))
  }

  const updateSong = (song, id) => {
    fetch(`http://localhost:3000/songs/${id}`, {
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => readSong())
    .catch(error => console.log("Song update error:", error))
  }

  const deleteCSong = (id) => {
    fetch(`http://localhost:3000/songs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => readSong())
    .catch(error => console.log("Song delete error:", error))
    .finally(() => readSong())
  }

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
