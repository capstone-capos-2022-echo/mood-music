class Song < ApplicationRecord
   belongs_to :user
   validates :title, :artist, :album, :mood, :album_art, :song_link, :user_id, presence: true
   validates :title, uniqueness: {scope: :artist}
end
