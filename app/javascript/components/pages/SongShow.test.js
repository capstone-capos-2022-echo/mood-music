import React from 'react'
import {screen, render} from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import SongShow from "./SongShow"
import songs from "../mockSongs"

const renderComponent = () => {
   render(
      <MemoryRouter initialEntries={["/songshow/1"]}>
         <Routes>
            <Route path="/songshow/:id" element={<SongShow songs={songs}/>} />
         </Routes>
      </MemoryRouter>
   )
}

describe('SongShow', () => {
   it("render a card with song details", ()=>{
      renderComponent()
      expect(screen.getByText(`${songs[0].title}`)).toBeInTheDocument()
   })
})
