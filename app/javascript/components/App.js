import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MoodIndex from "./pages/MoodIndex";
import MoodSongIndex from "./pages/MoodSongIndex";
import SongShow from "./pages/SongShow";
import SongNew from "./pages/SongNew";
import SongEdit from "./pages/SongEdit";
import ProtectedSongIndex from "./pages/ProtectedSongIndex";
import AboutUs from "./pages/AboutUs";

const App = (props) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    readSong();
  }, []);

  const readSong = () => {
    fetch("http://localhost:3000/songs")
      .then((response) => response.json())
      .then((payload) => setSongs(payload))
      .catch((error) => console.log(error));
  };

  const createSong = (song) => {
    fetch("http://localhost:3000/songs", {
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readSong())
      .catch((error) => console.log("Song create error:", error));
  };

  const updateSong = (song, id) => {
    fetch(`http://localhost:3000/songs/${id}`, {
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => readSong())
      .catch((error) => console.log("Song update error:", error));
  };

  const deleteSong = (id) => {
    fetch(`http://localhost:3000/songs/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => readSong())
      .catch((error) => console.log("Song delete error:", error))
      .finally(() => readSong());
  };

  return (
      <BrowserRouter>
        <Navigation {...props} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moods" element={<MoodIndex songs={songs} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/moods" element={<MoodIndex songs={songs} />} />
          <Route
            path="/moods/:mood"
            element={<MoodSongIndex songs={songs} />}
          />
          <Route path="/songshow/:id" element={<SongShow songs={songs} />} />
          <Route
            path="/songnew"
            element={<SongNew createSong={createSong} />}
          />
          <Route
            path="/songcontributions"
            element={<ProtectedSongIndex songs={songs} {...props} />}
          />
          <Route
            path="/songedit/:id"
            element={
              <SongEdit
                songs={songs}
                updateSong={updateSong}
                deleteSong={deleteSong}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
