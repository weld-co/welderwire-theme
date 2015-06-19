Template.post_page.helpers({
  authorName: function(){
    var user = Meteor.users.findOne(this.userId);
    return Users.getDisplayName(user);
  },
  // move from post_title.js
  postLink: function(){
    return !!this.url ? Posts.getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  },
  postUrl: function () {
    return "/posts/"+this._id;
  }
});