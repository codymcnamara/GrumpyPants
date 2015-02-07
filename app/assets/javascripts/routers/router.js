Grumblr.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    'feed': 'feed',
    "blogs/new": "new",
    "blogs/:id": "show"
  },

  new: function(){
    var newModel = new Grumblr.Models.Blog();
    var newView = new Grumblr.Views.BlogForm( { model: newModel });
    this._swapView(newView);
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
    Grumblr.feed.fetch();
    var feedView = new Grumblr.Views.FeedShow({
      collection: Grumblr.feed
    });
    this._swapView(feedView)
  }

});
