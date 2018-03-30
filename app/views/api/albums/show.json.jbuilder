json.album do
  json.extract! @album, :id, :name, :artist_id, :track_ids
  json.artwork @album.artwork.url
  json.artistName @album.artist.name
  json.artistId @album.artist.id
end

json.tracks do
  @album.tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :name, :ord
      json.trackUrl track.audio.url
      json.artwork track.album.artwork.url
      json.artist track.artist.name
    end
  end
end
