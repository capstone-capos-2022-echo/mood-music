import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import YoutubeEmbed from '../components/YoutubeEmbed'

const SongShow = ({songs}) => {
   const { id } = useParams()
   const song = songs?.find(song => song.id === +id)

   return (
      <>
         <NavLink to={`/moods/${song.mood}`}>
            <Button>
               Back to Songs
            </Button>
         </NavLink>
         <YoutubeEmbed songs={songs} embedId={song.song_link} />
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
