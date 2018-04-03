class Playlist < ApplicationRecord
  validates :name, :creator_id, presence: true

  belongs_to :creator,
    class_name: :User,
    foreign_key: :creator_id

  has_many :follows,
    class_name: :Follow,
    foreign_key: :playlist_id

  has_many :track_playlists,
    class_name: :TrackPlaylist,
    foreign_key: :playlist_id

  has_many :tracks,
    through: :track_playlists,
    source: :track

  has_many :albums,
    through: :tracks,
    source: :album

  def album_artworks
    artwork_counts = Hash.new(0)

    self.albums.each do |album|
      artwork_counts[album.artwork.url] += 1
    end

    artwork_counts.sort_by { |k, v| -v }.to_h.keys
  end
end
