Template.weld_members_page.helpers({
  searchCount: function() {
    var instance = EasySearch.getComponentInstance({ index: 'weldMembers' });
    instance.on('total', function (val) {
      Session.set('totalResults', val);
    });
    return Session.get('totalResults');
  },
  isSearching: function () {
    var instance = EasySearch.getComponentInstance({ index: 'weldMembers' });
    return instance.get('searching');
  }
});

Template.weld_members_page.events({
  'change .js-sort-select': function(e) {
    var instance = EasySearch.getComponentInstance({
      index: 'weldMembers'
    });

    EasySearch.changeProperty('weldMembers', 'sortBy', $(e.target).children(':selected').data('sort'));
    EasySearch.changeLimit('weldMembers', 100);

    instance.paginate(1);
    instance.triggerSearch();
  }
});
