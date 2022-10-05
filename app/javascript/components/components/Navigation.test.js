import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"

describe("<Navigation />", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      expect().toBeInTheDocument()
   })
})
