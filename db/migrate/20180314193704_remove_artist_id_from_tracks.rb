class RemoveArtistIdFromTracks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :artist_id
  end
end
