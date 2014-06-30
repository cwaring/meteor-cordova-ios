Package.describe({
  summary: "Core runtime files for Apache Cordova on iOS"
});

Package.on_use(function (api, where) {
  "use strict";
  api.add_files('lib/cordova.js', 'client');
  api.add_files('lib/cordova_plugins.js', 'client');

  // export the global cordova object to the client
  api.export && api.export('cordova', 'client');
});