Grumblr.Views.BlogShow = Backbone.CompositeView.extend({

  initialize: function(){
    this.postCollection = this.model.posts();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.postCollection, "add", this.addPost);
    this.postCollection.each(this.addPost.bind(this));
  },

  template: JST['blogs/show'],

  events: {
    "click button.follow": "switchFollowStatus"
  },

  addPost: function (post, collection, options) {
    if (options.new) {
      ('prepend')
      this.prependPost(post);
    } else {
      ('append')
      this.appendPost(post);
    }
  },

  appendPost: function(post){
    var view = new Grumblr.Views.PostShow({
      model: post,
      blog: this.model
    });
    this.addSubview('.blog-posts', view);
  },

  prependPost: function (post) {
    var view = new Grumblr.Views.PostShow({
      model: post,
      blog: this.model
    });
    this.prependSubview('.blog-posts', view);
  },

  render: function(){
    var temp = this.template({ blog: this.model });
    this.$el.html(temp);
    this.attachSubviews();
    return this;
  },

  switchFollowStatus: function(event){
    var btn = $(event.target);
    if( btn.data("follow-state") === 'unfollowed'){
      this.model.follow({
        btn: btn,
        followState: "following",
        btnText: 'Unfollow'
      })
    } else {
      this.model.unfollow({
        btn: btn,
        followState: "unfollowed",
        btnText: 'Follow'
      })
    }
  }

});
