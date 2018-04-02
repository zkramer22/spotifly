json.artist do
  json.extract! @artist, :id, :name, :track_ids, :album_ids
  json.artistPhoto @artist.artist_photo.url
  json.coverPhoto @artist.cover_photo.url
end

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :name
      json.artwork album.artwork.url
    end
  end
end

json.tracks do
  @artist.tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :name, :ord
      json.trackUrl track.audio.url
      json.album track.album.name
      json.albumId track.album.id
      json.artist track.artist.name
      json.artistId track.artist.id
      json.artwork track.album.artwork.url
    end
  end
end
