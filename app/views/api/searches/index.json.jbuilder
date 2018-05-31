track_ranks = []
album_ranks = []
artist_ranks = []

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
    track_ranks << track.id
  end
end

json.albums do
  @albums.includes(:artist, :tracks).each do |album|
    json.set! album.id do
      json.extract! album, :id, :name, :artist_id
      json.artwork album.artwork.url
      json.artistName album.artist.name
    end
    album_ranks << album.id
  end
end

json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name, :artist_photo, :cover_photo
    end
    artist_ranks << artist.id
  end
end

json.trackRanks track_ranks
json.albumRanks album_ranks
json.artistRanks artist_ranks
