class AddArtistIdToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :artist_id, :integer
  end
end
