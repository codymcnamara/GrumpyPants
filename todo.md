questions:
  - what's this top empty space?
  - should i not do a grid thing for my posts and nav, since i want it to be unresponsive/fixed?


styling:
  - nav bar
    - max width and border
      -tumblr uses 540px width
  - post show
    - how to style the author name for posts in feed
  - post form
    - bootstrap horizontal form
  - blog show page
    - heading/title
      - follow button
      - author
      - display blog pic?
  - login
    - default page is sign in page.
    - make it less ugly
    - maybe have login/signin render same view?
    - top right corner linking
  - blog form
    - make it a modal

- refactoring
  - toggle logic isn't DRY

- how can i implement reblogging?

- why did the "null: false" for post title let a post without a title save to the db?


steps
  - Pagination
    - use kaminari for pagination

  - Styling:
    - feed show
      - also include blog name somewhere next to the posts
    - create blog
      - it could also be a modal on top of the all blogs page?

  - random
    - Feed
      - add links on posts to the that post's blog show page
    - decide how to show blog title and blog pic on blog show page
    - could order all blogs by most recent (the same way all the posts are ordered)



After MVP
  - good styling
  - seed data
  - reblogging
  - sad puppy page
  - search
  - click handler on blog titles that outputs an soundbite (ex: a baby waah, a sigh, etc ).
  - deleting posts/blogs
  - comments
  - likes
  - multiple blogs per user
