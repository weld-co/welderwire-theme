Template.search.helpers({
  hasSearch: function () {
    var routeName = Router.current().route.getName();
    // Only show search on these routes
    if ([
      'search',
      'posts_default',
      'posts_top',
      'posts_new',
      'posts_best',
      'postsSingleDayDefault',
      'postsDaily',
      'posts_category'
    ].indexOf(routeName) > -1)
      return true
  }
});