@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :name, :album_ids, :album_artworks
    json.extract! playlist.creator, :email_address
  end
end
