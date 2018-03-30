class RemoveAttachmentPhotosFromArtists < ActiveRecord::Migration[5.1]
  def self.up
    remove_attachment :artists, :cover_photo
    remove_attachment :artists, :artist_photo
  end

  def self.down
    remove_attachment :artists, :cover_photo
    remove_attachment :artists, :artist_photo
  end
end
