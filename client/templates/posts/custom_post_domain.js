Template.post_domain.helpers({
  outgoingLink: function(){
    return !!this.url ? Telescope.utils.getOutgoingUrl(this.url) : this.getPageUrl(post, isAbsolute);
  },
});

Template.post_domain.events({
  'click .post-domain': function(e) {
    e.stopPropagation();
  }
});
