Template.weld_instagram_confirm.onRendered(function() {
  // accessToken is everything after = sign
  var accessToken = window.location.hash.split("=")[1];
  // userID is the section befor the first dot
  var userID = accessToken.split(".")[0];
  // Set the value of the hidden fields
  $('[name="telescope.instagramAccessToken').val(accessToken);
  $('[name="telescope.instagramUserID').val(userID);
});

AutoForm.hooks({
  afInstagramConfirm: {
    onSuccess: function(operation, result) {
      // Hide button and replace with confirmation message
      Messages.flash(i18n.t("user_profile_saved"), 'success');
      $('.instagram-confirm-message, .instagram-success-message').toggleClass('hidden');
    },
    onError: function(operation, error) {
      alert("Oops. " + error + " Please try again.");
    }
  }
});
