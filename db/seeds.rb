# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

# //////
# TRACKS
# //////

# track_list =

# track_list.each do |name, album_id, ord, audio|
#   Track.create!(name: name, album_id: album_id, ord: ord, audio: audio)
# end


# /////////////////////////////////////////
