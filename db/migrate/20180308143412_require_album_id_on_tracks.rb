class RequireAlbumIdOnTracks < ActiveRecord::Migration[5.1]
  def change
    change_column :tracks, :album_id, :integer, null: false
    change_column :tracks, :ord, :integer, null: false
  end
end
