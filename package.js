
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
    'lib/common/custom_admin_menu.js',
    'lib/common/custom_comment_modules.js',
    'lib/common/custom_post_modules.js',
    'lib/common/custom_post_closed_field.js',
    'lib/common/custom_profile_fields.js',
    'lib/common/custom_profile_modules.js',
    'lib/common/custom_routes.js',
    'lib/common/custom_settings_fields.js',
    'lib/common/custom_sidebar_modules.js',
    'lib/common/user_status_schema.js',
    'lib/common/user_status_subscription.js',
    'lib/common/weld_avatars.js',
    'lib/common/weld_member_search.js',
  ], ['client', 'server']);

  // client
  api.addFiles([
    // SCSS
    'lib/client/scss/global/_animation.scss',
    'lib/client/scss/global/_breakpoints.scss',
    'lib/client/scss/global/_buttons.scss',
    'lib/client/scss/global/_colors.scss',
    'lib/client/scss/global/_forms.scss',
    'lib/client/scss/global/_grid.scss',
    'lib/client/scss/global/_layout.scss',
    'lib/client/scss/global/_markdown.scss',
    'lib/client/scss/global/_type.scss',
    'lib/client/scss/global/_utilities.scss',

    // Modules
    'lib/client/scss/modules/_avatars.scss',
    'lib/client/scss/modules/_calendar.scss',
    'lib/client/scss/modules/_comments.scss',
    'lib/client/scss/modules/_errors.scss',
    'lib/client/scss/modules/_intercom.scss',
    'lib/client/scss/modules/_loader.scss',
    'lib/client/scss/modules/_login.scss',
    'lib/client/scss/modules/_logo.scss',
    'lib/client/scss/modules/_members.scss',
    'lib/client/scss/modules/_nav.scss',
    'lib/client/scss/modules/_newsletter.scss',
    'lib/client/scss/modules/_non-member.scss',
    'lib/client/scss/modules/_notifications.scss',
    'lib/client/scss/modules/_post-categories.scss',
    'lib/client/scss/modules/_post-info.scss',
    'lib/client/scss/modules/_posts.scss',
    'lib/client/scss/modules/_profile.scss',
    'lib/client/scss/modules/_search.scss',
    'lib/client/scss/modules/_sidebar.scss',
    'lib/client/scss/modules/_thumbnails.scss',
    'lib/client/scss/modules/_update-banner.scss',
    'lib/client/scss/modules/_user-status.scss',
    'lib/client/scss/modules/_users.scss',

    // Final Imports
    'lib/client/scss/main.scss',

    // Common
    'lib/client/templates/common/custom_main.html',
    'lib/client/templates/common/custom_layout.html',
    'lib/client/templates/common/custom_nav.html',
    'lib/client/templates/common/custom_loading.html',
    'lib/client/templates/common/custom_loader.html',
    'lib/client/templates/common/weld_intercom.js',

    // Admin
    'lib/client/templates/admin/custom_css.html',
    'lib/client/templates/admin/custom_admin_wrapper.html',
    'lib/client/templates/admin/custom_users_dashboard.html',

    // Errors
    'lib/client/templates/errors/custom_no_rights.html',
    'lib/client/templates/errors/custom_not_found.html',
    'lib/client/templates/errors/custom_sign_out.html',
    'lib/client/templates/errors/custom_no_rights.js',
    'lib/client/templates/errors/custom_no_invite.js',

    // Sidebar
    'lib/client/templates/sidebar/custom_admin_menu.html',
    'lib/client/templates/sidebar/custom_categories_menu.html',
    'lib/client/templates/sidebar/custom_logo.html',
    'lib/client/templates/sidebar/custom_notifications_menu.html',
    'lib/client/templates/sidebar/custom_notifications_menu.js',
    'lib/client/templates/sidebar/custom_pages_menu.html',
    'lib/client/templates/sidebar/custom_posts_views_nav.html',
    'lib/client/templates/sidebar/weld_sidebar.html',
    'lib/client/templates/sidebar/weld_sidebar.js',
    'lib/client/templates/sidebar/weld_sidebar_post_button.html',

    // Search
    'lib/client/templates/search/custom_search.html',
    'lib/client/templates/search/custom_search.js',

    // Posts
    'lib/client/templates/posts/custom_post_avatars.html',
    'lib/client/templates/posts/custom_post_avatars.js',
    'lib/client/templates/posts/custom_post_content.html',
    'lib/client/templates/posts/custom_post_content.js',
    'lib/client/templates/posts/custom_post_domain.html',
    'lib/client/templates/posts/custom_post_domain.js',
    'lib/client/templates/posts/custom_post_info.html',
    'lib/client/templates/posts/custom_post_info.js',
    'lib/client/templates/posts/custom_post_title.html',
    'lib/client/templates/posts/custom_post_title.js',
    'lib/client/templates/posts/custom_posts_list.html',
    'lib/client/templates/posts/custom_posts_list.js',
    'lib/client/templates/posts/custom_single_day_nav.html',
    'lib/client/templates/posts/custom_submit_button.html',
    'lib/client/templates/posts/weld_dotdotdot.js',

    // Post Page
    'lib/client/templates/posts/custom_post_edit.html',
    'lib/client/templates/posts/custom_post_page.html',
    'lib/client/templates/posts/custom_post_page.js',
    'lib/client/templates/posts/custom_post_subscribe.html',
    'lib/client/templates/posts/custom_post_video.js',

    // Comments
    'lib/client/templates/comments/custom_comment_edit.html',
    'lib/client/templates/comments/custom_comment_item.html',
    'lib/client/templates/comments/custom_comment_item.js',
    'lib/client/templates/comments/custom_comment_list.html',

    // Profile
    'lib/client/templates/profile/custom_user_info.html',
    'lib/client/templates/profile/custom_user_info.js',
    'lib/client/templates/profile/user_account_patch.js',
    'lib/client/templates/profile/instafeed.min.js',
    'lib/client/templates/profile/weld_instagram_confirm.html',
    'lib/client/templates/profile/weld_instagram_confirm.js',
    'lib/client/templates/profile/weld_instagram_user_feed.html',
    'lib/client/templates/profile/weld_instagram_user_feed.js',
    'lib/client/templates/profile/weld_twitter_feed.html',
    'lib/client/templates/profile/weld_twitter_feed.js',

    // Members Page
    'lib/client/templates/members/weld_members_page.html',
    'lib/client/templates/members/weld_members_page.js',
    'lib/client/templates/members/weld_members_item.html',

    // User Status Indicator
    'lib/client/templates/status/user_status.html',
    'lib/client/templates/status/user_status.js',

    // Newsletter
    'lib/client/templates/newsletter/custom_newsletter_banner.html',

    // Calendars
    'lib/client/templates/calendar/weld_calendar.html',
    'lib/client/templates/calendar/weld_calendar.js',

    // Images
    'lib/client/img/favicon.ico',
    'lib/client/img/weld-logo.png',
    'lib/client/img/weld-logo.svg',
    'lib/client/img/checkbox.svg',
    'lib/client/img/checkbox-checked.svg',
    'lib/client/img/launch-icon.svg',
    'lib/client/img/edit-icon.svg',
    'lib/client/img/link-icon.svg',
    'lib/client/img/upvote-icon.svg',
    'lib/client/img/radio.svg',
    'lib/client/img/radio-checked.svg',
    'lib/client/img/search.svg',
    'lib/client/img/close-icon.svg',
    'lib/client/img/plus-icon.svg',
    'lib/client/img/updown-icon.svg',
    'lib/client/img/mobile-navicon.svg',
    'lib/client/img/profile-default-background.jpg',
    'lib/client/img/instagram-placeholder.svg',
    'lib/client/img/cover-photo.jpg',
    'lib/client/img/resize-handle.svg',

    // Favicons
    'lib/client/img/icons/favicon-96x96.png',
    'lib/client/img/icons/favicon-160x160.png',
    'lib/client/img/icons/favicon-192x192.png',
    'lib/client/img/icons/apple-touch-icon.png',
    'lib/client/img/icons/apple-touch-icon-57x57.png',
    'lib/client/img/icons/apple-touch-icon-60x60.png',
    'lib/client/img/icons/apple-touch-icon-72x72.png',
    'lib/client/img/icons/apple-touch-icon-76x76.png',
    'lib/client/img/icons/apple-touch-icon-114x114.png',
    'lib/client/img/icons/apple-touch-icon-120x120.png',
    'lib/client/img/icons/apple-touch-icon-144x144.png',
    'lib/client/img/icons/apple-touch-icon-152x152.png',
    'lib/client/img/icons/apple-touch-icon-180x180.png',
  ], ['client']);

  // server
  api.addFiles([
    'lib/server/js/weld_members_publication.js',
    'lib/server/js/weld_userstatus_publication.js',
    'lib/server/templates/custom_emailWrapper.handlebars',
    'lib/server/templates/custom_emailPostItem.handlebars',
    'lib/server/templates/custom_emailDigest.handlebars',
    'lib/server/templates/custom_emailNewPost.handlebars',
    'lib/server/templates/custom_emailNewUser.handlebars',
    'lib/server/templates/custom_emailAccountApproved.handlebars',
  ], ['server']);

  // i18n languages (must come last)
  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});
