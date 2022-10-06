class SongsController < ApplicationController
   def index
      songs = Song.all
      render json: songs
   end

   def create
      song = Song.create(song_params)
      if song.valid?
         render json: song
      else
         render json: song.errors, status: 422
      end
   end

   private

   def song_params
      params.require(:song).permit(:title, :artist, :album, :mood, :album_art, :song_link, :user_id)
   end
end
