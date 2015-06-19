UserStatus = new SimpleSchema({
 status: {
    type: Object,
    optional: true,
    public: true,
    blackbox: true
  }
});

Users.attachSchema(UserStatus);

