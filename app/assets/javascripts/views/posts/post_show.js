Grumblr.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  render: function(){
    var temp = this.template({ post: this.model });
    this.$el.html(temp);
    return this;
  }
});
