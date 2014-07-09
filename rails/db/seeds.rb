# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bugs = Category.create(name: 'Bug Bunny')
wile = Category.create(name: 'Wile E. Coyote')
sam  = Category.create(name: 'Yosemite Sam')

bugs.posts.create(title: "What's up with Docs?")
bugs.posts.create(title: "Of course, you know, this means war.")

wile.posts.create(title: "Getting the most from the Acme categlog.")

sam.posts.create(title: "Shaaaad up!")
sam.posts.create(title: "Ah hates rabbits.")
sam.posts.create(title: "The Great horni-todes")