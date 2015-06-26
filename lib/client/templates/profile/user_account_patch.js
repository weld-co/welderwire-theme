AutoForm.hooks({
  editUserForm: {
    onSuccess: function(operation, result) {
      Messages.flash(i18n.t("user_profile_saved"), "success");
      Messages.clearSeen();
    }
  }
});