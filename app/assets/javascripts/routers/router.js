Grumblr.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    'feed': 'feed',
    "blogs/new": "new",
    "blogs/:id": "show",
    "allblogs": "allBlogs"
  },

  new: function(){
    var that = this;
    Grumblr.blogs.fetch({
      success: function(){
        var currentBlog = Grumblr.blogs.findWhere({ user_id: Grumblr.currentUser.id})
        // redirect if user already has a blog
        if(currentBlog){
          Backbone.history.navigate('#/feed');
        } else {
          var newModel = new Grumblr.Models.Blog();
          var newView = new Grumblr.Views.BlogForm( { model: newModel });
          that._swapView(newView);
        }
      }
    });
  },

  show: function(id){
    var showModel = Grumblr.blogs.getOrFetch(id);
    var showView = new Grumblr.Views.BlogShow ( { model: showModel });
    this._swapView(showView);
  },

  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  feed: function(){
    Grumblr.feed.fetch({
      remove: false, // merge this page with the rest of the collection
      data: { page: 1 }
    });
    var feedView = new Grumblr.Views.FeedShow({
      collection: Grumblr.feed
    });
    this._swapView(feedView)
  },

  allBlogs: function(){
    Grumblr.blogs.fetch();
    var allBlogsView = new Grumblr.Views.AllBlogsShow({
      collection: Grumblr.blogs
    });
    this._swapView(allBlogsView)
  }

});
