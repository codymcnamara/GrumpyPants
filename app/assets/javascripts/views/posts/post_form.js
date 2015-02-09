Grumblr.Views.PostForm = Backbone.View.extend({

  className: "modal fade",
  id: 'myModal',

  template: JST['posts/form'],

  initialize: function(){
    // add sync lystener for when blogs get fetched
  },

  events: {
    // these events aren't working
    "click .submit": "submit",
    "click .filepicker": "pickFile"
  },

  pickFile: function(event){
    debugger
    event.preventDefault();
    var that = this;
    filepicker.pick({container: 'window'}, function(photo){
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
    var formData = $(event.delegateTarget).find('form').serializeJSON().post
    var post = new Grumblr.Models.Post(formData);

    function errors (model, response) {
      $('.errors').empty();
      response.responseJSON.forEach(function (el) {
        var li = $('<li></li>');
        li.html(el);
        $('.errors').append(li);
      }.bind(this));
    }

    Grumblr.blogs.fetch({
      success: function(){
        var currentBlog = Grumblr.blogs.findWhere({ user_id: Grumblr.currentUser.id})
        post.set('blog_id', currentBlog.get("id"));
        post.save({}, {
          success: function(){
            currentBlog.posts().add(post, {merge: true});
            var blogUrl = "#blogs/" + post.get("blog_id")
            $('#myModal').modal('hide')
            Backbone.history.navigate(blogUrl, { trigger: true })
          },

          error: errors.bind(that)
        });
      }
    });
  }

});
