class AddArtistIdToFollows < ActiveRecord::Migration[5.1]
  def change
    add_column :follows, :artist_id, :integer
  end
end
