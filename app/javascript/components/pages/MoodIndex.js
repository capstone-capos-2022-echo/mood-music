import React from "react";
import { NavLink } from "react-router-dom";
import ParticleBackground from "../components/ParticlesBackground";


const MoodIndex = ({ songs }) => {
  const moodsArr = [...new Set(songs?.map((song) => song.mood))];

  return (
    <>
      <h2>
        <span className ="title-container">Moods</span>
      </h2>
      <div className="three-column-container moods">
        {moodsArr?.sort().map((mood, index) => (
          <div className="three-column-item moods" key={index}>
            <div className="mood-btn-container">
              <NavLink to={`/moods/${mood}`}>
                <div className="mood-btn">
                  <p className="the-mood-text">{mood}
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ParticleBackground />
      </div>
    </>
  );
};

export default MoodIndex;
