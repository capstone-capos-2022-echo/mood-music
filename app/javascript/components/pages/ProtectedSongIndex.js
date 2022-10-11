import React from 'react'
import { Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const ProtectedSongIndex = ({songs, current_user}) => {

    const filteredSongs = songs?.filter(song => song.user_id === current_user.id)

    return (
    <>
        <h1>Your Contributed Songs</h1>
        <h5>If you don't have any contributions, why not add a song?</h5>
        <div className='three-column-container songs'>
            {filteredSongs?.map((song, index) => {
                return (
                    <div className='three-column-item songs' key={index}>
                        <Card style={{width: '18rem'}}>
                            <img alt="Album Art" src={song.album_art}/>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {song.title}
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    {song.artist}
                                    <br/>{song.album}
                                </CardSubtitle>
                            </CardBody>
                            <NavLink to={`/songedit/${song.id}`}>
                                <Button>
                                    Edit Song
                                </Button>
                            </NavLink>
                        </Card>
                    </div>
                )
            })}
        </div>
    </>
    )
}

export default ProtectedSongIndex
