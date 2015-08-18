Meteor.startup(function () {
  EasySearch.createSearchIndex('weldMembers', {
    'field': ['createdAt', 'telescope.displayName', 'telescope.email', 'telescope.location', 'telescope.bio', 'telescope.skill1', 'telescope.skill2', 'telescope.skill3'],
    'collection': Meteor.users,
    'limit': 100,
    'props': {
      'filteredCategory': 'All',
      'sortBy': 'name'
    },
    'sort': function() {
      if (this.props.sortBy === 'name') {
        return { 'telescope.displayName': 1 };
      }  else if (this.props.sortBy === 'oldest') {
        return { 'createdAt': 1 };
      }
      // default by highest score
      return { 'createdAt': -1 };
    },
  });
});
