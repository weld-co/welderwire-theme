Meteor.startup(function () {
  IntercomSettings.userInfo = function(user, info) {
    info.birthday = user.telescope.birthday;
    info.email = user.telescope.email;
    info.instagram = user.telescope.instagram;
    info.instagram = user.telescope.instagram;
    info.location = user.telescope.location;
    info.membership = user.telescope.membership;
    info.name = user.telescope.displayName;
    info.phone = user.telescope.phone;
    info.twitter = user.telescope.twitter;
    info.profile_link = 'https://welderwire.co/users/' + user.username;
  };
});
