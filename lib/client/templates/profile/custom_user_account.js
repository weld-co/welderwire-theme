Template.user_account.events({
  // Prevent Enter from submiting Skills input so it can be hyphenated
  'keypress [name*="telescope.skill"]': function(e){
    if ( e.which == 13 ) return false;
  },
  // Convert all values to lowercase and hyphenated
  // this is important for the MixItUp method of filtering
  'blur [name*="telescope.skill"]': function(e){
    var hyphenated = $(e.currentTarget).val();
    // replace special characters and numbers with hyphens, remove trailing hphens
    hyphenated = hyphenated.replace(/[^A-Za-z]+/g, '-').replace(/^(-)+|(-)+$/g,'').toLowerCase();
    $(e.currentTarget).val(hyphenated);
  }
});