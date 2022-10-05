class AddUniquenessToSong < ActiveRecord::Migration[7.0]
  def change
    add_index :songs, [:title, :artist], unique: true
  end
end
