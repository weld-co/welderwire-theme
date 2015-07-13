Template.post_title.helpers({
  cleanUp: function(s){
    return Telescope.utils.cleanUp(s);
  }
});

Template.post_title.onRendered(function() {
  $("div.single-post .post-body").remove();
});
