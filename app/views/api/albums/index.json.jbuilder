@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :name, :artist_id
    json.artwork album.artwork.url
    json.artistName album.artist.name
  end
end
