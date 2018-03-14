json.playlist do
  json.extract! @playlist, :id, :name, :track_ids
  json.extract! @playlist.creator, :email_address
end


# bust the n + 1 query with .includes !
json.tracks do
  @playlist.tracks.includes(:artist, :album).each do |track|
    json.set! track.id do
      json.extract! track, :id, :name, :album_id, :ord
      json.trackUrl track.audio.url
      json.album track.album.name
      json.albumId track.album.id
      json.artist track.artist.name
      json.artistId track.artist.id
    end
  end
end
