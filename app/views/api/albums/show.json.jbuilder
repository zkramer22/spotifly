json.album do
  json.extract! @album, :id, :name, :artist_id
  json.extract! @album.artwork, :url
  json.extract! @album.artist, :name
end
