//  postComponents defaults
//  post_rank, post_vote, post_content, post_avatars, post_discuss, post_actions, post_comments_link, post_share
Telescope.modules.removeAll("postComponents");

// Putting everthing into post_content to make things easier
Telescope.modules.add("postComponents", {
  template: "post_content",
  order: 10
});

//  postMeta
Telescope.modules.remove("postMeta", 'post_author');
Telescope.modules.remove("postMeta", 'post_comments_link');
Telescope.modules.remove("postMeta", 'post_admin');

Telescope.modules.add("postMeta", {
  template: "post_avatars",
  order: 10
});