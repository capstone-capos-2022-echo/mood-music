import React, {useState} from 'react'
import { Form, FormGroup, Input, Label, Button} from "reactstrap"
import { useNavigate } from 'react-router-dom'

const SongNew = ( {createSong} ) => {
    const navigate = useNavigate()
    const [newSong, setNewSong] = useState({
        title:"",
        artist:"",
        album:"",
        mood:"",
        album_art:"",
        song_link:""
    })
    const handleChange = (e) => {
        setNewSong({ ...newSong, [e.target.name]: e.target.value}
          )
      }

      const handleSubmit = () => {
        createSong(newSong)
        navigate("/songcontributions")
        console.log(newSong);
      }



  return (
    <>
      <h2>Add a Song</h2>
      <Form className='form-edit'>
        <FormGroup className='song-edit'>
          <Label for="title">Song Title</Label>
          <Input type="text" name="title" placeholder='Song Title' onChange={handleChange} value={newSong.name} />
        </FormGroup>

        <FormGroup className='song-edit'>
          <Label for="artist">Artist</Label>
          <Input type="text" name="artist" placeholder='Artist Name' onChange={handleChange} value={newSong.artist} />
        </FormGroup>

        <FormGroup className='song-edit'>
          <Label for="album">Album</Label>
          <Input type="text" name="album" placeholder='Album Name'onChange={handleChange} value={newSong.album} />
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
            value={newSong.mood}
          >
            <placeHolder value="pickMood">
                Pick Mood
            </placeHolder>
            <option onChange={handleChange} value="Calm">
                Calm
            </option>
            <option onChange={handleChange} value="Epic">
                Epic
            </option>
            <option onChange={handleChange} value="Fury">
                Fury
            </option>
            <option onChange={handleChange} value="Heartbreak">
                Heartbreak
            </option>
            <option onChange={handleChange} value="Hype">
                Hype
            </option>
            <option onChange={handleChange} value="Upbeat">
                Upbeat
            </option>
          </Input>
        </FormGroup>

        <FormGroup className='song-form'>
          <Label for="album_art">Album Art</Label>
          <Input type="url" name="album_art" placeholder='Album Art Image URL' onChange={handleChange} value={newSong.album_art} />
        </FormGroup>

        <FormGroup className='song-form'>
          <Label for="song_link">Embed Link to Song</Label>
          <Input type="url" name="song_link" placeholder='Song URL' onChange={handleChange} value={newSong.song_link} />
        </FormGroup>

        <Button onClick={handleSubmit} name="submit">
          Add Song
        </Button>
      </Form>
    </>
  )
}

export default SongNew
