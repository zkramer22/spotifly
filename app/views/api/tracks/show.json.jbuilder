json.set! @track.id do
  json.extract! @track, :id, :name, :ord, :album_id
  json.trackUrl @track.audio.url
  json.artist @track.artist.name
  json.artistId @track.artist.id
  json.extract! @track.album.name
  json.artwork @track.album.artwork.url
end
