Meteor.loginWithDrupal = function (options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  DrupalServices.requestCredential(options, credentialRequestCompleteCallback);
};
