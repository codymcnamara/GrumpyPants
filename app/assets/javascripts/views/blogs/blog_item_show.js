Grumblr.Views.BlogItemShow = Backbone.View.extend({
  template: JST['blogs/item_show'],

  events: {
    "click button.follow": "switchFollowStatus"
  },

  render: function(){
    var temp = this.template({ blog: this.model });
    this.$el.html(temp);
    return this;
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
