import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {Card, CardBody, CardSubtitle, Button, CardTitle} from 'reactstrap'

const MoodSongIndex = ({songs}) => {

   const { mood } = useParams()
   const filteredMoodSongs = songs?.filter(song => song.mood === mood)

   return (
      <>
         <NavLink to="/moods">
            <Button>
               Back to Moods
            </Button>
         </NavLink>
         <div className='three-column-container songs'>
            {filteredMoodSongs?.map((song, index) => {
               return (
                  <div className='three-column-item songs'>
                     <Card style={{width: '18rem'}} key={index}>
                        <img alt="album art" src={song.album_art}/>
                        <CardBody>
                           <CardTitle>
                              {song.title}
                           </CardTitle>
                           <CardSubtitle className="mb-2 text-muted" tag="h6">
                              {song.artist}
                              <br/>{song.album}
                           </CardSubtitle>
                           <NavLink to={`/songshow/${song.id}`}>
                              <Button>
                                 Song Details
                              </Button>
                           </NavLink>
                        </CardBody>
                     </Card>
                  </div>
               )
            })}
         </div>
      </>
   )

}
export default MoodSongIndex
