# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

prng = Random.new()

for iteration in 1...22
  f_name = Faker::Name.name
  f_email = Faker::Internet.email
  f_text = Faker::Lorem.paragraph(2)
  # prng.rand(0...4)
  User.create(username: f_name, email: f_email, password: "12345678")
  Game.create(textGame: f_text)
  Score.create(score: prng.rand(0...100), user_id: prng.rand(1..22))
end

