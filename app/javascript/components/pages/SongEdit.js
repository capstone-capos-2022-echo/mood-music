import React, { useState }  from 'react'
import {  Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {  useNavigate, useParams } from 'react-router-dom'
import DeleteConfirmation from '../components/DeleteConfirmation'

const SongEdit = ({songs, updateSong, deleteSong}) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const song = songs?.find(song => song.id === +id)
    const [currentSong, setCurrentSong] =useState(song)

    const handleChange = (e) => {
        setCurrentSong({...currentSong, [e.target.name]: e.target.value})
    }

    const handleUpdate = () => {
        updateSong(currentSong, id)
        navigate("/songcontributions")
        console.log(currentSong)
    }

    const handleDelete = () => {
        deleteSong(id)
        navigate("/songcontributions")
        console.log(currentSong)
    }

    return (
        <>
            
            <h2>Edit {song.title}</h2>
            <div className='song-edit-form'>
            <img className='card-edit-img' alt="album art" src={song.album_art} />
            </div>
            <Form className='form-edit'>
                
                <FormGroup className='song-edit'>
                    <Label for="title">Song Title</Label>
                    <Input type="text" name="title" placeholder='Song Title' onChange={handleChange} value={currentSong.title}
                    />
                </FormGroup>

                <FormGroup className='song-edit'>
                    <Label for="artist">Artist</Label>
                    <Input type="text" name="artist" placeholder='Artist Name' onChange={handleChange} value={currentSong.artist} />
                </FormGroup>

                <FormGroup className='song-edit'>
                    <Label for="album">Album</Label>
                    <Input type="text" name="album" placeholder='Album Name' onChange={handleChange} value={currentSong.album} />
                </FormGroup>

                <FormGroup className='song-edit'>
                    <Label for="exampleSelect">
                        Select the Song's Mood
                    </Label>
                    <Input
                        id="moodSelect"
                        name="mood"
                        type="select"
                        onChange={handleChange}
                        value={currentSong.mood}
                    >
                        <option value="Calm">
                            Calm
                        </option>
                        <option value="Epic">
                            Epic
                        </option>
                        <option value="Fury">
                            Fury
                        </option>
                        <option value="Heartbreak">
                            Heartbreak
                        </option>
                        <option value="Hype">
                            Hype
                        </option>
                        <option value="Upbeat">
                            Upbeat
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup className='song-edit'>
                    <Label for="album_art">Album Art</Label>
                    <Input type="url" name="album_art" placeholder='Album Art Image URL' onChange={handleChange} value={currentSong.album_art} />
                </FormGroup>

                <FormGroup className='song-edit'>
                    <Label for="song_link">Embed Link to Song</Label>
                    <Input type="url" name="song_link" placeholder='Song URL' onChange={handleChange} value={currentSong.song_link} />
                </FormGroup>

                <div className='song-edit-btn'>
                    <Button onClick={handleUpdate} name="submit">
                        Update Song
                    </Button>

                    <DeleteConfirmation handleDelete={handleDelete}/>
                </div>
            </Form>

        </>
    )
}

export default SongEdit
