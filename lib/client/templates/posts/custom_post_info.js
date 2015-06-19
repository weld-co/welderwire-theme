Template.post_info.helpers({
  // Has upvoted a post
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.upvoters, user._id);
  },
  // Has commented on a post
  commented: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.commenters, user._id);
  },
  authorName: function(){
    var user = Meteor.users.findOne(this.userId);
    return Users.getDisplayName(user);
  }
});

Template.post_info.events({
  'click .upvote-link.not-upvoted': function(e, instance){
    var post = this;
    e.preventDefault();
    e.stopPropagation();
    if(!Meteor.user()){
      Router.go('atSignIn');
      Messages.flash(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call('upvotePost', post, function(){
      Events.track("post upvoted", {'_id': post._id});
    });
  },
  'click .upvote-link.upvoted': function(e, instance){
    var post = this;
    e.preventDefault();
    e.stopPropagation();
    if(!Meteor.user()){
      Router.go('atSignIn');
      Messages.flash(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call('cancelUpvotePost', post, function(){
      Events.track("post upvoted cancelled", {'_id': post._id});
    });
  }
});