class RemoveArtistIdIndexOnAlbums < ActiveRecord::Migration[5.1]
  def change
  end
  remove_index :albums, :artist_id
end
