Template.weld_members_page.helpers({
  searchCount: function() {
    var instance = EasySearch.getComponentInstance({ index: 'weldMembers' });
    instance.on('total', function (val) {
      Session.set('totalResults', val);
    });
    return Session.get('totalResults');
  }
});