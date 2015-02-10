Grumblr.Views.PostForm = Backbone.View.extend({

  className: "modal fade",
  id: 'myModal',

  template: JST['posts/form'],

  initialize: function(){
  },

  events: {
    "click .submit": "submit",
    "click .filepicker": "pickFile"
  },

  pickFile: function(event){
    event.preventDefault();
    var that = this;

    filepicker.pick({container: 'window'}, function(photo){
      that._currentPickedFile = photo.url;
    });
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
    post.set({ post_url: this._currentPickedFile });

    function errors (model, response) {
      $('.errors').empty();
      response.responseJSON.forEach(function (el) {
        var li = $('<li></li>');
        li.html(el);
        $('.errors').append(li);
      }.bind(this));
    }

    $('#myModal').one('hidden.bs.modal', function(){
      post.save({}, {
        success: function(){
          Backbone.history.navigate("blogs/" + post.get('blog_id'), { trigger: true })
        },
        error: errors.bind(that)
      });
    });

    $('#myModal').modal('hide');
    that._currentPickedFile = null;
  }

});
