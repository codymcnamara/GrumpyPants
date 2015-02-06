Grumblr.Views.BlogShow = Backbone.CompositeView.extend({

  initialize: function(){
    this.postCollection = this.model.posts();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.postCollection, "add", this.addPost);
    this.postCollection.each(this.addPost.bind(this))
    this.createPostForm();
  },

  template: JST['blogs/show'],

  events: {
    "click button.follow": "switchFollowStatus"
  },

  addPost: function(post){
    console.log("adding post")
    var view = new Grumblr.Views.PostShow({
      model: post
    });
    this.addSubview('.blog-posts', view);
  },

  render: function(){
    var temp = this.template({ blog: this.model });
    this.$el.html(temp);
    this.attachSubviews();

    return this;
  },

  createPostForm: function (){
    var blog_id = this.model.get("id");
    var postModel = new Grumblr.Models.Post({ blog_id: blog_id});
    var formView = new Grumblr.Views.PostForm({
      model: this.model,
    });
    this.addSubview('.post-form', formView);
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
