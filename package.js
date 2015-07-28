
Package.describe({
  summary: 'Welderwire Telescope Theme',
  version: '2.0.0',
  name: 'welderwire-theme'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use([
    "telescope:core",
    'fourseven:scss'
  ]);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)
  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // client & server
  api.addFiles([
    'common/custom_admin_menu.js',
    'common/custom_comment_modules.js',
    'common/custom_post_modules.js',
    'common/custom_post_closed_field.js',
    'common/custom_profile_fields.js',
    'common/custom_profile_modules.js',
    'common/custom_routes.js',
    'common/custom_settings_fields.js',
    'common/custom_sidebar_modules.js',
    'common/user_status_schema.js',
    'common/user_status_subscription.js',
    'common/weld_avatars.js',
    'common/weld_member_search.js',
  ], ['client', 'server']);

  // client
  api.addFiles([
    // SCSS
    'client/scss/global/_animation.scss',
    'client/scss/global/_breakpoints.scss',
    'client/scss/global/_buttons.scss',
    'client/scss/global/_colors.scss',
    'client/scss/global/_forms.scss',
    'client/scss/global/_grid.scss',
    'client/scss/global/_layout.scss',
    'client/scss/global/_markdown.scss',
    'client/scss/global/_type.scss',
    'client/scss/global/_utilities.scss',

    // Modules
    'client/scss/modules/_avatars.scss',
    'client/scss/modules/_calendar.scss',
    'client/scss/modules/_comments.scss',
    'client/scss/modules/_errors.scss',
    'client/scss/modules/_intercom.scss',
    'client/scss/modules/_loader.scss',
    'client/scss/modules/_login.scss',
    'client/scss/modules/_logo.scss',
    'client/scss/modules/_members.scss',
    'client/scss/modules/_nav.scss',
    'client/scss/modules/_newsletter.scss',
    'client/scss/modules/_non-member.scss',
    'client/scss/modules/_notifications.scss',
    'client/scss/modules/_post-categories.scss',
    'client/scss/modules/_post-info.scss',
    'client/scss/modules/_posts.scss',
    'client/scss/modules/_profile.scss',
    'client/scss/modules/_search.scss',
    'client/scss/modules/_sidebar.scss',
    'client/scss/modules/_thumbnails.scss',
    'client/scss/modules/_update-banner.scss',
    'client/scss/modules/_user-status.scss',
    'client/scss/modules/_users.scss',

    // Final Imports
    'client/scss/main.scss',

    // Common
    'client/templates/common/custom_main.html',
    'client/templates/common/custom_layout.html',
    'client/templates/common/custom_header.html',
    'client/templates/common/custom_loading.html',
    'client/templates/common/custom_loader.html',
    'client/templates/common/weld_intercom.js',

    // Admin
    'client/templates/admin/custom_css.html',
    'client/templates/admin/custom_admin_wrapper.html',
    'client/templates/admin/custom_users_dashboard.html',

    // Errors
    'client/templates/errors/custom_no_rights.html',
    'client/templates/errors/custom_not_found.html',
    'client/templates/errors/custom_sign_out.html',
    'client/templates/errors/custom_no_rights.js',
    'client/templates/errors/custom_no_invite.js',

    // Sidebar
    'client/templates/sidebar/custom_admin_menu.html',
    'client/templates/sidebar/custom_categories_menu.html',
    'client/templates/sidebar/custom_logo.html',
    'client/templates/sidebar/custom_notifications_menu.html',
    'client/templates/sidebar/custom_notifications_menu.js',
    'client/templates/sidebar/custom_pages_menu.html',
    'client/templates/sidebar/custom_posts_views_nav.html',
    'client/templates/sidebar/weld_sidebar.html',
    'client/templates/sidebar/weld_sidebar.js',
    'client/templates/sidebar/weld_sidebar_post_button.html',

    // Search
    'client/templates/search/custom_search.html',
    'client/templates/search/custom_search.js',

    // Posts
    'client/templates/posts/custom_post_avatars.html',
    'client/templates/posts/custom_post_avatars.js',
    'client/templates/posts/custom_post_content.html',
    'client/templates/posts/custom_post_content.js',
    'client/templates/posts/custom_post_domain.html',
    'client/templates/posts/custom_post_domain.js',
    'client/templates/posts/custom_post_info.html',
    'client/templates/posts/custom_post_info.js',
    'client/templates/posts/custom_post_title.html',
    'client/templates/posts/custom_post_title.js',
    'client/templates/posts/custom_posts_list.html',
    'client/templates/posts/custom_posts_list.js',
    'client/templates/posts/custom_single_day_nav.html',
    'client/templates/posts/custom_submit_button.html',

    // Post Page
    'client/templates/posts/custom_post_edit.html',
    'client/templates/posts/custom_post_page.html',
    'client/templates/posts/custom_post_page.js',
    'client/templates/posts/custom_post_subscribe.html',

    // Comments
    'client/templates/comments/custom_comment_edit.html',
    'client/templates/comments/custom_comment_item.html',
    'client/templates/comments/custom_comment_item.js',
    'client/templates/comments/custom_comment_list.html',

    // Profile
    'client/templates/profile/custom_user_info.html',
    'client/templates/profile/custom_user_info.js',
    'client/templates/profile/user_account_patch.js',
    'client/templates/profile/instafeed.min.js',
    'client/templates/profile/weld_instagram_confirm.html',
    'client/templates/profile/weld_instagram_confirm.js',
    'client/templates/profile/weld_instagram_user_feed.html',
    'client/templates/profile/weld_instagram_user_feed.js',
    'client/templates/profile/weld_twitter_feed.html',
    'client/templates/profile/weld_twitter_feed.js',

    // Members Page
    'client/templates/members/weld_members_page.html',
    'client/templates/members/weld_members_page.js',
    'client/templates/members/weld_members_item.html',

    // User Status Indicator
    'client/templates/status/user_status.html',
    'client/templates/status/user_status.js',

    // Newsletter
    'client/templates/newsletter/custom_newsletter_banner.html',

    // Calendars
    'client/templates/calendar/weld_calendar.html',
    'client/templates/calendar/weld_calendar.js',

    // Images
    'public/favicon.ico',
    'public/weld-logo.png',
    'public/weld-logo.svg',
    'public/checkbox.svg',
    'public/checkbox-checked.svg',
    'public/launch-icon.svg',
    'public/edit-icon.svg',
    'public/link-icon.svg',
    'public/upvote-icon.svg',
    'public/radio.svg',
    'public/radio-checked.svg',
    'public/search.svg',
    'public/close-icon.svg',
    'public/plus-icon.svg',
    'public/updown-icon.svg',
    'public/mobile-navicon.svg',
    'public/profile-default-background.jpg',
    'public/instagram-placeholder.svg',
    'public/cover-photo.jpg',
    'public/resize-handle.svg',

    // Favicons
    'public/icons/favicon-96x96.png',
    'public/icons/favicon-160x160.png',
    'public/icons/favicon-192x192.png',
    'public/icons/apple-touch-icon.png',
    'public/icons/apple-touch-icon-57x57.png',
    'public/icons/apple-touch-icon-60x60.png',
    'public/icons/apple-touch-icon-72x72.png',
    'public/icons/apple-touch-icon-76x76.png',
    'public/icons/apple-touch-icon-114x114.png',
    'public/icons/apple-touch-icon-120x120.png',
    'public/icons/apple-touch-icon-144x144.png',
    'public/icons/apple-touch-icon-152x152.png',
    'public/icons/apple-touch-icon-180x180.png',
  ], ['client']);

  // server
  api.addFiles([
    'server/js/weld_members_publication.js',
    'server/js/weld_userstatus_publication.js',
    'server/templates/custom_emailWrapper.handlebars',
    'server/templates/custom_emailPostItem.handlebars',
    'server/templates/custom_emailDigest.handlebars',
    'server/templates/custom_emailNewPost.handlebars',
    'server/templates/custom_emailNewUser.handlebars',
    'server/templates/custom_emailAccountApproved.handlebars',
  ], ['server']);

  // i18n languages (must come last)
  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});
