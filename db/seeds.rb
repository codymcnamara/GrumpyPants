# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

joe = User.create!(username: 'codadfester', email: 'cody@coasdol.com', password: 'password')

joe_blog = Blog.create!({user_id: joe.id, title: "I'm awesome.", filepicker_url: 'https://www.filepicker.io/api/file/54ZzOoKrQgWQ1RXXTDwG'})

Post.create!(blog_id: joe_blog.id, title: "joes firasdfst post", post_url:"app/assets/images/spider-man.png")
