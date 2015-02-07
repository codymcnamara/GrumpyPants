Grumblr.Collections.Feeds = Backbone.Collection.extend({
  url: 'api/posts',
  model: Grumblr.Models.Post,

  // old method:
  // fetchPosts: function(){
  //   $.ajax({
  //     url: 'api/posts/feed',
  //     dataType: 'json',
  //     success: function(response){
  //       // iterate through each packet of info in response and create a new model, then add it to hte collection
  //       response.forEach( function(postData){
  //         var post = new Grumblr.Models.Post(postData);
  //         Grumblr.feedCollection.add(post);
  //       })
  //       // Grumblr.feedCollection.set(response);
  //     },
  //     error: function(){
  //       alert('something went wrong with getting feed')
  //     }
  //   })
  // }
});

Grumblr.feedCollection = new Grumblr.Collections.Feeds();
