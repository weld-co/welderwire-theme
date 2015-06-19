Meteor.startup(function () {
  IntercomSettings.userInfo = function(user, info) {
    if (user.telescope.intercomHash) {
      info.email = user.telescope.email;
      info.name = user.telescope.displayName;
    }
  };
});