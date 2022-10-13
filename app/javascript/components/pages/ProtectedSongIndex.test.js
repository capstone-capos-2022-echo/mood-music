import React from 'react'
import {screen, render} from "@testing-library/react"
import ProtectedSongIndex from "./ProtectedSongIndex"

describe("<ProtectedSongIndex/>",()=>{
    it("renders without crashing", ()=>{
        render(<ProtectedSongIndex />)
        const element = screen.getByText(/Your Contributed Songs/i)
        expect(element).toBeInTheDocument()
    })
})
