import React, { useState } from 'react';
import { withMediaProps, Media, Player, controls } from "react-media-player";
import { HiVolumeUp } from 'react-icons/hi'

const MediaPlayer = ({ song, media }) => {
   const {
      CurrentTime,
      Duration,
      MuteUnmute,
      PlayPause,
      SeekBar,
      Volume
   } = controls;

   return (
      <>
         <Media >
            <div className="media">
               <div className="media-controls">
                  <PlayPause className='animate-btn draw-border'/>
                  <SeekBar className='seekbar' />
                  <div className='song-time'>
                     <CurrentTime /> / <Duration />
                  </div>
                  <HiVolumeUp style={{width: '3.5em', height: '2em'}}/>
                  <Volume className='volume'/>
                  <MuteUnmute className='animate-btn draw-border'/>
               </div>
               <div className="media-player" style={{display:"none"}}>
                  <Player src={song.song_link} />
               </div>
            </div>
         </Media>
      </>
   )
}

export default withMediaProps(MediaPlayer)
