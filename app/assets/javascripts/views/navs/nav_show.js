Grumblr.Views.NavShow = Backbone.View.extend({
  template: JST['nav/show'],

  className: "nav-fun",

  events: {
    'click a#logout': "logout",
    'click a#new-post': "newPost",
    'click a#my-blog': 'myBlog',
    'click .nav-icon': "bounceIcon"
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
    $('#content').append(postFormView.render().$el);
    $('#myModal').modal();
  },

  myBlog: function(event){
    event.preventDefault();
    Backbone.history.navigate("blogs/" + Grumblr.currentUser.blog_id, {trigger: true});
  }
});
