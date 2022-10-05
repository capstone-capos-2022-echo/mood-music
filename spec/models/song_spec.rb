require 'rails_helper'

RSpec.describe Song, type: :model do
  user = User.where(email: "test@test.com").first_or_create(password: "password", password_confirmation: "password")
  
  it 'should have a valid title' do
    song = user.songs.create(
      artist: "Joe",
      album: "Joes album",
      mood: "calm",
      album_art: "image.com",
      song_link: "youtube.com",
      user_id: 1
    )
    expect(song.errors[:title]).to include "can't be blank"
  end  
  it 'should have a valid artist' do 
    song = user.songs.create(
      title: "Joes song", 
      album: "Joes album",
      mood: "calm",
      album_art: "image.com",
      song_link: "youtube.com",
      user_id: 1
    )
    expect(song.errors[:artist]).to include "can't be blank"
  end  
  it 'should have a valid album' do
    song = user.songs.create(
      title:"Joes song",
      artist: "Joe",
      mood: "calm",
      album_art: "image.com",
      song_link: "youtube.com",
      user_id: 1
    )
    expect(song.errors[:album]).to include "can't be blank"
  end  
  it 'should have a valid mood' do
    song = user.songs.create(
      title:"Joes song",
      artist: "Joe",
      album: "Joes album",
      album_art: "image.com",
      song_link: "youtube.com",
      user_id: 1
    )
    expect(song.errors[:mood]).to include "can't be blank"
  end  
  it 'should have a valid album_art' do
    song = user.songs.create(
      title:"Joes song",
      artist: "Joe",
      album: "Joes album",
      mood: "calm", 
      song_link: "youtube.com",
      user_id: 1
    )
    expect(song.errors[:album_art]).to include "can't be blank"
  end  

  it 'should have a valid song_link' do
    song = user.songs.create(
      title:"Joes song",
      artist: "Joe",
      album: "Joes album",
      mood: "calm",
      album_art: "image.com",
      user_id: 1
    )
    expect(song.errors[:song_link]).to include "can't be blank"
  end 
  it 'should have at unique value for title for each artist' do
    song = user.songs.create(
      title:"Joes song",
      artist: "Joe",
      album: "Joes album",
      mood: "calm",
      album_art: "image.com",
      song_link: "youtube.com", 
      user_id: 1
    )
    song_two = user.songs.create(
      title:"Joes song",
      artist: "Joe",
      album: "Joes album",
      mood: "calm",
      album_art: "image.com",
      song_link: "youtube.com", 
      user_id: 1
    )
    expect(song_two.errors[:title]).to include "has already been taken"
  end 
end

