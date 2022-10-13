import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { CardBody, CardText, Button, CardTitle } from 'reactstrap'
import { AiFillCustomerService } from 'react-icons/ai'

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
         <h2>{mood} Songs</h2>
         <div className='song-column-container'>
            {filteredMoodSongs?.map((song, index) => {
               return (
                  <div className='song-item-container'>
                     <div className='song-column-item'key={index}>
                        <div className='song-image'>
                           <img alt="album art" src={song.album_art} style={{width: "175px", height: "175px", borderRadius: "20px"}}/>
                        </div>
                        <CardBody className='song-card-body'>
                           <CardTitle className='mt-1 mb-1' tag="h5">
                              {song.title}
                           </CardTitle>
                           <CardText className="mb-1 text-light">
                              {song.artist}
                           </CardText>
                           <NavLink to={`/songshow/${song.id}`}>
                              <AiFillCustomerService
                                 title="Listen"
                                 fill='rgb(181, 65, 84)'
                                 style={{width: '1.5em', height: '1.5em'}}
                              />
                           </NavLink>
                        </CardBody>
                     </div>
                  </div>
               )
            })}
         </div>
      </>
   )

}
export default MoodSongIndex
