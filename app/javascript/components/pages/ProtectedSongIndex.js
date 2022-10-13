import React from 'react'
import { CardBody, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { AiFillCustomerService, AiFillEdit } from 'react-icons/ai'

const ProtectedSongIndex = ({songs, current_user}) => {

    const filteredSongs = songs?.filter(song => song.user_id === current_user.id)

    return (
    <>
        <h2>Your Contributed Songs</h2>
        {filteredSongs.length > 0 ? null : <h5>If you don't have any contributions, why not add a song?</h5>}
        <div className='song-column-container'>
            {filteredSongs?.map((song, index) => {
                return (
                    <div className='song-item-container'>
                        <div className='song-column-item' key={index}>
                            {/* <NavLink to={`/songshow/${song.id}`}> */}
                                <img alt="album art" src={song.album_art}  style={{width: "175px", height: "175px", borderRadius: "20px"}}/>
                                <CardBody className='song-card-body'>
                                    <CardTitle className='mt-1 mb-1'tag="h5">
                                        {song.title}
                                    </CardTitle>
                                    <CardText className="mb-1 text-light">
                                        {song.artist}
                                        <br/>{song.album}
                                    </CardText>
                                    <NavLink to={`/songshow/${song.id}`}>
                                        <AiFillCustomerService
                                            title="Listen"
                                            fill='rgb(181, 65, 84)'
                                            style={{width: '1.5em', height: '1.5em', marginRight:'8px'}}
                                        />
                                    </NavLink>
                                    <NavLink to={`/songedit/${song.id}`}>
                                        <AiFillEdit
                                            title="Edit"
                                            fill='rgb(181, 65, 84)'
                                            style={{width: '1.5em', height: '1.5em'}}
                                        />
                                    </NavLink>
                                </CardBody>
                            {/* </NavLink> */}
                        </div>
                    </div>
                )
            })}
        </div>
    </>
    )
}

export default ProtectedSongIndex
