// Members Page
Router.route('/members', {
  name: 'members',
  loadingTemplate: 'custom_loading',
  template: 'weld_members_page',
  waitOn: function() {
    return Meteor.subscribe('members');
  },
  data: function() {
    return { users: Meteor.users.find() }
  },
  fastRender: true
});

// Dallas Calendar Bookings
Router.route('/dallas-bookings', {
  name: 'dallasBookings',
  loadingTemplate: 'custom_loading',
  template: 'weld_calendar_dallas',
  data: function() {
    return Meteor.user();
  },
});

// Nasvhille Calendar Bookings
Router.route('/nashville-bookings', {
  name: 'nashvilleBookings',
  loadingTemplate: 'custom_loading',
  template: 'weld_calendar_nashville',
  data: function() {
    return Meteor.user();
  },
});

// Instagram Authentication
Router.route('/instagram', {
  name: 'instagram',
  loadingTemplate: 'custom_loading',
  template: 'weld_instagram_confirm',
  data: function() {
    return Meteor.user();
  },
});

Router.route('/users', {
  name: 'users',
  controller: Telescope.controllers.page,
  template: 'users_dashboard'
});
