class Follow < ApplicationRecord
  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id

  belongs_to :playlist
end
