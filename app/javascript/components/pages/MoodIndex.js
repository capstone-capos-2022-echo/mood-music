import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import ParticleBackground from "../components/ParticlesBackground";
import { BiMusic } from "react-icons/bi";
import ImageButton from "react-image-button";

const MoodIndex = ({ songs }) => {
  const moodsArr = [...new Set(songs?.map((song) => song.mood))];

  return (
    <>
      <h2>Moods</h2>
      <div className="three-column-container moods">
        {moodsArr?.sort().map((mood, index) => (
          <div className="three-column-item moods" key={index}>
            <div className="mood-btn-container">
              <NavLink to={`/moods/${mood}`}>
                <div className="mood-btn">
                  {/* <BiMusic /> */}
                  <div className="the-fuckin-text">{mood}
                  </div>
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
