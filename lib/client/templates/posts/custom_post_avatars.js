Template.post_avatars.helpers({
  upvoters: function () {
    // remove post author from upvoters list
    // limit to 10 upvoters
    return _.first(_.without(this.upvoters, this.userId), 5);
  }
});
