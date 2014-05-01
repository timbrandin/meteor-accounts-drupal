Accounts.addAutopublishFields({
  // publish all fields including access token, which can legitimately
  // be used from the client (if transmitted over ssl or on
  // localhost).
  forLoggedInUser: ['services.drupal'],
  forOtherUsers: [
    'services.drupal.uid', 'services.linkedin.username'
  ]
});
