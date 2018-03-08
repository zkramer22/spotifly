class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :name, null: false
      t.integer :album_id
      t.integer :ord
      t.time :time, null: false

      t.timestamps
    end
  end
end
