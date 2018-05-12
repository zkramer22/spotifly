@tracks.includes(:album, :artist).each do |track|
  json.set! track.id do
    json.extract! track, :id, :name, :ord
    json.extract! track.audio, :url
    json.extract! track.artist, :name
    json.extract! track.album, :name
  end
end
