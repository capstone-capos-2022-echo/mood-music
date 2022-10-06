import React from 'react'
import {screen, render} from "@testing-library/react"
import AboutUs from "./AboutUs"

describe("<AboutUs/>", ()=>{
    it("renders without crashing", ()=>{
        render(<AboutUs/>)
        const element = screen.getByText(/Who We Are:/i)
        expect(element).toBeInTheDocument()
    })
    it("cards render without crashing", ()=>{
        render(<AboutUs/>)
        const card = screen.getByText(/Kelly/i)
        expect(card).toBeInTheDocument()
    })
    it("cards render without crashing", ()=>{
        render(<AboutUs/>)
        const card = screen.getByText(/Elijah/i)
        expect(card).toBeInTheDocument()
    })
    it("cards render without crashing", ()=>{
        render(<AboutUs/>)
        const card = screen.getByText(/Holden/i)
        expect(card).toBeInTheDocument()
    })
})