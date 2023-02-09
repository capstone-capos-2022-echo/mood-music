import React from 'react'
import { screen, render } from "@testing-library/react"
import Home from "./Home"


describe("<Home/>",()=>{
    it("renders without crashing", ()=>{
        render(<Home/>)
        const element = screen.getByText(/What are you in the mood for?/i)
        expect(element).toBeInTheDocument()
    })
    it("renders without crashing", ()=>{
        render(<Home/>)
        const button = screen.getByText(/Pick A Mood/i)
        expect(button).toBeInTheDocument()
    })


})