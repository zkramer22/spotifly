class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :tracks

  has_many :albums
end
