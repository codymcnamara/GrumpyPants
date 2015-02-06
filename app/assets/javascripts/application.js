// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.serializeJSON
//= require jquery_ujs
//= require bootstrap.min
//= require underscore
//= require backbone
//= require grumblr
//= require_tree ../templates
//= require_tree ./utils
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

$.FollowToggle = function (el, options) {
  this.$el = $(el);
  this.blogId = this.$el.data("blog-id") || options.blogId;
  this.followState = this.$el.data("initial-follow-state") || options.followState;

  this.render();

  this.$el.on("click", this.handleClick.bind(this));
};

$.FollowToggle.prototype.handleClick = function (event) {
  var followToggle = this;

  event.preventDefault();

  if (this.followState == "followed") {
    this.followState = "following";
    this.render();

    // find the existing model and call destroy on it
    var followModel = Grumblr.followings.get({
      blog_id: blogId,
      user_id: Grumblr.currentUser
    })

    // i need to do this to get the id right?
    followModel.fetch();

    // do i need to remove it from the collection as well?
    followModel.destroy({}, {
      success: function () {
        followToggle.followState = "unfollowed";
        followToggle.render();
      }
    })
  } else if (this.followState == "unfollowed") {
    this.followState = "unfollowing"
    this.render();

    var followModel = new Grumblr.Models.Following({ blog_id: this.blogId})
    followModel.save({}, {
      success: function(){
        followToggle.followState = "followed";
        followToggle.render();
        Grumblr.followings.add(followModel);
      }
    });
  }
};

$.FollowToggle.prototype.render = function () {
  if (this.followState == "followed") {
    this.$el.prop("disabled", false);
    this.$el.html("Unfollow!");
  } else if (this.followState == "unfollowed") {
    this.$el.prop("disabled", false);
    this.$el.html("Follow!");
  } else if (this.followState == "following") {
    this.$el.prop("disabled", true);
    this.$el.html("Following...");
  } else if (this.followState == "unfollowing") {
    this.$el.prop("disabled", true);
    this.$el.html("Unfollowing...");
  }
};

// this adds followToggle to jquery methods?
$.fn.followToggle = function (options) {
  return this.each(function () {
    new $.FollowToggle(this, options);
  });
};

// this calls followToggle on all matching buttons?
$(function () {
  $("button.follow-toggle").followToggle();
});
