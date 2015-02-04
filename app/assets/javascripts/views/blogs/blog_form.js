Grumblr.Views.BlogForm = Backbone.View.extend({

  tagName: 'form',

  template: JST['blogs/form'],

  events: {
    "click .submit": "submit"
  },

  render: function(){
    var temp = this.template({});
    this.$el.html(temp);

    var $filePickerInput = this.$("input[type=filepicker]");
    filepicker.constructWidget($filePickerInput[0]);
    return this;
  },

  submit: function(event){
    event.preventDefault();
    var that = this;

    var formData = $(event.delegateTarget).serializeJSON().blog;

    this.model.set(formData);
    this.model.save({}, {
      success: function(){
        Grumblr.collection.add(that.model, {merge: true});
        var showUrl = "api/blogs/" + that.model.get("id").toString()
        Backbone.history.navigate(showUrl, { trigger: true });
      }
    });
  }

});
