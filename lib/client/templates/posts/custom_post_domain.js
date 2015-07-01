Template.post_domain.helpers({
  postLink: function(){
    return !!this.url ? Telescope.utils.getOutgoingUrl(this.url) : this.getPageUrl(post, isAbsolute);
  },
});