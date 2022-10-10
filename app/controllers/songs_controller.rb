class SongsController < ApplicationController
   def index
      songs = Song.all
      render json: songs
   end
   
   def create
      user = current_user
      song = user.songs.create(song_params)
      if song.valid?
         render json: song
      else
         render json: song.errors, status: 422
      end
   end

   def update
      song = Song.find(params[:id])
      song.update(song_params)
      if song.valid?
         render json: song
      else
         render json: song.errors, status:422
      end
   end

   def destroy
      song = Song.find(params[:id])
      if song.destroy
         render json: song, status: 204
      else
         render json: song.errors
      end
   end

   private

   def song_params
      params.require(:song).permit(:title, :artist, :album, :mood, :album_art, :song_link, :user_id)
   end
end
