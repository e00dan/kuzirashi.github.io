/* global require, module */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = function() {
  const app = new EmberApp({
    'ember-cli-foundation-sass': {
      'modernizr': true,
      'fastclick': true,
      'foundationJs': 'all'
    },
    fingerprint: {
      exclude: ['img/logo-white.jpg']
    }
  });

  app.import('bower_components/particles.js/particles.js');
  app.import('bower_components/jquery-timeago/jquery.timeago.js');
  app.import('bower_components/async/dist/async.min.js');
  app.import('bower_components/photoswipe/dist/photoswipe.min.js');
  app.import('bower_components/photoswipe/dist/photoswipe-ui-default.min.js');
  app.import('bower_components/photoswipe/dist/photoswipe.css');
  app.import('bower_components/photoswipe/dist/default-skin/default-skin.css');

  return app.toTree();
};
