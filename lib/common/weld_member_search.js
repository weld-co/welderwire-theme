Meteor.startup(function () {
  EasySearch.createSearchIndex('weldMembers', {
    'field': ['telescope.displayName', 'telescope.email', 'telescope.location', 'telescope.bio', 'telescope.skill1', 'telescope.skill2', 'telescope.skill3'],
    'collection': Meteor.users,
    'limit': 50
  });
});