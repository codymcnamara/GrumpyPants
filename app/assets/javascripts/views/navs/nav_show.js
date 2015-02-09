Grumblr.Views.NavShow = Backbone.View.extend({
  className: "navbar-header",

  template: JST['navs/show'],

  events: {
    'click a#logout': "logout",
    'click a#new-post': "newPost"
  },

  render: function(){
    var temp = this.template();
    this.$el.html(temp);
    return this;
  },

  logout: function(event){
    event.preventDefault();

    $.ajax({
      url: 'session',
      type: 'delete',
      success: function(){
        window.location = '/'
      },
    });
  },

  newPost: function(){
    var postFormView = new Grumblr.Views.PostForm({
      model: this.model,
    });

    $('#myModal').remove();
    $('#content').append(postFormView.render().$el)
    $('#myModal').modal()
  },

  currentBlog: function(){
    // Blog.where("user_id = '1'").order('created_at DESC')[0]
  },

  myBlog: function(){
    Grumblr.blogs.fetch({
      success: function(){
        var currentBlog = Grumblr.blogs.findWhere({ user_id: Grumblr.currentUser.id})
        var blogUrl = "#blogs/" + currentBlog.get("id")
        Backbone.history.navigate("blogs/" + currentBlog.get("id"))
      }
    });
  }
});
