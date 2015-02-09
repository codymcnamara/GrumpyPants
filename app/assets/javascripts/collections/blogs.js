Grumblr.Collections.Blogs = Backbone.Collection.extend({
  url: "api/blogs",
  model: Grumblr.Models.Blog,

  getOrFetch: function (id) {
    var model = this.get(id);

    if(!model){
      model = new Grumblr.Models.Blog({ id: id });
      var coll = this
      model.fetch({
        success: function(){
          coll.add(model);
        }
      })
    } else {
      model.fetch();
    }

    return model;
  },

  findCurrentBlog: function(){
    // this could be useful method for refactoring
  }
});


Grumblr.blogs = new Grumblr.Collections.Blogs();
