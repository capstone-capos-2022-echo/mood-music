import React from 'react'
import {Button} from 'reactstrap'
import { loadSeaAnemonePreset } from 'tsparticles-preset-sea-anemone'
import Particles from 'react-tsparticles'



const Home = () => {

   function particlesInit(tsParticles) {
      console.log("init", tsParticles)
      loadSeaAnemonePreset(tsParticles)
   }

   return (
      <>
      <div id="tsparticles">
      <Particles 
         options={{
            preset: "seaAnemone",
            
            particles: {
               move: {
                  speed: 0.5
               }
            }
         }}
         init={particlesInit}
      />
      </div>
      <div>
         <h2>What are you in the mood for?</h2>
            <Button href="/moods">
               Pick A Mood
            </Button>
      </div>
      </>
   )
}

export default Home
