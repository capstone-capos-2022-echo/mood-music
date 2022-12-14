import React from 'react'
import {screen, render} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MoodIndex from "./MoodIndex"


describe("<MoodIndex/>",()=>{
   it("renders without crashing", () => {
      const div = document.createElement("div")
      render(
         <BrowserRouter>
            <MoodIndex />
         </BrowserRouter>,
         div
      )
   })
   it("has mood header", ()=>{
      render(
         <BrowserRouter>
            <MoodIndex />
         </BrowserRouter>
      )

      const mood = screen.getByText(/Moods/i)

      expect(mood).toBeInTheDocument()
   })



})
