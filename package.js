Package.describe({
  summary: "Accounts service for Drupal site accounts",
  version: "1.0.0",
  git: "https://github.com/timbrandin/meteor-accounts-drupal.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use("timbrandin:drupal-services@1.0.0", ['client', 'server']);

  api.add_files(['drupal-login-button.css'], 'client');

  api.add_files('drupal.js', ['client', 'server']);
});
