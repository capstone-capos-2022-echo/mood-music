import React from 'react'
import { screen, render } from '@testing-library/react'
import SongNew from './SongNew'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'




describe("<SongNew/>", () => {
    it("SongNew renders without error", () =>{
        render(
            <BrowserRouter>
                <SongNew/>
            </BrowserRouter>
        )
    const heading =screen.getByRole("heading", {name: /Add Song/i})

    expect(heading).toBeInTheDocument()
    })
    it("form has input fields", () => {
        render(
            <BrowserRouter>
            <SongNew/>
            </BrowserRouter>
        )
    })
})

export default SongNew.test