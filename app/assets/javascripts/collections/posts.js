Grumblr.Collections.Posts = Backbone.Collection.extend({
  // comparator: 'title',
  url: 'api/posts',
  model: Grumblr.Models.Post,

  comparator: function(post){
    return -post.get("id")
  }

});

Grumblr.feed = new Grumblr.Collections.Posts();
