Grumblr.Collections.Blogs = Backbone.Collection.extend({
  url: "api/blogs",
  model: Grumblr.Models.Blog

});


Grumblr.collection = new Grumblr.Collections.Blogs();
