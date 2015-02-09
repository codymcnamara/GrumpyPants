Grumblr.Views.AllBlogsShow = Backbone.CompositeView.extend({
  template: JST['all_blogs/show'],

  initialize: function(){
    this.listenTo(this.collection, 'add', this.addBlog);
    this.listenTo(this.collection, 'remove', this.removeBlog);

    this.collection.each(this.addBlog.bind(this));
  },

  render: function(){
    var temp = this.template();
    this.$el.html(temp);
    this.attachSubviews();
    return this;
  },

  addBlog: function(blog){
    var view = new Grumblr.Views.BlogItemShow({
      model: blog
    });
    this.addSubview('.blog-list', view);
  },

  removeBlog: function(blog){
    var subViewToRemove = _.find(this.subviews('.blog-list'), function(view){
      return view.model == blog;
    });
    this.removeSubview('.blog-list', subViewToRemove);
  }

});
