import React from "react";
import { Button } from "reactstrap";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
import Particles from "react-tsparticles";
import { curvesPathName } from "tsparticles-path-curves";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  return (
    <div className="container">
      <div className="centered-button">
        <h4 style={{
          fontFamily: "Major Mono Display, monospace",
          fontSize: "6.3rem",
          textDecoration: "none"
        }}>MÜD MÜZIK</h4>
        <h2>What are you in the mood for?</h2>
        <Button href="/moods">Pick A Mood</Button>
      </div>
      <ParticlesBackground />
    </div>
  );
};

export default Home;
