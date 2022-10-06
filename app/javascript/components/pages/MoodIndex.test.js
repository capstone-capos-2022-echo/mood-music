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
   it("has mood buttons", ()=>{
      render(
         <BrowserRouter>
            <MoodIndex />
         </BrowserRouter>
      )
      const button1 = screen.getByText("Calm")
      const button2 = screen.getByText("Epic")
      const button3 = screen.getByText("Fury")
      const button4 = screen.getByText("Heartbreak")
      const button5 = screen.getByText("Hype")
      const button6 = screen.getByText("Upbeat")
      expect(button1).toBeInTheDocument()
      expect(button2).toBeInTheDocument()
      expect(button3).toBeInTheDocument()
      expect(button4).toBeInTheDocument()
      expect(button5).toBeInTheDocument()
      expect(button6).toBeInTheDocument()
   })



})
