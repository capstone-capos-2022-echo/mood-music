   import React from "react";
   import { Button } from "reactstrap";
   import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
   import Particles from "react-tsparticles";
   import { curvesPathName } from "tsparticles-path-curves";

   const Home = () => {
   function particlesInit(tsParticles) {
      console.log("init", tsParticles);
      loadSeaAnemonePreset(tsParticles);
   }

   return (
      <>
         <div>
         <h2>What are you in the mood for?</h2>
         <Button href="/moods">Pick A Mood</Button>
         </div>

         <div id="tsparticles">
         <Particles
            options={{
               preset: "seaAnemone",
               particles: {
               color: {
                  value: "#FF0000",
               },
               move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                     default: "destroy",
                  },
                  path: {
                     clamp: false,
                     enable: true,
                     delay: {
                     value: 0,
                     },
                     generator: curvesPathName,
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                  trail: {
                     fillColor: "#000",
                     length: 30,
                     enable: true,
                  },
               },
               number: {
                  value: 0,
                  limit: 300,
               },
               opacity: {
                  value: 1,
               },
               shape: {
                  type: "circle",
               },
               size: {
                  value: { min: 1, max: 10 },
                  animation: {
                     count: 1,
                     startValue: "min",
                     enable: true,
                     speed: 10,
                     sync: true,
                  },
               },
               },
               background: {
               color: "#00171F",
               },
               detectRetina: true,
               emitters: {
               direction: "none",
               rate: {
                  quantity: 10,
                  delay: 0.3,
               },
               size: {
                  width: 0,
                  height: 0,
                  mode: "precise",
               },
               spawnColor: {
                  value: "#ff0000",
                  animation: {
                     h: {
                     enable: true,
                     offset: {
                        min: -1.4,
                        max: 1.4,
                     },
                     speed: 5,
                     sync: false,
                     },
                     l: {
                     enable: true,
                     offset: {
                        min: 20,
                        max: 80,
                     },
                     speed: 0,
                     sync: false,
                     },
                  },
               },
               position: {
                  x: 50,
                  y: 50,
               },
               },
            }}
            init={particlesInit}
            style={{
               position: "inherit !important",
               width: "100%",
               height: "100%",
               backgroundColor: "rgb(0,23,31)",
               backgroundPosition: "50% 50%",
               margin: "0",
               padding: "0",
               top: "0",
               left: "0",
            }}
         />
         </div>
      </>
   );
   };

   export default Home;
