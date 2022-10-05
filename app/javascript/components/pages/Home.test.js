import React from 'react'
import {screen, render} from "@testing-library/react"
import userEvent from "@testing-library/react"
import {BrowserRouter} from "react-router-dom"
import Home from "./Home"
import { Button } from 'reactstrap'

describe("<Home/>",()=>{
    it("renders without crashing", ()=>{
        render(<Home/>)
        const element = screen.getByText(/What are you in the mood for?/i)
        expect(element).toBeInTheDocument()
    })
    it("renders without crashing", ()=>{
        render(
        <Button href="/">
            Pick A Mood
        </Button>
        )
        const button = screen.getByText(/Pick A Mood/i)
        expect(button).toBeInTheDocument()
    })


})