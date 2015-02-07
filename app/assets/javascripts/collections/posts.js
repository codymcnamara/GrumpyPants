Grumblr.Collections.Posts = Backbone.Collection.extend({
  url: 'api/posts',
  model: Grumblr.Models.Post

});

Grumblr.feed = new Grumblr.Collections.Posts();
