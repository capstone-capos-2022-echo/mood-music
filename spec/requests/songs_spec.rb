require 'rails_helper'

RSpec.describe "Songs", type: :request do
  let(:user) do 
    User.create email: 'test@example.com', password: 'password', password_confirmation:'password'
  end

# -------Index------
  describe "GET /index" do
    it "gets all the songs" do
      user.songs.create(
        title: "Joes song",
        artist: "Joe",
        album: "Joes album",
        mood: "calm",
        album_art: "image.com",
        song_link: "youtube.com"
      )
      
      get '/songs'
      
      songs = JSON.parse(response.body)
      expect(songs.length).to eq 1
      expect(response).to have_http_status(200)
      
      
      song = songs.first
      expect(song['title']).to eq 'Joes song'
      expect(song['artist']).to eq 'Joe'
      expect(song['album']).to eq 'Joes album'
      expect(song['mood']).to eq 'calm'
      expect(song['album_art']).to eq 'image.com'
      expect(song['song_link']).to eq  'youtube.com'

    end
  end
end

