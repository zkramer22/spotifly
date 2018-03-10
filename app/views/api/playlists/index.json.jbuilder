@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :name
    json.extract! playlist.creator, :email_address
  end
end
