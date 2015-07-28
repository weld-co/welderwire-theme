//  Primary Nav
// keep search separate to change it's location depending on device
Telescope.modules.remove("primaryNav", "search");
Telescope.modules.remove("primaryNav", "pages_menu");

Telescope.modules.add("primaryNav", {
  template: "weld_sidebar_post_button",
  order: 20
});

Telescope.modules.add("primaryNav", {
  template: "notifications_menu",
  order: 30
});

// template: 'categories_menu'
// order: 50
// added by telescope:tags/lib/hooks.js

Telescope.modules.add("primaryNav", {
  template: "posts_views_nav",
  order: 60
});

Telescope.modules.add("primaryNav", {
  template: "admin_menu",
  order: 60
});

Telescope.modules.add("primaryNav", {
  template: "pages_menu",
  order: 70
});

//  Secondary Nav
Telescope.modules.removeAll("secondaryNav");