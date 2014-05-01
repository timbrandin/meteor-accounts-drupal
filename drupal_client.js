Meteor.loginWithDrupal = function (options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Drupal.requestCredential(options, credentialRequestCompleteCallback);
};
