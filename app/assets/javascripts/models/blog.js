Grumblr.Models.Blog = Backbone.Model.extend({
  urlRoot: "api/blogs/",

  posts: function(){
    if(!this._posts){
      this._posts = new Grumblr.Collections.Posts( { blog: this })
    }
    return this._posts;
  },

  parse: function(response){
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }
    return response;
  }

});
