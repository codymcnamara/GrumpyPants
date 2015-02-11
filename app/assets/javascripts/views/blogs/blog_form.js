Grumblr.Views.BlogForm = Backbone.View.extend({

  className: "row vertical-offset-100",
  template: JST['blogs/form'],

  events: {
    "click .submit": "submit",
    "click .filepicker": "pickFile"
  },

  pickFile: function(event){
    event.preventDefault();
    var that = this;
    filepicker.pick({container: 'modal'}, function(photo){
      that.model.set({ filepicker_url: photo.url})
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

    function errors (model, response) {
      $('.errors').empty();
      response.responseJSON.forEach(function (el) {
        var li = $('<li></li>');
        li.html(el);
        $('.errors').append(li);
      }.bind(this));
    }

    var formData = $(event.delegateTarget).serializeJSON().blog;
    this.model.set(formData);
    this.model.save({}, {
      success: function(){
        Grumblr.blogs.add(that.model, {merge: true});
        var showUrl = "blogs/" + that.model.get("id").toString()
        Grumblr.currentUser.blog_id = that.model.get("id")
        Backbone.history.navigate(showUrl, { trigger: true });
      },

      error: errors.bind(this)
    });
  }

});
