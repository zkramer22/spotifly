json.playlist do
  json.extract! @playlist, :id, :name, :track_ids
  json.extract! @playlist.creator, :email_address
end

json.tracks do
  @playlist.tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :name, :artist_id, :album_id, :ord
    end
  end
end
