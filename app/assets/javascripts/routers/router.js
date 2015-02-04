Grumblr.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "api/blogs/new": "new",
    "api/blogs/:id": "show"
  },

  new: function(){
    var newModel = new Grumblr.Models.Blog();
    var newView = new Grumblr.Views.BlogForm( { model: newModel });
    this._swapView(newView);
  },

  show: function(id){
    var showModel = Grumblr.collection.getOrFetch(id);
    var showView = new Grumblr.Views.BlogShow ( { model: showModel });
    this._swapView(showView);
  },

  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
