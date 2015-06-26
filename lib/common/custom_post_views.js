Posts.views.add("userPosts", function (terms) {
  return {
    find: {userId: terms.userId},
    options: {limit: 5, sort: {postedAt: -1}}
  };
});