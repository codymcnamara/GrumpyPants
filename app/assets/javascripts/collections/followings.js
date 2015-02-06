Grumblr.Collections.Followings = Backbone.Collection.extend({
  url: 'api/followings',
  model: Grumblr.Models.Following
});

Grumblr.followings = new Grumblr.Collections.Followings()
