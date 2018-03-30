class Artist < ApplicationRecord
  validates :name, presence: true

  has_attached_file :cover_photo, default_url: "cool-wall.jpg"
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  has_attached_file :artist_photo, default_url: "morgan-freeman.png"
  validates_attachment_content_type :artist_photo, content_type: /\Aimage\/.*\Z/

  has_many :albums

  has_many :tracks,
    through: :albums,
    source: :tracks
end
