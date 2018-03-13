json.tracks do
  @tracks.includes(:artist, :album).each do |track|
    json.set! track.id do
      json.extract! track, :id, :name, :ord
      json.trackUrl track.audio.url
      json.album track.album.name
      json.albumId track.album.id
      json.artist track.artist.name
      json.artistId track.artist.id
    end
  end
end
