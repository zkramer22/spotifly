class TrackPlaylist < ApplicationRecord
  validates :track_id, :playlist_id, presence: true

  belongs_to :playlist

  belongs_to :track
end
