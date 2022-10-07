import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import {useParams} from 'react-router-dom'

const ProtectedSongIndex = ({songs, current_user}) => {
    
    const { id } = useParams()
    const filteredSongs = songs?.filter(song => song.user_id === current_user.id)
    console.log(filteredSongs)

    return (
    <>
    <h1>Your Contributed Songs</h1>
    <h3>If you don't have any contributions, why not add a song?</h3>
    {filteredSongs?.map((song, index) => {

        return (
            <Card style={{width: '18rem'}} key={index}>
            <img alt="Album Art" src={song.album_art}/>
            <CardBody>
                <CardTitle tag="h5">
                    {song.title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {song.artist}
                </CardSubtitle>
            </CardBody>
            </Card>
        )

        })
    }
    </>
    )
}

export default ProtectedSongIndex