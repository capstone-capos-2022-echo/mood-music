import React from 'react'
import {screen, render} from "@testing-library/react"
import NotFound from "./NotFound"

describe("<NotFound/>", ()=>{
    it("renders without crashing", ()=>{
        render(<NotFound/>)
        const element = screen.getByText(/Oops looks like we're not in the mood/i)
        expect(element).toBeInTheDocument()
    })

    it("renders without crashing", ()=>{
        render(<NotFound/>)
        const element = screen.getByText(/To get back in the mood: Click home or follow the link below/i)
        expect(element).toBeInTheDocument()
    })
    
    it("renders an image and its attributes", ()=>{
        render(<NotFound/>)
        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src", "https://pbs.twimg.com/media/CHBf9n5XIAARcVc.jpg")
        expect(image).toHaveAttribute("alt", "Broken CD's")
    })
    
})