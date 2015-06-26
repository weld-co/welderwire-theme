Template.weld_sidebar.helpers({
  hasPrimaryNav: function () {
    return !!Telescope.modules.get("primaryNav").length;
  },
  profileUrl: function () {
    return Users.getProfileUrl(Meteor.user());
  },
  displayName: function () {
    return Users.getDisplayName(Meteor.user());
  }
});

Template.weld_sidebar.events({
  'click .close-icon': function (e) {
    e.preventDefault();
    e.stopPropagation(); // Make sure we don't immediately close the mobile nav again. See layout.js event handler.
    $('body').toggleClass('mobile-nav-open');
  },
  'click .dropdown-top-level': function (e) {
    e.preventDefault();
    e.stopPropagation(); // Make sure we don't immediately close the mobile nav again. See layout.js event handler.
    $(e.currentTarget).next().slideToggle('fast');
  },
  'click .sidebar-menu a': function (e) {
    if (e.target.className.indexOf('dropdown-top-level') == -1){
      $('body').removeClass('mobile-nav-open');
    }
  }
});