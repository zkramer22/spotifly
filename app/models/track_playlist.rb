class TrackPlaylist < ApplicationRecord
  validates :track_id, :playlist_id, presence: true
  validates :track_id, uniqueness: { scope: :playlist_id }

  belongs_to :playlist

  belongs_to :track
end
