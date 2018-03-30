json.artist do
  json.extract! @artist, :id, :name, :track_ids
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
