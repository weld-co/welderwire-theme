// Remove Posts modules from User Profile page
Telescope.modules.removeAll("profileDisplay");

// Add them back, excluding user_downvoted_posts
// change order of user_comments and user_upvoted_posts
Telescope.modules.add("profileDisplay", [
  {
    template: 'user_info',
    order: 1
  },
  {
    template: 'user_posts',
    order: 2
  },
  {
    template: 'user_comments',
    order: 3
  },
  {
    template: 'user_upvoted_posts',
    order: 3
  }
]);

// Remove list of subscribed posts
Telescope.modules.remove("profileEdit", 'user_subscribed_posts');
