Template.user_info.helpers({
// adding http if not already there
  profileSiteOut: function () {
    var url = this.telescope.site;
    if(!!url)
      return (url.substring(0, 7) == "http://" || url.substring(0, 8) == "https://") ? url : "http://" + url;
  },
  needsDisplayName: function () {
    // If no Display Name OR if it matches username
    if(!this.telescope.displayName || this.username === this.telescope.displayName)
      return true
  },
  isDigitalMember: function () {
    if(this.telescope.membership === "Digital")
      return true
  },
  getUserBirthday: function() {
    return moment(this.telescope.birthday).utc().format('LL');
  }
});

Template.user_info.events({
  'click [data-js="instagramAuth"]': function(e) {
    e.preventDefault();
    var loginUrl = $('[data-js="instagramAuth"]').attr('href');
    window.open(loginUrl, name, 'width=500, height=400');
    return false;
  }
});