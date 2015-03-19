
  - more seed data

  - pagination
    - change pagination so that less posts show up and have a slight delay
    - have the moving dots or spining circle while more posts are loading
    - for all blogs page and blog show


  - styling:
    - css.annotate
    - more shadows?
    - make blog prof pics spin or enlarge when you hover over them
    - change button hover colors

    - style pure text elements more
    - transitions between tabs
    - more styling overall

  - Feed
    - add links on posts to the that post's blog show page

  - empty feed message
    - have some sort of greeting on feed page if user not following anyone yet (needs to check if collection empty AFTER it's fetched the Grumblr.feed)

  - refactor updateFollow
    - don't need  modifyCollection, just say "if options.followState ==="

  - if you grumpypants.io after logging in it takes you too blank page (it should go to feed)


  - the order of the blogs on the "all blogs" page sometime changes after moving around, not sure what the pattern is. I think sometimes 7th blog shows up on right side instead of left

  - all blogs
    - fix all blogs page

  - blog form
    - make it a modal

  - extra
    - could order all blogs by most recent (the same way all the posts are ordered)



  - refactoring
    - the app currently defines switchFollowStatus method in two different views . maybe use event aggregator (http://stackoverflow.com/questions/7708195/access-function-in-one-view-from-another-in-backbone-js)


fun styling
  -have the blog pic box drag with the photo, like it does in tumblr

After MVP
  - reblogging
  - sad puppy page
  - search
  - click handler on blog titles that outputs an soundbite (ex: a baby waah, a sigh, etc ).
  - deleting posts/blogs
  - comments
  - likes
  - multiple blogs per user

random
  - other text styles i liked: Scada, Arvo
