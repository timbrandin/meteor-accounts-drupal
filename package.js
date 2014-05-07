Package.describe({
  summary: "Accounts service for Drupal site accounts"
});

Package.on_use(function (api, where) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('drupal-services', ['client', 'server']);

  api.add_files(['drupal-login-button.css'], 'client');

  api.add_files('drupal-common.js', ['client', 'server']);
  api.add_files('drupal-client.js', 'client');
  api.add_files('drupal-server.js', 'server');
});

Package.on_test(function (api) {
  api.use('accounts-drupal');

  api.add_files('accounts-drupal_tests.js', ['client', 'server']);
});
