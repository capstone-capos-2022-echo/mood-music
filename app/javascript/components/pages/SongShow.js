import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { Media, Player, controls } from 'react-media-player';


const SongShow = ({songs, current_user}) => {
   const { id } = useParams()
   const song = songs?.find(song => song.id === +id)
   const { PlayPause, MuteUnmute } = controls;
   const [playing, setPlaying] = useState(false)

   return (
      <>
         <NavLink to={`/moods/${song.mood}`}>
            <Button>
               Back to Songs
            </Button>
         </NavLink>
         {song.user_id === current_user.id? <NavLink to='/songcontributions'><Button>Back to Song Contributions</Button></NavLink> : null}
         <Media>
            <div className="media">
               <div className="media-player">
                  <Player src={song.song_link} />
               </div>
               <div className="media-controls">
                  <PlayPause />
                  <MuteUnmute />
               </div>
            </div>
         </Media>
         <Card style={{width: '18rem'}}>
            <img alt="album art" src={song.album_art}/>
            <CardBody>
               <CardTitle>
                  {song.title}
               </CardTitle>
               <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {song.artist}
                  <br/>{song.album}
               </CardSubtitle>
            </CardBody>
         </Card>
      </>
   )
}

export default SongShow
