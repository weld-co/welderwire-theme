Template.comment_item.helpers({
  // Use Like/Likes instead of upvote
  likesUnitDisplayText: function(){
    return this.upvotes == 1 ? 'Like' : 'Likes';
  }
});
