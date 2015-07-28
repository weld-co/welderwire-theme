Telescope.menuItems.add("adminMenu", {
  route: 'users',
  label: 'Manage Users',
  order: 1,
  description: 'View and manage users.'
});

Telescope.menuItems.remove("adminMenu", "users");