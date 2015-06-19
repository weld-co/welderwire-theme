Template.post_domain.helpers({
  postLink: function(){
    return !!this.url ? Posts.getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
});