Posts.addField({
  fieldName: 'closed',
  fieldSchema: {
    label: 'Mark post as closed?',
    type: Boolean,
    optional: true,
    public: true,
    editableBy: ["member", "admin"]
  }
});
