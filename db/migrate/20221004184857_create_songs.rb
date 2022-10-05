class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.string :mood
      t.text :album_art
      t.text :song_link

      t.timestamps
    end
  end
end
