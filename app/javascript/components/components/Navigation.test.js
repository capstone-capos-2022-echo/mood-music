import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"

describe("<Navigation />", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      render(
         <BrowserRouter>
            <Navigation />
         </BrowserRouter>,
         div
      )
   })
   it("has clickable links", () => {
      render(
         <BrowserRouter>
            <Navigation />
         </BrowserRouter>
      )
      userEvent.click(screen.getByText("Mood Music"))
      expect(screen.getByText("Mood Music")).toBeInTheDocument()
      userEvent.click(screen.getByText("Who We Are"))
      expect(screen.getByText("Who We Are")).toBeInTheDocument()
   })
})
