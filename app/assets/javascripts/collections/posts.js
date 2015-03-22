Grumblr.Collections.Posts = Backbone.Collection.extend({
  url: 'api/posts',
  model: Grumblr.Models.Post,

  comparator: function(post){
    return -post.id;
  },

  parse: function (posts) {
    if(posts.page){
      this.pageNumber = parseInt(posts.page);
      this.totalPages = parseInt(posts.total_pages);
      return _.sortBy(posts.models, function (post) {
        return -post.id;
      })
    } else {
      return _.sortBy(posts, function (post) {
        return -post.id;
      })
    }
  }

});

Grumblr.feed = new Grumblr.Collections.Posts();
