Grumblr.Views.NavShow = Backbone.View.extend({
  className: "navbar-header",

  template: JST['navs/show'],

  events: {
    'click a#logout': "logout"
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
  }
});
