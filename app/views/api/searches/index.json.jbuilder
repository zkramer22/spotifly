ranks = []

json.tracks do
  @tracks.includes(:artist, :album).each do |track|
    json.set! track.id do
      json.id track.id
      json.name track.name
      json.ord track.ord
      json.trackUrl track.audio.url
      json.album track.album.name
      json.albumId track.album.id
      json.artist track.artist.name
      json.artistId track.artist.id
      json.artwork track.album.artwork.url
    end
    ranks << track.id
  end
end

json.ranks ranks
