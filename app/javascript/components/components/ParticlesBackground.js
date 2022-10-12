import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { MoveDirection, OutMode } from "tsparticles-engine";


const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        background: {
            color: "#00171F",
        },
        particles: {
            number: {
                value: 1,
            },
            color: {
                value: ["#F4F7BE", "#E5F77D", "#DEBA6F", "#823038", "#1E000E", "#F45623", "#D62E32", "#EB586E", "#9952CF"],
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.5,
            },
            size: {
                value: { min: 5, max: 10 },
            },
            move: {
                enable: true,
                angle: {
                    value: 30,
                    offset: 0,
                },
                speed: {
                    min: 1,
                    max: 4,
                },
                // direction: MoveDirection.top,
                // outModes: {
                //     default: OutMode.destroy,
                //     bottom: OutMode.none,
                // },
            },
        },
        detectRetina: true,
        emitters: {
            position: {
                x: 50,
                y: 150,
            },
            rate: {
                delay: 0.2,
                quantity: 3,
            },
            size: {
                width: 50,
                height: 25,
            },
        },
      }}
    />
  );
};

export default ParticleBackground;
