window.Grumblr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#content")
    this.initializeNav();
    new Grumblr.Routers.Router({ $rootEl: $rootEl })
    Backbone.history.start();
  },

  initializeNav: function(){
    var $navEl = $('#nav')
    var navView = new Grumblr.Views.NavShow()
    $navEl.html(navView.render().$el);
  }
};
