Grumblr.Collections.Feeds = Backbone.Collection.extend({
  url: 'api/posts',
  model: Grumblr.Models.Post
});

Grumblr.feedCollection = new Grumblr.Collections.Feeds();
