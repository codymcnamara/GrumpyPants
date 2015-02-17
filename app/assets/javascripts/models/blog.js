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
        options.btn.data("follow-state", options.followState)
        options.btn.html(options.btnText);

        if(options.modifyCollection === "add"){
          Grumblr.feed.add(that.posts().models)
        } else if ( options.modifyCollection === "remove" ) {
          var removedPosts = Grumblr.feed.where({ blog_id: that.id })
          Grumblr.feed.remove(removedPosts)
        }
      },
      error: function(){
        alert('something went wrong while following');
      }
    })
  },

  follow: function(options){
    this.set('followed', true);
    this._updateFollow('post', options);
  },

  unfollow: function(options){
    this.set('followed', false);
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
