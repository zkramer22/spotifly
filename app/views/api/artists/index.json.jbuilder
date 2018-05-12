@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name, :artist_photo, :cover_photo
  end
end
