Grumblr.Views.BlogShow = Backbone.CompositeView.extend({

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST['blogs/show'],

  render: function(){
    var temp = this.template({ blog: this.model });
    this.$el.html(temp);
    return this;
  }

});
