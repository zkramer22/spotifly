json.track do
  json.extract! @track, :id, :name, :album_id
  json.extract! @track.audio, :url
  json.extract! @track.artist, :name
  json.extract! @track.album, :name
end
