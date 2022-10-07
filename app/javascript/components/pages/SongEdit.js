import React, { useState }  from 'react'
import {  Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {  useNavigate, useParams } from 'react-router-dom'
// import DeleteConfirmation from '../components/DeleteConfirmation'


const SongEdit = ({songs, updateSong, deleteSong}) => {
    const { id } = useParams()
   
    let currentSong = songs?.find(song => song.id === +id)

    const [editSong, setEditSong] =useState({
        title: currentSong.title, 
        artist: currentSong.artist, 
        album: currentSong.album,
        mood: currentSong.mood, 
        album_art: currentSong.album_art, 
        song_link: currentSong.song_link

    })

    const handleChange = (e) => {
        setEditSong({...editSong, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate()

    const handleUpdate = () => {
        updateSong(editSong, currentSong.id)
        console.log(currentSong)
    }

    const handleDelete = () => {
        deleteSong(id)
        console.log(currentSong);
    }


  return (
    <>
      <h2>Edit Song</h2>    
        <Form>
            <FormGroup>
            <Label for="title">Song Title</Label>
            <Input type="text" name="title" placeholder='title' onChange={handleChange} value={newSong.name} />
            </FormGroup>

            <FormGroup>
            <Label for="artist">Artist</Label>
            <Input type="text" name="artist" placeholder='artist' onChange={handleChange} value={newSong.artist} />
            </FormGroup>

            <FormGroup>
            <Label for="album">Album</Label>
            <Input type="text" name="album" placeholder='Album name'onChange={handleChange} value={newSong.album} />
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelect">
                    Select A Mood
                </Label>
                <Input
                id="moodSelect"
                name="mood"
                type="select"
                >
                    <option>
                        Calm
                    </option>
                    <option>
                        Epic
                    </option>
                    <option>
                        Fury
                    </option>
                    <option>
                        Heartbreak
                    </option>
                    <option>
                        Hype
                    </option>
                    <option>
                        Upbeat
                    </option>
                </Input>
            </FormGroup>

            <FormGroup>
            <Label for="album_art">Album Art</Label>
            <Input type="url" name="album_art" placeholder='place art url' onChange={handleChange} value={newSong.album_art} />
            </FormGroup>

            <FormGroup>
            <Label for="song_link">Link to song</Label>
            <Input type="url" name="song_link" placeholder='place song url' onChange={handleChange} value={newSong.song_link} />
            </FormGroup>

        <Button onClick={handleUpdate} name="submit">
        Update song
        </Button>
        {/* <DeleteConfirmation handleDelete={handleDelete}/> */}
    </Form>

  </>
  )
}

export default SongEdit