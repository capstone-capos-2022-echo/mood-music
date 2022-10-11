import React from 'react'
import {Button} from 'reactstrap'
import ParticlesBackground from '../components/ParticlesBackground'


const Home = () => {

   return (
      <div>
         <ParticlesBackground />
         <h2 id="tsparticles">What are you in the mood for?</h2>
            <Button href="/moods">
               Pick A Mood
            </Button>
      </div>
   )
}

export default Home
