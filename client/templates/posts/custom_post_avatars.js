Template.post_avatars.helpers({
  upvoters: function () {
    // remove post author from upvoters list
    // limit to 4 upvoters (show 5 including author)
    return _.first(_.without(this.upvoters, this.userId), 4);
  }
});
