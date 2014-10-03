Accounts.oauth.registerService('drupal');

if (Meteor.isClient) {
  Meteor.loginWithDrupal = function (options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    DrupalServices.requestCredential(options, credentialRequestCompleteCallback);
  };
}
else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.drupal'],
    forOtherUsers: [
      'services.drupal.uid', 'services.drupal.name', 'services.drupal.mail',
    ]
  });
}
