import React, { useState } from 'react';
import { withMediaProps, Media, Player, controls } from "react-media-player";

const MediaPlayer = ({song, media}) => {
   const {
      CurrentTime,
      Duration,
      MuteUnmute,
      PlayPause,
      SeekBar,
      Volume
   } = controls;

   return (
      <Media >
         <div className="media">
            <div className="media-controls">
               <div>
                  <PlayPause />
               </div>
               <div>
                  <MuteUnmute />
                  <CurrentTime />
                  <SeekBar />
                  <Duration />
                  <Volume />
               </div>
            </div>
            <div className="media-player" style={{display:"none"}}>
               <Player src={song.song_link} />
            </div>
         </div>
      </Media>
   )
}

export default withMediaProps(MediaPlayer)
