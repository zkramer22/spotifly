class Artist < ApplicationRecord
  include PgSearch

  validates :name, presence: true

  has_attached_file :cover_photo, default_url: "cool-wall.jpg"
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  has_attached_file :artist_photo, default_url: "morgan-freeman.png"
  validates_attachment_content_type :artist_photo, content_type: /\Aimage\/.*\Z/

  has_many :albums

  has_many :follows,
    class_name: :Follow,
    foreign_key: :artist_id

  has_many :followers,
    through: :follows,
    source: :follower

  has_many :tracks,
    through: :albums,
    source: :tracks

  pg_search_scope :search,
    against: :name,
    :using => {
      :tsearch => { :prefix => true, :normalization => 2 }
    }
end
