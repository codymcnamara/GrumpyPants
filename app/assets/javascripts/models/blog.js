Grumblr.Models.Blog = Backbone.Model.extend({
  urlRoot: "api/blogs/",

  _followUrl: function(){
    return this.url() + "/follow";
  },

  _updateFollow: function(method, options){
    options = options || {};
    var that = this;
    $.ajax({
      url: this._followUrl(),
      method: method,
      success: function(){
        //maybe we need to add to followings or followers here
        options.btn.data("follow-state", options.followState)
        options.btn.html(options.btnText);
        options.success && options.success();
      },
      error: function(){
        options.error && options.error();
        alert('something went wrong while following');
      }
    })
  },

  follow: function(options){
    this._updateFollow('post', options);
  },

  unfollow: function(options){
    this._updateFollow('delete', options);
  },

  posts: function(){
    if(!this._posts){
      this._posts = new Grumblr.Collections.Posts([], { blog: this })
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
