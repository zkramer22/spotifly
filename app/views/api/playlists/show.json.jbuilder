json.playlist do
  json.extract! @playlist, :id, :name, :track_ids, :album_artworks
  json.extract! @playlist.creator, :email_address
end

# bust the n + 1 query with .includes !
json.tracks do
  @playlist.tracks.includes(:artist, :album).each do |track|
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

if @track_playlist
  json.track_playlist do
    json.extract! @track_playlist, :track_id, :playlist_id
  end
end
