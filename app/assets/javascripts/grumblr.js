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
    $('#nav').append("<h3>nav nav nav</h3>")
    //actually make a backbone view here
  }
};
