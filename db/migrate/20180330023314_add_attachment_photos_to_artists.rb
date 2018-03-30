class AddAttachmentPhotosToArtists < ActiveRecord::Migration[5.1]
  def self.up
    change_table :artists do |t|
      t.attachment :cover_photo
      t.attachment :artist_photo
    end
  end

  def self.down
    remove_attachment :artists, :cover_photo
    remove_attachment :artists, :artist_photo
  end
end
