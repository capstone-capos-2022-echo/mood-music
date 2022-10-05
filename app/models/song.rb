class Song < ApplicationRecord
   belongs_to :user
   validates :title, :artist, :album, :mood, :album_art, :song_link, presence: true
end
