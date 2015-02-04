window.Grumblr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#content")

    new Grumblr.Routers.Router({ $rootEl: $rootEl })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Grumblr.initialize();
});
