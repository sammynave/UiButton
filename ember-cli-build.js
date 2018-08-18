'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    fingerprint: {
      enabled: false
    }
  });

  return app.toTree();
};
