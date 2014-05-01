Package.describe({
  summary: "Accounts service for Drupal site accounts"
});

Package.on_use(function (api, where) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('drupal', ['client', 'server']);

  api.add_files(['drupal_login_button.css'], 'client');

  api.add_files('drupal_common.js', ['client', 'server']);
  api.add_files('drupal_client.js', 'client');
  api.add_files('drupal_server.js', 'server');
});

Package.on_test(function (api) {
  api.use('accounts-drupal');

  api.add_files('accounts-drupal_tests.js', ['client', 'server']);
});
