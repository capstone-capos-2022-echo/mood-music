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

# -------Create------

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

      expect(response).to have_http_status(200)
      expect(song['title']).to eq 'Our song'
      expect(song['artist']).to eq 'You'
      expect(song['album']).to eq 'Your album'
      expect(song['mood']).to eq 'fury'
      expect(song['album_art']).to eq 'image.com'
      expect(song['song_link']).to eq  'youtube.com'
    end

    it 'creates a song for a user' do
      song_params = {
          song:{
          artist: "You",
          album: "Your album",
          mood: "fury",
          album_art: "image.com",
          song_link: "youtube.com",
          user_id: user.id
        }
      }

      post '/songs', params: song_params

      expect(response.status).to eq 422

      json = JSON.parse(response.body)
      expect(json['title']).to include "can't be blank"
    end

    it 'creates a song for a user' do
      song_params = {
          song:{
          title:"Our song",
          album: "Your album",
          mood: "fury",
          album_art: "image.com",
          song_link: "youtube.com",
          user_id: user.id
        }
      }

      post '/songs', params: song_params

      expect(response.status).to eq 422

      json = JSON.parse(response.body)
      expect(json['artist']).to include "can't be blank"
    end

    it 'creates a song for a user' do
      song_params = {
          song:{
          title:"Our song",
          artist:"You",
          mood: "fury",
          album_art: "image.com",
          song_link: "youtube.com",
          user_id: user.id
        }
      }

      post '/songs', params: song_params

      expect(response.status).to eq 422

      json = JSON.parse(response.body)
      expect(json['album']).to include "can't be blank"
    end

    it 'creates a song for a user' do
      song_params = {
          song:{
          title:"Our song",
          artist:"You",
          album:"Your album",
          album_art: "image.com",
          song_link: "youtube.com",
          user_id: user.id
        }
      }

      post '/songs', params: song_params

      expect(response.status).to eq 422

      json = JSON.parse(response.body)
      expect(json['mood']).to include "can't be blank"
    end

    it 'creates a song for a user' do
      song_params = {
          song:{
          title:"Our song",
          artist:"You",
          album:"Your album",
          mood:"fury",
          song_link: "youtube.com",
          user_id: user.id
        }
      }

      post '/songs', params: song_params

      expect(response.status).to eq 422

      json = JSON.parse(response.body)
      expect(json['album_art']).to include "can't be blank"
    end

    it 'creates a song for a user' do
      song_params = {
          song:{
          title:"Our song",
          artist:"You",
          album:"Your album",
          mood:"fury",
          album_art: "image.com",
          user_id: user.id
        }
      }

      post '/songs', params: song_params

      expect(response.status).to eq 422

      json = JSON.parse(response.body)
      expect(json['song_link']).to include "can't be blank"
    end

    it 'creates a song for a user' do
      song_params = {
          song:{
          title:"Our song",
          artist:"You",
          album:"Your album",
          mood:"fury",
          album_art: "image.com",
          song_link:"youtube.com"
        }
      }

      post '/songs', params: song_params

      expect(response.status).to eq 422

      json = JSON.parse(response.body)
      expect(json['user_id']).to include "can't be blank"
    end
  end

# -------Update------

  describe "PATCH /update" do
    it 'edits a song title for a user' do
      song = user.songs.create(
        title:"Our song",
        artist:"You",
        album:"Your album",
        mood:"fury",
        album_art: "image.com",
        song_link:"youtube.com"
      )
      song_params = {
          song:{
          title:"Your song"
        }
      }

      patch "/songs/#{song.id}", params: song_params

      song = Song.first

      expect(response).to have_http_status(200)
      expect(song.title).to eq 'Your song'
    end

    it 'edits an artist for a user' do
      song = user.songs.create(
        title:"Our song",
        artist:"You",
        album:"Your album",
        mood:"fury",
        album_art: "image.com",
        song_link:"youtube.com"
      )
      song_params = {
          song:{
          artist:"Me"
        }
      }

      patch "/songs/#{song.id}", params: song_params

      song = Song.first

      expect(response).to have_http_status(200)
      expect(song.artist).to eq 'Me'
    end

    it 'edits am artist for a user' do
      song = user.songs.create(
        title:"Our song",
        artist:"You",
        album:"Your album",
        mood:"fury",
        album_art: "image.com",
        song_link:"youtube.com"
      )
      song_params = {
          song:{
          artist:"Me"
        }
      }

      patch "/songs/#{song.id}", params: song_params

      song = Song.first

      expect(response).to have_http_status(200)
      expect(song.artist).to eq 'Me'
    end

    it 'edits an album for a user' do
      song = user.songs.create(
        title:"Our song",
        artist:"You",
        album:"Your album",
        mood:"fury",
        album_art: "image.com",
        song_link:"youtube.com"
      )
      song_params = {
          song:{
          album:"Me Album"
        }
      }

      patch "/songs/#{song.id}", params: song_params

      song = Song.first

      expect(response).to have_http_status(200)
      expect(song.album).to eq 'Me Album'
    end

    it 'edits a mood for a user' do
      song = user.songs.create(
        title:"Our song",
        artist:"You",
        album:"Your album",
        mood:"fury",
        album_art: "image.com",
        song_link:"youtube.com"
      )
      song_params = {
          song:{
          mood:"Me"
        }
      }

      patch "/songs/#{song.id}", params: song_params

      song = Song.first

      expect(response).to have_http_status(200)
      expect(song.mood).to eq 'Me'
    end

    it 'edits album_art for a users song' do
      song = user.songs.create(
        title:"Our song",
        artist:"You",
        album:"Your album",
        mood:"fury",
        album_art: "image.com",
        song_link:"youtube.com"
      )
      song_params = {
          song:{
          album_art:"Me"
        }
      }

      patch "/songs/#{song.id}", params: song_params

      song = Song.first

      expect(response).to have_http_status(200)
      expect(song.album_art).to eq 'Me'
    end

    it 'edits a users song_link ' do
      song = user.songs.create(
        title:"Our song",
        artist:"You",
        album:"Your album",
        mood:"fury",
        album_art: "image.com",
        song_link:"youtube.com"
      )
      song_params = {
          song:{
          song_link:"Me"
        }
      }

      patch "/songs/#{song.id}", params: song_params

      song = Song.first

      expect(response).to have_http_status(200)
      expect(song.song_link).to eq 'Me'
    end
  end

# -------Delete------

  describe "DELETE /destroy" do
    it "deletes a user's song" do
      song = user.songs.create(
        title:"Our song",
        artist:"You",
        album:"Your album",
        mood:"fury",
        album_art: "image.com",
        song_link:"youtube.com"
      )

      delete "/songs/#{song.id}"

      expect(response.status).to eq(204)

      songs = Song.all
      expect(songs).to be_empty
    end
  end

end
