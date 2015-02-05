Grumblr.Views.PostForm = Backbone.View.extend({

  tagName: 'form',

  template: JST['posts/form'],

  events: {
    "click .submit": "submit",
    "click .filepicker": "pickFile"
  },

  pickFile: function(event){
    event.preventDefault();
    var that = this;
    filepicker.pick({container: 'modal'}, function(photo){
      that.model.set({ post_url: photo.url})
    })
  },

  render: function(){
    var temp = this.template({});
    this.$el.html(temp);
    return this;
  },

  submit: function(event){
    event.preventDefault();
    var that = this;
    var formData = $(event.delegateTarget).serializeJSON().post;
    var post = new Grumblr.Models.Post(formData);
    post.set('blog_id', this.model.id);
    post.save({}, {
      success: function(){
        that.model.posts().add(post, {merge: true});
        that.render();
      }
    });
  }

});
