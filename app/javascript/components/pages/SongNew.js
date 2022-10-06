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
        navigate("/songIndex")
      }



  return (
    <>
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

        <Button onClick={handleSubmit} name="submit">
           Update song
        </Button>
      </Form>
    
    </>

   
  )
}

export default SongNew