class Search < ApplicationRecord
  validates :query, length: { minimum: 1 }

  belongs_to :user
end
