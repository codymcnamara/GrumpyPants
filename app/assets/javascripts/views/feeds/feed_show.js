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
    this.listenForScroll();
    return this;
  },

  listenForScroll: function () {
    $(window).off("scroll"); // remove previous listeners
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $(window).on("scroll", throttledCallback);
  },

  nextPage: function () {
    var view = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      if (view.collection.page_number < view.collection.total_pages) {
        view.collection.fetch({
          data: { page: view.collection.page_number + 1 },
          remove: false
        });
      }
    }
  },

  addPost: function(post){
    var view = new Grumblr.Views.PostShow({
      model: post
    });
    this.addSubview('.feed-posts', view);
  }

});
