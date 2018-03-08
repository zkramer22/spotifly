class Album < ApplicationRecord
  validates :name, :artist_id, presence: true

  has_many :tracks

  belongs_to :artist
end
