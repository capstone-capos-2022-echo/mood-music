import React from 'react'
import { screen, render } from '@testing-library/react'
import SongNew from './SongNew'
import { BrowserRouter } from 'react-router-dom'
import { Placeholder } from 'reactstrap'





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
        const placeHolder = screen.getByPlaceholderText(/title/i)
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
        const placeHolder = screen.getByPlaceholderText(/Artist/i)
        expect(placeHolder).toBeInTheDocument()
    })
    it("SongNew renders without error", () =>{
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
    const heading =screen.getByText("Album Art")

    expect(heading).toBeInTheDocument()
    })
    it(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
            <SongNew/>
            </BrowserRouter>
        )
        const placeHolder = screen.getByPlaceholderText("Album name")
        expect(placeHolder).toBeInTheDocument()
    })
    it("SongNew renders without error", () =>{
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
    const heading =screen.getByText(/Mood/i)

    expect(heading).toBeInTheDocument()
    })
    it(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
            <SongNew/>
            </BrowserRouter>
        )
        const placeHolder = screen.getByText(/Mood/i)
        expect(placeHolder).toBeInTheDocument()
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
        const placeHolder = screen.getByPlaceholderText(/place art url/i)
        expect(placeHolder).toBeInTheDocument()
    })
    it("SongNew renders without error", () =>{
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
    const heading =screen.getByText(/Link to song/i)

    expect(heading).toBeInTheDocument()
    })
    it(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
            <SongNew/>
            </BrowserRouter>
        )
        const placeHolder = screen.getByPlaceholderText(/place song url/i)
        expect(placeHolder).toBeInTheDocument()
    })
})

export default SongNew.test