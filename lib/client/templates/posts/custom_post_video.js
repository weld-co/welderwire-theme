// Making this work on single-post pages as well
Template.post_video.events({
  'click .post-video-lightbox-hide, click .post-video-lightbox': function (e) {
    e.preventDefault();
    $(e.target).parents('.single-post').find('.post-video-lightbox').fadeOut('fast');
    $('body').removeClass('showing-lightbox');
  }
});

Template.post_thumbnail.events({
  'click .post-thumbnail-has-video': function (e) {
    e.preventDefault();
    $('body').addClass('showing-lightbox');
    $(e.target).parents('.single-post').find('.post-video-lightbox').fadeIn('fast');
  }
});
