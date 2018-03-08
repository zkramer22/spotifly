# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# /////////////////////////////////////////////////////////////////////
# //////
# USERS
# //////
user_list = [
  ['userA', 'qwerty'],
  ['userB', 'asdfgh'],
  ['userC', 'zxcvbn']
]
user_list.each do |email_address, password|
  User.create!(email_address: email_address, password: password)
end
# /////////////////////////////////////////////////////////////////////
# ///////
# ARTISTS
# ///////
artist_list = [
  "Haywyre",
  "ODESZA"
]
artist_list.each do |name|
  Artist.create!(name: name)
end
# /////////////////////////////////////////////////////////////////////
# //////
# ALBUMS
# //////
album_list = [
  ["Two Fold, Pt. 1", 1],
  ["Two Fold, Pt. 2", 1],
  ["In Return", 2],
  ["Say My Name Remixes", 2]
]
album_list.each do |name, artist_id|
  Album.create!(name: name, artist_id: artist_id)
end
# /////////////////////////////////////////////////////////////////////
# ////// TODO: USE THE URI CLASS TO GET THOSE PESKY LINKS TO ACCEPT PARENS AND SUCH ///////
# TRACKS
# //////
track_list = [
  ["Permutate", 1, 1, 1, "https://s3.us-east-2.amazonaws.com/spotifly-audio/music/haywyre/06+Permutate.m4a"],
  ["I Am Me", 2, 1, 1, "https://s3.us-east-2.amazonaws.com/spotifly-audio/music/haywyre/01+I+Am+Me.m4a"],
  ["I Am You", 2, 1, 2, "https://s3.us-east-2.amazonaws.com/spotifly-audio/music/haywyre/02+I+Am+You.m4a"],
  ["Restraint", 2, 1, 3, "https://s3.us-east-2.amazonaws.com/spotifly-audio/music/haywyre/03+Restraint.m4a"],
  ["Impulse", 2, 1, 4, "https://s3.us-east-2.amazonaws.com/spotifly-audio/music/haywyre/04+Impulse.m4a"],
  ["Bloom", 3, 2, 1, "https://s3.us-east-2.amazonaws.com/spotifly-audio/music/odesza/03+Bloom.m4a"],
  ["Say My Name (Ambassadeurs Remix)", 4, 2, 1, "https://s3.us-east-2.amazonaws.com/spotifly-audio/music/odesza/02+Say+My+Name+-+Ambassadeurs+Remix.m4a"],
  ["Say My Name (Jai Wolf Remix)", 4, 2, 2, "https://s3.us-east-2.amazonaws.com/spotifly-audio/music/odesza/07+Say+My+Name+-+Jai+Wolf+Remix.m4a"]
]
track_list.each do |name, album_id, artist_id, ord, audio|
  Track.create!(name: name, album_id: album_id, artist_id: artist_id, ord: ord, audio: audio)
end
# /////////////////////////////////////////////////////////////////////
# //////////
# PLAYLISTS
# //////////
playlist_list = [
  ["Favs", 1],
  ["Jams", 1],
  ["Cool Remixes", 2]
]
playlist_list.each do |name, creator_id|
  Playlist.create!(name: name, creator_id: creator_id)
end
# /////////////////////////////////////////////////////////////////////
# ////////////////
# TRACK_PLAYLISTS
# ////////////////
track_playlist_list = [
  [1, 1],
  [1, 3],
  [1, 5],
  [1, 6],
  [2, 1],
  [2, 5],
  [2, 6],
  [3, 7],
  [3, 8]
]
track_playlist_list.each do |playlist_id, track_id|
  TrackPlaylist.create!(playlist_id: playlist_id, track_id: track_id)
end
