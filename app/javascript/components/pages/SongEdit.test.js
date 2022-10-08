import React from "react";
import { screen, render } from "@testing-library/react";
import SongEdit from "./SongEdit";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import songs from "../mockSongs"

const renderComponent = () => {
   render(
      <MemoryRouter initialEntries={["/songedit/1"]}>
         <Routes>
            <Route path="/songedit/:id" element={<SongEdit songs={songs}/>} />
         </Routes>
      </MemoryRouter>
   )
}

describe("<SongEdit/>", () => {
   it("SongEdit renders without error", () => {
      renderComponent()
      const heading = screen.getByText(/Song Title/i);

      expect(heading).toBeInTheDocument();
   });
   it(" has multiple input fields on the form", () => {
      renderComponent()
      const placeHolder = screen.getByPlaceholderText(/Song Title/i);
      expect(placeHolder).toBeInTheDocument();
   });
   it("SongEdit renders without error", () => {
      renderComponent()
      const heading = screen.getByText(/Artist/i);

      expect(heading).toBeInTheDocument();
   });
   it(" has multiple input fields on the form", () => {
      renderComponent()
      const placeHolder = screen.getByPlaceholderText(/Artist Name/i);
      expect(placeHolder).toBeInTheDocument();
   });
   it("SongEdit renders without error", () => {
      renderComponent()
      const heading = screen.getByText("Album");

      expect(heading).toBeInTheDocument();
   });
   it(" has multiple input fields on the form", () => {
      renderComponent()
      const placeHolder = screen.getByPlaceholderText("Album Name");
      expect(placeHolder).toBeInTheDocument();
   });
   it("SongEdit renders without error", () => {
      renderComponent()
      const heading = screen.getByText(/Select the Song's Mood/i);

      expect(heading).toBeInTheDocument();
   });
   it("SongEdit renders without error", () => {
      renderComponent()
      const heading = screen.getByText(/Album Art/i);

      expect(heading).toBeInTheDocument();
   });
   it(" has multiple input fields on the form", () => {
      renderComponent()
      const placeHolder = screen.getByPlaceholderText(/Album Art Image URL/i);
      expect(placeHolder).toBeInTheDocument();
   });
   it("SongEdit renders without error", () => {
      renderComponent()
      const heading = screen.getByText(/Embed Link to Song/i);

      expect(heading).toBeInTheDocument();
   });
   it(" has multiple input fields on the form", () => {
      renderComponent()
      const placeHolder = screen.getByPlaceholderText(/Song URL/i);
      expect(placeHolder).toBeInTheDocument();
   });
});
