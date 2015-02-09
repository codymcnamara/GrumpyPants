Grumblr.Views.BlogItemShow = Backbone.View.extend({
  template: JST['blogs/item_show'],

  render: function(){
    var temp = this.template({ blog: this.model });
    this.$el.html(temp);
    return this;
  }
});
