class Album < ApplicationRecord
  validates :name, :artist_id, presence: true

  has_attached_file :artwork, default_url: "spotify-logo.png"
  validates_attachment_content_type :artwork, content_type: /\Aimage\/.*\Z/

  has_many :tracks

  belongs_to :artist

end
