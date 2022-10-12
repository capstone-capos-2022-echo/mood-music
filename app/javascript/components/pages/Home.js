import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Button } from 'reactstrap'
// import Player from '../components/Player'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, MuteUnmute } = controls


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
         <Media>
        <div className="media">
          <div className="media-player">
            <Player src="http://www.youtube.com/embed/h3YVKTxTOgU" />
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
          </div>
        </div>
      </Media>


         <Button onClick={handlePlayPause}>
            Play/pause
         </Button>
         <h1>{JSON.stringify(playing)}</h1>

      </>
   )
}

export default Home
