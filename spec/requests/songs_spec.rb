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

  #----Create----
  describe "POST /create" do
    it 'creates a song for a user' do

      song_params = {
          song:{
          title: "Our song",
          artist: "You",
          album: "Your album",
          mood: "fury",
          album_art: "image.com",
          song_link: "youtube.com",
          user_id: user.id
        }
      }

      post '/songs', params: song_params

      song = Song.last
      p song

      expect(response).to have_http_status(200)
      expect(song['title']).to eq 'Our song'
      expect(song['artist']).to eq 'You'
      expect(song['album']).to eq 'Your album'
      expect(song['mood']).to eq 'fury'
      expect(song['album_art']).to eq 'image.com'
      expect(song['song_link']).to eq  'youtube.com'
    end
  end

end

