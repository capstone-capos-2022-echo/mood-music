import React from 'react'
import { screen, render } from '@testing-library/react'
import SongNew from './SongNew'
import { BrowserRouter } from 'react-router-dom'

describe("<SongNew/>", () => {
    it("SongNew renders without error", () =>{
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
    const heading =screen.getByText(/Song Title/i)

    expect(heading).toBeInTheDocument()
    })
    it(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
        const placeHolder = screen.getByPlaceholderText(/Song Title/i)
        expect(placeHolder).toBeInTheDocument()
    })
    it("SongNew renders without error", () =>{
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
    const heading =screen.getByText(/Artist/i)

    expect(heading).toBeInTheDocument()
    })
    it(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
        const placeHolder = screen.getByPlaceholderText(/Artist Name/i)
        expect(placeHolder).toBeInTheDocument()
    })
    it("SongNew renders without error", () =>{
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
    const heading =screen.getByText("Album")

    expect(heading).toBeInTheDocument()
    })
    it(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
        const placeHolder = screen.getByPlaceholderText("Album Name")
        expect(placeHolder).toBeInTheDocument()
    })
    it("SongNew renders without error", () =>{
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
    const heading =screen.getByText(/Select the Song's Mood/i)

    expect(heading).toBeInTheDocument()
    })
    it("SongNew renders without error", () =>{
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
    const heading =screen.getByText(/Album Art/i)

    expect(heading).toBeInTheDocument()
    })
    it(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
        const placeHolder = screen.getByPlaceholderText(/Album Art Image URL/i)
        expect(placeHolder).toBeInTheDocument()
    })
    it("SongNew renders without error", () =>{
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
    const heading =screen.getByText(/Embed Link to Song/i)

    expect(heading).toBeInTheDocument()
    })
    it(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
        const placeHolder = screen.getByPlaceholderText(/Song URL/i)
        expect(placeHolder).toBeInTheDocument()
    })
})
