class RemoveTimeFromTrack < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :time
  end
end
