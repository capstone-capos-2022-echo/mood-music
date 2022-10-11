import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Button } from 'reactstrap'
import Player from '../components/Player'

const Home = () => {
   const [playing, setPlaying] = useState(false);

   const handlePlayPause = () => {
      setPlaying(!playing);
   };
   return (
      <>
         <div>

            <h2>What are you in the mood for?</h2>
            <Button href="/moods">
               Pick A Mood
            </Button>

         </div>
         <ReactPlayer
            playing={playing}
            // style={{ display: "none" }}
            url={"https://www.youtube.com/embed/aJbbfQO4JeY"}
            
         />
         <Button onClick={handlePlayPause}>
               Play/pause
            </Button>
            <h1>{JSON.stringify(playing)}</h1>

      </>
   )
}

export default Home
