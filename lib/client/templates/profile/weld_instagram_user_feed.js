// Get the instagram credentials from user telescope.property and pass them into the instafeed function
Template.weld_instagram_user_feed.onRendered(function() {
  var currentUserID = parseInt(this.data.telescope.instagramUserID);
  var currentAccessToken = this.data.telescope.instagramAccessToken;
  var userFeed = new Instafeed({
    get: 'user',
    userId: currentUserID,
    accessToken: currentAccessToken,
    resolution: 'standard_resolution',
    limit: 15
  });
  userFeed.run();
});
