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
      this._posts = new Grumblr.Collections.Posts( { blog: this })
    }
    return this._posts;
  },

  followings: function(){
    if(!this._followings){
      this._followings = new Grumblr.Collections.Followings( { blog: this })
    }
    return this._followings;
  },

  parse: function(response){
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }
    if (response.followers){
      this.followings().set(response.followers, { parse: true })
    }

    return response;
  }

});


// m = new Grumblr.Models.Blog({id: 5});
// m.follow({
//   success: function(){
//     alert('lol it worked');
//   }
// });
