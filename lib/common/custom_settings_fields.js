// Custom Sidebar Color, Checkboxes, Radio Images
Settings.addField([
  {
    fieldName: "sidebarColor",
    fieldSchema: {
      type: String,
      optional: true,
      autoform: {
        label: "Sidebar Color",
        group: "05_colors"
      }
    }
  },
  {
    fieldName: "checkboxImage",
    fieldSchema: {
      type: String,
      optional: true,
      autoform: {
        label: "Checkbox Image URL",
        group: "05_colors"
      }
    }
  },
  {
    fieldName: "radioImage",
    fieldSchema: {
      type: String,
      optional: true,
      autoform: {
        label: "Radio Image URL",
        group: "05_colors"
      }
    }
  },
  {
    fieldName: "defaultProfileBackground",
    fieldSchema: {
      type: String,
      optional: true,
      autoform: {
        label: "Default Profile Header Background",
        group: "05_colors"
      }
    }
  }
]);

// Removing Secondary Colors
Settings.addField([
  {
    fieldName: 'secondaryColor',
    fieldSchema: {
      type: String,
      optional: true,
      autoform: {
        editable: true,
        omit: true
      }
    }
  },
  {
    fieldName: 'secondaryContrastColor',
    fieldSchema: {
      type: String,
      optional: true,
      autoform: {
        editable: true,
        omit: true
      }
    }
  },
  {
    fieldName: 'navLayout',
    fieldSchema: {
      type: String,
      optional: true,
      autoform: {
        editable: true,
        omit: true
      }
    }
  },
  {
    fieldName: 'postsLayout',
    fieldSchema: {
      type: String,
      optional: true,
      autoform: {
        editable: true,
        omit: true
      }
    }
  }
]);



