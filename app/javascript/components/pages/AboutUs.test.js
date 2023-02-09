import React from 'react'
import { screen, render } from "@testing-library/react"
import AboutUs from "./AboutUs"

describe("<AboutUs/>", ()=>{
    it("renders without crashing", ()=>{
        render(<AboutUs/>)
        const element = screen.getByText(/The dream team behind it all.../i)
        expect(element).toBeInTheDocument()
    })
    it("cards render without crashing", ()=>{
        render(<AboutUs/>)
        const card = screen.getByText(/Project Manager/i)
        expect(card).toBeInTheDocument()
    })
    it("cards render without crashing", ()=>{
        render(<AboutUs/>)
        const card = screen.getByText(/Tech Lead/i)
        expect(card).toBeInTheDocument()
    })
    it("cards render without crashing", ()=>{
        render(<AboutUs/>)
        const card = screen.getByText(/Design Lead/i)
        expect(card).toBeInTheDocument()
    })
})
