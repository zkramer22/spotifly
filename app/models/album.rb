class Album < ApplicationRecord
  include PgSearch

  validates :name, :artist_id, presence: true

  has_attached_file :artwork, default_url: "spotify-logo.png"
  validates_attachment_content_type :artwork, content_type: /\Aimage\/.*\Z/

  has_many :tracks

  belongs_to :artist

  pg_search_scope :search,
    against: :name,
    :using => {
      :tsearch => { :prefix => true, :normalization => 2 }
    }
end
