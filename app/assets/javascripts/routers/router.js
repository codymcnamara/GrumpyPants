Grumblr.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "api/blogs/new": "new"
  },

  new: function(){
    var newModel = new Grumblr.Models.Blog();
    var newView = new Grumblr.Views.BlogForm( { model: newModel });
    this._swapView(newView);
  },

  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
