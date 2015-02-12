Grumblr.Views.PostShow = Backbone.View.extend({
  initialize: function(options){
    this.blog = options.blog;
    this.blog && this.listenTo(this.blog, "sync", this.render);
    this.listenTo(this.model, "sync", this.render);
  },

  className: "post-show-container",

  template: JST['posts/show'],

  render: function(){
    var temp = this.template({
      post: this.model,
      blog: this.blog
    });
    this.$el.html(temp);
    return this;
  }
});
