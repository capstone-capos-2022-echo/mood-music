import React from 'react'
import {screen, render} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MoodSongIndex from "./MoodSongIndex"


describe("<MoodSongIndex/>",()=>{
   it("renders without crashing", () => {
      const div = document.createElement("div")
      render(
         <BrowserRouter>
            <MoodSongIndex />
         </BrowserRouter>,
         div
      )
   })
   it("has back to moods button", ()=>{
      render(
         <BrowserRouter>
            <MoodSongIndex />
         </BrowserRouter>
      )

      const moodButton = screen.getByText(/Back to Moods/i)

      expect(moodButton).toBeInTheDocument()
   })



})
