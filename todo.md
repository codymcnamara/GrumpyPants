

  - have some sort of greeting on feed page if user not following anyone yet

  - refactor updateFollow
    - don't need  modifyCollection, just say "if options.followState ==="


  - git rid of following model/collections (do they do anything?)

  - styling:
    - css.annotate
    - more shadows?
    - make blog prof pics spin or enlarage when you hover over them

  - the order of the blogs on the "all blogs" page sometime changes after moving around, not sure what the pattern is

  - Feed
    - add links on posts to the that post's blog show page

  - nav
    - scrolling over text vs glyphicon is different. make text not link to solve this

  - all blogs
    - fix all blogs page

  - blog form
    - make it a modal

  - button color
    - change hover color

  - extra
    - could order all blogs by most recent (the same way all the posts are ordered)

  - refactoring
    - the app currently defines switchFollowStatus method in two different views . maybe use event aggregator (http://stackoverflow.com/questions/7708195/access-function-in-one-view-from-another-in-backbone-js)

steps

  - Pagination
    - for all blogs page and blog show

fun styling
  -have the blog pic box drag with the photo, like it does in tumblr

After MVP
  - good styling
  - reblogging
  - sad puppy page
  - search
  - click handler on blog titles that outputs an soundbite (ex: a baby waah, a sigh, etc ).
  - deleting posts/blogs
  - comments
  - likes
  - multiple blogs per user
