Grumblr.Views.BlogItemShow = Backbone.View.extend({
  template: JST['blogs/item_show'],

  className: "blog-column col-xs-12 col-sm-6 col-md-6 col-lg-6",

  events: {
    "click .btn.follow": "switchFollowStatus",
    "click .box-icon": "redirectToBlogShow",
    "click .text-center": "redirectToBlogShow"
  },

  render: function(){
    var temp = this.template({ blog: this.model });
    this.$el.html(temp);
    return this;
  },

  switchFollowStatus: function(event){
    event.preventDefault();
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
  },

  redirectToBlogShow: function(){
    Backbone.history.navigate("#blogs/" + this.model.id, { trigger: true })
  }


});
