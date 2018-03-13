class Search < ApplicationRecord
  # validates :query, length: { minimum: 1 }

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id;
end
