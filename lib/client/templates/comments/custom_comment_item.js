Template.comment_item.helpers({
  // Use Like/Likes instead of upvote
  likesUnitDisplayText: function(){
    return this.upvotes == 1 ? 'Like' : 'Likes';
  }
});

// Copied from original comment_item.js
var handleVoteClick = function (meteorMethodName, eventName, e, instance) {
  e.preventDefault();
  e.stopImmediatePropagation(); // needed to prevent the handler running multiple times in nested comments
  if (!Meteor.user()){
    Router.go('atSignIn');
    Messages.flash(i18n.t('please_log_in_first'), 'info');
  } else {
    Meteor.call(meteorMethodName, this, function(error, result){
      Events.track(eventName, {
        'commentId': instance.data._id,
        'postId': instance.data.post,
        'authorId': instance.data.userId
      });
    });
  }
};

// Edited target elements of click handler to custom class names and removed downvotes
Template.comment_item.events({
  'click .upvote-link.not-upvoted': _.partial(handleVoteClick, 'upvoteComment', 'post upvoted'),
  'click .upvote-link.upvoted': _.partial(handleVoteClick, 'cancelUpvoteComment', 'post upvote cancelled')
});