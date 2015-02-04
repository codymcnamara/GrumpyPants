Grumblr.Views.BlogForm = Backbone.View.extend({

  tagName: 'form',

  template: JST['blogs/form'],

  render: function(){
    var temp = this.template({});
    this.$el.html(temp);
    return this;
  }

});
