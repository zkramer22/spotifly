class CreateTrackPlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :track_playlists do |t|
      t.integer :track_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end
  end
end
