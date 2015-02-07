Grumblr.Views.BlogsIndex = Backbone.View.extend({

  template: JST['blogs/index'],
  render: function(){
    this.$el.html(this.template());
  }

});
