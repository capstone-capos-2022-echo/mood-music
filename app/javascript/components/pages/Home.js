import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div className="container">
      <div className="centered-button">
        <p className ="animate__fadeInUp" style={{
          fontFamily: "Major Mono Display, monospace",
          fontSize: "6.3rem"
        }}>Müd Müzik</p>
        <h2>What are you in the mood for?</h2>
        {/* <Button href="/moods">Pick A Mood</Button> */}
        <div className="home-btn-container">
          <NavLink to="/moods">
            <div className="home-btn">
              <p className="the-home-text">
                Pick A Mood
              </p>
            </div>
          </NavLink>
        </div>
      </div>
      <ParticlesBackground />
    </div>
  );
};

export default Home;
