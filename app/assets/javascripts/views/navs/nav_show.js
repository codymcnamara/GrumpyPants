Grumblr.Views.NavShow = Backbone.View.extend({
  className: "navbar-header",

  template: JST['navs/show'],

  render: function(){
    var temp = this.template();
    this.$el.html(temp);
    return this;
  }
});
