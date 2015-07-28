// Add Custom Fields to Main userData
Users.addField({
  fieldName: 'telescope.location',
  fieldSchema: {
    label: 'Location',
    type: String,
    optional: true,
    public: true,
    profile: true,
    editableBy: ["member", "admin"]
  }
});

Users.addField({
  fieldName: 'telescope.membership',
  fieldSchema: {
    label: 'Membership Type',
    type: String,
    optional: true,
    public: true,
    profile: true,
    editableBy: ["member", "admin"],
    autoform: {
      type: "select-radio-inline",
      options: function () {
        return [
          {label: "Dallas", value: 'Dallas'},
          {label: "Nashville", value: 'Nashville'},
          {label: "Digital", value: 'Digital'}
        ];
      }
    }
  }
});

// Additional Info Group
Users.addField([
  {
    fieldName: 'telescope.bio',
    fieldSchema: {
      label: 'Bio',
      type: String,
      optional: true,
      public: true,
      profile: true,
      editableBy: ["member", "admin"],
      autoform: {
        group: 'Additional Info',
        placeholder: 'A description of what you do and why you do it.',
        rows: 5
      }
    }
  },
  {
    fieldName: 'telescope.site',
    fieldSchema: {
      label: 'Website',
      type: String,
      optional: true,
      public: true,
      profile: true,
      editableBy: ["member", "admin"],
      autoform: {
        group: 'Additional Info',
        placeholder: 'With or without http://www will work.'
      }
    }
  },
  {
    fieldName: 'telescope.twitter',
    fieldSchema: {
      label: 'Twitter',
      type: String,
      optional: true,
      public: true,
      profile: true,
      editableBy: ["member", "admin"],
      autoform: {
        group: 'Additional Info',
        placeholder: 'WITHOUT the @'
      }
    }
  },
  {
    fieldName: 'telescope.instagram',
    fieldSchema: {
      label: 'Instagram',
      type: String,
      optional: true,
      public: true,
      profile: true,
      editableBy: ["member", "admin"],
      autoform: {
        group: 'Additional Info',
        placeholder: 'WITHOUT the @'
      }
    }
  },
  {
    fieldName: 'telescope.phone',
    fieldSchema: {
      label: 'Phone Number',
      type: String,
      optional: true,
      public: true,
      profile: true,
      editableBy: ["member", "admin"],
      autoform: {
        group: 'Additional Info',
        placeholder: 'Only visible to other members'
      }
    }
  },
  {
    fieldName: 'telescope.birthday',
    fieldSchema: {
      label: 'Birthday',
      type: Date,
      optional: true,
      public: true,
      profile: true,
      editableBy: ["member", "admin"],
      autoform: {
        group: 'Additional Info'
      }
    }
  },
  {
    fieldName: 'telescope.skill1',
    fieldSchema: {
      label: 'What’s the primary thing you’d like to get hired for?',
      type: String,
      optional: true,
      public: true,
      profile: true,
      editableBy: ["member", "admin"],
      autoform: {
        group: 'Additional Info',
        placeholder: 'Please keep this as short as possible.'
      }
    }
  },
  {
    fieldName: 'telescope.skill2',
    fieldSchema: {
      label: 'A secondary skill?',
      type: String,
      optional: true,
      public: true,
      profile: true,
      editableBy: ["member", "admin"],
      autoform: {
        group: 'Additional Info',
        placeholder: 'Please keep this as short as possible.'
      }
    }
  },
  {
    fieldName: 'telescope.skill3',
    fieldSchema: {
      label: 'Another one?',
      type: String,
      optional: true,
      public: true,
      profile: true,
      editableBy: ["member", "admin"],
      autoform: {
        group: 'Additional Info',
        placeholder: 'Please keep this as short as possible.'
      }
    }
  }
]);

// Add Instagram keys, but don't show on Profile
Users.addField({
  fieldName: 'telescope.instagramAccessToken',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"],
    autoform: {
      editable: true,
      omit: true
    }
  }
});

Users.addField({
  fieldName: 'telescope.instagramUserID',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"],
    autoform: {
      editable: true,
      omit: true
    }
  }
});

// DON'T SHOW THESE FIELDS ON PROFILE
Users.addField({
  fieldName: 'telescope.website',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      editable: true,
      omit: true
    }
  }
});

Users.addField({
  fieldName: 'telescope.twitterUsername',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      editable: true,
      omit: true
    }
  }
});

Users.addField({
  fieldName: 'telescope.inviteCount',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      editable: true,
      omit: true
    }
  }
});

// Remove invites from profileEdit module
Telescope.modules.remove("profileEdit", 'user_invites');
