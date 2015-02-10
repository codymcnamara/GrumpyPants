Grumblr.Collections.Posts = Backbone.Collection.extend({
  // comparator: 'title',
  url: 'api/posts',
  model: Grumblr.Models.Post,

  comparator: function(post){
    return -post.id
  },

  parse: function (posts) {
    return _.sortBy(posts, function (post) {
      return -post.id;
    })
  }

});

Grumblr.feed = new Grumblr.Collections.Posts();
