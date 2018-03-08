class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :name, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end
    add_index :albums, :artist_id, unique: true
  end
end
