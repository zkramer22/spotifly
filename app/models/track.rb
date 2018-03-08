class Track < ApplicationRecord
  validates :name, presence: true

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  belongs_to :album,
    optional: true

  has_many :track_playlists,
    class_name: :TrackPlaylist,
    foreign_key: :track_id

  has_many :playlists,
    through: :track_playlists,
    source: :playlist

end
