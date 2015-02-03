# Grumpy-Pants

[Heroku link][heroku]

[heroku]: #

## Minimum Viable Product
A Tumblr clone exclusively for complaining. Built on Rails and Backbone.
Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create blogs
- [ ] Create blog posts
- [ ] View blogs and posts
- [ ] Subscribe to blogs
- [ ] View a feed of subscribed blogs
- [ ] Search blogs by title

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~1/2 day)
Create secure login using rails. Users will be able to login or create a new account. The session will allow users stay logged in even after closing the browser.

[Details][phase-one]

### Phase 2: Create Blog & Blog Show Page (~2 days)
Users will be able to create their own blog and see it on their user show page. At this point the blog show page will only display the title since posts will not be implemented yet

[Details][phase-two]

### Phase 3: Create Posts (~1.5 days)
Users will be able to create posts and see all of their posts on their blog show page. These posts will be the composite views of the blog show view. Posts will be able to upload photos (using filepicker).

[Details][phase-three]

### Phase 4: Feeds (~1.5 days)
Users will be able to follow other users and their home page will be the Feeds Show view. Users can use the navigation bar create new posts and find blogs.  (the search link will not be active yet).

[Details][phase-four]

### Phase 5: Searching for Blogs and Posts(~1 day)
Users will be able to search for other blogs and results will be shown in SearchResults view.

[Details][phase-five]

### Phase 6: Comments (~1 day)
Users will be able comment on posts.

[Details][phase-six]

### Bonus Features (TBD)
- [ ] like a post
- [ ] Click handler on blog titles that outputs an soundbite (ex: a baby waah, a sigh, etc ).
- [ ] tags
- [ ] Automated responses from website when you choose from set of predefined tags. These responses would send words of encouragement
- [ ] markdown
- [ ] reblogging


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
