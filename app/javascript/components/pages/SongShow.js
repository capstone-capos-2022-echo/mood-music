import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import MediaPlayer from "../components/MediaPlayer";

const SongShow = ({ songs, current_user }) => {
   const { id } = useParams();
   const song = songs?.find((song) => song.id === +id);

   return (
      <>
         <div className="song-show-btn">
            <NavLink to={`/moods/${song.mood}`}>
               <Button className="back-to-mood-button">Back to Songs</Button>
            </NavLink>
            {song.user_id === current_user?.id ? <NavLink to="/songcontributions"><Button>Back to Song Contributions</Button></NavLink> : null}
         </div>
         <div className="song-show-container">
            <img className="song-show-img" alt="album art" src={song.album_art}/>
            <CardBody className="song-show-info">
               <CardTitle className="mb-2 text-light song-show-title" tag="h1">
                  {song.album}
                  <br/> Mood : {song.mood}
               </CardTitle>
               <CardSubtitle className="mb-2 text-light song-show-subtitle" tag="h3">
                  {song.title}
                  <br />
                  {song.artist}
               </CardSubtitle>
            </CardBody>
         </div>
         <hr/>
         <MediaPlayer song={song} />
      </>
   );
};

export default SongShow;
