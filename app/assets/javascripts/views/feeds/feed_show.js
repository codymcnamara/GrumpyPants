Grumblr.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST['feeds/show'],

  initialize: function(){
    this.listenTo(this.collection, 'add', this.addPost);
    this.listenTo(this.collection, 'remove', this.removePost);

    this.collection.each(this.addPost.bind(this));
  },

  removePost: function(post){
    var subViewToRemove = _.find(this.subviews('.feed-posts'), function(view){
      return view.model == post;
    });
    this.removeSubview('.feed-posts', subViewToRemove);
  },

  render: function(){
    var temp = this.template();
    this.$el.html(temp);
    this.attachSubviews();
    return this;
  },

  addPost: function(post){
    var view = new Grumblr.Views.PostShow({
      model: post
    });
    this.addSubview('.feed-posts', view);
  }


});
